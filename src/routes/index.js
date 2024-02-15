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


// const express = require('express');
// const router = express.Router();
// const HomeController = require('../controllers/HomeController');
// const userRoutes = require('./userRoutes');

// router.get('/', HomeController.index);


// router.use('/users', userRoutes);

// module.exports = router;

