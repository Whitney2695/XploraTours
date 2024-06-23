import { Request, Response } from 'express';
import { createTour, getAllTours, getTourById, updateTour, softDeleteTour } from '../services/tour.service';

async function createTourHandler(req: Request, res: Response) {
  const { destination, duration, price, tourType, description } = req.body;
  try {
    const result = await createTour(destination, duration, price, tourType, description);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

async function getAllToursHandler(req: Request, res: Response) {
  try {
    const tours = await getAllTours();
    res.status(200).json(tours);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

async function getTourByIdHandler(req: Request, res: Response) {
  const tourId = parseInt(req.params.id);
  try {
    const tour = await getTourById(tourId);
    if (tour) {
      res.status(200).json(tour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

async function updateTourHandler(req: Request, res: Response) {
  const tourId = parseInt(req.params.id);
  const { destination, duration, price, tourType, description } = req.body;
  try {
    const result = await updateTour(tourId, destination, duration, price, tourType, description);
    res.status(204).json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

async function softDeleteTourHandler(req: Request, res: Response) {
  const tourId = parseInt(req.params.id);
  try {
    const result = await softDeleteTour(tourId);
    res.status(204).json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export { createTourHandler, getAllToursHandler, getTourByIdHandler, updateTourHandler, softDeleteTourHandler };
