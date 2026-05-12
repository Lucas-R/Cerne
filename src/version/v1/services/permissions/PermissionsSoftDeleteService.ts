import { eq, and, isNull } from 'drizzle-orm';
import { db } from '@/database';
import { rolePermissions } from '@/database/schema';

export default class PermissionsSoftDeleteService {
    async execute(id: string) {
        const [result] = await db.update(rolePermissions)
            .set({ 
                deletedAt: new Date()
            })
            .where(
                and(
                    eq(rolePermissions.id, id),
                    isNull(rolePermissions.deletedAt)
                )
            );

        return result.affectedRows > 0; 
    }
}