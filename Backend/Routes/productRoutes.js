const express = require("express");
const { authMiddleware, adminMiddleware } = require("../Middleware/authMiddleware");
const Product = require('../Models/product');

const router = express.Router();

//public routes for getting all products
router.get('/',async (req,res) => {
    try {
        const product = await Product.find();
        res.json(product);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
    
});

///protected routes to create products

router.post('/add', authMiddleware,adminMiddleware, async (req, res) => {
    const { title, price, description, image } = req.body;

    try {
        const newProduct = new Product({ title, price, description, image, user: req.user.id });
        const product = await newProduct.save();
        res.status(201).json(product);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//protected route to update product

router.put('/update/:id', authMiddleware,adminMiddleware, async (req, res) => {
    const { title, price, description, image } = req.body;
    const updatedFields = { title, price, description, image };

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//protected route to delete product

router.delete('/delete/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;