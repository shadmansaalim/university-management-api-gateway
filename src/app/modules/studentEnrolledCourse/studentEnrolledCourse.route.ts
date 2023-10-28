import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';
import authGuard from '../../middlewares/authGuard';
import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllFromDB);
router.get('/:id', StudentEnrolledCourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.create),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  StudentEnrolledCourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.update),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  StudentEnrolledCourseController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  StudentEnrolledCourseController.deleteByIdFromDB
);

export const StudentEnrolledCourseRoutes = router;
