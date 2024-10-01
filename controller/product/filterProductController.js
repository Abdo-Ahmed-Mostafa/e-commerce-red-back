const productModel = require("../../models/product.model");

const filterProductController = async (req, res) => {
  try {
    const categoryList = req?.body?.category || [];
    const product = await productModel.find({
      category: {
        $in: categoryList,
      },
    });
    res.json({
      message: "Products fetched successfully",
      data: product,
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching products",
      error: true,
      success: false,
    });
  }
};

module.exports = filterProductController;
