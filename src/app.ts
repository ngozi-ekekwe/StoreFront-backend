import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("Storefront API");
});

// health check
app.get("/health", (_req: Request, res: Response): void => {
  res.send({
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  });
});

export default app;
