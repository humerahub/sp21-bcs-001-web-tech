const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.get("/", (req, res) => {
    res.render('index', { title: "Home" });
    });

router.get("/create", (req, res) => {
    res.render('create', { title: "Create Post" });
    });

    router.get("/edit", (req, res) => {
        res.render('edit', { title: "Edit Post" });
        });





module.exports = router;