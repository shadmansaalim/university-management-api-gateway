import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';
import authGuard from '../../middlewares/authGuard';
import { ENUM_USER_ROLES } from '../../../enums/user';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllFromDB);
router.get('/:id', OfferedCourseClassScheduleController.getByIdFromDB);

router.post(
  '/',
  validateRequest(OfferedCourseClassScheduleValidation.create),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  OfferedCourseClassScheduleController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidation.update),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  OfferedCourseClassScheduleController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  OfferedCourseClassScheduleController.deleteByIdFromDB
);

export const OfferedCourseClassScheduleRoutes = router;
