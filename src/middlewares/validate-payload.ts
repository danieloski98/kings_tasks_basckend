import { z } from 'zod';

export const validatePayload = (schema: z.ZodSchema) => {
    return (req: any, res: any, next: any) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: 'Invalid payload', error: result.error });
        }
        req.body = result.data;
        next();
    };
};