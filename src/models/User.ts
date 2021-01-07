import {Schema, model} from 'mongoose';
import {InterfaceUser} from '../interfaces/UserInterface';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    }
});

export default model<InterfaceUser>('User', userSchema);