import { idDTOSchema, nameDTOSchema, surnameDTOSchema, emailDTOSchema, passwordDTOSchema } from './dto-types-user.js';
import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies.js';

const updateDataDTOSchema = Type.Object({
    name: nameDTOSchema,
    surname: surnameDTOSchema
},{
    additionalProperties: false,
    errorMessage:{
        additionalProperties:"El formato del objeto no es valido"
    }
})

const ajv = new Ajv({allErrors: true});

addErrors(ajv);

const validateSchema = ajv.compile(updateDataDTOSchema);

const updateDataDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if(!isDTOValid) return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});
    
    next();
}

export default updateDataDTO;
