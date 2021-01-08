import {Document} from 'mongoose';

export interface InterfaceUser extends Document {
    username: string;
    email: string;
    password: string;
    encrypPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}