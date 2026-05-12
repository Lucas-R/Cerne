import { eq, and, isNotNull } from 'drizzle-orm';
import { db } from '@/database';
import { rolePermissions } from '@/database/schema';

export default class PermissionsUndoDeleteService {
    async execute(id: string) {
        const [result] = await db.update(rolePermissions)
            .set({ 
                deletedAt: null
            })
            .where(
                and(
                    eq(rolePermissions.id, id),
                    isNotNull(rolePermissions.deletedAt)
                )
            );

        return result.affectedRows > 0; 
    }
}