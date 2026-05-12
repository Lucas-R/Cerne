import { z } from 'zod';
import { Request, Response } from 'express';
import { RoleCreateSchema } from '@/schemas/role';
import RolesCreateService from '@/version/v1/services/roles/RolesCreateService';

export default class RolesCreateController {
    async execute(req: Request, res: Response) {
        const validation = RoleCreateSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: z.treeifyError(validation.error) 
            });
        }

        try {
            await new RolesCreateService().execute(validation.data);

            return res.sendStatus(201);

        } catch (error: any) {
            if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
                return res.status(409).json({ 
                    message: 'A role with this email already exists' 
                });
            }

            console.error(error);
            return res.status(500).json({ 
                message: 'Internal server error' 
            });
        }
    }
}