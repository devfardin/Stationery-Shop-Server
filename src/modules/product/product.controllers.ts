import { Request, Response } from 'express';
import { productServices } from '../../modules/product/product.service';
import sendResponse from '../../app/utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// Handles the creation of a new product.
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.createProductIntoDB(product);
    res.status(200).json({
      message: 'Product created successfully',
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
    const queryTerm = req.query.searchTerm as string;
    const result = await productServices.getAllProducts(queryTerm);
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
  const { productId } = req.params;
  const result = await productServices.getSingleProduct(productId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  });
};

/** Sends a success response with the updated product data or
an error response if the update fails. **/
const updateProductFromDB = async (req: Request, res: Response) => {
  const productInfo = req.body;
  const { productId } = req.params;
  const result = await productServices.updateProductFromDB(
    productId,
    productInfo,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Product updated successfully',
    success: true,
    data: result,
  });
};

const deleteProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await productServices.deleteProductFromDB(productId);
    // Extract order details from the request body.
    res.status(200).json({
      message: 'Product deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    // Handle errors and send an appropriate error response.
    res.status(500).json({
      message:
        'Failed to delete product. Please check the provided ID and try again.',
      status: false,
      error,
    });
  }
};
// Export the Product controller functions.
export const productColtroller = {
  createProduct,
  getAllProductData,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
