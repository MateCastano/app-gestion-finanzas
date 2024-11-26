import userJWTDTO from "#Dto/dto-user/jwt-dto.js";
import { Router } from "express";

const paymentRouter = Router();

paymentRouter.post('/create-payment', userJWTDTO);

export default paymentRouter;
