import { CartModal } from '../cart/cart.modal';
import { OrderModel } from '../order/order.model';
import { TOrder } from './order.interface';
// Create Order in mongobd database
const createOrder = async (payload: TOrder) => {
  const orderInfo = payload;
  const result = await OrderModel.create(payload);
  const productId = payload?.cartId.map((id) => id);
  await CartModal.deleteMany({ _id: productId });
  const shurjopayPayload = {
    amount: orderInfo.TotalPrice,
    order_id: result._id,
    currency: 'BDT',
    customer_name: '',
    customer_address: '',
    customer_phone: '',
    customer_email: '',
  };
  console.log(result);

  // return result;
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
