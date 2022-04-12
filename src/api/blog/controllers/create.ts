import { Request, Response, NextFunction } from "express";
import { BlogDTO } from "../interfaces/blog.dto";
import { CreatePost } from "../../../services/axios";

export const createBlog = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { title, userId, body }: BlogDTO = req.body;

        const post = await CreatePost({ title, userId, body });

        res.status(200).send({
            success: true,
            data: post
        });
    } catch (error) {
        next(error);
    }
};
