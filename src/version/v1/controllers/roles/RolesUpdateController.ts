
import { z } from 'zod';
import { Request, Response } from 'express';
import { RoleUpdateSchema } from '@/schemas/role';
import RolesUpdateService from '@/version/v1/services/roles/RolesUpdateService';

export default class RolesUpdateController {
    async execute(req: Request, res: Response) {
        const { id } = req.params as { id: string }; 
        const validation = RoleUpdateSchema.safeParse(req.body);

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
            const updatedUser = await new RolesUpdateService().execute(id, validation.data);

            if (!updatedUser) {
                return res.status(404).json({ message: 'Role not found' });
            }

            return res.sendStatus(204);

        } catch (error: any) {
            console.error("Error updating role:", error);

            if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
                return res.status(409).json({ 
                    message: 'A role with this name already exists' 
                });
            }

            return res.status(500).json({ 
                status: "error",
                message: "Internal server error" 
            });
        }
    }
}