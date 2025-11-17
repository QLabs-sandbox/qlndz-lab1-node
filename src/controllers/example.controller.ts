import { Request, Response, NextFunction } from "express";
import { getExampleService } from "../services/example.service";

export const getExample = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = getExampleService();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
