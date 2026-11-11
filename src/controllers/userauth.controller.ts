import { Router } from 'express'
import UserService from '../services/userauth.service.ts'
import { validatePayload } from '../middlewares/validate-payload.ts';
import { createUserDtoSchema, loginDtoSchema } from '../types/user.ts';

const router = Router();

router.post('/register', validatePayload(createUserDtoSchema), async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const result = await UserService.createUser({ email, password, firstName, lastName });
    res.status(result.status).json(result);
});

router.post('/login', validatePayload(loginDtoSchema), async (req, res) => {
    const { email, password } = req.body;
    const result = await UserService.loginUser({ email, password });
    res.status(result.status).json(result);
});

export default router;