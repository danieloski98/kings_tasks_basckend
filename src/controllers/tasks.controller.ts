import { Router, type Request, type Response } from 'express'
import TaskService from '../services/tasks.service.ts'
import { taskSchema } from '../types/task.ts';
import { validatePayload } from '../middlewares/validate-payload.ts';

const router = Router();

router.get('/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;
    const response = await TaskService.getAlluserTasks(Number(userId));
    // Here you would typically fetch tasks for the given userId from a database
    // For demonstration purposes, we'll return a static response
    res.status(response.status).json(response);
});

router.post('/:userId', validatePayload(taskSchema), (req: Request, res: Response) => {
    const { userId } = req.params;
    const taskData = req.body;
    // Here you would typically save the taskData for the given userId to a database
    // For demonstration purposes, we'll return a static response
    res.json({ message: `Creating a new task for user with ID: ${userId}`, task: taskData });
});

router.put('/:userId/:taskId', (req: Request, res: Response) => {
    const { userId, taskId } = req.params;
    const updatedTaskData = req.body;
    // Here you would typically update the task with taskId for the given userId in a database
    // For demonstration purposes, we'll return a static response
    res.json({ message: `Updating task with ID: ${taskId} for user with ID: ${userId}`, updatedTask: updatedTaskData });
});

router.delete('/:userId/:taskId', (req: Request, res: Response) => {
    const { userId, taskId } = req.params;
    // Here you would typically delete the task with taskId for the given userId from a database
    // For demonstration purposes, we'll return a static response
    res.json({ message: `Deleting task with ID: ${taskId} for user with ID: ${userId}` });
});


export default router;