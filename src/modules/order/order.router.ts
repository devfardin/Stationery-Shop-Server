import express from 'express';
import { orderControllers } from './order.congrollers';

const router = express.Router();

// Route: POST /create-orders
router.post('/', orderControllers.createNewOrder);

// Route: GET /revenue
router.get('/revenue', orderControllers.orderRevenue);

// Export the order route functions.
export const OrderRoute = router;
