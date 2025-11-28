import express from "express";
import usersRoutes from "./users.routes";
import postsRoutes from "./posts.routes";
import commentsRoutes from "./comments.routes";

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);

export default router;
