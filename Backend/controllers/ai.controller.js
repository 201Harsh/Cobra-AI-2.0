const TemplateModel = require("../models/Templates.model");
const CreatorService = require("../services/creator-ai.service");

module.exports.GenerateWebsite = async (req, res) => {
  try {
    const { prompt, brandName, description, email, tone , TemplateId} = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const UserDetails = {
      BrandName: brandName,
      BrandDeatail: description,
      ContactEmail: email,
      BrandTone: tone,
    };

    const response = await CreatorService({ prompt, UserDetails });

    res.status(200).json({
      code: response,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
