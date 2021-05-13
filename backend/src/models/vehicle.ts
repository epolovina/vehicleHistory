import * as Sequelize from "sequelize";

export interface IVehicleRequest {
  // id?: number;
  make?: string;
  model?: string;
  year?: number;
}

export interface IVehicleResponse {
  id?: number;
  make?: string;
  model?: string;
  year?: number;
}

export interface IVehicleAttributes {
  // id: number;
  make: string;
  model: string;
  year: number;
}

export interface IVehicleInstance extends Sequelize.Instance<IVehicleAttributes>, IVehicleAttributes {
  id: number;
  make: string;
  model: string;
  year: number;
}

export default (sequelize, dataTypes) => {
  const Vehicles = sequelize.define("Vehicles", {
    // id: dataTypes.INTEGER,
    make: dataTypes.STRING,
    model: dataTypes.STRING,
    year: dataTypes.INTEGER
  });

  Vehicles.associate = (models) => {
    Vehicles.hasMany(models.Services, {
      foreignKey: "vehicleId",
      // onDelete: "CASCADE"
      // as: "Service"
    });
  };


  return Vehicles;
};