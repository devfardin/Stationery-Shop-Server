import { Order } from '../interfaces/order.interface';
import { OrderModel } from '../models/order.model';

const createOrder = async (orderData: Order) => {
  const order = new OrderModel(orderData);
  const result = await order.save();
  return result;
};

export const orderService = {
  createOrder,
};
