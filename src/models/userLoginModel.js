const connection = require("../config/db");

exports.getUserByUserName = async (user_name) => {
  try {
    const query = "SELECT * FROM mydb1.user_accounts WHERE user_name = ?";
    const [rows] = await connection.promise().query(query, [user_name]);
    if (rows.length === 0) {
      throw new Error("username not found");
    }
    return rows;
  } catch (err) {
    throw err;
  }
};
