const TemplateModel = require("../models/Templates.model");
const TemplateService = require("../services/template.service");

module.exports.CreateTemplate = async (req, res) => {
  try {
    const {
      name,
      type,
      programming_language,
      details,
      cover_img,
      status,
      price,
      examples_img,
      features,
      rating,
      tech_stack,
      author,
      code_url,
      demo_url,
      uses,
    } = req.body;

    if (
      !name ||
      !type ||
      !programming_language ||
      !details ||
      !cover_img ||
      !author ||
      !code_url ||
      !demo_url ||
      !status ||
      !price ||
      !examples_img ||
      !features ||
      !rating ||
      !tech_stack ||
      !uses
    ) {
      throw new Error("Missing required fields");
    }

    const ifTemplateExists = await TemplateModel.findOne({ name });

    if (ifTemplateExists) {
      return res.status(400).json({ message: "Template already exists" });
    }

    const Template = await TemplateService.CreatingTemplate({
      name,
      type,
      programming_language,
      details,
      cover_img,
      status,
      price,
      examples_img,
      features,
      rating,
      tech_stack,
      author,
      code_url,
      demo_url,
      uses,
    });

    if (!Template) {
      return res.status(400).json({
        message: "Template creation failed",
      });
    }

    res.status(200).json({
      message: "Template created successfully",
      Template,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.GetAllTemplates = async (req, res) => {
  try {
    const Templates = await TemplateModel.find().sort({ createdAt: -1 });

    if (!Templates) {
      return res.status(400).json({
        message: "Templates not found",
      });
    }
    res.status(200).json({
      message: "Templates found",
      Templates,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.GetOneTemplate = async (req, res) => {
  try {
    const { id } = req.params;

    const Template = await TemplateModel.findById(id);

    if (!Template) {
      return res.status(400).json({
        message: "Template not found",
      });
    }

    res.status(200).json({
      message: "Template found",
      Template,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
