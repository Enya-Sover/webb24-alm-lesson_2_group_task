const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
const Category = require("../models/Category"); 

//add categroy
router.post("/add-category", async (req, res) => {
    try {
        const categoryName = req.body.category.toLowerCase().trim(); 
  
        const existingCategory = await Category.findOne({ category: categoryName });
        
        if (existingCategory) {
          return res.status(400).json({ error: "Category already exists" });
        }
  
        const category = new Category({ category: categoryName });
        await category.save();
  
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router; 