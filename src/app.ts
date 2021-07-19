import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import routes from "./routes";
import * as swaggerDocument from "../swagger.json";

const app = express();

// const options = {
//   swaggerOptions: {
//     authAction: {
//       JWT: {
//         name: "JWT",
//         schema: {
//           type: "apiKey",
//           in: "header",
//           name: "Authorization",
//           description: "",
//         },
//         value: "Bearer <JWT>",
//       },
//     },
//   },
// };

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json({ type: "application/json" }));

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
