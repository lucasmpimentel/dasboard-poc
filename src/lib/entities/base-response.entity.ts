/* eslint-disable @typescript-eslint/no-explicit-any */
export default class BaseResponseEntity {
  constructor(public success: boolean, public data: any) {
    this.success = success;
    this.data = data;
  }
}
