const ChatModel = require("../models/chat.model");

module.exports.getAllChats = async (req, res) => {
  try {
    const UserId = req.user._id;

    const user = await UserModel.findById(UserId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const Chats = await ChatModel.find({ UserId });

    if (!Chats) {
      return res.status(400).json({
        message: "Chats not found",
      });
    }

    res.status(200).json({
      message: "Chats found",
      Chats,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
