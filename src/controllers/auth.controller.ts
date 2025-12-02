import { Request, Response } from "express";
import { getMe, loginUser, registerUser } from "../services/auth/auth.service";
import prisma from "../prisma";

export const registerController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const result = await registerUser(name, email, password);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Registration failed",
    });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(error.status || 400).json({
      message: error.message || "Login failed",
    });
  }
};

export const meController = async (req: Request, res: Response) => {
  const payload = (req as any).user;

  if (!payload?.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await getMe(payload.userId);
    return res.json(user);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
