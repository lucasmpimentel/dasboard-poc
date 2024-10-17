export default class CandleModel {
  open: number;
  high: number;
  low: number;
  close: number;
  constructor(public openTime: Date, open: string, high: string, low: string, close: string) {
    this.openTime = openTime;
    this.open = parseFloat(open);
    this.high = parseFloat(high);
    this.low = parseFloat(low);
    this.close = parseFloat(close);
  }
}