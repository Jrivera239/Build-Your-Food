
const { User } = require("../models");

const userSeeds = [
  {
    username: "pizzaDude",
    email: "pizza123@gmail.com",
    password: "123456",
  },
  {
    username: "named123",
    email: "someEmail@gmail.com",
    password: "123456",
  },
  {
    username: "yelpsucks",
    email: "ihateyelp@gmail.com",
    password: "123456",
  },
  {
    username: "foodlover55",
    email: "food123@gmail.com",
    password: "123456",
  },
];

const seededUsers = () => User.bulkCreate(userSeeds, { individualHooks: true });

module.exports = seededUsers;
