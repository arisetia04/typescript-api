/** @format */
import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../errors/forbidden-error";
import { UnauthorizedError } from "../errors/unauthorized-error";
import { IJWT_PAYLOAD } from "../services/jwt";
import { JWT_SECRET } from "../config/constants";
import jwt from "jsonwebtoken";
import User from "../models/user";

export const authUserMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) throw new ForbiddenError("TOKEN_IS_REQUIRED");

    try {
        let jwtPayload = jwt.verify(
            authHeader.split(" ")[1],
            JWT_SECRET
        ) as IJWT_PAYLOAD;

        if (!jwtPayload) throw new UnauthorizedError("EXPIRED_TOKEN");

        req.token = jwtPayload;

        const user = await User.findOne({ where: { id: jwtPayload.id } });

        if (!user) throw new ForbiddenError("TOKEN_NOT_MATCH_USER");

        req.currentUser = user;

        next();
    } catch (error) {
        throw new ForbiddenError("TOKEN_INVALID");
    }
};
