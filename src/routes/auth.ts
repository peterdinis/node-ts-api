import {Router} from 'express';
import {getSignup, postSignup, getSignin, postSignin, getProfile, postProfile} from '../controllers/authController';

const router: Router = Router();

router.get('/signup', getSignup);
router.get('/signin', getSignin);
router.get('/profile', getProfile);
router.post('/signup', postSignup);
router.post('/signin', postSignin);
router.post('/profile', postProfile);


export default router;