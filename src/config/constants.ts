import dotenv from "dotenv";

dotenv.config();

// ENV
if (!process.env.ENV) {
    console.log("Error ENV ENV");
    process.exit();
}
export const ENV = process.env.ENV;

// PORT
export const PORT = process.env.PORT;

// JWT_SECRET
if (!process.env.JWT_SECRET) {
    console.log("Error ENV JWT_SECRET");
    process.exit();
}
export const JWT_SECRET = process.env.JWT_SECRET;

// BASE_URL
if (!process.env.BASE_URL) {
    console.log("Error ENV BASE_URL");
    process.exit();
}
export const BASE_URL = process.env.BASE_URL;

// API_URL
if (!process.env.API_URL) {
    console.log("Error ENV API_URL");
    process.exit();
}
export const API_URL = process.env.API_URL;
