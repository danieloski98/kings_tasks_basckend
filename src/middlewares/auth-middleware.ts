import type { NextFunction, Request, Response } from 'express';

export function authMiddleware() {
    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers['Authorization'] || req.headers['authorization'] as string | undefined;
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        } else {
            // validate 
            if ((authHeader as string).startsWith('Bearer ')) {
                const token = 'DEF_TOKEN';
                req['user'] = token; // Attach the token to the request object for further use
                next();
            } else {
                return res.status(401).json({ message: 'Invalid authorization header format' });
            }
        }
        
    };
}