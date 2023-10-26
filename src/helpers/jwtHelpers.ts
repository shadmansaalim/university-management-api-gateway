// Imports
import httpStatus from 'http-status';
import { verify } from 'jsonwebtoken';
import config from '../config';
import ApiError from '../errors/ApiError';

// Function to verify jwt token
const verifyToken = (token: string) => {
  try {
    const isVerified = verify(token, config.jwt.secret);
    return isVerified as any;
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token');
  }
};

export const JwtHelpers = {
  verifyToken
};
