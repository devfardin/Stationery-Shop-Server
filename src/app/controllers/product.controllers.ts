import { Request, Response } from 'express';
import { productServices } from '../services/product.service';

// Handles the creation of a new product.
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.createProductIntoDB(product);
    res.status(200).json({
      message: 'The operation was completed successfully.',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: {
        name: error.name,
        errors: error.errors,
      },
    });
  }
};
// Retrieves all products from the database.
const getAllProductData = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProducts();
    res.status(200).json({
      message: 'Products retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve products',
      status: false,
      error,
    });
  }
};

// Filter product from the database using a specific ID
const getSingleProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProduct(productId);
    res.status(200).json({
      message: 'Product retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve product. Please check the provided ID.',
      status: false,
      error,
    });
  }
};

/** Sends a success response with the updated product data or
an error response if the update fails. **/
const updateProductFromDB = async (req: Request, res: Response) => {
  try {
    const productInfo = req.body;
    const { productId } = req.params;
    await productServices.updateProductFromDB(productId, productInfo);
    const updateProduct = await productServices.getSingleProduct(productId);
    res.status(200).json({
      message: 'Product updated successfully',
      status: true,
      data: updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update product. Please check the provided details.',
      status: false,
      error,
    });
  }
};

/**
 Sends a success response if the product is deleted successfully, or an error response if 
 the operation fails or
 the product is not found.
 */
const deleteProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductFromDB(productId);
    const deletedProduct = await productServices.getSingleProduct(productId);
    res.status(200).json({
      message: 'Product deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message:
        'Failed to delete product. Please check the provided ID and try again.',
      status: false,
      error,
    });
  }
};

export const productColtroller = {
  createProduct,
  getAllProductData,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
