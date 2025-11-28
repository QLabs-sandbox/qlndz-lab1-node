import { z } from "zod";

const numberFromString = z
  .string()
  .regex(/^\d+$/, "Must be a numeric value")
  .transform((val) => Number(val));

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
