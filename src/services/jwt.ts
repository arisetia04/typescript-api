import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";

export interface IJWT_PAYLOAD {
    id: 123;
    email: string;
}

export class JWTService {
    static signJwt(payload: IJWT_PAYLOAD) {
        return jwt.sign(payload, process.env.JWT_SECRET!);
    }

    static verifyToken(token: string): IJWT_PAYLOAD {
        return <IJWT_PAYLOAD>jwt.verify(token, process.env.JWT_SECRET!);
    }
}

export const createToken = (user: IJWT_PAYLOAD) => {
    const expiresIn = 60 * 60 * 360; // an month

    const dataStoredInToken: IJWT_PAYLOAD = user;

    return jwt.sign(dataStoredInToken, JWT_SECRET, { expiresIn });
};
