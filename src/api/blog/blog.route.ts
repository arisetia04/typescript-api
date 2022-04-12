import { Router } from "express";
import {
    findIdBlogValidation,
    createBlogValidation,
    updateBlogValidation,
    patchBlogValidation
} from "./blog.validation";

import { createBlog } from "./controllers/create";
import { validateRequest } from "../../middlewares/validate-request";
import { findAllBlog } from "./controllers/find-all";
import { updateBlog } from "./controllers/update";
import { deleteBlog } from "./controllers/delete";
import { findSingleBlog } from "./controllers/find-one";
import { patchBlog } from "./controllers/patch";

const router = Router();

router.get("/", findAllBlog);

router.get("/:id", findIdBlogValidation, validateRequest, findSingleBlog);

router.post("/", createBlogValidation, validateRequest, createBlog);

router.put("/:id", updateBlogValidation, validateRequest, updateBlog);

router.patch("/:id", patchBlogValidation, validateRequest, patchBlog);

router.delete("/:id", findIdBlogValidation, validateRequest, deleteBlog);

export { router as blogRouter };
