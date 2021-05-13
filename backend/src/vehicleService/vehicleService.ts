import { Sequelize } from "sequelize";
import db from "../models/db";
import { IVehicleServiceRequest } from "../models/vehicle_service";

export interface IGetOneRequest {
  id: string
}

class VehicleService {
  public createService(serviceRequest: IVehicleServiceRequest): Promise<any> {
    return db.Services.create({
      // id: serviceRequest.id,
      vehicleId: serviceRequest.vehicleId,
      serviceType: serviceRequest.serviceType,
      date: serviceRequest.date,
      milage: serviceRequest.milage,
      nextService: serviceRequest.nextService
    });
  }

  public getAll(): Promise<any> {
    return db.Vehicles.findAll({
      attributes: {
        include:[
          "Vehicles.make",
          "Vehicles.model",
          "Vehicles.year",
          "Services.serviceType",
          "Services.date",
          "Services.milage"
        ]
      },
      include: [{
        model: db.Services,
        required: false
      }],
    });
  }

  // Need to do a full outer join but not supported by SQLite3
  public getOne(reqId: string): Promise<any> {
    return db.Vehicles.findAll({
      attributes: {
        include:[
          "Vehicles.make",
          "Vehicles.model",
          "Vehicles.year",
          "Services.serviceType",
          "Services.date",
          "Services.milage"
        ]
      },
      include: [{
        model: db.Services,
        required: false
      }],
      where: {
        id: reqId
      }
    });
  }

  public removeOne(reqId: string): Promise<any> {
    console.log("deleting: ", reqId);
    const result =  db.Services.destroy({
      where: {
        id:reqId
      }
    });

    if (! result) {
      return new Promise((resolve, reject) => {
        resolve(404);
      });
    } else {
      return new Promise((resolve, reject) => {
        resolve(200);
      });
    }
  }
}

const vehicle_service = new VehicleService();
export default vehicle_service;