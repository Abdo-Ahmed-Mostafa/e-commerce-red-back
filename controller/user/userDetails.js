const userModel = require("../../models/user.model");

const userDetailsController = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    return res.status(200).json({
      data: user,
      error: false,
      success: true,
      massage: "user details",
    });
  } catch (err) {
    return res.json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = userDetailsController;
