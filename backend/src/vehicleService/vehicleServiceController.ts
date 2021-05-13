import BaseController from "../app/base_controller";
import { IVehicleServiceRequest } from "../models/vehicle_service";
import { Body, Delete, Get, Path, Post, Route, Tags } from "tsoa";
import vehicle_service from "./vehicleService";
import { IGetOneRequest } from "./vehicleService";

@Route("service")
@Tags("Services")
export class VehicleServiceController extends BaseController {
  @Post()
  public addService(@Body() request: IVehicleServiceRequest): Promise<void> {
    return vehicle_service.createService(request);
  }

  @Get()
  public getAllServices(): Promise<void> {
    return vehicle_service.getAll();
  }

  @Get("/{vehicleId}")
  public getServicesById(@Path() vehicleId: string): Promise<void> {
    return vehicle_service.getOne(vehicleId);
  }

  @Delete("/{vehicleId}")
  public deleteServicesById(@Path() vehicleId: string): Promise<void> {
    console.log("about to delete")
    return vehicle_service.removeOne(vehicleId);
  }
}