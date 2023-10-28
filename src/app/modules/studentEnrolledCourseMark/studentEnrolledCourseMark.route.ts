import express from 'express';
import { ENUM_USER_ROLES } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validation';

const router = express.Router();

router.get(
  '/',
  authGuard(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.FACULTY),
  StudentEnrolledCourseMarkController.getAllFromDB
);
router.get(
  '/my-marks',
  authGuard(ENUM_USER_ROLES.STUDENT),
  StudentEnrolledCourseMarkController.getStudentMarks
);

router.post(
  '/update-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  authGuard(ENUM_USER_ROLES.FACULTY),
  StudentEnrolledCourseMarkController.updateMarks
);

router.post(
  '/evaluate-final-gpa',
  validateRequest(StudentEnrolledCourseMarkValidation.evaluateStudentFinalGpa),
  authGuard(ENUM_USER_ROLES.FACULTY),
  StudentEnrolledCourseMarkController.evaluateStudentFinalGpa
);

export const StudentEnrolledCourseMarkRoutes = router;
