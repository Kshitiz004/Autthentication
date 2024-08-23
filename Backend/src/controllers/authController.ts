import { Request, Response } from 'express';
import { registeredUsers, loginUser } from '../services/userService';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { userName, password, role } = req.body;
        const user = await registeredUsers(userName, password, role);
        res.status(201).json(user);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { userName, password } = req.body;
        const user = await loginUser(userName, password);
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
