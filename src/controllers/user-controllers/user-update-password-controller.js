import salt from "#Constants/satl.js";
import UserModel from "#Schemas/user-schema.js";
import bcrypt, { hash } from "bcrypt";

const userUpdatePasswordController = async (req, res) => {
    const {id} = req;
    const {oldPassword, newPassword} = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if(!existingUserById) return res.status(401).send({errors: ['Usuario no autorizado.']});

    const checkPassword = await bcrypt.compare(oldPassword, existingUserById.password);
    if(!checkPassword) return res.status(409).send({errors: ['Credenciales incorrectas.']});

    const hashedPassword = await hash(newPassword, salt)

    existingUserById.password = hashedPassword;

    await existingUserById.save();

    return res.status(400).send("Password actualizada con exito.")
}

export default userUpdatePasswordController;