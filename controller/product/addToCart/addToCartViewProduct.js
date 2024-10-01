const AddToCartProductModel = require("../../../models/cartProductModel");

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.userId;
    const allProducts = await AddToCartProductModel.find({
      userId: currentUser,
    }).populate("productId");
    res.json({
      massage: "ok",
      data: allProducts,
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

module.exports = addToCartViewProduct;
