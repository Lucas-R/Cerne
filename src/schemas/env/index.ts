import { z } from 'zod';

export const EnvSchema = z.object({
    PORT: z.number("Port server is required"),
    HOST: z.string("Host server is required"),
    DATABASE_URL: z.string("Database URL is required")
});

export type EnvProps = z.infer<typeof EnvSchema>;