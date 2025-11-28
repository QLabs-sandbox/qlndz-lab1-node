import { Request, Response } from "express";
import {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
  getCommentsByPost,
  getCommentsByAuthor,
} from "../services/comments.service";
import prisma from "../prisma";

export const getComments = async (_req: Request, res: Response) => {
  const comments = await getAllComments();
  res.json(comments);
};

export const getComment = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const comment = await getCommentById(id);

  if (!comment) return res.status(404).json({ message: "Comment not found" });

  res.json(comment);
};

export const postComment = async (req: Request, res: Response) => {
  const { content, postId, authorId } = req.body;

  if (!content || !postId || !authorId) {
    return res
      .status(400)
      .json({ message: "Content, postId, and authorId are required" });
  }

  try {
    const errors: string[] = [];

    const postExists = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!postExists) {
      errors.push(`Post with id ${postId} does not exist`);
    }

    const authorExists = await prisma.user.findUnique({
      where: { id: Number(authorId) },
    });

    if (!authorExists) {
      errors.push(`Author (user) with id ${authorId} does not exist`);
    }

    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation error",
        errors,
      });
    }

    const newComment = await createComment(content, postId, authorId);
    return res.status(201).json(newComment);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Failed to create comment" });
  }
};

export const putComment = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const updated = await updateComment(id, content);
    res.json(updated);
  } catch (e) {
    return res.status(404).json({ message: "Comment not found" });
  }
};

export const deleteCommentController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await deleteComment(id);
    res.json({ message: "Comment deleted" });
  } catch (e) {
    return res.status(404).json({ message: "Comment not found" });
  }
};

export const getCommentsByPostController = async (
  req: Request,
  res: Response
) => {
  const postId = Number(req.params.postId);

  const comments = await getCommentsByPost(postId);
  res.json(comments);
};

export const getCommentsByAuthorController = async (
  req: Request,
  res: Response
) => {
  const authorId = Number(req.params.authorId);

  const comments = await getCommentsByAuthor(authorId);
  res.json(comments);
};
