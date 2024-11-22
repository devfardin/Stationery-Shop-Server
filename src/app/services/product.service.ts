import { Product } from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';

// Create Product in mongobd database
const createProductIntoDB = async (productData: Product) => {
  const product = new ProductModel(productData);
  const result = await product.save();
  return result;
};
// find all products
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

// export all product services
export const productServices = {
  createProductIntoDB,
  getAllProducts,
};
