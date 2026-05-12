import { db } from '@/database';
import { users } from '@/database/schema';
import { UserCreateProps } from '@/schemas/user';

export default class UsersCreateService {
    async execute(data: UserCreateProps) {
        await db.insert(users).values(data);
    }
}