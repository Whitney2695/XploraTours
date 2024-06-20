import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import bookingRoutes from './routes/bookings.routes';
import reviewRoutes from './routes/review.routes';

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api', userRoutes);
app.use('/api', bookingRoutes);
app.use('/api', reviewRoutes);

// Error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        message: err.message
    });
});

const PORT = 5203;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ...`);
});
