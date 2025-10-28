const express = require("express");

const { check, body } = require("express-validator");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/products", adminController.getProducts);

router.get("/add-product", adminController.getAddProduct);

router.post(
  "/add-product",
  [
    body("title")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters long."),
    body("price").isNumeric().withMessage("Price must be a valid number."),
    body("description")
      .trim()
      .isLength({ min: 5, max: 400 })
      .withMessage("Description must be between 5 and 400 characters long."),
  ],
  adminController.postAddProduct
);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    body("title")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters long."),
    body("price").isNumeric().withMessage("Price must be a valid number."),
    body("description")
      .trim()
      .isLength({ min: 5, max: 400 })
      .withMessage("Description must be between 5 and 400 characters long."),
  ],
  adminController.postEditProduct
);

router.delete("/product/:productId", adminController.deleteProduct);

module.exports = router;
