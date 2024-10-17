/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseResponseErrorEntity from "@/lib/entities/base-response-error.entity";
import BaseResponseEntity from "@/lib/entities/base-response.entity";
import { BinanceSymbolResponseEntity } from "./binance.response.entity";

export class BinanceApiBaseResponseEntity extends BaseResponseEntity {
  constructor(
    public success: boolean,
    public data: BinanceSymbolResponseEntity[]
  ) {
    super(success, data);
  }
}

export class BinanceApiBaseResponseErrorEntity extends BaseResponseErrorEntity {
  constructor(
    public success: boolean,
    public message: string,
    public stack?: any
  ) {
    super(success, message);
  }
}