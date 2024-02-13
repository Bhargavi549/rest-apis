const express = require("express");
const userController = require("../controllers/userRegisterController");
const router = express.Router();

router.post("/register", userController.registerUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
