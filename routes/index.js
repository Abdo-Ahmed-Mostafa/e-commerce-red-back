const express = require("express");
const router = express.Router();

const userSingUpController = require("../controller/user/userSingUp");
const userSingInController = require("../controller/user/userSingIn");
const userDetailsController = require("../controller/user/userDetails");
const authToken = require("../middleware/authToken");
const userLogOut = require("../controller/user/userLogout");
const allUsersController = require("../controller/user/allUser");
const updateUserController = require("../controller/user/updateUser");
const uploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartProduct = require("../controller/product/addToCart/addToCartProduct");
const countAddToCartProduct = require("../controller/product/addToCart/countAddToCartProduct");
const addToCartViewProduct = require("../controller/product/addToCart/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/product/addToCart/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/product/addToCart/deleteAddToCartProduct");
const searchProductController = require("../controller/product/searhcProduct");
const filterProductController = require("../controller/product/filterProductController");
router.post("/singup", userSingUpController);

router.post("/singin", userSingInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout", userLogOut);
// admin panel
router.get("/all-users", authToken, allUsersController);
router.post("/update-user", authToken, updateUserController);
// product
router.post("/upload-product", authToken, uploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProductController);
router.post("/filter-product", filterProductController);
// user add to cart
router.post("/add-to-cart", authToken, addToCartProduct);
router.get("/count-add-to-cart", authToken, countAddToCartProduct);
router.get("/add-to-cart-view", authToken, addToCartViewProduct);
router.post("/update-add-to-cart", authToken, updateAddToCartProduct);
router.delete("/delete-add-to-cart", authToken, deleteAddToCartProduct);
module.exports = router;
//
