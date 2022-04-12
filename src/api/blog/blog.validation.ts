/** @format */

import { body, param } from "express-validator";

export const createBlogValidation = [
    body("title")
        .notEmpty()
        .withMessage("title is required")
        .bail()
        .isString()
        .withMessage("title must be an string"),
    body("userId")
        .notEmpty()
        .withMessage("userId is required")
        .bail()
        .isInt()
        .withMessage("userId must be an integer"),
    body("body").optional().isString().withMessage("body must be an string")
];

export const findIdBlogValidation = [
    param("id").isInt().withMessage("param id must be an integer")
];

export const updateBlogValidation = [
    param("id").isInt().withMessage("param id must be an integer"),
    body("title")
        .notEmpty()
        .withMessage("title is required")
        .bail()
        .isString()
        .withMessage("title must be an string"),
    body("userId")
        .notEmpty()
        .withMessage("userId is required")
        .bail()
        .isInt()
        .withMessage("userId must be an integer"),
    body("body").optional().isString().withMessage("body must be an string")
];

export const patchBlogValidation = [
    param("id").isInt().withMessage("param id must be an integer"),
    body("title").optional().isString().withMessage("title must be an string"),
    body("userId").optional().isInt().withMessage("userId must be an integer"),
    body("body").optional().isString().withMessage("body must be an string")
];
