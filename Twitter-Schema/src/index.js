const express = require("express");

const usersController = require("./controllers/user.controllers");
const tweetsController = require("./controllers/tweets.controllers");
const commentsController = require("./controllers/comment.controllers");

const app = express();

app.use(express.json());

app.use("/users", usersController); 
app.use("/tweets", tweetsController);
app.use("/comments", commentsController);

module.exports = app;


