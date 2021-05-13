import { NextFunction, Request, Response } from "express";

const success = 200;

export const promiseHandler = (
  promise: Promise<any>,
  req: Request,
  res: Response,
  next: NextFunction,
  successStatus?: number,
  headers?: object) => {
    promise.then( (body) => {
      let status: number;
      if (successStatus) {
          status = successStatus
      } else {
          status = success;
      }

      return res.status(status).send(body);
    })
    .catch((err) => {
        console.log(err);
    });
  };
