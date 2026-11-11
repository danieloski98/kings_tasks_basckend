import 'dotenv/config';
import type { User } from "../types/user.ts";
import { UserModel } from '../db/schema/user.schema.ts'
import { hash, genSalt, compare } from 'bcryptjs';
import pkg from 'jsonwebtoken';

const { sign } = pkg;

import type { IReturnType } from "../types/returntype.ts";
class UserAuthService {
    async createUser(user: Partial<User>) {
        try {
            const { email, password, firstName, lastName } = user;
            // check if the user already exists
            const existingUser = await UserModel.findOne({ email: email as string});
            if (existingUser) {
                return { status: 400, message: 'User already exists' };
            } else {
                // hash the password
                const salt = await genSalt(10);
                const hashedPassword = await hash(password as string, salt);

                // create the user
                const newUser = new UserModel({
                    email: email?.toLowerCase(),
                    password: hashedPassword,
                    firstName,
                    lastName
                });
                await newUser.save();
                const newUSerStored = await UserModel.findOne({ email: email?.toLowerCase() });
                const { password: _, ...userData } = newUSerStored?.toObject() as User;   
                return { status: 201, message: 'User created successfully', data: userData };
            }
        } catch(error) {
            return { status: 500, message: 'Internal server error' };
        }
    }

    async loginUser({ email, password }: { email: string, password: string}) {
        try {
            const user = await UserModel.findOne({ email: email.toLowerCase() });
            if (!user) {
                return { status: 404, message: 'User not found' };
            }

            const isPasswordValid = await compare(password, user.password);
            if (!isPasswordValid) {
                return { status: 401, message: 'Invalid password' };
            }
            const token = sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
            const { password: _, ...userData } = user.toObject() as User;
            return { status: 200, message: 'Login successful', data: { token, data: userData } };
        } catch(error) {
            return { status: 500, message: 'Internal server error' };
        }
    }
}

export default new UserAuthService();