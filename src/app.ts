import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/routes/products.router';
import { OrderRoute } from './app/routes/order.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application Routers for products
app.use('/api/products', ProductRoute);

// application Routers for order
app.use('/api/orders', OrderRoute);

// Root route handler for the application.
// Sends a success response with a welcome message and server status information.

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to our server! The API is up and running smoothly. 🚀',
    timestamp: `Started at ${new Date().toLocaleString()}`,
  });
});
// Export App.
export default app;
