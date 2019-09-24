//Gets express router
var router = require("express").Router();

//Gets function from an object.
var clearController = require("../../controllers/clear");

//Clears the database.
router.get("/", clearController.clearDB);

// below will export the router after which will clear the database if used.
module.exports = router;
