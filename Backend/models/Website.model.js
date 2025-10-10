const mongoose = require("mongoose");

const WebsiteSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  LiveUrl: {
    type: String,
    unique: true,
    sparse: true, // allows multiple nulls
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Website", WebsiteSchema);
