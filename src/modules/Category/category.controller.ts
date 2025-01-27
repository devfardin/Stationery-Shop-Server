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
const getAllCategoriesFromDB = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategoriesFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Categories retrieved succesfully',
    data: result,
  });
});
const delteCategoryFromDB = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await CategoryService.deleteCategoryFromDB(productId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Categories deleted succesfully',
    data: result,
  });
});
export const CategoryController = {
  creatCategoryInDB,
  getAllCategoriesFromDB,
  delteCategoryFromDB,
};
