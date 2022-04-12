import { Request, Response, NextFunction } from "express";
import { GetSinglePost } from "../../../services/axios";

export const findSingleBlog = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;

        const post = await GetSinglePost(Number(id));

        res.status(200).send({ success: true, data: post });
    } catch (error) {
        next(error);
    }
};
