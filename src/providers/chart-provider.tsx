"use client";

import React from 'react'
import { ChartContext } from '@/context/context';

export default function ChartProvider({ children } : { children: React.ReactNode }) {
  const [chartCoin, setChartCoin] = React.useState<string>('BTCUSDT');
  const [chartInterval, setChartInterval] = React.useState<string>('1m');
  
  const contextValue = {
    chartCoin,
    setChartCoin,
    chartInterval,
    setChartInterval,
  };
  
  return (
    <ChartContext.Provider value={contextValue}>{ children }</ChartContext.Provider>
  )
}
