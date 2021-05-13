import { NextFunction, Request, Response, Router } from "express";
import { IVehicleRequest } from "src/models/vehicle";
import { BaseRouter } from "../app/_index";
import { VehicleController } from "./vehicleController";

const router: Router = Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const controller = new VehicleController(req);
  const vehicleReq = req.body as IVehicleRequest;
  const promise = controller.addVehicle(vehicleReq);

  BaseRouter.promiseHandler(promise, req, res, next);
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const controller = new VehicleController(req);
  const promise = controller.getVehicles();

  BaseRouter.promiseHandler(promise, req, res, next);
});

router.delete("/:vehicleId", (req: Request, res: Response, next: NextFunction) => {
  const controller = new VehicleController(req);
  const vehicleId = req.params.vehicleId;
  const promise = controller.deleteVehicle(vehicleId);

  BaseRouter.promiseHandler(promise, req, res, next);
});

export default router;