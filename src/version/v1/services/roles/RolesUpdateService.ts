import { eq } from 'drizzle-orm';
import { db } from '@/database';
import { roles } from '@/database/schema/tables/roles';
import { RoleUpdateProps } from '@/schemas/role';

export default class RolesUpdateService {
    async execute(id: string, data: RoleUpdateProps) {
        const [result] = await db.update(roles).set(data).where(eq(roles.id, id));

        if (result.affectedRows === 0) {
            return null;
        }

        return result;
    }
}