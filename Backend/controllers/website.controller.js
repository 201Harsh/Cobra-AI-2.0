const WebsiteModel = require("../models/Website.model");

module.exports.GetAllWebsites = async (req, res) => {
  try {
    const UserId = req.user._id;

    const Websites = await WebsiteModel.find({ UserId });

    if (!Websites) {
      return res.status(400).json({
        message: "No Websites Found",
      });
    }

    res.status(200).json({
      message: "Websites Found",
      Websites,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
