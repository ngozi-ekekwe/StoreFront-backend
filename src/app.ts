import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(express.json({ type: "application/json" }));

app.use(bodyParser.urlencoded())

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

app.use("/api/v1", routes);

export default app;
