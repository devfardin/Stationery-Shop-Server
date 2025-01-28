import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { CartService } from './cart.service';

const createCartIntoDB = catchAsync(async (req, res) => {
  const result = await CartService.createCartIntoDB(req.body);
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

export const CartController = {
  createCartIntoDB,
  getAllCartItmsFromDB,
};
