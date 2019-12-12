const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/tasks", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Established a connection to the databse"))
  .catch(err => console.log("Something went when connecting to the database", err))