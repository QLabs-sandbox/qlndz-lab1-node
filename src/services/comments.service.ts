import prisma from "../prisma";

export const getAllComments = async () => {
  return prisma.comment.findMany({
    include: {
      author: true,
      post: true,
    },
  });
};

export const getCommentById = async (id: number) => {
  return prisma.comment.findUnique({
    where: { id },
    include: {
      author: true,
      post: true,
    },
  });
};

export const createComment = async (
  content: string,
  postId: number,
  authorId: number
) => {
  return prisma.comment.create({
    data: {
      content,
      postId,
      authorId,
    },
    include: {
      author: true,
      post: true,
    },
  });
};

export const updateComment = async (id: number, content: string) => {
  return prisma.comment.update({
    where: { id },
    data: { content },
    include: {
      author: true,
      post: true,
    },
  });
};

export const deleteComment = async (id: number) => {
  return prisma.comment.delete({
    where: { id },
  });
};

export const getCommentsByPost = async (postId: number) => {
  return prisma.comment.findMany({
    where: { postId },
    include: {
      author: true,
    },
  });
};

export const getCommentsByAuthor = async (authorId: number) => {
  return prisma.comment.findMany({
    where: { authorId },
    include: {
      post: true,
    },
  });
};
