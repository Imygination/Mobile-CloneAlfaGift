const express = require("express");
const router = express.Router();
const ConItem = require("../controllers/item");
const ConCategory = require("../controllers/category");

router.post("/item", ConItem.createItem);
router.get("/item", ConItem.showItem);
router.get("/item/:id", ConItem.showItemId);
router.put("/item/:id", ConItem.updateItem);
router.delete("/item/:id", ConItem.deleteItem);

router.post("/category", ConCategory.createCategory);
router.get("/category", ConCategory.showCategory);
router.get("/category/:id", ConCategory.showCategoryById);
router.put("/category/:id", ConCategory.updateCategory);
router.delete("/category/:id", ConCategory.deleteCategory);

module.exports = router;
