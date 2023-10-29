import { Request } from 'express';
import { FileUploadHelpers } from '../../../helpers/fileUploadHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelpers.uploadToCloudinary(file);

  // Checking if image uploaded successfully
  if (uploadedImage) {
    // Setting profileImage in data
    req.body.profileImage = uploadedImage.secure_url;
  }

  // Destructuring
  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  // Finding academic department
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  // Replacing core service postgresql database academic department id with auth service mongodb database academic department id as we will save this in mongodb auth service database
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  // Finding academic faculty
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  // Replacing core service postgresql database academic faculty id with auth service mongodb database academic faculty id as we will save this in mongodb auth service database
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  // Finding academic semester
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );

  // Replacing core service postgresql database academic semester id with auth service mongodb database academic semester id as we will save this in mongodb auth service database
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  // Creating student
  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = {
  createStudent
};
