import express from 'express';
import { orderControllers } from './order.congrollers';

const router = express.Router();

// Route: POST /create-orders
router.post('/', orderControllers.createNewOrder);
router.get('/verify', orderControllers.verifyPayment);
router.get('/', orderControllers.getOrders);
router.put('/', orderControllers.UpdateOrserStatus);

// Route: GET /revenue
router.get('/revenue', orderControllers.orderRevenue);

// Export the order route functions.
export const OrderRoute = router;
