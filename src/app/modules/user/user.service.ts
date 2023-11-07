import { Request } from 'express';
import { FileUploadHelpers } from '../../../helpers/fileUploadHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request): Promise<IGenericResponse> => {
  const file = req?.file as IUploadFile;

  if (file) {
    const uploadedImage = await FileUploadHelpers.uploadToCloudinary(file);

    // Checking if image uploaded successfully
    if (uploadedImage) {
      // Setting profileImage in data
      req.body.student.profileImage = uploadedImage.secure_url;
    }
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

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req?.file as IUploadFile;

  if (file) {
    const uploadedProfileImage = await FileUploadHelpers.uploadToCloudinary(file);

    if (uploadedProfileImage) {
      req.body.faculty.profileImage = uploadedProfileImage.secure_url;
    }
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse: IGenericResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  const academicFacultyResponse: IGenericResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req?.file as IUploadFile;

  if (file) {
    const uploadedProfileImage = await FileUploadHelpers.uploadToCloudinary(file);

    if (uploadedProfileImage) {
      req.body.admin.profileImage = uploadedProfileImage.secure_url;
    }
  }

  const response: IGenericResponse = await AuthService.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = {
  createStudent,
  createFaculty,
  createAdmin
};
