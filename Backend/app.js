const express = require("express");
const app = express();

const ConnectToDB = require("./config/db");
ConnectToDB();

const USerRouter = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", USerRouter);

module.exports = app;
