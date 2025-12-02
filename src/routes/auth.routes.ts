import { Router } from "express";
import { loginSchema, registerSchema } from "../validation/auth.schema";
import { validate } from "../middleware/validate";
import {
  loginController,
  meController,
  registerController,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.post("/register", validate(registerSchema), registerController);
router.post("/login", validate(loginSchema), loginController);
router.get("/me", authMiddleware, meController);

export default router;
