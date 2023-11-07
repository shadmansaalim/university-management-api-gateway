import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);

    // Separating refreshToken from result data
    const { refreshToken, ...others } = result.data;

    // Set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result.data.refreshToken, cookieOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully.',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.refreshToken(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Refresh token generated successfully.',
      data: result.data
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.changePassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser,
  refreshToken,
  changePassword
};
