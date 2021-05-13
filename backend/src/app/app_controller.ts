// import * as http from "http";
import { Body, Get, Post, Response, Route, Tags } from "tsoa";
import BaseController from "./base_controller";
import {HelloResponse, IHelloResponse} from "./helloResponse";

@Route("v1")
@Tags("Home")
export class AppController extends BaseController {
  @Response<any>(400, "invalid")
  @Get("/")
  public hello(): Promise<HelloResponse> {
    return new Promise((resolve, reject) => {
      const promise = new Promise((resolve, reject) => {
        resolve(new HelloResponse("hi"));
      });
      this.promiseHandler(promise, reject, (data: HelloResponse) => {
        resolve(data);
      });
    });
  };


  @Post("/")
  public doPost(
    @Body() request: IHelloResponse
  ): Promise<HelloResponse> {
    return new Promise((resolve, reject) => {
      const promise = new Promise( (res, rej) => {
        res(new HelloResponse(request.message))
      });

      this.promiseHandler(promise, reject, (data: HelloResponse) => {
        resolve(data);
      });
    });
  };
}