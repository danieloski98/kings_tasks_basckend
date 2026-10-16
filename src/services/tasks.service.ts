import { type ITask, TASKS, USERS } from '../types/task.ts';
import { type IReturnType } from '../types/returntype.ts';

class TasksService {
    async getAlluserTasks(userId: number): Promise<IReturnType<any>> {
        const userExists = TASKS.find(user => user.userId === userId);
        if (!userExists) {
            return { message: `User with ID: ${userId} not found`, status: 404 };
        }
        return { message: `Fetching all tasks for user with ID: ${userId}`, data: userExists, status: 200 };
    }
    async createUserTasks(userId: number, taskData: ITask): Promise<IReturnType<ITask>> {
        return { message: `Task created for user with ID: ${userId}`, data: taskData, status: 201 };
    }
    async updateUserTask(userId: number, taskId: number, updatedTaskData: Partial<ITask>): Promise<IReturnType<ITask>> {
        return { message: `Task updated for user with ID: ${userId}`, data: { ...updatedTaskData as ITask }, status: 200 };
    }
    async deleteUserTask(userId: number, taskId: number): Promise<IReturnType<void>> {
        return { message: `Task deleted for user with ID: ${userId}`, status: 200 };
    }
}

export default new TasksService();