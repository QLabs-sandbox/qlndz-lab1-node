import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import errorHandler from "./middleware/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Register all routes under /api
app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({ message: "API is running" });
});

// Error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
