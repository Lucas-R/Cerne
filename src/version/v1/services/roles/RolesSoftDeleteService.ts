import { eq, and, isNull } from 'drizzle-orm';
import { db } from '@/database';
import { roles } from '@/database/schema/tables/roles';

export default class RolesSoftDeleteService {
    async execute(id: string) {
        const [result] = await db.update(roles)
            .set({ 
                deletedAt: new Date()
            })
            .where(
                and(
                    eq(roles.id, id),
                    isNull(roles.deletedAt)
                )
            );

        return result.affectedRows > 0; 
    }
}