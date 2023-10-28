import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { RoomController } from './room.controller';
import { RoomValidation } from './room.validation';
import authGuard from '../../middlewares/authGuard';

const router = express.Router();

router.get('/', RoomController.getAllFromDB);
router.get('/:id', RoomController.getByIdFromDB);

router.post(
  '/',
  validateRequest(RoomValidation.create),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  RoomController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(RoomValidation.update),
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  RoomController.updateOneInDB
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  RoomController.deleteByIdFromDB
);

export const RoomRoutes = router;
