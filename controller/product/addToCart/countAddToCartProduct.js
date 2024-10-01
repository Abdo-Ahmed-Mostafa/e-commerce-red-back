const AddToCartProductModel = require("../../../models/cartProductModel");

const countAddToCartProduct = async (req, res) => {
  try {
    const userId = req.userId;
    const count = await AddToCartProductModel.countDocuments({ userId });
    res.json({
      massage: "ok",
      data: { count },
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = countAddToCartProduct;
