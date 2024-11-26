import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies.js';
import { amountDTOSchema, currencyDTOSchema, dateSchema, idDTOSchema, userIdDTOSchema } from './dto-types-payment.js';

const createDTOSchema = Type.Object({
    _id: idDTOSchema,
    date: dateSchema,
    amount: amountDTOSchema,
    currency: currencyDTOSchema,
    userid: userIdDTOSchema
},{
    additionalProperties: false,
    errorMessage:{
        additionalProperties:"El formato del objeto no es valido."
    }
})

const ajv = new Ajv({allErrors: true});

addFormats(ajv, ['uuid']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateSchema = ajv.compile(createDTOSchema);

const createPaymentDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if(!isDTOValid) return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});
    
    next();
}

export default createPaymentDTO;