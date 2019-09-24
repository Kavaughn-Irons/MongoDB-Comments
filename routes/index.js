//Gets express router.
var router = require("express").Router();
//Gets routes from api folder.
var apiRoutes = require("./api");
//Gets routes from view folder.
var viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

//Sends all routes from api and view folder.
module.exports = router;
