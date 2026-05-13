import { z } from 'zod';

export const EnvSchema = z.object({
    DATABASE_URL: z.string("Database URL is required")
});

export type EnvProps = z.infer<typeof EnvSchema>;