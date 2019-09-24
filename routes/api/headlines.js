//Gets express router
var router = require("express").Router();

//gets an object of fucntions
var headlineController = require("../../controllers/headline");

//Gets all headlines when route is used.
router.get("/", headlineController.findAll);
//Deletes a specific headline when used.
router.delete("/:id", headlineController.delete);
//Updates a specific headline when route is used.
router.put("/:id", headlineController.update);

//exports all routes.
module.exports = router;
