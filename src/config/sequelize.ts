import { Sequelize } from "sequelize-typescript";
import path from "path";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];


export const sequelize = new Sequelize({
    host: config.host,
    username: config.username,
    port: config.port,
    password: config.password,
    database: config.database,
    models: [path.join(__dirname, "../models/**/*")],
    dialect: config.dialect,
    logging: false
});
