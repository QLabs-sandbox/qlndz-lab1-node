import { z } from "zod";
import { numberFromString } from "./helpers";

export const createPostSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().optional(),
    authorId: numberFromString.or(z.number()),
  }),
});

export const updatePostSchema = z.object({
  params: z.object({
    id: numberFromString,
  }),
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().optional(),
  }),
});
