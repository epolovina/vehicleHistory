import { NextFunction, Request, Response, Router } from "express";
import {AccountsController} from "./accountsController";
import { BaseRouter } from "../app/_index"

const router: Router = Router();

router.get("/Current", (request: Request, response: Response, next: NextFunction) => {
  const controller = new AccountsController();
  const promise = controller.current();

  BaseRouter.promiseHandler(promise, request, response, next);
});

export default router;