import showPaymentsController from "#Controllers/payments-controllers/show-paymets-by-user-controller.js";
import createPaymentController from "#Controllers/payments-controllers/payment-create-controller.js";
import createPaymentDTO from "#Dto/dto-payments/payment-create-dto.js";
import userJWTDTO from "#Dto/dto-user/jwt-dto.js";
import { Router } from "express";

const paymentRouter = Router();

paymentRouter.post('/create-payment', userJWTDTO, createPaymentDTO, createPaymentController);
paymentRouter.get('/show-payment', userJWTDTO, showPaymentsController);

export default paymentRouter;
