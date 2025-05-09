
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
    try {
        const { name, price, description } = req.query;
        const products = await Product.find();
        let filteredProducts = products;
        if (name) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(name.toLowerCase())
            );
        }
        if (price) {
            filteredProducts = filteredProducts.filter(product =>
                product.price === Number(price)
            );
        }
        if (description) {
            filteredProducts = filteredProducts.filter(product =>
                product.description.toLowerCase().includes(description.toLowerCase())
            );
        }
        if (!name && !price && !description) {
            return res.status(400).json({ message: "No query parameters were provided" });
        }

        res.status(200).json(filteredProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});



module.exports = router;