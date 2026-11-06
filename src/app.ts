import express from "express";
import type { Request, Response, NextFunction } from "express";
import usersRouter  from "./routes/users.route.js";

export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/users", usersRouter);

// 404 for unknown routes
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Error handler (4 args, must be last)
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});