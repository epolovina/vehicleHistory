import { Body, Post, Get, Route, SuccessResponse, Tags, Path, Delete } from "tsoa";
import BaseController from "../app/base_controller";
import { IVehicleRequest } from "../models/vehicle";
import vehicle from "./vehicle";
import { db } from "../models/_index";

@Route("vehicle")
@Tags("Vehicles")
export class VehicleController extends BaseController {

  @Post()
  public addVehicle(@Body() request: IVehicleRequest): Promise<any> {
    return vehicle.create(request);
  }

  @Get()
  public getVehicles(): Promise<void> {
    return vehicle.get();
  }

  @Delete("/{vehicleId}")
  public deleteVehicle(@Path() vehicleId: string): Promise<void> {
    return vehicle.delete(vehicleId);
  }


}
