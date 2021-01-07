import Joi from '@hapi/joi';
import { InterfaceUser } from '../interfaces/UserInterface';

export const signupValidation = (data: InterfaceUser) => {
    const userSchema = Joi.object({
        username: Joi.string().min(5).required(),
        email: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return userSchema.validate(data);
}