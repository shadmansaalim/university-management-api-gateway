// Imports
import { CoreService } from '../../../shared/axios';
import { Request } from 'express';

const insertIntoDb = async (req: Request) => {
  const response = await CoreService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDb
};
