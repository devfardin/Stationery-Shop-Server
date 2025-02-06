import { CartModal } from '../cart/cart.modal';
import { OrderModel } from '../order/order.model';
import { TOrder } from './order.interface';
import { orderUtils } from './order.utils';
// Create Order in mongobd database
const createOrder = async (payload: TOrder, clientIp: string) => {
  const orderInfo = payload;
  const result = await OrderModel.create(payload);
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
  if (payment.transactionStatus) {
    await OrderModel.updateOne({
      transation: {
        id: payment?.sp_order_id,
        transationStatus: payment.transactionStatus,
      },
    });
    const productId = payload?.cartId.map((id) => id);
    await CartModal.deleteMany({ _id: productId });
  }
  return { result, payment };
};

const verifyPayment = async (order_id: string) => {
  const verifyPayment = await orderUtils.verifyPaymentAsync(order_id);
  if (verifyPayment.length) {
    await OrderModel.findOneAndUpdate(
      {
        'transation.id': order_id,
      },
      {
        'transation.bank_status': verifyPayment[0].bank_status,
        'transation.sp_code': verifyPayment[0].sp_code,
        'transation.sp_message': verifyPayment[0].sp_message,
        'transation.method': verifyPayment[0].method,
        'transation.date_time': verifyPayment[0].date_time,
        status:
          verifyPayment[0].bank_status == 'Success'
            ? 'Paid'
            : verifyPayment[0].bank_status == 'Failed'
              ? 'Pending'
              : verifyPayment[0].bank_status == 'Cancel'
                ? 'Cancelled'
                : '',
      },
    );
  }
  return verifyPayment;
};

const getOrders = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderDataBaseUser = async (email: string) => {
  if (!email) {
    return null;
  }
  const query = { user: email };
  const result = await OrderModel.find(query).populate('product');
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
  verifyPayment,
  getOrders,
  getOrderDataBaseUser,
};
