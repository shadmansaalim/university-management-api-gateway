import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentValidation } from './managementDepartment.validation';
import { ManagementDepartmentController } from './managementDepartment.controller';
import authGuard from '../../middlewares/authGuard';
import { ENUM_USER_ROLES } from '../../../enums/user';

const router = express.Router();

router.get('/', ManagementDepartmentController.getAllFromDB);
router.get('/:id', ManagementDepartmentController.getByIdFromDB);

router.post(
  '/',
  validateRequest(ManagementDepartmentValidation.createManagementDepartmentZodSchema),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  ManagementDepartmentController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(ManagementDepartmentValidation.updateManagementDepartmentZodSchema),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  ManagementDepartmentController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  ManagementDepartmentController.deleteByIdFromDB
);

export const ManagementDepartmentRoutes = router;
