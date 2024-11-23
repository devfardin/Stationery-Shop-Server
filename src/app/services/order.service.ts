import { Order } from '../interfaces/order.interface';
import { OrderModel } from '../models/order.model';

const createOrder = async (orderData: Order) => {
  const order = new OrderModel(orderData);
  const result = await order.save();
  return result;
};

// Calculate Revenue from Orders
const orderRevenue = async () => {
  const result = await OrderModel.find();
  return result;
};
// Export the order order services functions.
export const orderService = {
  createOrder,
  orderRevenue,
};
