/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import AppError from '../../app/error/AppError';
import { UserModal } from '../user/user.modal';
import { TLoginUser } from './auth.interface';
import { createToken, verifyToken } from './auth.utils';
import config from '../../app/config';

const loginUser = async (payload: TLoginUser) => {
  // check if the user is exist
  const isUserExist = await UserModal.isUserExistByEmail(payload?.email);

  //   check user is not exits
  if (!isUserExist) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'User not found. Please check the provided credentials',
    );
  }
  //   checking if the user is already deleted
  if (isUserExist?.isDeleted) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This account has been deleted.');
  }
  if (isUserExist?.status === 'disabled') {
    throw new AppError(
      StatusCodes.FORBIDDEN,
      'This account has been disabled. Please contact support for assistance.',
    );
  }
  //  checking is the password is correct
  if (
    !(await UserModal.isPasswordMatch(payload.password, isUserExist?.password))
  ) {
    throw new AppError(StatusCodes.FORBIDDEN, 'User password do not match');
  }
  // create token and sent to the client
  const jwtPayload = {
    userEmail: isUserExist?.email,
    role: isUserExist.role,
  };
  //   Crate Jwt Token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_access_expires as string,
  );
  //   crate jwt refresh token
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_token as string,
    config.jwt_refresh_expires as string,
  );
  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  if (!token) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'You are not Authorized User!',
    );
  }
  // check to valid token
  const decoded = verifyToken(token, config.jwt_refresh_token as string);

  const { userEmail, iat } = decoded;
  //   checking if the user is exist
  const isUserExist = await UserModal.isUserExistByEmail(userEmail);
  //   check user is not exits
  if (!isUserExist) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'User not found. Please check the provided credentials',
    );
  }
  //   checking if the user is already deleted
  if (isUserExist?.isDeleted) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This account has been deleted.');
  }
  if (isUserExist?.status === 'disabled') {
    throw new AppError(
      StatusCodes.FORBIDDEN,
      'This account has been disabled. Please contact support for assistance.',
    );
  }

  //   write user change passwod function here

  // create token and sent to the client
  const jwtPayload = {
    userEmail: isUserExist?.email,
    role: isUserExist.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_access_expires as string,
  );
  return {
    accessToken,
  };
};

export const AuthService = {
  loginUser,
  refreshToken,
};
