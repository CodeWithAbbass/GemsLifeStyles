const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Products = require('../models/Products');
const upload = require('../middleware/upload');
const fetchAdmin = require('../middleware/fetchAdmin');

// Endpoint. FetchAllProducts using: GET "/api/products/fetchallproducts". No Login Require.
router.get('/fetchallproducts', async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. GET Single Product using: GET "/api/products/getproduct/:id" 
router.get('/getproduct/:id', async (req, res, next) => {
    try {
        let product = await Products.findById(req.params.id);
        res.json(product);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Add a Notes using: POST "/api/products/addnote". Login Require.
router.post('/addproduct', fetchAdmin, upload.array('image', 12), [
    body('name', 'Product name must be atleast 3 character').isLength({ min: 3 }),
    body('stock', 'Product stock must be atleast 3 items'),
    body('image', 'Atleast 2 Product Images is Required And Only jpeg, jpg or png file supported'),
    body('description', 'Product name must be atleast 5 character').isLength({ min: 5 }),
], async (req, res, next) => {
    try {
        let success = false;
        const Error = validationResult(req);           // If there are errors, return Bad Request and the errors  
        if (!Error.isEmpty()) {
            return res.status(400).json({ Errors: Error.array() });
        }
        if (req.body.stock < 3) {
            return res.status(400).json({ success, Error: 'Product stock must be atleast 3 items.' })
        }
        let { name, tag, feature, brand, category, color, discount, price, stock, description, Meta1, Meta2, Meta3, Meta4, image } = req.body;   // Destructuring.
        let productMeta;
        const product = new Products({                         // Create New Products. new keyword create A new empty object.
            name, tag, feature, brand, category, color, discount, price, stock, description, productMeta, image,
        })

        if (req.body.Meta1) {
            let Meta = [];
            Meta.push(Meta1);
            Meta.push(Meta2);
            Meta.push(Meta3);
            Meta.push(Meta4);
            product.productMeta = Meta;
        }

        if (req.files) {
            let path = [];
            req.files.forEach(function (files, index, arr) {
                path.push('http://localhost:5000/' + files.filename);
                console.log(files.filename);
            })
            product.image = path;
        }

        success = true;
        const savedProduct = await product.save();            // .save() method Save New Created Product.
        res.json({ success, savedProduct });

    } catch (Error) {
        console.error(Error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Update an Existing Products using: PUT "/api/products/updateproduct/:id" Login Require. 
router.put('/updateproduct/:id',
    upload.array('image'), [
    body('name', 'Product name must be atleast 3 character').isLength({ min: 3 }),
    body('stock', 'Product stock must be atleast 3 items'),
    body('image', 'Atleast 2 Product Images is Required And Only jpeg, jpg or png file supported'),
    body('description', 'Product name must be atleast 5 character').isLength({ min: 5 }),
], async (req, res, next) => {
    try {

        const Error = validationResult(req);           // If there are errors, return Bad Request and the errors  
        if (!Error.isEmpty()) {
            return res.status(400).json({ Errors: Error.array() });
        }
        if (req.body.stock < 3) {
            return res.status(400).json({ success, Error: 'Product stock must be atleast 3 items.' })
        }
        let { name, tag, feature, brand, category, color, discount, price, stock, description, Meta1, Meta2, Meta3, Meta4, image } = req.body;   // Destructuring.
        let productMeta;
        const NewProduct = {                         // Create New Products. new keyword create A new empty object.
            name, tag, feature, brand, category, color, discount, price, stock, description, productMeta, image,
        }
        // Find the Products to be Updated and Update it.
        let product = await Products.findById(req.params.id);
        if (!product) { return res.status(404).send("Not Found") }
        let oldProduct = Products.findById(req.params.id);
        NewProduct.image = oldProduct.image;
        if (req.body.Meta1) {
            let Meta = [];
            Meta.push(Meta1);
            Meta.push(Meta2);
            Meta.push(Meta3);
            Meta.push(Meta4);
            NewProduct.productMeta = Meta;
        }
        product = await Products.findByIdAndUpdate(req.params.id, { $set: NewProduct }, { new: true })
        success = true;
        res.json({ success, product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint. Delete Products using: DELETE "/api/products/deletenote/:id'". Login Require.
router.delete('/deleteproduct/:id', async (req, res, next) => {
    try {
        let success = false;
        // Find the Products to be Deleted and Delete it.
        let product = await Products.findById(req.params.id);
        if (!product) { return success, res.status(404).send("Not Found") }
        product = await Products.findByIdAndDelete(req.params.id)
        success = true;
        res.json({ success, product });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;