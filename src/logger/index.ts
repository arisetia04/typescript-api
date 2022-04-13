import { Logger } from "winston";
import { ENV } from "../config/constants";
import { defaultLogger } from "./default-logger";
import { devLogger } from "./dev-logger";
import { productionLogger } from "./production-logger";

let logger: Logger = defaultLogger();

switch (ENV) {
    case "development":
        console.log("im dev");
        logger = devLogger();
        logger.verbose("using development logger");
        break;
    case "production":
        logger = productionLogger();
        logger.verbose("using production logger");
        break;
}

export { logger };
