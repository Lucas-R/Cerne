import { z } from 'zod';
import { isNull } from 'drizzle-orm';

import { db } from '@/database';
import { roles } from '@/database/schema';
import { RoleSchema } from '@/schemas/role';

export default class RolesFindAllService {
    async execute() {
        const data = await db.select().from(roles).where(isNull(roles.deletedAt));

        return z.array(RoleSchema).parse(data);
    }
}