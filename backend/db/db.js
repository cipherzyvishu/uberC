const mongoose = require("mongoose");

function connectToDb() {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
}
module.exports = connectToDb;
