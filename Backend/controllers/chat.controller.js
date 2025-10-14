const ChatModel = require("../models/chat.model");
const UserModel = require("../models/user.model");

module.exports.getAllChats = async (req, res) => {
  try {
    const UserId = req.user._id;

    const user = await UserModel.findById(UserId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const Chats = await ChatModel.findOne({ userId: UserId });

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

module.exports.DelAllChats = async (req, res) => {
  try {
    const UserId = req.user._id;

    const user = await UserModel.findById(UserId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const Chats = await ChatModel.findOne({ userId: UserId });

    if (!Chats) {
      return res.status(400).json({
        message: "Chats not found",
      });
    }

    await Chats.deleteOne();

    res.status(200).json({
      message: "Chats deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
