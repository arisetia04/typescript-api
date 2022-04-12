import { Request, Response, NextFunction } from "express";
import { BlogDTO } from "../interfaces/blog.dto";
import { UpdatePost } from "../../../services/axios";

export const updateBlog = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;

        const { title, userId, body }: BlogDTO = req.body;

        const data = await UpdatePost(Number(id), { title, userId, body });

        res.status(200).send({ success: true, data });
    } catch (error) {
        next(error);
    }
};
