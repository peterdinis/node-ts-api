import {Router} from 'express';
import {getSignup, postSignup, getSignin, postSignin, getProfile, postProfile} from '../controllers/authController';
import bodyParser from 'body-parser';

const router: Router = Router();

let jsonParser = bodyParser.json();

router.get('/signup', getSignup);
router.get('/signin', getSignin);
router.get('/profile', getProfile);
router.post('/signup', jsonParser, postSignup);
router.post('/signin', jsonParser, postSignin);
router.post('/profile', jsonParser, postProfile);

export default router;