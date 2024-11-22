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

export const productColtroller = {
  createProduct,
  getAllProductData,
};
