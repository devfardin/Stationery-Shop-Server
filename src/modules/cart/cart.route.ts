import express from 'express';
import { CartController } from './cart.controller';
const router = express.Router();

router.post('/create-cart', CartController.createCartIntoDB);
router.get('/', CartController.getAllCartItmsFromDB);
export const CartRoute = router;
