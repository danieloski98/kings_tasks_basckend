import { z } from 'zod';
export type ITask = {
    userId: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    isCompleted: boolean;
    status: 'pending' | 'in-progress' | 'completed';
};
export declare const taskSchema: z.ZodObject<{
    userId: z.ZodNumber;
    title: z.ZodString;
    description: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
    isCompleted: z.ZodBoolean;
    status: z.ZodEnum<{
        completed: "completed";
        "in-progress": "in-progress";
        pending: "pending";
    }>;
}, z.core.$strip>;
export declare const TASKS: ITask[];
export declare const USERS: {
    id: number;
    name: string;
    email: string;
}[];
//# sourceMappingURL=task.d.ts.map