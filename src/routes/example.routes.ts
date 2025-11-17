import express from "express";
import { getExample } from "../controllers/example.controller";

const router = express.Router();

// GET /api/example
router.get("/", getExample);

export default router;
