import express from 'express';
import { productColtroller } from './product.controllers';
import auth from '../Auth/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

// will call controller function for create a product
router.post(
  '/create',
  // validationRequest(ProductValidation.createProductValidation),
  productColtroller.createProduct,
);

// find all products
router.get('/', productColtroller.getAllProductData);

// Filter product from the database using a specific ID
router.get('/:productId', productColtroller.getSingleProductFromDB);

// Update product from the database using a specific ID
router.put('/:productId', productColtroller.updateProductFromDB);

// Delete product form database using a specific ID
router.delete(
  '/:productId',
  auth(USER_ROLE.admin),
  productColtroller.deleteProductFromDB,
);

// Export the Product Routers functions.
export const ProductRoute = router;
