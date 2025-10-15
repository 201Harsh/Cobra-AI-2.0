const mongoose = require("mongoose");

const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
  });
};

module.exports = ConnectDB;
