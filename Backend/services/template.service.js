const TemplateModel = require("../models/Templates.model");

module.exports.CreatingTemplate = async ({
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
  code,
  demo_url,
  uses,
  prompt,
}) => {
  if (
    !name ||
    !type ||
    !programming_language ||
    !details ||
    !cover_img ||
    !author ||
    !code ||
    !demo_url ||
    !status ||
    !price ||
    !examples_img ||
    !features ||
    !rating ||
    !tech_stack ||
    !uses ||
    !prompt
  ) {
    throw new Error("Missing required fields");
  }

  const ifTemplateExists = await TemplateModel.findOne({
    name,
    details,
    prompt,
    features,
  });

  if (ifTemplateExists) {
    throw new Error("Template already exists");
  }

  const Template = TemplateModel.create({
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
    code,
    demo_url,
    uses,
    prompt,
  });

  return Template;
};
