import express from 'express';
import validationRequest from '../../app/middlewares/validationRequest';
import { userValidation } from './user.validation';
import { UserController } from './user.controller';

const router = express.Router();
router.post(
  '/crate-user',
  validationRequest(userValidation.createUserValidation),
  UserController.createNewUserIntoDb,
);
export const UserRoutes = router;
