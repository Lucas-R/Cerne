import { z } from 'zod';
import { Request, Response } from 'express';
import RolesFindByIdService from '@/version/v1/services/roles/RolesFindByIdService';

export default class RolesFindByIdController {
    async execute(req: Request, res: Response) {
        const { id } = req.params as { id: string }; 

        try {
            const data = await new RolesFindByIdService().execute(id);
            
            return res.status(200).json(data);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    status: "validation_error",
                    message: "Data validation failed",
                    errors: z.treeifyError(error)
                });
            }

            console.error("Error fetching users:", error);
            return res.status(500).json({ 
                status: "error",
                message: "Internal server error" 
            });
        }
    }
}