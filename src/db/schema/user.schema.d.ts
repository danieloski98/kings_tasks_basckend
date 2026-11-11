import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
}, mongoose.Document<unknown, {}, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
//# sourceMappingURL=user.schema.d.ts.map