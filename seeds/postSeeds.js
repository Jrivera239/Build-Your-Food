const { post, Post } = require("../models");

const postSeeds = [
  {
    title: "Papajohns is Whack",
    post_text:
      "Terrible food and service. I think I may have seen a roach or two as well...",
    user_id: 1,
  },
  {
    title: "Homemade Rice and beans",
    post_text:
      "I suck at cooking so everything is burnt. Enough salt might fix.",
    user_id: 4,
  },
  {
    title: "I hate Fastfood",
    post_text: "Just cook your own food. Mcdonalds everyday is gonna kill you.",
    user_id: 2,
  },
  {
    title: "Fast food is perfect",
    post_text: "Very convenient and i never have to cook. Thank you wendys!",
    user_id: 3,
  },
  {
    title: "New restaurant near me",
    post_text:
      "I can't wait for this upcoming italian restaurant. I hope it's not another Olive Garden.",
    user_id: 1,
  },
  {
    title: "NEW RECIPE (Secret Sauce)",
    post_text:
      "FOLLOW EXACTLY OR IT'LL FAIL... 1 cup MILK, 2 Cups WATER, 3 cups MAYO, 1 tbs SALT, mix with 6 eggs. This makes any food taste better. Try with Cereal.",
    user_id: 3,
  },
];

const seededPosts = () => Post.bulkCreate(postSeeds);

module.exports = seededPosts;
