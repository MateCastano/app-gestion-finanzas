import UserModel from "#Schemas/user-schema.js";
import bcrypt from "bcrypt";

const userUpdateEmailController = async (req, res) => {
    const {id} = req;
    const {password, email} = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if(!existingUserById) return res.status(401).send({errors: ['Usuario no autorizado.']});

    const checkPassword = await bcrypt.compare(password, existingUserById.password);
    if(!checkPassword) return res.status(409).send({errors: ['Credenciales incorrectas.']});

    existingUserById.email = email;

    await existingUserById.save();

    return res.status(400).send("Email actualizado con exito.")
}

export default userUpdateEmailController;