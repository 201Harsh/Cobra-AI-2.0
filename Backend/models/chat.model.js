const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Chats: [
    {
      role: {
        type: String,
        required: true,
        enum: ["user", "ai"],
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
});
