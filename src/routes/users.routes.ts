import express from "express";
import {
  getUsers,
  getUser,
  putUser,
  deleteUserController,
} from "../controllers/users.controller";
import { validate } from "../middleware/validate";
import { updateUserSchema } from "../validation/user.schema";
import { idParamSchema } from "../validation/helpers";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", validate(idParamSchema), getUser);
router.put("/:id", validate(updateUserSchema), putUser);
router.delete("/:id", validate(idParamSchema), deleteUserController);

export default router;
