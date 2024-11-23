import express from 'express';
import { orderControllers } from '../controllers/order.congrollers';

const router = express.Router();

// Route: POST /create-orders
router.post('/create-orders', orderControllers.createNewOrder);

// Route: GET /revenue
router.get('/revenue', orderControllers.orderRevenue);

export const OrderRoute = router;
