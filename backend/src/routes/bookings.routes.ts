// src/routes/booking.routes.ts
import { Router } from 'express';
import { createBooking, getBookingById } from '../controllers/booking.contoller';
// import { verifyToken } from '../middleware/authMiddleware'; // Assuming you have an authMiddleware for token verification

const router = Router();

router.post('/bookings', createBooking);
router.get('/bookings/:bookingId', getBookingById);

export default router;
