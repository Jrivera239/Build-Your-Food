const router = require("express").Router();
const apiRoutes = require("./apiRoute");
const homeRoutes = require("./homePageRoutes");
const profileRoutes = require("./profileRoute");
//now api routes use this
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/profile", profileRoutes);

// important for RESTful API practice
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
