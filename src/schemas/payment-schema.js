import mongoose, {  } from "mongoose";

const { Schema, model } = mongoose;

const payementSchema = new Schema({
    _id: {type: String, _id: false},
    date: {type: Date, require: true},
    amount: {type: Number, require: true},
    currency: {type: String, require: true},
    userId: {type: String, require: true}
});

const PaymentModel = model("Payment", payementSchema);

export default PaymentModel;