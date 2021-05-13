import * as Express from "express";
import * as cors from "cors";
import { AppRouter } from "./app/_index";
import { userRouter } from "./user-controllers/_index";
import { accountsRouter } from "./accounts/_index";
import { VehicleRouter } from "./vehicle/_index";
import { VehicleServiceRouter } from "./vehicleService/_index";

class Main {
    public app: Express.Application;
    constructor() {
        console.log("Starting applicaiton")
        this.app = this.createApp();
        this.middleware();
        this.routes();
    }

    private createApp(): Express.Application {
        const express: any = Express();
        return express as Express.Application;
    }

    private middleware(): void {
        this.app.use(cors());
        this.app.use(Express.json());
        this.app.use(Express.urlencoded({extended: false}));
        console.log(__dirname)
    }

    private routes(): void {
        this.app.use("/v1/", AppRouter);
        this.app.use("/Users/", userRouter);
        this.app.use("/Accounts/", accountsRouter);
        this.app.use("/vehicle/", VehicleRouter);
        this.app.use("/service/", VehicleServiceRouter);
        this.app.use("/docs", Express.static(__dirname + "/swagger-ui"));
    }
}

export default new Main().app;