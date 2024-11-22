import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/routes/products.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application Routers
app.use('/api/v1/products', ProductRoute);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to our server! The API is up and running smoothly. 🚀',
    timestamp: `Started at ${new Date().toLocaleString()}`,
  });
});

export default app;
