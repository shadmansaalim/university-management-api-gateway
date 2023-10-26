// Imports
import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

// Express router
const router = express.Router();

router.get('/:id', AcademicSemesterController.getByIdFromDb);
router.get('/', AcademicSemesterController.getAllFromDb);
router.post('/', AcademicSemesterController.insertIntoDb);

export const AcademicSemesterRoutes = router;
