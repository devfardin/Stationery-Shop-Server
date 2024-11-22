import express from 'express';
import { productColtroller } from '../controllers/product.controllers';
const router = express.Router();

// will call controller function for create a product
router.post('/create-product', productColtroller.createProduct);

// find all products
router.get('/', productColtroller.getAllProductData);

// Filter product from the database using a specific ID
router.get('/:id', productColtroller.getSingleProductFromDB);

export const ProductRoute = router;
