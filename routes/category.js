const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
const Category = require("../models/Category"); 

//add categroy
router.post("/add-category", async (req, res) => {
    try {
        const {name, description} = req.body;

        const category = new Category({ name, description });
        await category.save();
  
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router; 