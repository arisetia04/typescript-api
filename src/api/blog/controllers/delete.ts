import { Request, Response, NextFunction } from "express";
import { DeletePost } from "../../../services/axios";

export const deleteBlog = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;

        const data = await DeletePost(Number(id));

        res.status(200).send({ success: true, data });
    } catch (error) {
        next(error);
    }
};
