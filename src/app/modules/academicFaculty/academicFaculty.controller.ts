// Imports
import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertIntoDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFromDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getByIdFromDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const updateByIdIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateByIdIntoDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const deleteByIdIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteByIdIntoDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const AcademicFacultyController = {
  insertIntoDb,
  getAllFromDb,
  getByIdFromDb,
  updateByIdIntoDb,
  deleteByIdIntoDb
};
