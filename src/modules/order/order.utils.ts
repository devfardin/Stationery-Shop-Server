/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import Shurjopay, { PaymentResponse } from 'shurjopay';
import config from '../../app/config';

const shurjopay = new Shurjopay()

shurjopay.config(
  config.sp.sp_endpoint!,
  config.sp.sp_username!,
  config.sp.sp_password!,
  config.sp.sp_prefix!,
  config.sp.sp_return_url!
  // 'https://sandbox.shurjopayment.com',
  // 'sp_sandbox',
  // 'pyyk97hu&6u6',
  // 'SP',
  // 'https://sandbox.shurjopayment.com/response'
)
const makePayment = async (payload: any): Promise<PaymentResponse> => {
 return new Promise((resolve, reject) => {
    shurjopay.makePayment(payload, (response) => resolve(response), (error)=> reject(error))
  })
//  const paymentResult = await shurjopay.makePayment(payload,
//   (response: any)=> {
//     sendResponse(res, {
//       success: true,
//       statusCode: StatusCodes.OK,
//       message: 'Order created successfully',
//       data: response,
//     });
//   },
//   (error: any) => console.log(error)
//   );
//  return paymentResult;
}

const verifyPaymentAsync = async (order_id: string, ) => {
  return new Promise((resolve, reject) => {
    shurjopay.verifyPayment(order_id, (response) => resolve(response), (error) => reject(error))
  } )
}
export const orderUtils = {
  makePayment,
  verifyPaymentAsync,
}
