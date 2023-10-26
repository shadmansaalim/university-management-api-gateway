// Imports
import express, { Router } from 'express';

const router = express.Router();

const moduleRoutes = [
  {
    path: '',
    routes: 
  }
];

moduleRoutes.forEach((route:{
  path: string;
  routes: Router;}
) => {
  router.use(route.path, route.routes);
});

export default router;
