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
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  }).then((postData) => {
    console.log(postData[0]);
    const post = postData.map((post) => post.get({ plain: true }));
    res.render("originalPage", { post });
  });
});

router.get("/registration", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("registration");
});

module.exports = router;
