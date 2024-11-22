import express from 'express';
import { productColtroller } from '../controllers/product.controllers';
const router = express.Router();

// will call controller function for create a product
router.post('/create-product', productColtroller.createProduct);
router.get('/', productColtroller.getAllProductData);

export const ProductRoute = router;
