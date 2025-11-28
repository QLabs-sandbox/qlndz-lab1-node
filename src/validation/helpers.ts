import z from "zod";

export const numberFromString = z
  .string()
  .regex(/^\d+$/, "Must be a numeric value")
  .transform((val) => Number(val));

export const idParamSchema = z.object({
  params: z.object({
    id: numberFromString,
  }),
});

export const authorIdParamSchema = z.object({
  params: z.object({
    authorId: numberFromString,
  }),
});

export const postIdParamSchema = z.object({
  params: z.object({
    postId: numberFromString,
  }),
});
