// Imports
import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicSemesterService } from './academicSemester.service';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getByIdFromDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  insertIntoDb,
  getAllFromDb,
  getByIdFromDb
};
