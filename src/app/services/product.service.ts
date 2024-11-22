import { Product, ProductUpdateInfo } from '../interfaces/product.interface';
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
const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

// Update product from the database using a specific ID
const updateProductFromDB = async (
  productId: string,
  productInfo: ProductUpdateInfo,
) => {
  const updateProductData = {
    ...productInfo,
    updatedAt: new Date(),
  };
  const result = await ProductModel.updateOne(
    { _id: productId },
    updateProductData,
  );
  return result;
};

// export all product services
export const productServices = {
  createProductIntoDB,
  getAllProducts,
  getSingleProduct,
  updateProductFromDB,
};
