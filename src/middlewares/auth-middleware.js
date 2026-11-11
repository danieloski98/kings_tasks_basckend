export function authMiddleware() {
    return (req, res, next) => {
        const authHeader = req.headers['Authorization'] || req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }
        else {
            // validate 
            if (authHeader.startsWith('Bearer ')) {
                const token = 'DEF_TOKEN';
                req['user'] = token; // Attach the token to the request object for further use
                next();
            }
            else {
                return res.status(401).json({ message: 'Invalid authorization header format' });
            }
        }
    };
}
//# sourceMappingURL=auth-middleware.js.map