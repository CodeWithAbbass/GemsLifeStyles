const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const connectToMongo = require("./db");
const cookieParser = require('cookie-parser')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
connectToMongo();

app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://gemlifestyles.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(express.static(path.join(__dirname, '/uploads')));


// Available Routes 
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/orders", require("./routes/orders"));

app.listen(PORT);



