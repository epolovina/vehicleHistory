import { NextFunction, Request, Response, Router } from "express";
import { AppController } from './app_controller';
import * as path from "path";
import { BaseRouter } from "./_index";
import { HelloResponse } from "./helloResponse";

const router: Router = Router();

router.get("/", (request: Request, response: Response, next: NextFunction ) => {
  const controller = new AppController(request);
  const promise = controller.hello();

  BaseRouter.promiseHandler(promise, request, response, next)
  console.log("GET /")
});

router.post("/", (request: Request, response: Response, next: NextFunction) => {
  const controller = new AppController(request);
  const promise = controller.doPost(new HelloResponse(request.body.message));

  BaseRouter.promiseHandler(promise, request, response, next);
});

router.get("/swagger.json", (request: Request, response: Response, next: NextFunction) => {
  console.log(__dirname);
  response.sendFile(path.resolve(__dirname + "/../../bin/swagger.json"));
});

export default router;