import mongoose, {  } from "mongoose";

const { Schema, model } = mongoose;

const payementSchema = new Schema({
    _id: {type: String, _id: false},
    date: {type: date, require: true},
    amount: {type: Number, require: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const PaymentModel = model("Payment", payementSchema);

export default PaymentModel;