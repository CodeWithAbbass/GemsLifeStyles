const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const fetchAdmin = async (req, res, next) => {

    const token = req.cookies.authToken;
    if (!token) {
        return res.status(401).send({ error: "Please Authenticate using a Valid Token" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Admin.findOne({ id: data.id, "tokens.token": token });
        if (!user) { throw new Error("User Not Found") };
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please Authenticate using a Valid Token" });
    }

}

module.exports = fetchAdmin;