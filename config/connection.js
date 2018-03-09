/***********************************************************************
 * Copyright (c) 2018 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/
 /* Note: Most of this is copied directly from the in class exercises */
// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "charles",
  password: "it's a secret",
  database: "burgers_db"
});

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
