import userRouter from "#Routes/user-router.js";
import express from "express";

const expressApp = new express();

//Middlewares
expressApp.use(express.json());

//Routes
expressApp.use('/user', userRouter);

export default expressApp;