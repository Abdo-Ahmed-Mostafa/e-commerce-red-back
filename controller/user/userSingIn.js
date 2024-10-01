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
        expiresIn: 60 * 60 * 8, // التوكين صالح لمدة 8 ساعات
      });

      const tokenOption = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // شغالة فقط في production
        sameSite: "None", // للسماح بالكوكيز عبر دومينات مختلفة
      };

      res.cookie("token", token, tokenOption).json({
        message: "Login successfully!",
        data: token,
        error: false,
        success: true,
      });
    } else {
      throw new Error("Please check your password");
    }
  } catch (err) {
    return res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userSingInController;
