import { Router } from "express";
import {
  getPosts,
  getPost,
  postPost,
  putPost,
  deletePostController,
  getPostsByAuthorController,
} from "../controllers/posts.controller";
import { validate } from "../middleware/validate";
import { createPostSchema, updatePostSchema } from "../validation/post.schema";
import { authorIdParamSchema, idParamSchema } from "../validation/helpers";

const router = Router();

router.get("/", getPosts);
router.get("/:id", validate(idParamSchema), getPost);
router.post("/", validate(createPostSchema), postPost);
router.put("/:id", validate(updatePostSchema), putPost);
router.delete("/:id", validate(idParamSchema), deletePostController);
router.get(
  "/author/:authorId",
  validate(authorIdParamSchema),
  getPostsByAuthorController
);

export default router;
