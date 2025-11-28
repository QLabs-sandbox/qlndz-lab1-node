import express from "express";
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUserController,
} from "../controllers/users.controller";
import { validate } from "../middleware/validate";
import { createUserSchema, updateUserSchema } from "../validation/user.schema";
import { idParamSchema } from "../validation/helpers";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", validate(idParamSchema), getUser);
router.post("/", validate(createUserSchema), postUser);
router.put("/:id", validate(updateUserSchema), putUser);
router.delete("/:id", validate(idParamSchema), deleteUserController);

export default router;
