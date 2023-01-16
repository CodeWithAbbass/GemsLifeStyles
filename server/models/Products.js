const mongoose = require('mongoose')
const { Schema } = mongoose;
const ProductsSchema = new Schema({
    name: { type: String, required: true },
    tag: { type: String, required: true, default: "Others" },
    feature: { type: String, default: "No" },
    brand: { type: String, required: true },
    category: { type: String, required: true, default: "Others" },
    color: { type: String, required: true },
    discount: { type: String, required: true },
    price: { type: String, required: true },
    stock: { type: String, required: true },
    description: { type: String, required: true },
    productMeta: { type: Array, },
    image: { type: Array },
    date: { type: Date, default: Date.now }
});

const Products = mongoose.model("products", ProductsSchema)
module.exports = Products;