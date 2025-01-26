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
// export all user controller function
export const UserController = {
  createNewUserIntoDb,
};
