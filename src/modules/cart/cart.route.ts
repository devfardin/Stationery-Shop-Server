import express from 'express';
import { CartController } from './cart.controller';
const router = express.Router();

router.post('/create-cart', CartController.createCartIntoDB);
router.get('/', CartController.getAllCartItmsFromDB);
router.get('/items', CartController.getCartItemsByUser);
router.put('/', CartController.upDateCartItem);
router.delete('/:productId', CartController.deleteCartItemFromDB);
export const CartRoute = router;
