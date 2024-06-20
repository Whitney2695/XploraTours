// src/routes/review.routes.ts
import { Router } from 'express';
import { createReview, getReviews } from '../controllers/review.controller';
// import { verifyToken } from '../middleware/verifytoken';

const router = Router();

router.post('/reviews',  createReview);
router.get('/tours/:tourId/reviews', getReviews);

export default router;
