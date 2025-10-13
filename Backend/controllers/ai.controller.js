const CreatorService = require("../services/creator-ai.service");
const WebsiteModel = require("../models/Website.model");
const UserModel = require("../models/user.model");
const CobraChatbotService = require("../services/cobra-chatbot.service");

module.exports.GenerateWebsite = async (req, res) => {
  try {
    const { prompt, name, type, theme } = req.body;

    const UserID = req.user._id;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    if (!name || !type || !theme) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    if (!UserID) {
      return res.status(400).json({
        error: "User ID is required",
      });
    }

    const User = await UserModel.findById(UserID);

    if (!User) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (User.siteGenToken <= 0) {
      return res.status(400).json({
        error: "You have reached the limit of website generation",
      });
    }

    const Response = await CreatorService({ prompt, name, type, theme });

    if (Response) {
      const Website = await WebsiteModel.create({
        UserId: User._id,
        Prompt: prompt,
        Code: Response,
        Name: name,
        SiteType: type,
        status: "Active",
      });

      User.siteGenToken -= 1;
      User.sitegenerated += 1;
      await User.save();
    }

    res.status(200).json({
      message: "Website generated successfully",
      code: Response,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.GenerateChat = async (req, res) => {
  const { prompt } = req.body;

  const UserId = req.user._id;

  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required",
    });
  }

  const user = await UserModel.findById(UserId);

  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }

  if (user.mode === "creator") {
    return res.status(400).json({
      error: "You are not a developer! feature is only for developers",
    });
  }

  if (user.chatGenToken <= 0) {
    return res.status(400).json({
      error: "You have reached the limit of chat generation",
    });
  }

  const response = await CobraChatbotService({ prompt });

  if (response) {
    user.chatGenToken -= 1;
    await user.save();
  }

  res.status(200).json({
    message: "Chat generated successfully",
    code: response,
  });
};
