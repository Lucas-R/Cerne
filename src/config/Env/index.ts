import 'dotenv/config';
import { EnvSchema } from '@/schemas/env';

const parser = EnvSchema.safeParse(process.env);

if (!parser.success) {
  console.error("❌ Invalid environment variables:", parser.error.issues);
  process.exit(1);
}

export const env = parser.data;