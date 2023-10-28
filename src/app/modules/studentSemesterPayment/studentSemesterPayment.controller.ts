import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentSemesterPaymentService } from './studentSemesterPayment.service';

const getAllStudentSemesterPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.getAllStudentSemesterPayments(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemesterPaymentController = {
  getAllStudentSemesterPayments
};
