import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';

const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// application Routes
app.use('/api/v1', router);

// application Routers for products
// app.use('/api/products', ProductRoute);

// // application Routers for order
// app.use('/api/orders', OrderRoute);

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
