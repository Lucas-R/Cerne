import 'dotenv/config';
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

import { env } from '@/config/Env';

const connection = mysql.createPool(env.DATABASE_URL);

export const db = drizzle(connection);