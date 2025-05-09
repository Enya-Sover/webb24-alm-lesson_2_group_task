const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/product_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);
const categorysRouter = require("./routes/category");
app.use("/api/category", categorysRouter);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
