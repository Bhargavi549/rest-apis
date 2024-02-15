const userModel = require("../models/userRegistrationModel");

exports.registerUser = async (req, res) => {
  const {
    account_role,
    user_name,
    password,
    first_name,
    last_name,
    mobile_no,
    email,
    creator_role,
    refferal_code,
    creator_password,
    creator_id,
    country_name,
    management,
  } = req.body;

  if (
    !(
      account_role ||
      user_name ||
      creator_id ||
      password
    )
  ) {
    return res.status(400).json({
      error: true,
      message: "All fields are Required",
    });
  }
  const existingUser = await userModel.getUserName(user_name);
  console.log("existingUser", existingUser);
  if (existingUser) {
    return res.status(400).send({
      error: true,
      message: "userName already exist",
    });
  }

  try {
    const updatedManagement = creator_role;
    const accountDetails = await userModel.registerUser({
      account_role,
      user_name,
      password,
      first_name,
      last_name,
      mobile_no,
      email,
      country_name,
      creator_role,
      creator_password,
      creator_id,
      refferal_code,
      management,
    });
    res.status(200).json({
      error: false,
      message: "user Registered successfully",
      data: { updatedManagement, accountDetails },
    });
  } catch (err) {
    console.log("Error registered user:", err);
    res.status(500).json({
      error: true,
      message: "Internal server Error",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const Allusers = await userModel.getAllUsers();
    res.status(200).json({
      error: false,
      message: "data fetched successfully......",
      data: Allusers,
    });
  } catch (err) {
    console.log("Error faetching users data:", err);
    res.status(500).json({
      error: true,
      message: "Internal server Error",
    });
  }
};

exports.getAllUsersById = async (req, res) => {
  const userId = req.params.id;
  try {
    const usersData = await userModel.getAllUsersById(userId);
    res.status(200).json({
      error: false,
      message: "users fetches successfully.....",
      data: usersData,
    });
  } catch (err) {
    console.log("Error in fetching user", err);
    res.status(500).json({
      error: true,
      message: "Internal server error",
    });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const usersData = req.body;

  try {
    const userUpdateDetails = await userModel.updateUser(id, usersData);
    res.status(200).json({
      error: false,
      message: "User updated successfully",
    });
  } catch (err) {
    console.log("Error updating user:", err);
    res.status(500).json({
      error: true,
      message: "Internal server error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.deleteUser(id);
    res.status(200).json({
      error: false,
      message: "User deleted successfully",
    });
  } catch (err) {
    console.log("Error deleting user:", err);
    res.status(500).json({
      error: true,
      message: "Internal server error",
    });
  }
};
