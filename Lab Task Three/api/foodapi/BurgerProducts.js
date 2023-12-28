const express = require("express");
const router = express.Router();
const Products = require("../models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/FoodAPI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Check for database connection errors
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// CREATE
router.post("/create", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT DETAILS
router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCTS
router.get("/", async (req, res) => {
  const query = req.query;
  try {
    const searchFilter = {
      name: { $regex: query.search, $options: "i" },
    };
    const products = await Products.find(query.search ? searchFilter : null);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER PRODUCTS
router.get("/user/:userId", async (req, res) => {
  try {
    const products = await Products.find({ userId: req.params.userId });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
