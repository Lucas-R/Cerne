import { z } from 'zod';

export const status = ["pending", "active", "inactive", "suspended"] as const;

export const UserSchema = z.object({
    id:         z.uuid("Invalid UUID"),
    name:       z.string().min(3, "Name must be at least 3 characters long").max(100, "Name is too long"),
    email:      z.email("Invalid email format"),
    status:     z.enum(status).default("pending").optional(),
    createdAt:  z.date(),
    updatedAt:  z.date(),
    deletedAt:  z.date().nullable().optional(),
});

export const UserCreateSchema = z.object({
    name:       z.string().min(3, "Name must be at least 3 characters long").max(100, "Name is too long"),
    email:      z.email("Invalid email format"),
    status:     z.enum(status).default("pending").optional()
});

export const UserUpdateSchema = UserCreateSchema.partial();

export type UserProps = z.infer<typeof UserSchema>;
export type UserCreateProps = z.infer<typeof UserCreateSchema>;
export type UserUpdateProps = z.infer<typeof UserUpdateSchema>;