import {Type} from '@sinclair/typebox';

export const idDTOSchema = Type.String({
        format: 'uuid',
        errorMessage:{
            type: "El tipo de _id no es valido debe ser un string.",
            format: "El formato de _id  no es valido deber ser un uuid4",
        },
});
export const dateSchema = Type.Object({
    date: Type.String({
        format: 'date-time',
        errorMessage: {
            type: "El tipo debe ser un string.",
            format: "El formato no es válido. Use un formato ISO 8601 como 'YYYY-MM-DDTHH:mm:ssZ'.",
        },
    }),
});
export const amountDTOSchema = Type.Number({
    minimum: 0.01,
    maximum: 10000000,
    errorMessage:{
        type: "El tipo de amount debe ser un numero.",
        minLength: "surname debe tener como minimo 4 caracteres de longitud.",
        maxLength: "surname debe tener como maximo 50 caracteres de longitud."
    },
});
export const currencyDTOSchema = Type.String({
    minLength: 3,
    maxLength: 3,
    errorMessage:{
        minLength: "currency debe tener como 3 caracteres de longitud.",
        maxLength: "currency debe tener como 3 caracteres de longitud."
    },
});
export const userIdDTOSchema = Type.String({
    format: 'uuid',
    errorMessage:{
        type: "El tipo de userId no es valido debe ser un string.",
        format: "El formato de userId  no es valido deber ser un uuid4",
    },
});
