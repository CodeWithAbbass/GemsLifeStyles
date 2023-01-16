const Cart = require('../models/Cart');
const Products = require('../models/Products');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');


// Endpoint. FetchAllProducts using: GET "/api/products/fetchallproducts". Login Require.
router.get('/getcartitems', fetchUser, async (req, res) => {
    try {
        let success = true;
        const user = await Cart.find({ userID: req.user.id })
        if (user[0]) {
            const userData = user[0];
            res.json({ success, userData });
        }
    } catch (error) {
        console.error("in getCartItems API", error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Add to Cart using: POST "/api/cart/addtocart". Login Require.
router.post('/addtocart/:id', fetchUser, async (req, res) => {
    try {
        let success = false;
        const errors = validationResult(req);           // If there are errors, return Bad Request and the errors  
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let product = await Products.findById(req.params.id);
        if (!product) { return res.status(404).send(success, "Not Found") }
        let userID = await req.user.id;
        let user = await Cart.findOne({ userID });
        let productID = await product.id;

        if (user) {
            let itemIndex = user.products.findIndex(p => p.productID == productID);
            if (itemIndex > -1) {
                //product exists in the cart, update the quantity
                let CartItem = user.products[itemIndex];
                CartItem.quantity = +CartItem.quantity + 1;
                if (CartItem.quantity >= CartItem.stock) {
                    CartItem.quantity = CartItem.stock;
                }
                user.products[itemIndex] = CartItem;
                await user.save();
                success = true;
                res.json({ success, user });
            }
            else {
                //product does not exists in cart, add new item
                let NewItem;
                let { name, color, discount, price, stock, description, image, } = product;
                NewItem = { productID, name, color, discount, price, stock, description, image, }
                user.products.push(NewItem);
                await user.save();
                success = true;
                res.json({ success, user });
            }

        }
        else {
            let NewItem;
            let { name, color, discount, price, stock, description, image, } = product;
            NewItem = { productID, name, color, discount, price, stock, description, image, }
            let cartItem = await Cart.create({ userID })
            cartItem.products.push(NewItem);
            await cartItem.save();
            success = true;
            res.json({ success, cartItem });
        }

    } catch (error) {
        console.error("in AddToCart API", error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Increment an Existing Cart Item Quantity using: PUT "/api/cart//incrementcartitem/:id". Login Require.
router.put('/incrementcartitem/:id', fetchUser, async (req, res) => {
    try {
        let success = false;
        // Find the Cart to be Updated and Update it.
        let productID = req.params.id;
        let userID = await req.user.id;
        let user = await Cart.findOne({ userID });
        let itemIndex = user.products.findIndex(p => p.productID == productID);

        let CartItem = user.products[itemIndex];

        CartItem.quantity = +CartItem.quantity + 1;
        if (CartItem.quantity >= +CartItem.stock) {
            CartItem.quantity = +CartItem.stock;
        }

        user.products[itemIndex] = CartItem;
        await user.save();
        success = true;
        res.json({ success, user });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Decrement an Existing Cart Item Quantity using: PUT "/api/cart//decrementcartitem/:id". Login Require.
router.put('/decrementcartitem/:id', fetchUser, async (req, res) => {
    try {
        let success = false;
        // Find the Cart to be Updated and Update it.
        let productID = req.params.id;
        let userID = await req.user.id;
        let user = await Cart.findOne({ userID });
        let itemIndex = user.products.findIndex(p => p.productID == productID);

        let CartItem = user.products[itemIndex];

        CartItem.quantity = +CartItem.quantity - 1;
        if (CartItem.quantity <= 1) {
            CartItem.quantity = 1;
        }

        user.products[itemIndex] = CartItem;
        await user.save();
        success = true;
        res.json({ success, user });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Delete Cart Item using: DELETE "/api/cart/deletecartitem/:id'". Login Require.
router.delete('/deletecartitem/:id', fetchUser, async (req, res) => {
    try {
        let success = true;
        let userID = await req.user.id;
        let productID = req.params.id;
        let user = await Cart.findOne({ userID });
        user = await Cart.findOneAndUpdate({ "userID": userID }, { $pull: { "products": { "productID": productID } } }, { "multi": false })
        await user.save();
        success = true;
        res.json({ success, user });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Endpoint. Clear Cart using: DELETE "/api/cart/clearcart". Login Require.
router.delete('/clearcart', fetchUser, async (req, res) => {
    try {
        let clearItems = await Cart.findOneAndDelete({ userID: req.user.id })
        let success = true;
        res.json({ success, clearItems });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;


