import { Router } from "express";
import {
  getComments,
  getComment,
  postComment,
  putComment,
  deleteCommentController,
  getCommentsByPostController,
  getCommentsByAuthorController,
} from "../controllers/comments.controller";
import { validate } from "../middleware/validate";
import {
  createCommentSchema,
  updateCommentSchema,
} from "../validation/comment.schema";

const router = Router();

router.get("/", getComments);
router.get("/:id", getComment);
router.post("/", validate(createCommentSchema), postComment);
router.put("/:id", validate(updateCommentSchema), putComment);
router.delete("/:id", deleteCommentController);
router.get("/post/:postId", getCommentsByPostController);
router.get("/author/:authorId", getCommentsByAuthorController);

export default router;
