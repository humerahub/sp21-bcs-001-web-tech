// routes/product.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add a new product (POST endpoint)
router.post("/create", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update or create a product (PUT endpoint)
router.put("/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a product (DELETE endpoint)
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product has been deleted", deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get product details (GET endpoint)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  const { page = 1, perPage = 3, search } = req.query;

  try {
    const searchFilter = search
      ? { name: { $regex: search, $options: "i" } }
      : {};

    const products = await Product.find(searchFilter)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
