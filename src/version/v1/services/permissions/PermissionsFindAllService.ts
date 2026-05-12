import { z } from 'zod';
import { isNull } from 'drizzle-orm';

import { db } from '@/database';
import { rolePermissions } from '@/database/schema';
import { PermissionSchema } from '@/schemas/permission';

export default class PermissionsFindAllService {
    async execute() {
        const data = await db.select().from(rolePermissions)
            .where(
                isNull(rolePermissions.deletedAt)
            );

        return z.array(PermissionSchema).parse(data);
    }
}