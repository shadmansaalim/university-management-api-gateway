import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';

const router = express.Router();

router.get('/', SemesterRegistrationController.getAllFromDB);

router.get(
  '/my-registration',
  authGuard(ENUM_USER_ROLES.STUDENT),
  SemesterRegistrationController.getMyRegistration
);

router.get(
  '/my-semester-registration-courses',
  authGuard(ENUM_USER_ROLES.STUDENT),
  SemesterRegistrationController.mySemesterRegistrationCourses
);

router.get('/:id', SemesterRegistrationController.getByIdFromDB);

router.post(
  '/',
  validateRequest(SemesterRegistrationValidation.create),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  SemesterRegistrationController.insertIntoDB
);

router.post(
  '/enroll-into-course',
  validateRequest(SemesterRegistrationValidation.enrollOrWithdrawCourse),
  authGuard(ENUM_USER_ROLES.STUDENT),
  SemesterRegistrationController.enrollIntoCourse
);

router.post(
  '/withdraw-from-course',
  validateRequest(SemesterRegistrationValidation.enrollOrWithdrawCourse),
  authGuard(ENUM_USER_ROLES.STUDENT),
  SemesterRegistrationController.withDrawFromCourse
);

router.post(
  '/confirm-registration',
  authGuard(ENUM_USER_ROLES.STUDENT),
  SemesterRegistrationController.confirmRegistration
);

router.post(
  '/start-registration',
  authGuard(ENUM_USER_ROLES.STUDENT),
  SemesterRegistrationController.startRegistration
);

router.post(
  '/:id/start-new-semester',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  SemesterRegistrationController.startNewSemester
);

router.patch(
  '/:id',
  validateRequest(SemesterRegistrationValidation.update),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  SemesterRegistrationController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  SemesterRegistrationController.deleteByIdFromDB
);

export const SemesterRegistrationRoutes = router;
