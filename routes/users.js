import express from 'express';

import { getUser, getUsers, signin, signup } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;