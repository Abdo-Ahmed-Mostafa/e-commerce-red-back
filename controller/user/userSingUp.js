const userModel = require("../../models/user.model");
const bcrypt = require("bcryptjs");

const userSingUpController = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      throw new Error("Already user exits.");
    }
    if (!email) {
      throw new Error("please provide email");
    }

    if (!password) {
      throw new Error("please provide password");
    }

    if (!name) {
      throw new Error("please provide name");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("something is wrong");
    }
    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };
    const userData = new userModel(payload);
    const saveUser = await userData.save();
    return res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      massage: "user created successfully!",
    });
  } catch (err) {
    return res.json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userSingUpController;
