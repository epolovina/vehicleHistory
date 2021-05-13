import * as Sequelize from "sequelize";

export interface IVehicleServiceRequest {
  // id: number;
  vehicleId: number;
  serviceType: string;
  date: string;
  milage: number;
  nextService: string;
}

export interface IVehicleServiceResponse {
  id: number;
  vehicleId: number;
  serviceType: string;
  date: string;
  milage: number;
  nextService: string;
}

export interface IVehicleServiceAttributes {
  // id: number;
  vehicleId: number;
  serviceType: string;
  date: string;
  milage: number;
  nextService: string;
}

export interface IVehicleServiceInstance extends Sequelize.Instance<IVehicleServiceAttributes>, IVehicleServiceAttributes {
  id: number;
  vehicleId: number;
  serviceType: string;
  date: string;
  milage: number;
  nextService: string;
}

export default (sequelize, dataTypes) => {
  const Services = sequelize.define("Services", {
    vehicleId: dataTypes.INTEGER,
    serviceType: dataTypes.STRING,
    date: dataTypes.STRING,
    milage: dataTypes.DECIMAL(10,2),
    nextService: dataTypes.STRING
  });

  Services.associate = (models) => {
    Services.belongsTo(models.Vehicles, {
      foreignKey: "id",
      onDelete: "CASCADE",
      // as: "vehicle"
    });
  };

  return Services;
};