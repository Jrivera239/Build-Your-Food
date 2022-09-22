const { Comment } = require("../models");

const commentSeeds = [
  {
    comment_text: "Disturbing is what this is...",
    user_id: 4,
    post_id: 6,
  },
  {
    comment_text: "papajohns is terrible I agree",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "Use my Secret Sauce with any food event burnt. Guarantee it'll change your life!",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Fast food should be eaten in moderation. Be careful.",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "Delete this Please.",
    user_id: 1,
    post_id: 6,
  },
  {
    comment_text:
      "Some people don't have time to cook. Mcdonalds is terrible though.",
    user_id: 4,
    post_id: 3,
  },
  {
    comment_text: "Olive garden is good.",
    user_id: 3,
    post_id: 5,
  },
];

const seededComments = () => Comment.bulkCreate(commentSeeds);

module.exports = seededComments;
