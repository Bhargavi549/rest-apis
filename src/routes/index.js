const express = require("express");
const userRegistrationController = require("../controllers/userRegistrationController");
const userLoginController = require("../controllers/userLoginController");
const router = express.Router();

//signup
router.get("/users", userRegistrationController.getAllUsers);
router.get("/users/:id", userRegistrationController.getAllUsersById);
router.post("/register", userRegistrationController.registerUser);
router.put("/:id", userRegistrationController.updateUser);
router.delete("/:id", userRegistrationController.deleteUser);
//LOGIN
router.post("/login", userLoginController.loginUser);

module.exports = router;
