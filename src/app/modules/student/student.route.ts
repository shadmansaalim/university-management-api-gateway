import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

const router = express.Router();

router.get('/', StudentController.getAllFromDB);
router.get('/profile/:id', StudentController.getStudentProfile);
router.get('/my-courses', authGuard(ENUM_USER_ROLES.STUDENT), StudentController.getMyCourses);
router.get(
  '/my-academic-infos',
  authGuard(ENUM_USER_ROLES.STUDENT),
  StudentController.getMyAcademicInfos
);
router.get(
  '/my-course-schedules',
  authGuard(ENUM_USER_ROLES.STUDENT),
  StudentController.getMyCourseSchedules
);
router.get('/:id', StudentController.getByIdFromDB);
router.get('/:id', StudentController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudent),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  StudentController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  StudentController.deleteByIdFromDB
);

export const StudentRoutes = router;
