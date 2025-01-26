import express from 'express';
import validationRequest from '../../app/middlewares/validationRequest';
import { userValidation } from './user.validation';
import { UserController } from './user.controller';
import { USER_ROLE } from './user.constant';
import auth from '../Auth/auth';

const router = express.Router();
router.post(
  '/create-user',
  validationRequest(userValidation.createUserValidation),
  UserController.createNewUserIntoDb,
);
router.get(
  '/me',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  UserController.getMe,
);
export const UserRoutes = router;
