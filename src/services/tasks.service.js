import { TASKS, USERS } from '../types/task.ts';
import {} from '../types/returntype.ts';
class TasksService {
    async getAlluserTasks(userId) {
        const userExists = TASKS.find(user => user.userId === userId);
        if (!userExists) {
            return { message: `User with ID: ${userId} not found`, status: 404 };
        }
        return { message: `Fetching all tasks for user with ID: ${userId}`, data: userExists, status: 200 };
    }
    async createUserTasks(userId, taskData) {
        return { message: `Task created for user with ID: ${userId}`, data: taskData, status: 201 };
    }
    async updateUserTask(userId, taskId, updatedTaskData) {
        return { message: `Task updated for user with ID: ${userId}`, data: { ...updatedTaskData }, status: 200 };
    }
    async deleteUserTask(userId, taskId) {
        return { message: `Task deleted for user with ID: ${userId}`, status: 200 };
    }
}
export default new TasksService();
//# sourceMappingURL=tasks.service.js.map