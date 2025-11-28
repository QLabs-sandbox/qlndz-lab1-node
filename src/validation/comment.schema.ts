import { z } from "zod";
import { numberFromString } from "./helpers";

export const createCommentSchema = z.object({
  body: z.object({
    content: z.string().min(1, "Content is required"),
    postId: numberFromString.or(z.number()),
    authorId: numberFromString.or(z.number()),
  }),
});

export const updateCommentSchema = z.object({
  params: z.object({
    id: numberFromString,
  }),
  body: z.object({
    content: z.string().min(1, "Content is required"),
  }),
});
