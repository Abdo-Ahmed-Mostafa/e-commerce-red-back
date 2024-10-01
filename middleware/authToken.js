const jwt = require("jsonwebtoken");
const authToken = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(200).json({
        massage: "Please login first...!",
        error: true,
        success: false,
      });
    }
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      if (err) {
      }
      req.userId = decoded?._id;
      next();
    });
  } catch (err) {
    return res.json({
      massage: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
};
module.exports = authToken;
