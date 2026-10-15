import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
export const Server = express();

// Add global middleware to parse JSON request bodies
Server.use(cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true // Allow credentials (e.g., cookies, authorization headers)
}));
Server.use(express.json());
Server.use(morgan('combined')); // Log HTTP requests to the console
