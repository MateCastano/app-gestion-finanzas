import deleteUserController from "#Controllers/user-controllers/user-delete-controller.js";
import userLoginController from "#Controllers/user-controllers/user-login-controller.js";
import userProfileController from "#Controllers/user-controllers/user-profile-controller.js";
import userRegisterController from "#Controllers/user-controllers/user-register-controller.js";
import userUpdateDataController from "#Controllers/user-controllers/user-update-data-controller.js";
import userUpdateEmailController from "#Controllers/user-controllers/user-update-email-controller.js";
import userUpdatePasswordController from "#Controllers/user-controllers/user-update-password-controller.js";
import userJWTDto from "#Dto/dto-user/jwt-dto.js";
import userLoginDTO from "#Dto/dto-user/user-login-dto.js";
import userRegisterDTO from "#Dto/dto-user/user-register-dto.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDto, userProfileController);
userRouter.post('/update-data', userJWTDto, userUpdateDataController);
userRouter.post('/update-email', userJWTDto, userUpdateEmailController);
userRouter.post('/update-password', userJWTDto, userUpdatePasswordController);
userRouter.delete('/user-delete', userJWTDto, deleteUserController);

export default userRouter;