import { Request, Response } from 'express';
import { orderService } from '../services/order.service';
const createNewOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrder(order);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Someting went wrong',
      error,
    });
  }
};

export const orderControllers = {
  createNewOrder,
};
