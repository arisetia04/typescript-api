import { Request, Response, NextFunction } from "express";
import { GetAllPost } from "../../../services/axios";

export const findAllBlog = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const posts = await GetAllPost();

        res.status(200).send({ success: true, data: posts });
    } catch (error) {
        next(error);
    }
};
