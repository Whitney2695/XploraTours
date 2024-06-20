import { Request, Response } from 'express';
import { loginUser } from '../services/auth.service';
import { login_details } from '../interfaces/user';

export const loginController = async (req: Request, res: Response) => {
  const logins: login_details = req.body;

  try {
    const result = await loginUser(logins);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    return res.status(200).json({ message: result.message, token: result.token });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
