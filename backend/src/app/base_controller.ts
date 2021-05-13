import { Request } from "express";
import { Controller } from "tsoa";

export default class BaseController extends Controller {
  constructor(request: Request) {
    super();
  }

  protected promiseHandler(
    promise: Promise<any>, 
    reject: (err?: Error) => void, 
    successCallback: (data: any) => void) {
      
      promise.then((data) => {
        successCallback(data)
      }).catch((err:Error) => {
        reject(err);
      });
  }
}
