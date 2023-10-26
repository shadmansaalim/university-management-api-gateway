// Imports
import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

// Express router
const router = express.Router();

router.post('/', AcademicSemesterController.insertIntoDb);

export const AcademicSemesterRoutes = router;
