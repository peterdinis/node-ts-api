import {Request, Response} from 'express';
import User from '../models/User';
import {InterfaceUser} from '../interfaces/UserInterface';

export const getSignup = async(req: Request, res: Response) => {
    res.send('Get Signup Route');
}

export const getSignin = async(req: Request, res: Response) => {
    res.send('Get Signin Route')
}

export const getProfile = async(req: Request, res: Response) => {
    res.send('Profile Route')
}

export const postSignup = async(req: Request, res: Response) => {
    const user: InterfaceUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    const savedUser = await user.save();

    return res.json({
        message: 'User successfully signup', savedUser
    })
}

export const postSignin = async(req: Request, res: Response) => {
    res.send('Post signin');
}