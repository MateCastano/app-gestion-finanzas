import salt from "#Constants/satl.js";
import UserModel from "#Schemas/user-schema.js";
import { hash } from "bcrypt";

const userRegisterController = async (req, res) => {
    const {_id, name, surname, email, password} = req.body;

    const existingUserByID = await UserModel.findById(_id).exec();
    if(existingUserByID) return res.status(409).send({errors: ['Ya existe un usuario registrado con este id']});

    const existingUserByEmail = await UserModel.findOne({email}).exec();
    if(existingUserByEmail) return res.status(409).send({errors: ['Ya existe un usuario registrado con este email']});

    const hashedPassword = await hash(password, salt)
    const user = new UserModel({
        _id, name, surname, email, password: hashedPassword
    })

    await user.save();

    return res.status(400).send("Usuario registrado con exito.")
}

export default userRegisterController;