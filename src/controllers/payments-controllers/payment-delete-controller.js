import PaymentModel from "#Schemas/payment-schema.js";
import UserModel from "#Schemas/user-schema.js";
import bcrypt from "bcrypt";

const paymentDeleteController = async (req, res) => {
    const {idpayment} = req;

    const existingPaymentById = await PaymentModel.findById(idpayment).exec();
    if(!existingUserById) return res.status(401).send({errors: ['Pago no registrado.']});

    await existingPaymentById.deleteOne();

    return res.send("Pago eliminado con exito.")
}

export default paymentDeleteController;