import UserModel from "#Schemas/user-schema.js";

const userUpdateDataController = async (req, res) => {
    const {id} = req;
    const {name, surname} = req.body;

    const existingUserByID = await UserModel.findById(id).exec();
    if(!existingUserByID) return res.status(409).send({errors: ['No existe un usuario registrado con este id']});

    existingUserByID.name = name;
    existingUserByID.surname = surname;

    await existingUserByID.save();

    return res.status(400).send("Usuario modificado con exito.")
}

export default userUpdateDataController;