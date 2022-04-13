import { IncomingHttpHeaders } from "http";
import { UserAttributes } from "../../models/user";

declare global {
    namespace Express {
        interface Request {
            token: { id: string; email: string };
            currentUser: UserAttributes;
            logger: any;
        }
    }
}

declare module "http" {
    interface IncomingHttpHeaders {
        cookie: string;
    }
}
