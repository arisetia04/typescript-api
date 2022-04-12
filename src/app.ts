import express from "express";
import "express-async-errors";
import cors from "cors";
import { json } from "body-parser";
import { sequelize } from "./config/sequelize";
import { appRouter } from "./api/route";
import { PORT } from "./config/constants";
import { errorHandler } from "./middlewares/error-handler";

const packageVersion = require("../package.json");

const app = express();

app.use("/public", express.static("public"));

app.use(
    cors({
        origin: "*",
        credentials: false
    })
);

app.use(json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to typescript API by ari setiawan",
        version: packageVersion.version,
        running: PORT
    });
});

app.use("/api", appRouter);

app.all("*", async (req, res) => {
    res.send({
        code: "ROUTE_NOT_FOUND",
        errors: [
            {
                message: "router not found"
            }
        ]
    });
});

app.use(errorHandler);

const server = async () => {
    try {
        await sequelize.authenticate();

        console.log("Database connected.");
    } catch (err: any) {
        console.error("connection errors:", err.message);
    }

    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

server();
