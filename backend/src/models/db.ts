import * as Sequelize from "sequelize";
import { IVehicleAttributes, IVehicleInstance } from "./vehicle";
import { IVehicleServiceAttributes, IVehicleServiceInstance } from "./vehicle_service";

interface IDb {
  Vehicles: Sequelize.Model<IVehicleInstance, IVehicleAttributes>;
  Services: Sequelize.Model<IVehicleServiceInstance, IVehicleServiceAttributes>;
};

let sequelize = null;

try{

  const options: Sequelize.Options = {
    host: "10.5.0.5",
    dialect: "postgres",
    username: "demo",
    password: "secret",
    database: "demodb",
    operatorsAliases: false,
  }

  sequelize = new Sequelize.Sequelize( options );

} catch(e) {
  console.log("Could not connect to sqlite");
  throw e;
}

const db: IDb = {
  Vehicles: sequelize.import("./vehicle"),
  Services: sequelize.import("./vehicle_service")
}

Object.keys(db).forEach(modelKey => {
  // Create model associations
  if ('associate' in db[modelKey]) {
    db[modelKey].associate(db)
  }
});


export default db;