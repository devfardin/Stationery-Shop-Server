import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { CategoryRoutes } from '../modules/Category/category.route';
import { ProductRoute } from '../modules/product/products.router';
import { CartRoute } from '../modules/cart/cart.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoute,
  },
  {
    path: '/cart',
    route: CartRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
