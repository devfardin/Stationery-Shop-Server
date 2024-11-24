import { Product, ProductUpdateInfo } from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';

// Create Product in mongobd database
const createProductIntoDB = async (productData: Product) => {
  const product = new ProductModel(productData);
  const result = await product.save();
  return result;
};
// find all products
const getAllProducts = async (query: string) => {
  if (query) {
    const result = await ProductModel.find({
      $or: [{ name: query }, { brand: query }, { category: query }],
    });
    return result;
  } else {
    const result = await ProductModel.find();
    return result;
  }
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

// Deletes a product from the database by its ID.
const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};
// export all product services
export const productServices = {
  createProductIntoDB,
  getAllProducts,
  getSingleProduct,
  updateProductFromDB,
  deleteProductFromDB,
};
