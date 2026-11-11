import { z } from 'zod';
export const createUserDtoSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
});
export const updateUserDtoSchema = z.object({
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
});
export const loginDtoSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});
//# sourceMappingURL=user.js.map