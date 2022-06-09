
const express = require("express");

const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP"
});

app.use(limiter);

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello from the express server"
    });
});
  



app.listen(8000, () => {
    console.log("listening on port 8000");
});