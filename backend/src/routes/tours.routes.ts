import express from 'express';
import {
  createTourHandler,
  getAllToursHandler,
  getTourByIdHandler,
  updateTourHandler,
  softDeleteTourHandler
} from '../controllers/tour.controller';

const router = express.Router();

// Define routes
router.post('/tours', createTourHandler);
router.get('/alltours', getAllToursHandler);
router.get('/tours/:id', getTourByIdHandler);
router.put('/tours/:id', updateTourHandler);
router.delete('/tours/:id', softDeleteTourHandler);

export default router;
