const userModel = require("../../models/user.model");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const userSingInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("please provide email");
    }

    if (!password) {
      throw new Error("please provide password");
    }
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("user not found");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });
      const tokenOption = {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      };

      res.cookie("token", token, tokenOption).json({
        massage: "Loin successfully!",
        data: token,
        error: false,
        success: true,
      });
    } else {
      throw new Error("Please Check Your Password");
    }
  } catch (err) {
    return res.json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userSingInController;
