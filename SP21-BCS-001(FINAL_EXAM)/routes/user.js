const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signup", async (req, res) => {
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    try {
        await user.save();
        req.session.message = {
            type: "success",
            message: "Signup successful"
        };
        res.redirect("/dashboard");
    } catch (err) {
        res.json({ message: err.message, type: "danger" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.json({ message: "Invalid email ", type: "danger" });
      }
  
      // Compare plain-text passwords (not recommended for production)
      if (password !== user.password) {
        return res.json({ message: "Invalid  password", type: "danger" });
      }
  
      req.session.user = user;
      req.session.message = {
        type: "success",
        message: "Login successful",
      };
      res.redirect("/dashboard");
    } catch (err) {
      res.json({ message: err.message, type: "danger" });
    }
  });
  

module.exports = router;