/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../app/utils/catchAsync';
import { TUserRole } from '../user/user.interface';
import AppError from '../../app/error/AppError';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from './auth.utils';
import config from '../../app/config';
import { UserModal } from '../user/user.modal';
import { JwtPayload } from 'jsonwebtoken';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not Authorized User!',
      );
    }
    let decoded;
    try {
      // check to valid token
      decoded = verifyToken(token, config.jwt_access_token as string);
    } catch (error: any) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
    }
    if (!decoded) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
    }
    const { userEmail, userId, role, iat } = decoded;
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
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not authorized user!',
      );
    }
    req.user = decoded as JwtPayload;
    next();
  });
};
export default auth;
