// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.NODE_ENV === "production") {
  dbConnection = {
    port: 3306,
    host: "	s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "	tcrct2q8fv72ufiv",
    password: "daizswdhpg6td5mj",
    database: "gc2wo2xb475c9m3j"
  }
} else {
  dbConnection = {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  }
}
var connection = mysql.createConnection(dbConnection);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;