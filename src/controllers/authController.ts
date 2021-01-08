import {Request, Response} from 'express';
import User from '../models/User';
import {InterfaceUser} from '../interfaces/UserInterface';
import jwt from 'jsonwebtoken';

export const getSignup = async(req: Request, res: Response) => {
    res.send('Get Signup Route');
}

export const getSignin = async(req: Request, res: Response) => {
    res.send('Get Signin Route');
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

    // jwt token
    const token: string = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET || 'tokentester');

    return res.json({
        message: 'User successfully signup', savedUser,
        token
    })
}

export const postSignin = async(req: Request, res: Response) => {
    res.send('Post signin');
}