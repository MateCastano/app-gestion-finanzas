import { Type } from '@sinclair/typebox';
import addFormats from 'ajv-formats';
import Ajv from 'ajv';

// Crear una instancia de Ajv
const ajv = new Ajv({ allErrors: true });

// Registrar formatos adicionales
addFormats(ajv).addKeyword('kind').addKeyword('modifier');

// Validación para ID (UUID)
export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: "El tipo de _id no es válido, debe ser un string.",
        format: "El formato de _id no es válido, debe ser un UUID (uuid4).",
    },
});

// Validación para fecha
export const dateDTOSchema = Type.String({
    minLength: 10,
    maxLength: 10,
    errorMessage:{
        minLength: "date debe tener 10 caracteres de longitud.",
        maxLength: "date debe tener 10 caracteres de longitud."
    },
}); 

// Validación para cantidad (monto)
export const amountDTOSchema = Type.Number({
    minimum: 0.01,
    maximum: 10000000,
    errorMessage: {
        type: "El tipo de amount debe ser un número.",
        minimum: "El monto debe ser al menos 0.01.",
        maximum: "El monto no puede exceder 10,000,000.",
    },
});

// Validación para moneda (ISO 4217)
export const currencyDTOSchema = Type.String({
    minLength: 3,
    maxLength: 3,
    errorMessage: {
        minLength: "Currency debe tener exactamente 3 caracteres.",
        maxLength: "Currency debe tener exactamente 3 caracteres.",
    },
});

// Validación para userId (UUID)
export const userIdDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: "El tipo de userId no es válido, debe ser un string.",
        format: "El formato de userId no es válido, debe ser un UUID (uuid4).",
    },
});
