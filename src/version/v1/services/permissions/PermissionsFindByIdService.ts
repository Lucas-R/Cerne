import { z } from 'zod';
import { and, eq, isNull } from 'drizzle-orm';

import { db } from '@/database';
import { rolePermissions } from '@/database/schema';
import { PermissionSchema } from '@/schemas/permission';

export default class PermissionsFindByIdService {
    async execute(id: string) {
        const data = await db.select().from(rolePermissions)
            .where(
                and(
                    eq(rolePermissions.id, id),
                    isNull(rolePermissions.deletedAt)
                )
            )
            .limit(1);

        return z.array(PermissionSchema).parse(data);
    }
}