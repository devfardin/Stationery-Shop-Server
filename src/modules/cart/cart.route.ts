import express from 'express';
import { CartController } from './cart.controller';
const router = express.Router();

router.post('/create-cart', CartController.createCartIntoDB);
router.get('/', CartController.getAllCartItmsFromDB);
router.get('/items', CartController.getCartItemsByUser);
export const CartRoute = router;
