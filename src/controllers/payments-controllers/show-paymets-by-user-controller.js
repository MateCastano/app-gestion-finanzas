import paymentRouter from "#Routes/payment-router.js";
import PaymentModel from "#Schemas/payment-schema.js";
import UserModel from "#Schemas/user-schema.js";
import { errors } from "jose";

const showPaymentsByUserController = async(req, res) =>{
    const userId = req.headers['id'];

    const existingUserId = await PaymentModel.findBy({userId}).exec();
    if(!existingUserId) return res.status(404).send('No se encuentran registros.');

    try{ 
        const payments = await PaymentModel.find({userId}).exec();
        
        if (payments.length === 0) {
            return res.status(404).send({ message: "No se encontraron pagos para este usuario." });
        }

        return res.status(200).send({payments});
    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error al buscar los pagos." });
    }
}

export default showPaymentsByUserController;