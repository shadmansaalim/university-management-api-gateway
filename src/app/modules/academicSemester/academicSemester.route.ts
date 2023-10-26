// Imports
import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

// Express router
const router = express.Router();

router.get('/:id', AcademicSemesterController.getByIdFromDb);
router.get('/', AcademicSemesterController.getAllFromDb);
router.post(
  '/',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDb
);
router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateByIdIntoDb
);
router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  AcademicSemesterController.deleteByIdIntoDb
);

export const AcademicSemesterRoutes = router;
