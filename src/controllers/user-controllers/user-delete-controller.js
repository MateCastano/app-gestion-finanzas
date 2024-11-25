import UserModel from "#Schemas/user-schema.js";
import bcrypt from "bcrypt";

const deleteUserController = async (req, res) => {
    const {id} = req;
    const {password} = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if(!existingUserById) return res.status(401).send({errors: ['Usuario no autorizado.']});

    const checkPassword = await bcrypt.compare(password, existingUserById.password);
    if(!checkPassword) return res.status(409).send({errors: ['Credenciales incorrectas.']});

    await existingUserById.deleteOne();

    return res.send("Usuario eliminado con exito.")
}

export default deleteUserController;