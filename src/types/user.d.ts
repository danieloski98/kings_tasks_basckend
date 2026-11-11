import { z } from 'zod';
export type User = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean;
    deletedAt?: Date | null;
};
export declare const createUserDtoSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, z.core.$strip>;
export declare const updateUserDtoSchema: z.ZodObject<{
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, z.core.$strip>;
export declare const loginDtoSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=user.d.ts.map