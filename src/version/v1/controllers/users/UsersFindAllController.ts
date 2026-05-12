import { Request, Response } from 'express';
import UsersFindAllService from '../../services/users/UsersFindAllService';

export default class UsersFindAllController {
    async execute(_: Request, res: Response) {
        try {
            const users = await new UsersFindAllService().execute();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }
}