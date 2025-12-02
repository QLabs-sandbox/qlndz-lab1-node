import { z } from "zod";

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Id must be a number"),
  }),
  body: z.object({
    name: z.string().min(2).optional(),
    email: z.string().optional(),
  }),
});
