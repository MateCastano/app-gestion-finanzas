import paymentRouter from "#Routes/payment-router.js";
import PaymentModel from "#Schemas/payment-schema.js";
import UserModel from "#Schemas/user-schema.js";
import { errors } from "jose";

const showPaymentsController = async (req, res) => {
    try {
        const userId = req.headers['id'];

        console.log("Header recibido (id):", userId);

        if (!userId) {
            return res.status(400).send({ message: "El ID del usuario no fue proporcionado." });
        }

        const payments = await PaymentModel.find({ userId }).exec();

        if (!payments || payments.length === 0) {
            return res.status(404).send({ message: "No se encontraron pagos para este usuario." });
        }

        return res.status(200).send({ payments });
    } catch (error) {
        return res.status(500).send({ error: "Ocurrió un error al buscar los pagos." });
    }
};

export default showPaymentsController;