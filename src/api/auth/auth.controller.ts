import { Request, Response, NextFunction } from "express";
import { sequelize } from "../../config/sequelize";
import { ForbiddenError } from "../../errors/forbidden-error";
import { createToken } from "../../services/jwt";
import bcrypt from "bcrypt";
import User from "../../models/user";

export const signIn = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) throw new ForbiddenError("INVALID_ACCESS");

        const compare = await bcrypt.compare(password, user.password);

        if (!compare) throw new ForbiddenError("INVALID_CREDENTIAL");

        let token = createToken({
            id: user.id,
            email: user.email
        });

        const response = {
            name: user.name,
            email: user.email,
            token
        };

        res.status(200).send({
            success: true,
            data: response
        });
    } catch (error) {
        next(error);
    }
};

export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await User.findAll({
            attributes: ["id", "name", "email"]
        });

        res.status(200).send({
            success: true,
            data: users
        });
    } catch (error) {
        next(error);
    }
};

export const signUp = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const { name, email, password } = req.body;

        const findUser = await User.findOne({ where: { email } });

        if (findUser) throw new ForbiddenError("DUPLICATE_EMAIL");

        const passwordHash = await bcrypt.hashSync(password, 10);

        const payload: any = {
            name,
            email,
            password: passwordHash
        };

        const user = await User.create(payload, { transaction });

        let token = createToken({
            id: user.id,
            email: user.email
        });

        const response = {
            name: user.name,
            email: user.email,
            token
        };

        await transaction.commit();

        res.status(200).send({
            success: true,
            data: response
        });
    } catch (error) {
        if (transaction) await transaction.rollback();
        next(error);
    }
};
