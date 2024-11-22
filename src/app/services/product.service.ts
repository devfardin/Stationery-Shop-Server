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

// Filter product from the database using a specific ID
const getSingleProduct = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// Update product from the database using a specific ID

// export all product services
export const productServices = {
  createProductIntoDB,
  getAllProducts,
  getSingleProduct,
};
