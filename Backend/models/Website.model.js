const mongoose = require("mongoose");

const WebsiteSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Name: {
    type: String,
    required: true,
    unique: true,
  },
  SiteType: {
    type: String,
    required: true,
  },
  Prompt: {
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Website", WebsiteSchema);
