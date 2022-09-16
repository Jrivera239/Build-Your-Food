const router = require("express").Router();
const apiRoutes = require("./apiRoute");

//now api routes use this
router.use("/api", apiRoutes);

// important for RESTful API practice
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
