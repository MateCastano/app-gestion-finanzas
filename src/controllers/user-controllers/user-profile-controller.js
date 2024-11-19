import salt from "#Constants/satl.js";
import UserModel from "#Schemas/user-schema.js";
import { compare, hash } from "bcrypt";
import { SignJWT } from "jose";

const userProfileController = async (req, res) => {
    const{id} = req;

    const existingUserByID = await UserModel.findById(id).exec();
    if(!existingUserByID) return res.status(409).send({errors: ['No existe un usuario registrado con este id']});

    const {email, name, surname} = existingUserByID;

    return res.status(400).send({email, name, surname})
}

export default userProfileController;