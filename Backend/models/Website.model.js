const mongoose = require("mongoose");

const WebsiteSchema = new mongoose.Schema({
  TemplateId: {
    type: String,
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  WebsiteName: {
    type: String,
    required: true,
    unique: true,
  },
  WebsiteType: {
    type: String,
    required: true,
  },
  programming_language: {
    type: String,
    required: true,
  },
  cover_img: {
    type: String,
    required: true,
  },
  tech_stack: [
    {
      type: String,
      required: true,
    },
  ],
  author: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Website = mongoose.model("Website", WebsiteSchema);

module.exports = Website;
