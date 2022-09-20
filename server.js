const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//cookie setup
const sess = {
  secret: process.env.DB_COOK,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});
require("dotenv").config();

//Allows us to use handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./controllers/'));


// Start server after DB connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
