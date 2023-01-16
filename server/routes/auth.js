const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Admin = require('../models/Admin');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const fetchAdmin = require('../middleware/fetchAdmin');
const upload = require('../middleware/upload');


// ****************************************************************
//                           USER CRUD
// ****************************************************************

// Route: 1. Create a User using: POST "/api/auth/createuser". No Login Require.
router.post('/signup', upload.single('avatar'), [
    body('fname', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Phone Number must be absolute 11 Numbers'),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad Request and the errors  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        let { email, fname, lname, address, city, state, phone, avatar, token } = req.body;
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ success, Error: "Sorry User Already Exist With This Email" })
        }
        if (req.body.cpassword !== req.body.password) {
            return res.status(400).json({ success, Error: "Password Confirmation Does Not Match Password." })
        }
        // Here We Hashing 
        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);
        const SecPass = await bcrypt.hash(req.body.password, salt);

        if (req.file) {
            // avatar = 'http://localhost:5000/' + req.file.filename; // For Localhost
            avatar = 'https://gemlifestylesserver.gemlifestyles.com/' + req.file.filename;
        }
        // Create a New User 
        user = await User.create({
            email, fname, lname, address, city, state, phone, avatar, password: SecPass, token // Hashing Password
        })
        const data = { user: { id: user.id } }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        user.tokens.push({ token: authToken });
        await user.save();
        res.cookie('authToken', authToken, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true, // For Localhost
            secure: true,  //it is applicable when we use https method
            domain: "gemlifestyles.com",
        });
        success = true;
        res.json({ success, message: "Account Created Successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route: 2. Authenticate a User using: POST "/api/auth/login". No Login Require.
router.post('/login', async (req, res) => {
    let success = true;

    // If there are errors, return Bad Request and the errors  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            success = false;
            return res.status(400).json({ success, error: "Please Fill Data With Correct Credentials" })
        }
        const user = await User.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Please Login Again With Correct Credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!user || !passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please Login Again With Correct Credentials" });
        }
        const data = { user: { id: user.id } }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        user.tokens.push({ token: authToken });
        await user.save();
        res.cookie('authToken', authToken, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
            secure: true,  //it is applicable when we use https method
            domain: "gemlifestyles.com",
        });

        success = true;
        res.json({ success, user, message: "Admin Login Successfully" });


    } catch (error) {
        success = false
        console.error(error.message);
        res.status(500).send(success, "Internal Server Error");
    }
});

// Route: 3. Logout Admin using: POST "/api/auth/adminlogout". Login Require.
router.post('/logout', fetchUser, async (req, res) => {
    let success = false;
    // If there are errors, return Bad Request and the errors  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let browserToken = req.token;
        let UserID = req.user.id;
        let user = await User.findById(req.user.id);
        let tokenIndex = user.tokens.findIndex(index => index.token === browserToken);
        let userToken = user.tokens[tokenIndex].token;

        user = await User.findByIdAndUpdate(UserID, { $pull: { "tokens": { "token": userToken } } }, { "multi": false });
        await user.save();
        res.clearCookie('authToken');
        success = true;
        res.status(200).send({ success, message: "User Logout Successfully" });


    } catch (error) {
        success = false
        console.error(error.message);
        res.status(500).send(success, "Internal Server Error");
    }
});

// Route: 3. Get LoggedIn User Details using: GET "/api/auth/getuser". Login Require.
router.get('/getuser', fetchUser, (req, res) => {
    try {
        const user = req.user;
        let success = true;
        res.json({ success, user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



// ****************************************************************
//                          ADMIN CRUD
// ****************************************************************


// Route: 1. Create a Admin using: POST "/api/auth/createadmin". No Login Require.
router.post('/adminsignup', upload.single('avatar'), [
    body('fname', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Phone Number must be absolute 11 Numbers'),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
    
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad Request and the errors  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        let { email, fname, lname, phone, avatar, token } = req.body;
        let admin = await Admin.findOne({ email })
        if (admin) {
            return res.status(400).json({ success, Error: "Sorry Admin Already Exist With This Email" })
        }
        if (req.body.cpassword !== req.body.password) {
            return res.status(400).json({ success, Error: "Password Confirmation Does Not Match Password." })
        }
        // Here We Hashing 
        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);
        const SecPass = await bcrypt.hash(req.body.password, salt);

        if (req.file) {
            // avatar = 'http://localhost:5000/' + req.file.filename; // For Localhost
            avatar = 'https://gemlifestylesserver.gemlifestyles.com/' + req.file.filename;
        }
        // Create a New User 
        admin = await Admin.create({
            email, fname, lname, phone, avatar, password: SecPass, token // Hashing Password
        })
        const data = { user: { id: admin.id } }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        await admin.save();
        res.cookie('authToken', authToken, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true, // For Localhost
            secure: true,  //it is applicable when we use https method
            domain: "gemlifestyles.com",
        });
        success = true;
        res.json({ success, admin, message: "Account Created Successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route: 2. Authenticate a Admin using: POST "/api/auth/adminlogin". No Login Require.
router.post('/adminlogin', async (req, res) => {
    let success = true;

    // If there are errors, return Bad Request and the errors  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            success = false;
            return res.status(400).json({ success, error: "Please Fill Data With Correct Credentials" })
        }
        const admin = await Admin.findOne({ email });
        if (!admin) {
            success = false;
            return res.status(400).json({ success, error: "Please Login Again With Correct Credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, admin.password);
        if (!admin || !passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please Login Again With Correct Credentials" });
        }
        const data = { user: { id: admin.id } }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        admin.tokens.push({ token: authToken });
        await admin.save();
        res.cookie('authToken', authToken, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
            secure: true,  //it is applicable when we use https method
            domain: "gemlifestyles.com",
        });
        success = true;
        res.json({ success, admin, message: "Admin Login Successfully" });


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Route: 3. Logout Admin using: POST "/api/auth/adminlogout". Login Require.
router.post('/adminlogout', fetchAdmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad Request and the errors  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let browserToken = req.token;
        let AdminID = req.user.id;
        let admin = await Admin.findById(req.user.id);
        let tokenIndex = admin.tokens.findIndex(index => index.token === browserToken);
        let adminToken = admin.tokens[tokenIndex].token;

        admin = await Admin.findByIdAndUpdate(AdminID, { $pull: { "tokens": { "token": adminToken } } }, { "multi": false });
        await admin.save();
        res.clearCookie('authToken');
        success = true;
        res.status(200).send({ success, message: "Admin Logout Successfully" });

    } catch (error) {
        success = false
        console.error(error.message);
        res.status(500).send(success, "Internal Server Error");
    }
});

// Route: 4. Get LoggedIn Admin Details using: GET "/api/auth/getadmin". Login Require.
router.get('/getadmin', fetchAdmin, (req, res) => {
    try {
        const user = req.user;
        let success = true;
        res.json({ success, user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;