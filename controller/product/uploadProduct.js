const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/product.model");

const uploadProductController = async (req, res) => {
  try {
    const sessionUserId = req.userId;
    // if (!uploadProductPermission(sessionUserId)) {
    //   throw new Error("Permission denied");
    // }
    const uploadProduct = new productModel(req.body);
    const saveProduct = await uploadProduct.save();
    res.status(201).json({
      massage: "Product Upload Successfully!",
      data: saveProduct,
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

module.exports = uploadProductController;
