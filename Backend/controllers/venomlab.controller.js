const UserModel = require("../models/user.model");
const VenomLabModel = require("../models/venomlab.model");
const VenomLabService = require("../services/venomlab.service");

module.exports.createVenomLab = async (req, res) => {
  try {
    const { name, environment } = req.body;

    if (!name || !environment) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const UserID = req.user._id;

    const User = await UserModel.findById(UserID);

    if (!User) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (User.mode === "creator") {
      return res.status(400).json({
        message: "You are not a developer",
      });
    }

    const StatusTelling = "Active";

    const Lab = await VenomLabService.createVenomLab({
      name,
      environment,
      creator: User.name,
      status: StatusTelling,
    });

    if (!Lab) {
      return res.status(400).json({
        message: "Failed to create Lab",
      });
    }

    res.status(200).json({
      message: "Lab created successfully",
      Lab,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
