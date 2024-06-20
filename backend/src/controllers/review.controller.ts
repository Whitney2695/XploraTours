// src/controllers/review.controller.ts
import { Request, Response } from 'express';
import { insertReview, getReviewsForTour } from '../services/review.service'; // Correcting the service import

export const createReview = async (req: Request, res: Response) => {
  const { userId, tourId, rating, reviewText } = req.body;
  try {
    const result = await insertReview(userId, tourId, rating, reviewText);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  const { tourId } = req.params;
  try {
    const reviews = await getReviewsForTour(Number(tourId));
    if (reviews.length > 0) {
      res.status(200).json(reviews);
    } else {
      res.status(404).json({ message: 'No reviews found for this tour' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
