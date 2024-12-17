import showPaymentsController from "#Controllers/payments-controllers/payment-show-by-user-controller.js";
import createPaymentController from "#Controllers/payments-controllers/payment-create-controller.js";
import createPaymentDTO from "#Dto/dto-payments/payment-create-dto.js";
import { Router } from "express";
import userJWTDTO from "#Dto/dto-user/jwt-dto.js";
import paymentUpdateDataDTO from "#Dto/dto-payments/payment-update-data-dto.js";
import paymentUpdateDataController from "#Controllers/payments-controllers/payment-update-data-controller.js";

const paymentRouter = Router();

paymentRouter.post('/create-payment', userJWTDTO, createPaymentDTO, createPaymentController);
paymentRouter.get('/show-payment', userJWTDTO, showPaymentsController);
paymentRouter.post('/update-data', userJWTDTO, paymentUpdateDataDTO, paymentUpdateDataController);

export default paymentRouter;
