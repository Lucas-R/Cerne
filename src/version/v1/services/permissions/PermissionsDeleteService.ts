import { eq } from 'drizzle-orm';
import { db } from '@/database';
import { rolePermissions } from '@/database/schema';

export default class PermissionsDeleteService {
    async execute(id: string) {
        const [result] = await db.delete(rolePermissions)
            .where(
                eq(rolePermissions.id, id)
            );

        return result.affectedRows > 0; 
    }
}