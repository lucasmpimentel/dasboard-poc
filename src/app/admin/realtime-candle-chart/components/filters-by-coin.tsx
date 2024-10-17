"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContext } from "@/context/context";
import { useContext } from "react";

export default function FilterByCoin() {
  const { setChartCoin, setChartInterval } = useContext(ChartContext);
  const handleCoinChange = (event: string) => {
    setChartCoin(event);
  }

  const handleIntervalChange = (event: string) => {
    setChartInterval(event);
  }

  return (
    <div className="flex items-center gap-2">
      <Select onValueChange={handleCoinChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder='Filtrar por moeda' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='BTCUSDT'>BTCUSDT</SelectItem>
          <SelectItem value='ETHUSDT'>ETHUSDT</SelectItem>
          <SelectItem value='ADAUSDT'>ADAUSDT</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={handleIntervalChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder='Filtrar por intervalo' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1m'>1 Minuto</SelectItem>
          <SelectItem value='1d'>1 Dia</SelectItem>
          <SelectItem value='1w'>1 Semana</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
