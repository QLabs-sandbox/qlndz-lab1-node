import prisma from "../prisma";

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const updateUser = async (id: number, name: string, email: string) => {
  return prisma.user.update({
    where: { id },
    data: { name, email },
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};
