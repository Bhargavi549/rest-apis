const loginModel = require("../models/userLoginModel");

exports.loginUser = async (req, res) => {
  const { user_name, password } = req.body;

  if (!(user_name || password)) {
    return res.status(400).json({
      error: true,
      message: "user name and password required",
    });
  }
  try {
    const users = await loginModel.getUserByUserName(user_name);
    if (users.length === 0 || users[0].password !== password) {
      return res.status(401).json({
        error: true,
        message: "Invalid username and password",
      });
    }
    return res.status(200).json({
      error: false,
      message: "User Login Successfully",
    });
  } catch (err) {
    console.log("Error authenticated user:", err);
    return res.status(500).json({
      error: true,
      message: "Internal server error",
    });
  }
};