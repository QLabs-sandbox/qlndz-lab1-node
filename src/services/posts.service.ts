import prisma from "../prisma";

export const getAllPosts = async () => {
  return prisma.post.findMany({
    include: {
      author: true,
      comments: true,
    },
  });
};

export const getPostById = async (id: number) => {
  return prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
      comments: {
        include: {
          author: true,
        },
      },
    },
  });
};

export const createPost = async (
  title: string,
  content: string,
  authorId: number
) => {
  return prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
    include: {
      author: true,
    },
  });
};

export const updatePost = async (
  id: number,
  title: string,
  content: string
) => {
  return prisma.post.update({
    where: { id },
    data: { title, content },
    include: {
      author: true,
    },
  });
};

export const deletePost = async (id: number) => {
  return prisma.post.delete({
    where: { id },
  });
};

export const getPostsByAuthor = async (authorId: number) => {
  return prisma.post.findMany({
    where: { authorId },
    include: {
      author: true,
      comments: true,
    },
  });
};
