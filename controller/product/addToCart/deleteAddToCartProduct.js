const AddToCartProductModel = require("../../../models/cartProductModel");

const deleteAddToCartProduct = async (req, res) => {
  try {
    const addToCartProductId = req.body._id;
    const currentUser = req.userId;
    const deleteProduct = await AddToCartProductModel.deleteOne({
      _id: addToCartProductId,
      userId: currentUser,
    });
    res.json({
      massage: "delete product success",
      data: deleteProduct,
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
module.exports = deleteAddToCartProduct;
