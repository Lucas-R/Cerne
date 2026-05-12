import { z } from 'zod';
import { Request, Response } from 'express';
import { UserCreateSchema } from '../../../../schemas/user';
import UsersCreateService from '../../services/users/UsersCreateService';

export default class UsersCreateController {
    async execute(req: Request, res: Response) {
        const validation = UserCreateSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: z.treeifyError(validation.error) 
            });
        }

        try {
            const validatedData = validation.data;

            const service = new UsersCreateService();
            const newUser = await service.execute(validatedData);

            return res.status(201).json(newUser);

        } catch (error: any) {
            if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
                return res.status(409).json({ 
                    message: 'A user with this email already exists' 
                });
            }

            console.error(error);
            return res.status(500).json({ 
                message: 'Internal server error' 
            });
        }
    }
}