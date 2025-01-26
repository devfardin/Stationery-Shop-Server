import { Request, Response } from 'express';
import { orderService } from '../../modules/order/order.service';
import { productServices } from '../../modules/product/product.service';

// Create a new order in the database.
const createNewOrder = async (req: Request, res: Response) => {
  try {
    // Extract order details from the request body.
    const orderInfo = req.body;
    const productId = orderInfo.product;
    const result = await orderService.createOrder(orderInfo);
    const getSingleProduct = await productServices.getSingleProduct(productId);

    // Validate if the product exists; throw an error if not found.
    if (!getSingleProduct) {
      throw new Error('Product not found');
    }
    // Prepare the query to update the product's quantity.
    const updateQuery = {
      quantity: getSingleProduct.quantity - orderInfo.quantity,
    };

    // Update the product's quantity in the database.
    await productServices.updateProductFromDB(productId, updateQuery);

    // Fetch the updated product details from the database.
    const SingleData = await productServices.getSingleProduct(productId);

    // Validate if the product still exists after the update.
    if (!SingleData) {
      throw new Error('Product not found');
    }

    // Change the stock status if the product quantity is zero or less.
    if (SingleData.quantity <= 0) {
      await productServices.updateProductFromDB(productId, {
        inStock: false,
      });
    }

    // Respond with success if the order is created successfully.
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    // Handle errors and send an appropriate error response.
    res.status(500).json({
      success: false,
      message: error._message || 'Someting went wrong',
      error,
    });
  }
};

// Handles the calculation of total revenue from all orders.
const orderRevenue = async (req: Request, res: Response) => {
  try {
    const data = await orderService.orderRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data,
    });
  } catch (error) {
    // Handle errors and send an appropriate error response.
    res.status(500).json({
      message: 'Failed to calculate revenue. Please try again later.',
      success: false,
      error,
    });
  }
};
// Export the order controller functions.
export const orderControllers = {
  createNewOrder,
  orderRevenue,
};
