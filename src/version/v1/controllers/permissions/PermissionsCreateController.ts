import { z } from 'zod';
import { Request, Response } from 'express';
import { PermissionCreateSchema } from '@/schemas/permission';
import PermissionsCreateService from '@/version/v1/services/permissions/PermissionsCreateService';

export default class PermissionsCreateController {
    async execute(req: Request, res: Response) {
        const validation = PermissionCreateSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: z.treeifyError(validation.error) 
            });
        }

        try {
            await new PermissionsCreateService().execute(validation.data);

            return res.sendStatus(201);

        } catch (error: any) {
            if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
                return res.status(409).json({ 
                    message: 'Error create permission' 
                });
            }

            console.error(error);
            return res.status(500).json({ 
                message: 'Internal server error' 
            });
        }
    }
}