import { eq } from 'drizzle-orm';
import { db } from '@/database';
import { roles } from '@/database/schema/tables/roles';

export default class RolesDeleteService {
    async execute(id: string) {
        const [result] = await db.delete(roles).where(eq(roles.id, id));

        return result.affectedRows > 0; 
    }
}