const productModel = require("../../models/product.model");

const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({
      massage: "Product fetched successfully!",
      data: product,
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

module.exports = getProductDetails;
