
import { Request, Response } from 'express';
import { UserUpdateSchema } from '../../../../schemas/user';
import UsersUpdateService from '../../services/users/UsersUpdateService';

export default class UsersUpdateController {
    async execute(req: Request, res: Response) {
        const { id } = req.params as { id: string }; 
        const validation = UserUpdateSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: validation.error.flatten().fieldErrors 
            });
        }

        if (Object.keys(validation.data).length === 0) {
            return res.status(400).json({ message: 'No data provided for update' });
        }

        try {
            const updateData = validation.data;
            const service = new UsersUpdateService();
            
            const updatedUser = await service.execute(id, updateData);

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(updatedUser);

        } catch (error: any) {
            if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
                return res.status(409).json({ 
                    message: 'This email is already in use by another user' 
                });
            }

            console.error(error);
            return res.status(500).json({ 
                message: 'Internal server error' 
            });
        }
    }
}