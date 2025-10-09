const TemplateModel = require("../models/Templates.model");
const CreatorService = require("../services/creator-ai.service");

module.exports.GenerateWebsite = async (req, res) => {
  try {
    const { prompt, UserDetails } = req.body;

    if (!prompt || !UserDetails) {
      return res
        .status(400)
        .json({ error: "Prompt and UserDetails are required" });
    }

    const response = await CreatorService({ prompt, UserDetails });
    
    res.status(200).json({
       code: response 
      });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
