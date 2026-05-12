import { z } from 'zod';

export const PermissionActionEnum = z.enum(["SELECT", "INSERT", "UPDATE", "DELETE"]);

export const PermissionSchema = z.object({
    id:         z.uuid(),
    roleId:     z.string({ message: "ID is required." }),
    action:     PermissionActionEnum,
    createdAt:  z.date(),
    updatedAt:  z.date(),
    deletedAt:  z.date().nullable().optional(),
});

export const PermissionCreateSchema = PermissionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
});

export const PermissionUpdateSchema = PermissionCreateSchema.partial();

export type PermissionProps = z.infer<typeof PermissionSchema>;
export type PermissionCreateProps = z.infer<typeof PermissionCreateSchema>;
export type PermissionUpdateProps = z.infer<typeof PermissionUpdateSchema>;
