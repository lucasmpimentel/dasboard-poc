export default class CandleChartModel {
  constructor(
    public x: Date,
    public y: [number, number, number, number]
  ) {}
}