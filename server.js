const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Allows us to use handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
//Use all routes in controller folder
app.use(routes);

// Start server after DB connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
