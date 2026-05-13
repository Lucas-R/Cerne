import { z } from 'zod';

export const EnvSchema = z.object({
    DATABASE_URL: z.url("Database URL is required")
});

export type EnvProps = z.infer<typeof EnvSchema>;