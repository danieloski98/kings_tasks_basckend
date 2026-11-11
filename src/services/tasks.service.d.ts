import { type ITask } from '../types/task.ts';
import { type IReturnType } from '../types/returntype.ts';
declare class TasksService {
    getAlluserTasks(userId: number): Promise<IReturnType<any>>;
    createUserTasks(userId: number, taskData: ITask): Promise<IReturnType<ITask>>;
    updateUserTask(userId: number, taskId: number, updatedTaskData: Partial<ITask>): Promise<IReturnType<ITask>>;
    deleteUserTask(userId: number, taskId: number): Promise<IReturnType<void>>;
}
declare const _default: TasksService;
export default _default;
//# sourceMappingURL=tasks.service.d.ts.map