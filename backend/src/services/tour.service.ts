import { sql, poolPromise } from '../dbhelpers/db';

interface Tour {
  tourId: number;
  destination: string;
  duration: number;
  price: number;
  tourType: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

async function createTour(destination: string, duration: number, price: number, tourType: string, description: string) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('destination', sql.VarChar(100), destination)
      .input('duration', sql.Int, duration)
      .input('price', sql.Decimal(10, 2), price)
      .input('tour_type', sql.VarChar(50), tourType)
      .input('description', sql.VarChar(sql.MAX), description)
      .execute('CreateTour');

    return result;
  } catch (err: any) {
    throw new Error(`Error creating tour: ${err.message}`);
  }
}

async function getAllTours() {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('SELECT * FROM Tours WHERE deleted_at IS NULL');

    return result.recordset;
  } catch (err: any) {
    throw new Error(`Error fetching tours: ${err.message}`);
  }
}

async function getTourById(tourId: number) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('tour_id', sql.Int, tourId)
      .execute('GetTourByID');

    return result.recordset[0];
  } catch (err: any) {
    throw new Error(`Error fetching tour: ${err.message}`);
  }
}

async function updateTour(tourId: number, destination: string, duration: number, price: number, tourType: string, description: string) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('tour_id', sql.Int, tourId)
      .input('destination', sql.VarChar(100), destination)
      .input('duration', sql.Int, duration)
      .input('price', sql.Decimal(10, 2), price)
      .input('tour_type', sql.VarChar(50), tourType)
      .input('description', sql.VarChar(sql.MAX), description)
      .execute('UpdateTour');

    return result;
  } catch (err: any) {
    throw new Error(`Error updating tour: ${err.message}`);
  }
}

async function softDeleteTour(tourId: number) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('tour_id', sql.Int, tourId)
      .execute('SoftDeleteTour');

    return result;
  } catch (err: any) {
    throw new Error(`Error deleting tour: ${err.message}`);
  }
}

export { createTour, getAllTours, getTourById, updateTour, softDeleteTour };
