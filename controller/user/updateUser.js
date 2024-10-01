const userModel = require("../../models/user.model");

const updateUserController = async (req, res) => {
  try {
    const sessionUser = req.userId;
    const { userId, email, name, role } = req.body;
    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };
    const user = userModel.findById(sessionUser);
    const updateUser = await userModel.findByIdAndUpdate(userId, payload);
    // if (userUpdate) {
    // }
    res.json({
      massage: "Users Updated",
      data: updateUser,
      success: true,
      error: false,
    });
  } catch (err) {
    return res.status(400).json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = updateUserController;
