import userLoginController from "#Controllers/user-controllers/user-login-controller.js";
import userRegisterController from "#Controllers/user-controllers/user-register-controller.js";
import userLoginDTO from "#Dto/dto-user/user-login-dto.js";
import userRegisterDTO from "#Dto/dto-user/user-register-dto.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);

export default userRouter;