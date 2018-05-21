var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, callback) {
    orm.insertOne("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], callback);
  },
  update: function(objColVals, condition, callback) {
		orm.update("burgers", objColVals, condition, function(res){
			callback(res);
		});
	},
  delete: function(condition, callback) {
    orm.delete("burgers", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;