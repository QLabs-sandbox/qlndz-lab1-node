import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email format"),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Id must be a number"),
  }),
  body: z.object({
    name: z.string().min(2).optional(),
    email: z.string().optional(),
  }),
});
