/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import useWebSocket from 'react-use-websocket';
import { type ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useState, useMemo, useContext } from 'react';
import getChartData from '../services/get-chart-data';
import CandleChartModel from '../services/models/candle-chart.model';
import CandleModel from '../services/models/candle.model';
import FilterByCoin from './filters-by-coin';
import { ChartContext } from '@/context/context';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CandleCharts() {
  const { chartCoin, chartInterval } = useContext(ChartContext);
  const [series, setSeries] = useState<ApexAxisChartSeries>([]);
  const options: ApexOptions = {
    chart: {
      id: 'candlestick',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const { lastJsonMessage } = useWebSocket(`wss://stream.binance.com:9443/ws/${chartCoin.toLowerCase()}@kline_${chartInterval}`, {
    onOpen: () => console.log('Binance WebSocket Opened'),
    onError: (event) => console.log('Binance WebSocket Error:', event),
    shouldReconnect: () => true,
    reconnectInterval: 3000,
    onMessage: () => {
      if(lastJsonMessage) {
        const binanceData = lastJsonMessage as any;
        const newCandle = new CandleChartModel(
          new Date(binanceData.k.t),
          [binanceData.k.o, binanceData.k.h, binanceData.k.l, binanceData.k.c]
        );

        const newData = [...series[0].data];

        if (binanceData.k.x === false) {
          newData[newData.length - 1] = newCandle;
        }
        if (binanceData.k.x === true) {
          newData.splice(0, 1);
          newData.push(newCandle);
        }

        setSeries([{ data: newData }] as ApexAxisChartSeries);
      }
    }
  });


  useMemo(() => {
    getChartData(chartCoin, chartInterval, '50')
      .then((res) => {
        if (res) {;
          setSeries([{ 
            data: res.map((item: CandleModel) => {
              return new CandleChartModel(
                item.openTime, 
                [item.open, item.high, item.low, item.close]
              );
            })
          }]);
        }
      });
  }, [chartCoin, chartInterval]);

  return (
    <>
      <FilterByCoin />
      {series.length > 0 ? <ApexChart 
        options={options}
        series={series}
        type="candlestick"
        width={640}
        height={480}
      /> : null}
    </>
  )
}
