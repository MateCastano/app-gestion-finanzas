import userRegisterController from "#Controllers/user-controllers/user-register-controller.js";
import userRegisterDTO from "#Dto/dto-user/user-register-dto.js";
import { Router } from "express";

const userRouter = Router();


userRouter.post('/register', userRegisterDTO, userRegisterController);

export default userRouter;