import winston from "winston";
import { myFormat } from "./format";
const { combine, timestamp, colorize } = winston.format;

export const devLogger = () => {
    return winston.createLogger({
        level: "silly",
        format: combine(colorize(), timestamp(), myFormat),
        defaultMeta: { service: "hub-service" },
        transports: [new winston.transports.Console()]
    });
};
