import {Request, Response, NextFunction} from 'express';

import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err, user)=>{
        if (err)
            return res.status(403).json({ message: 'Invalid token' });
            req.user = user;
            next();
        });
    }

export const authorrize = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user.role!== role)
            return res.status(403).json({ message: 'Unauthorized' });
    
        next();
}
    
}
