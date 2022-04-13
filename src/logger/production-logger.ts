import winston from "winston";
import { myFormat } from "./format";
const { combine, timestamp, colorize } = winston.format;

export const productionLogger = () => {
    return winston.createLogger({
        level: "http",
        format: combine(colorize(), timestamp(), myFormat),
        defaultMeta: { service: "hub-service" },
        transports: [
            new winston.transports.File({
                filename: "error.log",
                level: "error"
            }),

            new winston.transports.File({ filename: "combined.log" })
        ]
    });
};
