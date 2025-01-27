import express from 'express';
import { productColtroller } from './product.controllers';
import validationRequest from '../../app/middlewares/validationRequest';
import { ProductValidation } from './productValidation';
const router = express.Router();

// will call controller function for create a product
router.post('/create', productColtroller.createProduct);

// find all products
router.get('/', productColtroller.getAllProductData);

// Filter product from the database using a specific ID
router.get('/:productId', productColtroller.getSingleProductFromDB);

// Update product from the database using a specific ID
router.put(
  '/:productId',
  validationRequest(ProductValidation.upateProductValidation),
  productColtroller.updateProductFromDB,
);

// Delete product form database using a specific ID
router.delete('/:productId', productColtroller.deleteProductFromDB);

// Export the Product Routers functions.
export const ProductRoute = router;
