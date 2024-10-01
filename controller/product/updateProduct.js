const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/product.model");

const updateProductController = async (req, res) => {
  try {
    const productId = req.body.productId;
    // if (!uploadProductPermission(productId)) {
    //   throw new Error("Permission denied");
    // }
    const { ...resBody } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(
      productId,
      resBody
    );

    

    res.json({
      massage: "Product Update successfully!",
      data: updateProduct,
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
module.exports = updateProductController;
