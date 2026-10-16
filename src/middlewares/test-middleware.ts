import { TASKS } from "../types/task.ts";

export  function testM() {
    return (req: any, res: any, next: any) => {
        console.log('Test middleware executed');
    const id = req.params.userId; 
    const checkuserTasks = TASKS.find(user => user.userId === Number(id));

        if (!checkuserTasks) {
            console.log({
                message: 'User with this id not found'
            })
        }
        else {
            console.log({
                message: 'User found'
            })
        }
    next();
}
}