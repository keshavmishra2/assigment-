const Post = require("../../models/Post");

var router = require("express").Router();

// @AssetPlus: This is a sample get request
router.get("/", async (req, res) => {
    var posts = await Post.find();
    return res.send(posts);
});

router.get("/add", (req, res) => {

    const { title, description, image } = req.body;
  
    User.findOne({ title: title }, (err, image) => {
      if (image) {
        res.send({ message: "image uploaded" });
      }
    });
  });

// @AssetPlus: Add other routes here
// router.post("/add")

module.exports = router;