import { User } from "../types/user.ts";
import { UserModel } from '../db/schema/user.schema.ts';
import { hash, genSalt, compare } from 'bcryptjs';
class UserAuthService {
    async createUser(user) {
        try {
            const { email, password, firstName, lastName } = user;
            // check if the user already exists
            const existingUser = await UserModel.findOne({ email: email });
            if (existingUser) {
                return { status: 400, message: 'User already exists' };
            }
            else {
                // hash the password
                const salt = await genSalt(10);
                const hashedPassword = await hash(password, salt);
                // create the user
                const newUser = new UserModel({
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName
                });
                await newUser.save();
                return { status: 201, message: 'User created successfully', data: newUser };
            }
        }
        catch (error) {
            return { status: 500, message: 'Internal server error' };
        }
    }
    async loginUser({ email, password }) {
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return { status: 404, message: 'User not found' };
            }
            const isPasswordValid = await compare(password, user.password);
            if (!isPasswordValid) {
                return { status: 401, message: 'Invalid password' };
            }
            const { password: _, ...userData } = user;
            return { status: 200, message: 'Login successful', data: userData };
        }
        catch (error) {
            return { status: 500, message: 'Internal server error' };
        }
    }
}
export default new UserAuthService();
//# sourceMappingURL=userauth.service.js.map