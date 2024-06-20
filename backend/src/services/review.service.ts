
import { sql, poolPromise } from '../dbhelpers/db';


interface Review {
  userId: number;
  tourId: number;
  rating: number;
  reviewText: string;
}

async function insertReview(userId: number, tourId: number, rating: number, reviewText: string) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, userId)
      .input('tour_id', sql.Int, tourId)
      .input('rating', sql.TinyInt, rating)
      .input('review_text', sql.Text, reviewText)
      .execute('InsertReview');

    return result;
  } catch (err: any) {
    throw new Error(`Error inserting review: ${err.message}`);
  }
}

async function getReviewsForTour(tourId: number) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('tour_id', sql.Int, tourId)
      .query('SELECT review_id, user_id, rating, review_text, created_at FROM Reviews WHERE tour_id = @tour_id');

    return result.recordset;
  } catch (err: any) {
    throw new Error(`Error fetching reviews: ${err.message}`);
  }
}

export { insertReview, getReviewsForTour };
