import { Router } from "express";
import { signInValidation, signUpValidation } from "./auth.validation";
import { validateRequest } from "../../middlewares/validate-request";
import { getUsers, signIn, signUp } from "./auth.controller";

const router = Router();

router.get("/users", getUsers);

router.post("/sign-in", signInValidation, validateRequest, signIn);

router.post("/sign-up", signUpValidation, validateRequest, signUp);

export { router as authRouter };
