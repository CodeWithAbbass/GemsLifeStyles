const Cart = require('../models/Cart');
const Orders = require('../models/Orders');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchAdmin = require('../middleware/fetchAdmin');
const fetchUser = require('../middleware/fetchUser');


// Endpoint. Get All Orders using: GET "/api/orders/getallorders". Login Require.
router.get('/getallorders', fetchAdmin, async (req, res) => {
    try {
        let success = false;
        if (req.user) {
            success = true;
            const orders = await Orders.find();
            res.json({ success, orders });
        }

    } catch (error) {
        console.error("in getAllOrders API", error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Get User Orders using: GET "/api/orders/getuserorder". Login Require.
router.get('/getuserorders', fetchUser, async (req, res) => {
    try {
        let success = true;
        const userOrder = await Orders.find({ userID: req.user.id })
        if (userOrder) {
            res.json({ success, userOrder });
        }
    } catch (error) {
        console.error("in getUserOrders API", error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Place Order using: POST "/api/orders/placeorder". Login Require.
router.post('/placeorder', fetchUser, async (req, res) => {
    try {
        let { instructions, userInfo, products, method, total_item, total_price, shipping_fee } = req.body;
        let success = false;
        const errors = validationResult(req);           // If there are errors, return Bad Request and the errors  
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const Order = await Orders.create({ userID: req.user.id, instructions, userInfo, products, method, total_item, total_price, shipping_fee });
        const clearItems = await Cart.findOneAndDelete({ userID: req.user.id })
        success = true;
        res.json({ success, Order });
    } catch (error) {
        console.error("in PlaceOrder API", error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Order Status using: PUT "/api/orders/orderstatus/:id".
router.put('/orderstatus/:id', async (req, res) => {
    try {
        let success = true;
        let Status = req.body;
        let OrderID = req.params.id;
        let Order = await Orders.findById(OrderID);

        Order = await Orders.findByIdAndUpdate(OrderID, { $set: Order.status = Status }, { new: true })
        success = true;
        res.json({ success, Order });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Endpoint. Delete Order using: DELETE "/api/orders/deleteorder/:id".
router.delete('/deleteorder/:id', async (req, res) => {
    try {
        let success = true;
        let OrderID = req.params.id;

        let Order = await Orders.findByIdAndDelete(OrderID);
        success = true;
        res.json({ success, Order });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router;


