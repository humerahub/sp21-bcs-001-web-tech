// module.exports = function (req, res, next) {
//     console.log(req.session.post);
//     if (req.session.post.title == "Hello") {
//       req.session.flash = {
//         type: "danger",
//         message: "Can't make this post",
//       };
//       return res.redirect("/");
//     }

//     next();
//   };

module.exports = function (req, res, next) {
  // Check if req.body.post exists and is an object
  if (
    req.body.post &&
    typeof req.body.post === "object" &&
    req.body.post.title === "pizza"
  ) {
    req.body.flash = {
      type: "danger",
      message: "Can't add this product",
    };
    return res.redirect("/create");
  }

  next();
};
