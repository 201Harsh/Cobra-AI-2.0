const TemplateModel = require("../models/Templates.model");
const CreatorService = require("../services/creator-ai.service");
const WebsiteModel = require("../models/Website.model");
const UserModel = require("../models/user.model");

module.exports.GenerateWebsite = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};
