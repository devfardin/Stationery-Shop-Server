import { Request, Response } from 'express';
import { orderService } from '../../modules/order/order.service';
import sendResponse from '../../app/utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';

// Create a new order in the database.
const createNewOrder = async (req: Request, res: Response) => {
  const result = await orderService.createOrder(req.body, req.ip as string);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Order created successfully',
    data: result,
  });
};
const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(req.query.order_id as string);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Order verified successfully',
    data: order,
  });
});

// get all order
const getOrders = catchAsync(async (req, res) => {
  const result = await orderService.getOrders();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Orders retrived Succesfully',
    data: result,
  });
});

const getOrderDataBaseUser = catchAsync(async (req, res) => {
  const email = req?.query?.email as string;
  const result = await orderService.getOrderDataBaseUser(email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Item retrieved successfully',
    data: result,
  });
});

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
const UpdateOrserStatus = catchAsync(async (req, res) => {
  const result = await orderService.orderStatusUpdate(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order Status Update Succesfully',
    data: result,
  });
});

// Export the order controller functions.
export const orderControllers = {
  createNewOrder,
  orderRevenue,
  verifyPayment,
  getOrders,
  getOrderDataBaseUser,
  UpdateOrserStatus,
};
