/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request } from 'express';
import catchAsync from '../../app/utils/catchAsync';
import { TUserRole } from '../user/user.interface';
import AppError from '../../app/error/AppError';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from './auth.utils';
import config from '../../app/config';

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
    } catch ( error: any ) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
    }
    
    // console.log(decoded);
    if (!decoded) {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
      }
      const { role, userId, iat } = decoded;

  });
};
