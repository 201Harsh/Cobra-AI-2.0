const express = require("express");
const app = express();

const ConnectToDB = require("./config/db");
ConnectToDB();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const USerRouter = require("./routes/user.route");
const AIRouter = require("./routes/ai.route");
const WebsiteRouter = require("./routes/website.route");
const LabRouter = require("./routes/venomlab.route");
const ChatRouter = require("./routes/chat.route");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", USerRouter);
app.use("/ai", AIRouter);
app.use("/websites", WebsiteRouter);
app.use("/lab", LabRouter);
app.use("/chat", ChatRouter);

module.exports = app;
