var express = require("express");
var path = require("path");
var cors = require("cors");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var serveStatic = require("serve-static");
const logger = require("morgan");

const mongoose = require("mongoose");
require("dotenv").config();
var app = express();

//step1 establishing connection for Heroku server
var PORT = process.env.PORT || 8080;
var Users = require("./routes/users");
const MLAB_API = process.env.MLAB_API;

app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:4200"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(logger("combined"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//const MONGODB_URI = 'mongodb://localhost:27017/members'
//step2 establishing connection with MongoDB via MbLab
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/members";
mongoose
  .connect(
    MONGODB_URI,

    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected Externally"))
  .catch((err) => console.log("Could not connect to the DB", err));

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan("tiny"));
app.use("/users", Users);

const Post = require("./model/post");
//API end point for fetching the list of blog posts. Since for db Mongo is used, Mongoose client added to connect the db with the app.
app.post("/api/post/getAllPost", (req, res) => {
  mongoose.connect(
    url,
    { useMongoClient: true },
    { useUnifiedTopology: true },
    function (err) {
      console.log(err - "error here");
      if (err) throw err;
      console.log("connection established successfully");
      Post.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
        if (err) throw err;
        return res.status(200).json({
          status: "success",
          data: doc,
        });
      });
    }
  );
});
//step3 getting paths for the static files for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../codingBlog/dist")));
  app.use(express.static(path.join(__dirname, "../codingBlog/dist/assets")));
  app.get("*", (req, res) => {
    const index = path.join(__dirname, "../codingBlog/dist/", "index.html");
    res.sendFile(index);
    res.redirect("/codingBlog/");
  });
}
//for the wrong path
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error:
      "This page does not exist. You will have to check the correct routing",
  });
});

app.listen(PORT, console.log(`Server is running successfully at ${PORT}!`));
