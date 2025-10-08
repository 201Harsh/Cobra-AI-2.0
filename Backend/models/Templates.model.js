const mongoose = require("mongoose");

const TemplatesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  programming_language: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  cover_img: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "free",
    enum: ["free", "premium"],
  },
  price: {
    type: Number,
    default: 0,
  },

  examples_img: [
    {
      type: String,
      required: true,
    },
  ],
  features: [
    {
      type: String,
      required: true,
    },
  ],
  rating: {
    type: Number,
    required: true,
    default: 0,
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
  demo_url: {
    type: String,
    required: true,
    unique: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  uses: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Templates = mongoose.model("Templates", TemplatesSchema);

module.exports = Templates;
