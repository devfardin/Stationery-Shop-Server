import { Request, Response } from 'express';
import { orderService } from '../../modules/order/order.service';
import sendResponse from '../../app/utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// Create a new order in the database.
const createNewOrder = async (req: Request, res: Response) => {
  const result = await orderService.createOrder(req.body, req.ip as string);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Order created successfully',
    data: result,
  });
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
