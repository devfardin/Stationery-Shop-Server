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

const getMe = async (userId: string) => {
  const result = await UserModal.findOne({ _id: userId });
  return result;
};
const getUsers = async () => {
  const result = await UserModal.find();
  return result;
};

const updateRole = async (payload: { id: string, role: string }) => {
  const result = await UserModal.updateOne(
    { _id: payload.id },
    { role: payload.role },
    { new: true },
  );
  return result;
};
export const UserService = {
  createUserIntoDb,
  getMe,
  getUsers,
  updateRole,
};
