import {Document} from 'mongoose';

export interface InterfaceUser extends Document {
    username: string;
    email: string;
    password: string;
}