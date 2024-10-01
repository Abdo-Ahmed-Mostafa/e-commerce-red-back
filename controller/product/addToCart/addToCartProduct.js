const addToCartProductModel = require("../../../models/cartProductModel");

const addToCartProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    
    const currentUser = req.userId;
    const isProductIdAvailable = await addToCartProductModel.findOne({
      productId,
      userId: currentUser,
    });
    if (isProductIdAvailable) {
      return res.json({
        massage: "Already exist in cart!",
        error: true,
        success: false,
      });
    }
    const payLoad = {
      productId,
      quantity: 1,
      userId: currentUser,
    };

    const newToCartProduct = await addToCartProductModel(payLoad);
    const saveCartProduct = await newToCartProduct.save();
    res.status(200).json({
      massage: "Product added to cart successfully!",
      data: saveCartProduct,
      error: false,
      success: true,
    });
  } catch (err) {
    return res.json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartProduct;
