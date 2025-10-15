const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Chats: [
      {
        user: {
          type: String,
          required: true,
        },
        ai: {
          PlainText: {
            type: String,
          },
          jsxCodeBlocks: {
            type: Array,
            default: [],
          },
          jsCodeBlocks: {
            type: Array,
            default: [],
          },
          bashCodeBlocks: {
            type: Array,
            default: [],
          },
          jsonCodeBlocks: {
            type: Array,
            default: [],
          },
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("Chat", ChatSchema);
module.exports = ChatModel;
