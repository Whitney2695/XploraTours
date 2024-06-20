import { Router } from 'express';
import { createUser, modifyUser, getUser, getAllUsersController } from '../controllers/user.controller';

const router = Router();

router.post('/users', createUser);
router.put('/:userId', modifyUser);
router.get('/:userId', getUser);
router.get('/getAllUsers', getAllUsersController); // Route for fetching all users

export default router;
