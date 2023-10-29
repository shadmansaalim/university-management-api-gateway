import express from 'express';
import { AuthenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import authGuard from '../../middlewares/authGuard';
import { ENUM_USER_ROLES } from '../../../enums/user';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthenticationController.loginUser
);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthenticationController.refreshToken
);

router.post(
  '/change-password',
  authGuard(
    ENUM_USER_ROLES.SUPER_ADMIN,
    ENUM_USER_ROLES.ADMIN,
    ENUM_USER_ROLES.FACULTY,
    ENUM_USER_ROLES.STUDENT
  ),
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthenticationController.changePassword
);

export const AuthRoutes = router;
