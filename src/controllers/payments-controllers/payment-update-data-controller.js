import paymentRouter from "#Routes/payment-router.js";
import PaymentModel from "#Schemas/payment-schema.js";
import UserModel from "#Schemas/user-schema.js";
import { errors } from "jose";

const paymentUpdateDataController = async(req, res) =>{
    const idpayment = req.headers['idpayment'];
    const iduser = req.headers['id'];
    const{date, amount, currency} = req.body;

    const existingPaymentById = await PaymentModel.findOne({ _id: idpayment }).exec();
    if(!existingPaymentById) return res.status(409).send({errors:['No existe un pago con este id.']});

    if(existingPaymentById.userId != iduser) return res.status(409).send({errors:['Credenciales incorrectas.']})

    existingPaymentById.date = date;
    existingPaymentById.amount = amount;
    existingPaymentById.currency = currency;

    await existingPaymentById.save();
    
    return res.status(200).send("Transaccion actualizada con exito.");
}

export default paymentUpdateDataController;