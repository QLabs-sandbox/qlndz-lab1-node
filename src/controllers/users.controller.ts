import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/users.service";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await getUserById(id);

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
};

export const putUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  try {
    const updated = await updateUser(id, name, email);
    res.json(updated);
  } catch (e) {
    return res.status(404).json({ message: "User not found" });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await deleteUser(id);
    res.json({ message: "User deleted" });
  } catch (e) {
    return res.status(404).json({ message: "User not found" });
  }
};
