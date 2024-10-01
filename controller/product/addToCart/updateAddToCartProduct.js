const AddToCartProductModel = require("../../../models/cartProductModel");

const updateAddToCartProduct = async (req, res) => {
  try {
    const addToCartProductId = req.body._id;
    const quantity = req.body.quantity;
    const updateProduct = await AddToCartProductModel.updateOne(
      { _id: addToCartProductId },
      { ...(quantity && { quantity: quantity }) }
    );
    res.json({
      massage: "update product success",
      data: updateProduct,
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

module.exports = updateAddToCartProduct;
