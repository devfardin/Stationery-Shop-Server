import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { CategoryService } from './category.service';

const creatCategoryInDB = catchAsync(async (req, res) => {
  const result = await CategoryService.creatCategoryInDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Category Succesfully created',
    data: result,
  });
});
export const CategoryController = {
  creatCategoryInDB,
};