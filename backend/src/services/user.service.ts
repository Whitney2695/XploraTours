import { sql, poolPromise } from '../dbhelpers/db';

interface User {
  fullName: string;
  passwordHash: string;
  email: string;
  phoneNumber?: string;
  profilePicture?: string;
}

async function insertUser(fullName: string, passwordHash: string, email: string, phoneNumber?: string, profilePicture?: string) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('full_name', sql.VarChar(100), fullName)
      .input('password_hash', sql.VarChar(255), passwordHash)
      .input('email', sql.VarChar(100), email)
      .input('phone_number', sql.VarChar(20), phoneNumber)
      .input('profile_picture', sql.VarChar(255), profilePicture)
      .execute('InsertUser');

    return result;
  } catch (err: any) {
    throw new Error(`Error inserting user: ${err.message}`);
  }
}

async function updateUser(userId: number, fullName: string, passwordHash: string, email: string, phoneNumber?: string, profilePicture?: string) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, userId)
      .input('full_name', sql.VarChar(100), fullName)
      .input('password_hash', sql.VarChar(255), passwordHash)
      .input('email', sql.VarChar(100), email)
      .input('phone_number', sql.VarChar(20), phoneNumber)
      .input('profile_picture', sql.VarChar(255), profilePicture)
      .execute('UpdateUser');

    return result;
  } catch (err: any) {
    throw new Error(`Error updating user: ${err.message}`);
  }
}

async function getUserById(userId: number) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, userId)
      .query('SELECT user_id, full_name, email, phone_number, profile_picture, created_at, updated_at FROM Users WHERE user_id = @user_id');

    return result.recordset[0];
  } catch (err: any) {
    throw new Error(`Error fetching user: ${err.message}`);
  }
}

async function getAllUsers() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('GetAllUsers');
    return result.recordset;
  } catch (err: any) {
    throw new Error(`Error fetching all users: ${err.message}`);
  }
}

export { insertUser, updateUser, getUserById, getAllUsers };
