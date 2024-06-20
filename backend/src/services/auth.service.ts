import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mssql from 'mssql';
import { sqlConfig } from '../config/sql.config'; // Ensure the path to your sqlConfig is correct
import { login_details } from '../interfaces/user'; // Ensure the path to your login_details type is correct

export const loginUser = async (logins: login_details) => {
  try {
    let pool = await mssql.connect(sqlConfig);

    let user = (await pool.request()
      .input("email", logins.email)
      .execute("loginUser")).recordset;

    if (user.length < 1) {
      return {
        error: "User not found"
      };
    } else {
      let hashedPassword = user[0].password;

      // Compare password
      let passwordMatches = await bcrypt.compare(logins.password, hashedPassword);

      if (passwordMatches) {
        let { createdAt, password, phone_number, ...rest } = user[0];

        let token = jwt.sign(rest, process.env.SECRET_KEY as string, {
          expiresIn: '2h'
        });

        return {
          message: "Logged in successfully",
          token
        };
      } else {
        return {
          error: "Incorrect password"
        };
      }
    }
  } catch (error) {
    return {
      error: "An error occurred during login"
    };
  }
};
