import paymentRouter from "#Routes/payment-router.js";
import PaymentModel from "#Schemas/payment-schema.js";
import UserModel from "#Schemas/user-schema.js";
import { errors } from "jose";

const createPaymentController = async(req, res) =>{
    const{id} = req.headers;
    const{_id, date, amount, currency} = req.body;

    const existingPaymentById = await PaymentModel.findById(_id).exec();
    if(existingPaymentById) return res.status(409).send({errors:['Ya existe un pago con este id.']});
    
    const existingUserByID = await UserModel.findById(id).exec();
    if(!existingUserByID) return res.status(409).send({errors: ['Credenciales incorrectas.']});

    const payment = new PaymentModel({
        _id, date, amount, currency, userId:id
    });

    await payment.save();
    
    return res.status(200).send("Transaccion registrada con exito.");
}

export default createPaymentController;