
import { sql, poolPromise } from '../dbhelpers/db';

interface Booking {
  userId: number;
  tourId: number;
}

async function insertBooking(userId: number, tourId: number) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, userId)
      .input('tour_id', sql.Int, tourId)
      .execute('InsertBooking');

    return result;
  } catch (err: any) {
    throw new Error(`Error inserting booking: ${err.message}`);
  }
}

async function getBookingsForUser(userId: number) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, userId)
      .query('SELECT booking_id, tour_id, booking_date FROM Bookings WHERE user_id = @user_id');

    return result.recordset;
  } catch (err: any) {
    throw new Error(`Error fetching bookings: ${err.message}`);
  }
}

export { insertBooking, getBookingsForUser };
