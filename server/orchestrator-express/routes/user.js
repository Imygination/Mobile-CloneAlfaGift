const express = require("express");
const router = express.Router();
const ConUser = require("../controllers/user");
const ConItem = require("../controllers/item");

router.get("/", ConUser.findAllUser);
router.post("/register", ConUser.createUser);
router.get("/item", ConItem.showItem);
router.post("/item", ConItem.createItem);

router.get("/item/:id", ConItem.showItemId);
router.put("/item/:id", ConItem.updateItem);
router.delete("/item/:id", ConItem.deleteItem);
router.get("/:id", ConUser.findUser);
router.delete("/:id", ConUser.deleteUser);

// router.post("/category", ConCategory.createCategory);
// router.get("/category", ConCategory.showCategory);
// router.get("/category/:id", ConCategory.showCategoryById);
// router.put("/category/:id", ConCategory.updateCategory);
// router.delete("/category/:id", ConCategory.deleteCategory);

module.exports = router;
