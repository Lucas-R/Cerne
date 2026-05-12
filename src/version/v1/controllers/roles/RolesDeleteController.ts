
import { Request, Response } from 'express';
import RolesDeleteService from '@/version/v1/services/roles/RolesDeleteService';

export default class RoleDeleteController {
    async execute(req: Request, res: Response) {
        const { id } = req.params as { id: string }; 

        try {
            const data = await new RolesDeleteService().execute(id);

            if (!data) {
                return res.status(404).json({ message: 'Role not found' });
            }

            return res.sendStatus(204);

        } catch (error: any) {
            console.error("Error delete role:", error);

            return res.status(500).json({ 
                status: "error",
                message: "Internal server error" 
            });
        }
    }
}