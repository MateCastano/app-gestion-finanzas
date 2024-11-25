import paymentRouter from "#Routes/payment-router.js";
import userRouter from "#Routes/user-router.js";
import express from "express";

const expressApp = new express();

//Middlewares
expressApp.use(express.json());

//Routes
expressApp.use('/user', userRouter);
expressApp.use('/payment', paymentRouter);

export default expressApp;