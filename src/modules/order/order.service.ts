import { CartModal } from '../cart/cart.modal';
import { OrderModel } from '../order/order.model';
import { TOrder } from './order.interface';
import { orderUtils } from './order.utils';
// Create Order in mongobd database
const createOrder = async (payload: TOrder, clientIp: string) => {
  const orderInfo = payload;
  const result = await OrderModel.create(payload);
  // const productId = payload?.cartId.map((id) => id);
  // await CartModal.deleteMany({ _id: productId });
  const shurjopayPayload = {
    amount: orderInfo?.TotalPrice,
    order_id: result?._id,
    currency: 'BDT',
    customer_name: `${orderInfo?.shiping?.firstName} ${orderInfo?.shiping?.lastName}`,
    customer_address: orderInfo?.shiping?.address,
    customer_email: orderInfo.user.email,
    customer_phone: orderInfo.shiping.phone,
    customer_city: orderInfo.shiping.city,
    client_ip: clientIp,
  };

  const payment = await orderUtils.makePayment(shurjopayPayload);
  // console.log(payment);
  if (payment.transactionStatus) {
    await OrderModel.updateOne({
      transation: {
        id: payment.sp_order_id,
        transationStatus: payment.transactionStatus,
      },
    });
  }

  return { result, payment };
};

const verifyPayment = async (order_id: string) => {
  const verifyPayment = await orderUtils.verifyPaymentAsync(order_id);
  return verifyPayment;
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
  verifyPayment,
};
