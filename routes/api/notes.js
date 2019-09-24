//Gets express router
var router = require("express").Router();

//gets an object of functions
var noteController = require("../../controllers/note");

//Gets a specifc note.
router.get("/:id", noteController.find);

//Creates a note.
router.post("/", noteController.create);

//Deletes a note.
router.delete("/:id", noteController.delete);

//Sends all routes 
module.exports = router;
