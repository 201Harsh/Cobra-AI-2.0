const express = require("express");
const app = express();

const ConnectToDB = require("./config/db");
ConnectToDB();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const USerRouter = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true
    }
));

app.use("/users", USerRouter);

module.exports = app;
