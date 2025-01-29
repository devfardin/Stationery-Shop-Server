import { Request, Response } from 'express';
import { orderService } from '../../modules/order/order.service';

// Create a new order in the database.
const createNewOrder = async (req: Request, res: Response) => {
  try {
    // Extract order details from the request body.
    const orderInfo = req.body;
    // const productId = orderInfo.product;
    const cartId = orderInfo.porductId;

    console.log(orderInfo);
    

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: null,
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
