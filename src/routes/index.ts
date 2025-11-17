import express from "express";
import exampleRoutes from "./example.routes";

const router = express.Router();

// Attach route groups
router.use("/example", exampleRoutes);

export default router;
