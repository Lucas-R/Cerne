import { eq, and, isNotNull } from 'drizzle-orm';
import { db } from '@/database';
import { roles } from '@/database/schema/tables/roles';

export default class RolesUndoDeleteService {
    async execute(id: string) {
        const [result] = await db.update(roles)
            .set({ 
                deletedAt: null
            })
            .where(
                and(
                    eq(roles.id, id),
                    isNotNull(roles.deletedAt)
                )
            );

        return result.affectedRows > 0; 
    }
}