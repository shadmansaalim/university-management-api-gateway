import { Request } from 'express';
import { FileUploadHelpers } from '../../../helpers/fileUploadHelpers';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage: ICloudinaryResponse = await FileUploadHelpers.uploadToCloudinary(file);
  console.log(uploadedImage);
};

export const UserService = {
  createStudent
};
