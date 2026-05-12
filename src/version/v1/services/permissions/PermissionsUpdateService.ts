import { and, eq, isNull } from 'drizzle-orm';
import { db } from '@/database';
import { rolePermissions } from '@/database/schema';
import { PermissionUpdateProps } from '@/schemas/permission';

export default class PermissionsUpdateService {
    async execute(id: string, data: PermissionUpdateProps) {
        const [result] = await db.update(rolePermissions)
            .set(data)
            .where(
                and(
                    eq(rolePermissions.id, id),
                    isNull(rolePermissions.deletedAt)
                )
            );

        if (result.affectedRows === 0) {
            return null;
        }

        return result;
    }
}