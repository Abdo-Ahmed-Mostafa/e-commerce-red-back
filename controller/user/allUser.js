const userModel = require("../../models/user.model");

const allUsersController = async (req, res) => {
  try {
    const allUser = await userModel.find();
    res.status(200).json({
      massage: "All User",
      data: allUser,
      error: false,
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = allUsersController;
