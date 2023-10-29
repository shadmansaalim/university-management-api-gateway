// Imports
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dkz0w2uvu',
  api_key: '942225349817694',
  api_secret: '5WDAaqni7694ZcpnHl0rAeq1v6g'
});

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Function to upload file to cloudinary
const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploadHelpers = {
  uploadToCloudinary,
  upload
};
