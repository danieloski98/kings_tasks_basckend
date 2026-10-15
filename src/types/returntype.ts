export type IReturnType<T> = {
    message: string;
    data?: T;
    status: number;
    error?: any;
    pagination?: {
        totalItems: number;
        totalPages: number;
        currentPage: number;
    } | null;
} 