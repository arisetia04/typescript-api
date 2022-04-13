import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";
import { logger } from "../logger";

export const globalLogger = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const requestId = v4();

        const childLogger = logger.child({ requestId: requestId });

        req.logger = childLogger;

        const { url, method } = req;

        req.logger.info("request", { url, method });

        next();
    } catch (error) {
        console.error("global logger error");
    }
};
