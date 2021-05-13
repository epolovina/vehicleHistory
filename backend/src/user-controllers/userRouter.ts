import { NextFunction, Request, Response, Router } from "express";
import { UsersController } from "./userController";
import { BaseRouter } from "../app/_index"

const router: Router = Router();

router.get("/Current", (request: Request, response: Response, next: NextFunction) => {
  const controller = new UsersController();
  const promise = controller.Get(request.body.id);

  BaseRouter.promiseHandler(promise, request, response, next);
});

export default router;