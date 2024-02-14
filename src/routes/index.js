const express = require("express");
const userController = require("../controllers/userRegistrationController");
const router = express.Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getAllUsersById);
router.post("/register", userController.registerUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
