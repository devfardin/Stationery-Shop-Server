import express from 'express';
import auth from '../Auth/auth';
import { USER_ROLE } from '../user/user.constant';
import validationRequest from '../../app/middlewares/validationRequest';
import { CategoryValidation } from './category.validation';
import { CategoryController } from './category.controller';
const router = express.Router();

router.post(
  '/create',
  auth(USER_ROLE.admin),
  validationRequest(CategoryValidation.crateCategoryValidation),
  CategoryController.creatCategoryInDB,
);
router.get('/', CategoryController.getAllCategoriesFromDB);

export const CategoryRoutes = router;
