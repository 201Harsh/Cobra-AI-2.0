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

    if (Websites.length === 0) {
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

module.exports.GetWebsiteById = async (req, res) => {
  try {
    const WebsiteId = req.params.id;
    const UserId = req.user._id;

    const Website = await WebsiteModel.findOne({ _id: WebsiteId, UserId });

    if (!Website) {
      return res.status(400).json({
        message: "Website not found",
      });
    }

    res.status(200).json({
      message: "Website found",
      Website,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.DeleteWebsite = async (req, res) => {
  try {
    const WebsiteId = req.params.id;
    const UserId = req.user._id;

    const Website = await WebsiteModel.findOne({
      _id: WebsiteId,
      UserId,
    });

    if (!Website) {
      return res.status(400).json({
        message: "Website not found",
      });
    }

    await Website.deleteOne();
    res.status(200).json({
      message: "Website deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
