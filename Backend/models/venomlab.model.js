const mongoose = require("mongoose");

const VenomLabSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    default: 1,
  },
  environment: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
