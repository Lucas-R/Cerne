import { z } from 'zod';
import { and, eq, isNull } from 'drizzle-orm';

import { db } from '@/database';
import { roles } from '@/database/schema';
import { RoleSchema } from '@/schemas/role';

export default class RolesFindByIdService {
    async execute(id: string) {
        const data = await db.select().from(roles)
            .where(
                and(
                    eq(roles.id, id),
                    isNull(roles.deletedAt)
                )
            )
            .limit(1);

        return z.array(RoleSchema).parse(data);
    }
}