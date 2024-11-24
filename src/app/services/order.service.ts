import { Order } from '../interfaces/order.interface';
import { OrderModel } from '../models/order.model';
// Create Order in mongobd database
const createOrder = async (orderData: Order) => {
  const order = new OrderModel(orderData);
  const result = await order.save();
  return result;
};

// Calculate Revenue from Orders
const orderRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $addFields: {
        totalPrice: {
          $multiply: ['$totalPrice', '$quantity'],
        },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
    {
      $project: { _id: false, totalRevenue: true },
    },
  ]);
  return result[0];
};

// Export the order order services functions.
export const orderService = {
  createOrder,
  orderRevenue,
};
