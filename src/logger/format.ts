import winston from "winston";
const { printf } = winston.format;

export const myFormat = printf((format) => {
    return JSON.stringify({
        requestId: format.requestId,
        service: format.service,
        level: format.level,
        timestamp: format.timestamp,
        url: format.url,
        method: format.method,
        message: format.message
    });
});
