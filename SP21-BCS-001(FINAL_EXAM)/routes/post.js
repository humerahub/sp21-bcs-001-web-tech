const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/display", async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    // Render the display page with the fetched posts
    res.render("display", { title: "Display", posts });
  } catch (error) {
    // Handle errors, e.g., log them and render an error page
    console.error(error);
    res.status(500).render("error", { error: "Internal Server Error" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    // res.status(200).json(savedPost)
    res.redirect("/");
  } catch (err) {
    res.status(200).json(err);
  }
});

// router.put('/:id', async (req, res) => {
//     try{

//         const updatePost = await Post.findByIdAndUpdate(req.params.id,{
//             $set:req.body
//         },{new:true})
//         res.status(200).json(updatePost);
//     }
//     catch(error){
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' }); // Generic error response
//     }
// }
// );

router.post("/update/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlinkSync("./uploads/" + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }

    const result = await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: new_image,
    });

    if (!result) {
      return res.status(404).send("User not found");
    }

    req.session.message = {
      type: "success",
      message: "User Updated Successfully",
    };
    res.redirect("/");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted");
    res.redirect("/display");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" }); // Generic error response
  }
});

// router.get('/:id',async (req, res) => {
//     try{
//         const w_post = await Post.findById(req.params.id)
//         res.status(200).json(w_post);
//     }
//     catch(error){
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' }); // Generic error response
//     }
// }
// );

// router.get('/', async (req, res) => {
//     const query = req.query
//     // console.log(query)
//     try{
//         const searchFilter={
//             title:{$regex:query.search,$options:"i"}
//         }
//         const w_posts = await Post.find(query.search?searchFilter:null)
//         res.status(200).json(w_posts);
//     }
//     catch(error){
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' }); // Generic error response
//     }
// }
// );
// router.get("/", async (req, res) => {
//     try {

//         const posts = await Post.find()

//         res.status(200).json(posts);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
