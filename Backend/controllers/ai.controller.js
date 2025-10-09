const TemplateModel = require("../models/Templates.model");
const CreatorService = require("../services/creator-ai.service");
const WebsiteModel = require("../models/Website.model");
const UserModel = require("../models/user.model");

module.exports.GenerateWebsite = async (req, res) => {
  try {
    const { prompt, brandName, description, email, tone, TemplateId } =
      req.body;

    const UserId = req.user._id;

    const CurrentUser = await UserModel.findById(UserId);

    const WebsiteExists = await WebsiteModel.findOne({
      WebsiteName: brandName,
    });

    if (WebsiteExists) {
      return res.status(400).json({
        error: "Website already Exists",
      });
    }

    const Template = await TemplateModel.findById(TemplateId);

    if (!CurrentUser) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (CurrentUser.siteGenToken <= 0) {
      return res.status(400).json({
        error: "You have reached your Website Generation limit for this Month",
      });
    }

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    if (!brandName || !description || !email || !tone) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const userSites = await WebsiteModel.find({ UserId });

    if (userSites.length >= 3)
      return res.status(400).json({
        error:
          "You have reached the maximum limit of 3 websites per user. Please upgrade your plan to generate more websites.",
      });

    if (!TemplateId) {
      return res.status(400).json({
        error: "TemplateId is required",
      });
    }

    const UserDetails = {
      BrandName: brandName,
      BrandDeatail: description,
      ContactEmail: email,
      BrandTone: tone,
    };

    const response = await CreatorService({
      prompt,
      UserDetails,
    });

    if (!response) {
      return res.status(400).json({
        error: "Unable to Generate website. Please try again",
      });
    }

    if (response) {
      const newWebsite = new WebsiteModel({
        TemplateId,
        UserId,
        WebsiteName: brandName,
        WebsiteType: Template.type,
        programming_language: Template.programming_language,
        cover_img: Template.cover_img,
        tech_stack: Template.tech_stack,
        author: Template.author,
        code: response || "No Code Generated",
      });

      await newWebsite.save();
    }

    res.status(200).json({
      code: response,
      message: "Website Generated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};
