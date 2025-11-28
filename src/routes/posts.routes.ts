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

const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", validate(createPostSchema), postPost);
router.put("/:id", validate(updatePostSchema), putPost);
router.delete("/:id", deletePostController);
router.get("/author/:authorId", getPostsByAuthorController);

export default router;
