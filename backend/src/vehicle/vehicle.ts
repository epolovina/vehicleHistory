import { resolve } from "bluebird";
import { IVehicleRequest } from "src/models/vehicle";
import { db } from "../models/_index";

class Vehicle {
  public create(vehicleRequest: IVehicleRequest): Promise<any> {
    return db.Vehicles.create({
      // id: vehicleRequest.id,
      make: vehicleRequest.make,
      model: vehicleRequest.model,
      year: vehicleRequest.year
    });
  }

  public get(): Promise<any> {
    return db.Vehicles.findAll({});
  }

  public delete(vehicleId: string): Promise<any> {
    const result = db.Vehicles.destroy({
      where: {
        id: vehicleId
      }
    });

    return new Promise((resolve, reject) => {
      if (!result) {
        resolve(400);
      } else {
        resolve(200);
      }

    })
  }
}

const vehicle = new Vehicle();
export default vehicle;