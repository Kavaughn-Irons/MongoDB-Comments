//Gets express router
var router = require("express").Router();

//Gets a function from an object
var fetchController = require("../../controllers/fetch");

//Gets headlines
router.get("/", fetchController.scrapeHeadlines);

//below exports the route
module.exports = router;
