import {Request, Response} from 'express';
import User from '../models/User';

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
    res.send('Post Signup');
}

export const postSignin = async(req: Request, res: Response) => {
    res.send('Post signin');
}

export const postProfile = async(req: Request, res: Response) =>{
    res.send('Post Profile');
}