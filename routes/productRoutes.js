const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getPdf,
} = require("../controller/productController");
const router = express.Router();
const { upload } = require("../uploadUtils");
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 }, // Upload Image
    { name: "pdf", maxCount: 1 }, // Upload PDF
  ]),
  createProduct
);

router.get("/", getProducts);
router.get("/view-pdf/:id", getPdf);
router.get("/:id", getProductById);
router.put(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 }, // Upload Image
    { name: "pdf", maxCount: 1 }, // Upload PDF
  ]),
  updateProduct
);
router.delete("/:id", deleteProduct);

module.exports = router;
