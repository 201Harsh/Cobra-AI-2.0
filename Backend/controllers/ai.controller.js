const TemplateModel = require("../models/Templates.model");
const CreatorService = require("../services/creator-ai.service");
const WebsiteModel = require("../models/Website.model");

module.exports.GenerateWebsite = async (req, res) => {
  try {
    const { prompt, brandName, description, email, tone, TemplateId } =
      req.body;

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

    if (response) {
      const Template = await TemplateModel.findById(TemplateId);

      const Website = await WebsiteModel.findById(TemplateId);

      if (Website) {
        Website.TemplatId.push(TemplateId);
        Website.WebsiteName.push(brandName);
        Website.WebsiteType.push(Template.type);
        Website.programming_language.push(Template.programming_language);
        Website.cover_img.push(Template.cover_img);
        Website.tech_stack.push(Template.tech_stack);
        Website.author.push(Template.author);
        Website.code.push(response);
        Website.save();
      } else {
        const newWebsite = new WebsiteModel({
          TemplatId: [TemplateId],
          WebsiteName: [brandName],
          WebsiteType: [Template.type],
          programming_language: [Template.programming_language],
          cover_img: [Template.cover_img],
          tech_stack: [Template.tech_stack],
          author: [Template.author],
          code: [response],
        });
        await newWebsite.save();
      }
    }

    res.status(200).json({
      code: response,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
