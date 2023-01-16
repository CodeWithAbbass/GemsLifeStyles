const mongoose = require('mongoose')
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    instructions: { type: String },
    method: { type: String },
    total_item: { type: String },
    total_price: { type: String },
    shipping_fee: { type: String },
    status: { type: String, default: "Ordered" },
    userInfo: { type: Array, required: true },
    products: { type: Array, required: true },
    date: { type: Date, default: Date.now }
});

const Orders = mongoose.model("orders", OrderSchema)
module.exports = Orders;