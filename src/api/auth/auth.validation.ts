/** @format */

import { body } from "express-validator";

export const signInValidation = [
    body("email")
        .notEmpty()
        .withMessage("email is required")
        .bail()
        .isEmail()
        .withMessage("email must be an email format"),
    body("password")
        .notEmpty()
        .withMessage("password is required")
        .isString()
        .withMessage("password must be an string")
        .bail()
        .isLength({ min: 8 })
        .withMessage("password must be grather than 8")
];

export const signUpValidation = [
    body("name")
        .notEmpty()
        .withMessage("name is required")
        .bail()
        .isString()
        .withMessage("name must be an string"),
    body("email")
        .notEmpty()
        .withMessage("email is required")
        .bail()
        .isEmail()
        .withMessage("email must be an email format"),
    body("password")
        .notEmpty()
        .withMessage("password is required")
        .bail()
        .isString()
        .withMessage("password must be an string")
        .bail()
        .isLength({ min: 8 })
        .withMessage("password must be grather than 8")
];
