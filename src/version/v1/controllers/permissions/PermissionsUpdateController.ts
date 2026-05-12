
import { z } from 'zod';
import { Request, Response } from 'express';
import { PermissionUpdateSchema } from '@/schemas/permission';
import PermissionsUpdateService from '@/version/v1/services/permissions/PermissionsUpdateService';

export default class PermissionsUpdateController {
    async execute(req: Request, res: Response) {
        const { id } = req.params as { id: string }; 
        const validation = PermissionUpdateSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: z.treeifyError(validation.error)
            });
        }

        if (Object.keys(validation.data).length === 0) {
            return res.status(400).json({ message: 'No data provided for update' });
        }

        try {
            const updatedUser = await new PermissionsUpdateService().execute(id, validation.data);

            if (!updatedUser) {
                return res.status(404).json({ message: 'Permission not found' });
            }

            return res.sendStatus(204);

        } catch (error: any) {
            console.error("Error updating role:", error);

            if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
                return res.status(409).json({ 
                    message: 'A permission with this name already exists' 
                });
            }

            return res.status(500).json({ 
                status: "error",
                message: "Internal server error" 
            });
        }
    }
}