import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { UserService } from './user.service';

const createNewUserIntoDb = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDb(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Registration is successful! Welcome.',
    data: result,
  });
});
const getMe = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserService.getMe(userId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User is retrived Succesfully',
    data: result,
  });
});
const getUsers = catchAsync(async (req, res) => {
  const result = await UserService.getUsers();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Users is retrived Succesfully',
    data: result,
  });
});
const updateRole = catchAsync(async (req, res) => {
  const result = await UserService.updateRole(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User Role Update Succesfully',
    data: result,
  });
});
// export all user controller function
export const UserController = {
  createNewUserIntoDb,
  getMe,
  getUsers,
  updateRole,
};
