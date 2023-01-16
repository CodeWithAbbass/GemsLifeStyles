const mongoose = require('mongoose')
const { Schema } = mongoose;
const CartSchema = new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    products: [
        {
            productID: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
            name: { type: String },
            description: { type: String },
            quantity: { type: String, default: "1" },
            color: { type: String },
            discount: { type: String },
            price: { type: String },
            stock: { type: String },
            image: { type: Array },
            date: { type: Date, default: Date.now }
        }
    ],
});

const Cart = mongoose.model("cart", CartSchema)
module.exports = Cart;