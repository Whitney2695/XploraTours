// src/controllers/booking.controller.ts
import { Request, Response } from 'express';
import { insertBooking } from '../services/booking.service'; // Adjusted import statement

export const createBooking = async (req: Request, res: Response) => {
  const { userId, tourId } = req.body; // Assuming userId and tourId are sent in the request body
  try {
    const result = await insertBooking(userId, tourId); // Calling insertBooking with userId and tourId
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Example placeholder for getBookingById function, adjust according to your implementation
export const getBookingById = async (req: Request, res: Response) => {
  const { bookingId } = req.params;
  try {
    // Implement getBookingById functionality here
    res.status(200).json({ message: `Placeholder for getBookingById with bookingId ${bookingId}` });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
