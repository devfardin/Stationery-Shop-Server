import express from 'express';
import { orderControllers } from '../controllers/order.congrollers';

const router = express.Router();

router.post('/create-orders', orderControllers.createNewOrder);

export const OrderRoute = router;
