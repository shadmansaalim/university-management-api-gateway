import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';

const router = express.Router();

router.get('/', AdminController.getAllFromDB);
router.get('/:id', AdminController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  AdminController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  AdminController.deleteByIdFromDB
);

export const AdminRoutes = router;
