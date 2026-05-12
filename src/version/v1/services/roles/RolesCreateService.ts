import { db } from '@/database';
import { roles } from '@/database/schema/tables/roles';
import { RoleCreateProps } from '@/schemas/role';

export default class RolesCreateService {
    async execute(data: RoleCreateProps) {
        await db.insert(roles).values(data);
    }
}