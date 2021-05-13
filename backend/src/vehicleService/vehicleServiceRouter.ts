import { NextFunction, Request, Response, Router } from "express";
import { BaseRouter } from "../app/_index";
import { IVehicleServiceRequest } from "../models/vehicle_service";
import { VehicleServiceController } from "./vehicleServiceController";

const router: Router = Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const controller = new VehicleServiceController(req);
  const serviceReq = req.body as IVehicleServiceRequest;
  const promise = controller.addService(serviceReq);

  BaseRouter.promiseHandler(promise, req, res, next);
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const controller = new VehicleServiceController(req);
  const promise = controller.getAllServices();

  BaseRouter.promiseHandler(promise, req, res, next);
});

router.get("/:vehicleId", (req: Request, res: Response, next: NextFunction) => {
  const controller = new VehicleServiceController(req);
  const serviceId = req.params.vehicleId;
  const promise = controller.getServicesById(serviceId);

  BaseRouter.promiseHandler(promise, req, res, next);
});

router.delete("/:vehicleId", (req: Request, res: Response, next: NextFunction) => {
  console.log("in router delete");
  const controller = new VehicleServiceController(req);
  const serviceId = req.params.vehicleId;
  const promise = controller.deleteServicesById(serviceId);

  BaseRouter.promiseHandler(promise, req, res, next);
});

export default router;