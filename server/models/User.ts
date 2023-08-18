import {Schema, Model, Document, model} from 'mongoose';

export interface User {
    userName: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

export enum UserRole {
    USER="USER", 
    ADMIN="ADMIN",
    ORGANIZATION="ORGANIZATION"
}

export interface UserDocument extends User, Document {}

export interface UserModel extends Model<UserDocument> {}

const UserSchema = new Schema<User>({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: UserRole.USER,
        enum: UserRole,
    },
}, {
    timestamps: true,
});

const User = model<UserDocument, UserModel>('user', UserSchema);

export default User