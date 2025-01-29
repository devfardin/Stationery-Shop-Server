import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { CartService } from './cart.service';

const createCartIntoDB = catchAsync(async (req, res) => {
  const result = await CartService.createCartIntoDB(req.body);
  // if (SingleData.quantity <= 0) {
  //   await productServices.updateProductFromDB(productId, {
  //     inStock: false,
  //   });
  // }
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Item added to cart',
    data: result,
  });
});
const getAllCartItmsFromDB = catchAsync(async (req, res) => {
  const result = await CartService.getAllCartItmsFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Item retrieved successfully',
    data: result,
  });
});
const getCartItemsByUser = catchAsync(async (req, res) => {
  const email = req?.query?.email as string;
  const result = await CartService.getCartItemsByUser(email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Item retrieved successfully',
    data: result,
  });
});

const upDateCartItem = catchAsync(async (req, res) => {
  const result = CartService.upDateCartItem(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product quantity updated successfully!',
    data: result,
  });
});
const deleteCartItemFromDB = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = CartService.deleteCartItemFromDB(productId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Cart item deleted successfully!',
    data: result,
  });
});

export const CartController = {
  createCartIntoDB,
  getAllCartItmsFromDB,
  getCartItemsByUser,
  upDateCartItem,
  deleteCartItemFromDB,
};
