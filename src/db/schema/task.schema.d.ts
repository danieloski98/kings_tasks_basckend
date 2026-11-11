import mongoose from "mongoose";
export declare const TaskModel: mongoose.Model<{
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
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
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
}, mongoose.Document<unknown, {}, {
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
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
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    isDeleted: boolean;
    deletedAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: string;
    title: string;
    description: string;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
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
//# sourceMappingURL=task.schema.d.ts.map