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
import {
  authorIdParamSchema,
  idParamSchema,
  postIdParamSchema,
} from "../validation/helpers";

const router = Router();

router.get("/", getComments);
router.get("/:id", validate(idParamSchema), getComment);
router.post("/", validate(createCommentSchema), postComment);
router.put("/:id", validate(updateCommentSchema), putComment);
router.delete("/:id", validate(idParamSchema), deleteCommentController);
router.get(
  "/post/:postId",
  validate(postIdParamSchema),
  getCommentsByPostController
);
router.get(
  "/author/:authorId",
  validate(authorIdParamSchema),
  getCommentsByAuthorController
);

export default router;
