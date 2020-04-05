const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

//Defined routes in items file
const items = require("./routes/api/items");

const app = express();

//Body Parser middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to DB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB Connected....");
  })
  .catch(error => {
    console.log(error);
  });

//Connect to DB method 2
/* mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true }, err => {
  if (err) {
    console.log("Could not connect to database: ", err);
  } else {
    console.log("Connected to database ");
  }
}); */

app.use("/api/items", items);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on Port ${port}`));
