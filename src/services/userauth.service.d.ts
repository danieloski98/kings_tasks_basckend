import { User } from "../types/user.ts";
declare class UserAuthService {
    createUser(user: Partial<User>): Promise<{
        status: number;
        message: string;
        data?: never;
    } | {
        status: number;
        message: string;
        data: import("mongoose").Document<unknown, {}, {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            createdAt: NativeDate;
            updatedAt: NativeDate;
            isDeleted: boolean;
            deletedAt?: NativeDate | null;
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            createdAt: NativeDate;
            updatedAt: NativeDate;
            isDeleted: boolean;
            deletedAt?: NativeDate | null;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>;
    }>;
    loginUser({ email, password }: {
        email: string;
        password: string;
    }): Promise<{
        data?: never;
        status: number;
        message: string;
    } | {
        status: number;
        message: string;
        data: {
            _id: import("mongoose").Types.ObjectId;
            $locals: Record<string, unknown>;
            $op: 'save' | 'validate' | 'remove' | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            isNew: boolean;
            schema: import("mongoose").Schema;
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            createdAt: NativeDate;
            updatedAt: NativeDate;
            isDeleted: boolean;
            deletedAt?: NativeDate | null;
            __v: number;
        };
    }>;
}
declare const _default: UserAuthService;
export default _default;
//# sourceMappingURL=userauth.service.d.ts.map