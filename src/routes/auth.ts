import {Router} from 'express';
import {getSignup, postSignup, getSignin, postSignin, getProfile} from '../controllers/authController';
import bodyParser from 'body-parser';

const router: Router = Router();

let jsonParser = bodyParser.json();

router.get('/signup', getSignup);
router.get('/signin', getSignin);
router.get('/profile', getProfile);
router.post('/signup', jsonParser, postSignup);
router.post('/signin', jsonParser, postSignin);

export default router;