import { Request, Response } from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostsByAuthor,
} from "../services/posts.service";

export const getPosts = async (_req: Request, res: Response) => {
  const posts = await getAllPosts();
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const post = await getPostById(id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json(post);
};

export const postPost = async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;

  if (!title || !authorId) {
    return res
      .status(400)
      .json({ message: "Title and authorId are required" });
  }

  try {
    const newPost = await createPost(title, content, authorId);
    res.status(201).json(newPost);
  } catch (e) {
    return res.status(400).json({ message: "Failed to create post" });
  }
};

export const putPost = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const updated = await updatePost(id, title, content);
    res.json(updated);
  } catch (e) {
    return res.status(404).json({ message: "Post not found" });
  }
};

export const deletePostController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await deletePost(id);
    res.json({ message: "Post deleted" });
  } catch (e) {
    return res.status(404).json({ message: "Post not found" });
  }
};

export const getPostsByAuthorController = async (
  req: Request,
  res: Response
) => {
  const authorId = Number(req.params.authorId);

  const posts = await getPostsByAuthor(authorId);
  res.json(posts);
};
