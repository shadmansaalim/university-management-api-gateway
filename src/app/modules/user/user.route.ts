import express, { NextFunction, Request, Response } from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import { UserController } from './user.controller';
import { FileUploadHelpers } from '../../../helpers/fileUploadHelpers';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  FileUploadHelpers.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

export const UserRoutes = router;
