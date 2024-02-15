const uuid = require("uuid");
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
  refferal_code,
  country_name,
  management,
}) => {
  try {
    const register_id = uuid.v4();

    if (register_id.length > 36) {
      throw new Error("Generated UUID is too long");
    }
    const user_id = `user-${new Date()
      .toISOString()
      .replace(/[-:T.]/g, "")
      .slice(0, 17)}`;

    const query =
      "INSERT INTO mydb.user_accounts (register_id, user_id, account_role, user_name, password, first_name, last_name, mobile_no, email, creator_role, creator_password,refferal_code,country_name, management) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      register_id,
      user_id,
      account_role,
      user_name,
      password,
      first_name,
      last_name,
      mobile_no,
      email,
      refferal_code,
      creator_role,
      country_name,
      creator_password,
      management,
    ];
    await connection.promise().query(query, values);

    return {
      register_id,
      user_id,
      account_role,
      user_name,
      first_name,
      last_name,
      mobile_no,
      email,
      password,
      refferal_code,
      country_name,
      creator_role,
      management,
    };
  } catch (err) {
    throw err;
  }
};

exports.getUserName = async (user_name) => {
  try {
    const query = "SELECT * FROM mydb.user_accounts WHERE user_name = ?";
    const [rows] = await connection.promise().query(query, [user_name]);
    return rows.length > 0;
  } catch (err) {
    throw err;
  }
};

exports.getAllUsers = async () => {
  try {
    const query = "SELECT * FROM mydb.user_accounts";
    const rows = await connection.promise().query(query);
    return rows;
  } catch (err) {
    throw err;
  }
};

exports.getAllUsersById = async (userId) => {
  try {
    const query = "SELECT * FROM mydb.user_accounts WHERE id = ?";
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
    const query = "UPDATE mydb.user_accounts SET ? WHERE id = ?";
    await connection.promise().query(query, [usersData, id]);
    return { message: "User updated successfully...." };
  } catch (err) {
    throw err;
  }
};

exports.deleteUser = async (id) => {
  try {
    const query = "DELETE from mydb.user_accounts WHERE id = ?";
    await connection.promise().query(query, id);
    return { message: "user deleted sucessfully...." };
  } catch (err) {
    throw err;
  }
};
