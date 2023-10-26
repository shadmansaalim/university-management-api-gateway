// Imports
import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.insertIntoDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAllFromDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getByIdFromDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const updateByIdIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.updateByIdIntoDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const deleteByIdIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.deleteByIdIntoDb(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const AcademicDepartmentController = {
  insertIntoDb,
  getAllFromDb,
  getByIdFromDb,
  updateByIdIntoDb,
  deleteByIdIntoDb
};
