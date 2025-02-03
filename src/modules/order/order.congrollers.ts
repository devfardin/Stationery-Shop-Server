import { Request, Response } from 'express';
import { orderService } from '../../modules/order/order.service';
import sslcommerz from 'sslcommerz-lts';
import { ObjectId } from 'mongodb';
import sendResponse from '../../app/utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import config from '../../app/config';

// Create a new order in the database.
const createNewOrder = async (req: Request, res: Response) => {
  const tran_id = new ObjectId().toString();
  const info = req?.body;
  const data = {
    total_amount: info.TotalPrice,
    currency: 'USD',
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: `http://localhost:5000payment/success${tran_id}`,
    fail_url: 'http://localhost:3030/fail',
    cancel_url: 'http://localhost:3030/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'customer@example.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };
  const sslcz = new sslcommerz(config.store_id, config.store_passwd, false);

  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    const paymentUrl = apiResponse.GatewayPageURL;
    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: '',
      data: paymentUrl,
    });
  });

  // const result = await orderService.createOrder(req.body);
  // sendResponse(res, {
  //   success: true,
  //   statusCode: StatusCodes.OK,
  //   message: 'Order created successfully',
  //   // data: result,
  // });
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
