const UserModel = require("../models/user.model");
const VenomLabModel = require("../models/venomlab.model");

module.exports.createVenomLab = async ({
  name,
  environment,
  creator,
  status,
}) => {
  if (!name || !environment || !creator || !status) {
    throw new Error("All fields are required");
  }

  const lab = await VenomLabModel.create({
    name,
    environment,
    creator,
    status,
  });
  return lab;
};
