import userLoginController from "#Controllers/user-controllers/user-login-controller.js";
import userProfileController from "#Controllers/user-controllers/user-profile-controller.js";
import userRegisterController from "#Controllers/user-controllers/user-register-controller.js";
import userJWTDto from "#Dto/dto-user/jwt-dto.js";
import userLoginDTO from "#Dto/dto-user/user-login-dto.js";
import userRegisterDTO from "#Dto/dto-user/user-register-dto.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDto, userProfileController);

export default userRouter;