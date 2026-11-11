import 'dotenv/config';
import mongoose from 'mongoose';
export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};
//# sourceMappingURL=database.js.map