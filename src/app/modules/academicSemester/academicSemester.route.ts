// Imports
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

// Express router
const router = express.Router();

router.get('/:id', AcademicSemesterController.getByIdFromDb);
router.get('/', AcademicSemesterController.getAllFromDb);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDb
);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateByIdIntoDb
);
router.delete('/:id', AcademicSemesterController.deleteByIdIntoDb);

export const AcademicSemesterRoutes = router;
