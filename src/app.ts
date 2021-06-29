import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

app.get('/', (_req: Request, res: Response) => {
  res.send('Storefront API')
})

export default app;