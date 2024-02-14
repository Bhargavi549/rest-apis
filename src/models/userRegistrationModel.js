const connection = require("../config/db");

exports.registerUser = async ({
  account_role,
  user_name,
  password,
  first_name,
  last_name,
  mobile_no,
  email,
  creator_role,
  creator_password,
  creator_id,
  management,
}) => {
  try {
    const query =
      "INSERT INTO mydb1.user_accounts (account_role,user_name, password, first_name, last_name, mobile_no, email, creator_role, creator_password, creator_id, management) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      account_role,
      user_name,
      password,
      first_name,
      last_name,
      mobile_no,
      email,
      creator_role,
      creator_password,
      creator_id,
      management,
    ];
    await connection.promise().query(query, values);

    return {
      account_role,
      user_name,
      first_name,
      last_name,
      mobile_no,
      email,
      password,
      creator_role,
      creator_id,
      management,
    };
  } catch (err) {
    throw err;
  }
};

exports.getAllUsers = async () => {
  try {
    const query = "SELECT * FROM mydb1.user_accounts";
    const rows = await connection.promise().query(query);
    return rows;
  } catch (err) {
    throw err;
  }
};

exports.getAllUsersById = async (userId) => {
  try {
    const query = "SELECT * FROM mydb1.user_accounts WHERE id = ?";
    const rows = await connection.promise().query(query, [userId]);
    if (rows.length === 0) {
      throw new Error("User not found");
    }
    return rows[0];
  } catch (err) {
    throw err;
  }
};

exports.updateUser = async (id, usersData) => {
  try {
    const query = "UPDATE mydb1.user_accounts SET ? WHERE id = ?";
    await connection.promise().query(query, [usersData, id]);
    return { message: "User updated successfully...." };
  } catch (err) {
    throw err;
  }
};

exports.deleteUser = async (id) => {
  try {
    const query = "DELETE from mydb1.user_accounts WHERE id = ?";
    await connection.promise().query(query, id);
    return { message: "user deleted sucessfully...." };
  } catch (err) {
    throw err;
  }
};
