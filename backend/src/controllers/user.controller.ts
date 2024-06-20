import { Request, Response } from 'express';
import { insertUser, updateUser, getUserById, getAllUsers } from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
  const { fullName, passwordHash, email, phoneNumber, profilePicture } = req.body;
  try {
    const result = await insertUser(fullName, passwordHash, email, phoneNumber, profilePicture);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const modifyUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { fullName, passwordHash, email, phoneNumber, profilePicture } = req.body;
  try {
    const result = await updateUser(Number(userId), fullName, passwordHash, email, phoneNumber, profilePicture);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await getUserById(Number(userId));
 
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
