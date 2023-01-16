const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    email: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String },
    phone: { type: String },
    avatar: { type: String },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    tokens: [
        {
            token: { type: String, default: "undefined" }
        }
    ],
});

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin; 