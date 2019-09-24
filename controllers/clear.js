var db = require("../models");

//file exports a function
module.exports = {
//function below clears the database  
clearDB: function(req, res) {
    db.Headline.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};
