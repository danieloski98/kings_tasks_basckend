import 'dotenv/config';
import { Server } from './server.ts';  
import UserAuthRouter from './controllers/userauth.controller.ts' 
import TaskRouter from './controllers/tasks.controller.ts'
import { connectDb} from './db/index.ts'

// Connect to the database
connectDb();

// setting up routes
Server.use('/api/tasks', TaskRouter);
Server.use('/api/user-auth', UserAuthRouter);

// handle not found routes
Server.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

Server.listen(process.env.PORT || 8008, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});