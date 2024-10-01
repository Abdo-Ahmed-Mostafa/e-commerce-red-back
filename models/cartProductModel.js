const mongoose = require("mongoose");

const addToCartProductSchema = new mongoose.Schema(
  {
    productId: {
      ref: "product",
      type: String,
    },
    quantity: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const AddToCartProductModel = mongoose.model(
  "addToCart",
  addToCartProductSchema
);

module.exports = AddToCartProductModel;
