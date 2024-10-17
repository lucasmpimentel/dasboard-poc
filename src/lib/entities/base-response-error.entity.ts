/* eslint-disable @typescript-eslint/no-explicit-any */
export default class BaseResponseErrorEntity {
  constructor(public success: boolean, public message: string, public stack?: any) {
    this.success = success;
    this.message = message;
    this.stack = stack;
  }
}