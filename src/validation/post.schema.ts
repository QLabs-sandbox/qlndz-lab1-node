import { z } from "zod";

const numberFromString = z
  .string()
  .regex(/^\d+$/, "Must be a numeric value")
  .transform((val) => Number(val));

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
