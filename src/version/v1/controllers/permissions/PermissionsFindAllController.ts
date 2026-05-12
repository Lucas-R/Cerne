import { z } from 'zod';
import { Request, Response } from 'express';
import PermissionsFindAllService from '../../services/permissions/PermissionsFindAllService';

export default class PermissionsFindAllController {
    async execute(_: Request, res: Response) {
        try {
            const data = await new PermissionsFindAllService().execute();
            
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