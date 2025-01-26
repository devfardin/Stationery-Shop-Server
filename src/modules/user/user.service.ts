import AppError from '../../app/error/AppError';
import { TUser } from './user.interface';
import { UserModal } from './user.modal';
import { StatusCodes } from 'http-status-codes';
// create new user
const createUserIntoDb = async (payload: TUser) => {
  const result = await UserModal.create([payload]);
  //   when user not created
  if (!result.length) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'Registration failed. Please try again',
    );
  }
  return result;
};

export const UserService = {
  createUserIntoDb,
};
