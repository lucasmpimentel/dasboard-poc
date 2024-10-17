"use client"
import CandleModel from './models/candle.model';
import { BinanceSymbolResponseEntity } from './entities/binance.response.entity';

export default async function getChartData(symbol: string = 'BTCUSDT', interval: string = '1m', limit?: string) {
  const urlBase = 'http://localhost:3001/';
  const haveLimit = limit ? `&limit=${limit}` : '';
 
  try {
    const response = await fetch(`${urlBase}binance?symbol=${symbol.toUpperCase()}&interval=${interval}${haveLimit}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          return response.data;
        } 
        else {
          throw response;
        }
      });

    return response.map((item: BinanceSymbolResponseEntity) => {
      return new CandleModel(
        new Date(item.openTime),
        item.open,
        item.high,
        item.low,
        item.close
      )
    });

  } catch (error) {
    console.error(error);
  }
}