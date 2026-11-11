export const validatePayload = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: 'Invalid payload', error: result.error });
        }
        req.body = result.data;
        next();
    };
};
//# sourceMappingURL=validate-payload.js.map