import 'dotenv/config';
import { Server } from './server.ts';   
import TaskRouter from './controllers/tasks.controller.ts'

// setting up routes
Server.use('/api/tasks', TaskRouter);

// handle not found routes
Server.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

Server.listen(process.env.PORT || 8008, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});