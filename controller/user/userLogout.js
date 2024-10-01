const userLogOut = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({
      massage: "Logged out successfully!",
      error: false,
      success: true,
      data: [],
    });
  } catch (err) {
    return res.json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userLogOut;
