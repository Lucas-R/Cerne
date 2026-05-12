import { z } from 'zod';

export const status = ["pending", "active", "inactive", "suspended"] as const;

export const RoleSchema = z.object({
    id:         z.uuid("Invalid UUID"),
    label:      z.string().min(3, "Label must be at least 3 characters long").max(100, "Label is too long"),
    description:z.string().min(3, "Description must be at least 5 characters long").max(100, "Description is too long"),
    createdAt:  z.date(),
    updatedAt:  z.date(),
    deletedAt:  z.date().nullable().optional(),
});

export const RoleCreateSchema = RoleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
});

export const RoleUpdateSchema = RoleCreateSchema.partial();

export type UserProps       = z.infer<typeof RoleSchema>;
export type RoleCreateProps = z.infer<typeof RoleCreateSchema>;
export type RoleUpdateProps = z.infer<typeof RoleUpdateSchema>;