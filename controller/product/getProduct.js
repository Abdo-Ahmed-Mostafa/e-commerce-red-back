const productModel = require("../../models/product.model");

const getProductController = async (req, res) => {
  try {
    const allProduct = await productModel.find().sort({ createAt: -1 });

    res.json({
      massage: "All Product",
      data: allProduct,
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
module.exports = getProductController;
