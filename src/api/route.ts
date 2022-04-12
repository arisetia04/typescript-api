/** @format */

import { Router } from "express";
import { authUserMiddleware } from "../middlewares/authentication";

import { authRouter } from "./auth/auth.route";

import { blogRouter } from "./blog/blog.route";

const router = Router();

router.use("/v1/blog", authUserMiddleware, blogRouter);

router.use("/v1/auth", authRouter);

export { router as appRouter };
