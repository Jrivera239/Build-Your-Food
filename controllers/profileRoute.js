const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: ["id", "title", "post_text", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((postData) => {
      if (postData) {
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("profile", { posts });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
