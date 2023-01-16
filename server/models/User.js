const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    email: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    phone: { type: String },
    avatar: { type: String },
    password: { type: String, required: true },
    tokens: [
        {
            token: { type: String, default: "undefined" }
        }
    ],
    date: { type: Date, default: Date.now },
});
const User = mongoose.model("user", UserSchema);

module.exports = User;
