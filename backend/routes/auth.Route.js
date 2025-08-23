import { Router } from 'express'
import { register } from '../controllers/auth.Controller.js';

const router = Router();

router.post('/register', register)


export default router