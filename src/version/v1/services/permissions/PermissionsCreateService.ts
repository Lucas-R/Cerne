import { db } from '@/database';
import { rolePermissions } from '@/database/schema';
import { PermissionCreateProps } from '@/schemas/permission';

export default class PermissionsCreateService {
    async execute(data: PermissionCreateProps) {
        await db.insert(rolePermissions).values(data);
    }
}