const productModel = require("../../models/product.model");
const searchProductController = async (req, res) => {
  try {
    const query = req.query.q;
    const regex = new RegExp(query, "i");
    const product = await productModel.find({
      $or: [
        {
          productName: regex,
        },
        {
          category: regex,
        },
      ],
    });
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

module.exports = searchProductController;
