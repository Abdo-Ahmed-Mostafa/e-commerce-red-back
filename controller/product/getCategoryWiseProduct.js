const productModel = require("../../models/product.model");

const getCategoryWiseProduct = async (req, res) => {
  try {
    const { category } = req?.body || req?.query;
    const product = await productModel.find({ category });
    res.json({
      massage: "Product fetched successfully!",
      error: false,
      success: true,
      data: product,
    });
  } catch (err) {
    return res.json({
      massage: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getCategoryWiseProduct;
