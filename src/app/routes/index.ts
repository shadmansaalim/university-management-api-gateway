// Imports
import express, { Router } from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  }
];

moduleRoutes.forEach((route: { path: string; routes: Router }) => {
  router.use(route.path, route.routes);
});

export default router;
