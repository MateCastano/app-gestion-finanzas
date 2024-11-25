import { idDTOSchema, nameDTOSchema, surnameDTOSchema, emailDTOSchema, passwordDTOSchema } from './dto-types-user.js';
import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies.js';

const updatePasswordDTOSchema = Type.Object({
    oldPasword: passwordDTOSchema,
    newPassword: passwordDTOSchema
},{
    additionalProperties: false,
    errorMessage:{
        additionalProperties:"El formato del objeto no es valido"
    }
})

const ajv = new Ajv({allErrors: true});
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addFormats(ajv, ['email', 'uuid']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateSchema = ajv.compile(updatePasswordDTOSchema);

const updatePasswordlDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if(!isDTOValid) return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});
    
    next();
}

export default updatePasswordlDTO;
