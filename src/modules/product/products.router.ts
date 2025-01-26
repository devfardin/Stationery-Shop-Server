import express from 'express';
import { productColtroller } from '../controllers/product.controllers';
const router = express.Router();

// will call controller function for create a product
router.post('/', productColtroller.createProduct);

// find all products
router.get('/', productColtroller.getAllProductData);

// Filter product from the database using a specific ID
router.get('/:productId', productColtroller.getSingleProductFromDB);

// Update product from the database using a specific ID
router.put('/:productId', productColtroller.updateProductFromDB);

// Delete product form database using a specific ID
router.delete('/:productId', productColtroller.deleteProductFromDB);

// Export the Product Routers functions.
export const ProductRoute = router;
