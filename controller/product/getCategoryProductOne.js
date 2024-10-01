const productModel = require("../../models/product.model");

const getCategoryProduct = async (req, res) => {
  try {
    const categoryCategory = await productModel.distinct("category");
    const productCategory = [];
    for (const category of categoryCategory) {
      const product = await productModel.findOne({ category });
      if (product) {
        productCategory.push(product);
      }
    }
    res.status(200).json({
      massage: "Product get successfully!",
      data: productCategory,
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

module.exports = getCategoryProduct;
