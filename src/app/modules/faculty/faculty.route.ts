import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);

router.get('/profile/:id', FacultyController.getFacultyProfile);
router.get('/my-courses', authGuard(ENUM_USER_ROLES.FACULTY), FacultyController.getMyCourses);
router.get(
  '/my-course-students',
  authGuard(ENUM_USER_ROLES.FACULTY),
  FacultyController.getMyCourseStudents
);

router.get('/:id', FacultyController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFaculty),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  FacultyController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  FacultyController.deleteByIdFromDB
);

export const FacultyRoutes = router;
