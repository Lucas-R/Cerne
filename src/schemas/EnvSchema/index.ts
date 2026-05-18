import z from "zod";

export const EnvSchema = z.object({
    PORT: z.string(),
    HOST: z.string(),
    DATABASE_URL: z.string().startsWith("postgresql://")
});