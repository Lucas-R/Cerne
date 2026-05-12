import { mysqlTable, varchar, primaryKey } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { users } from "../users";
import { roles } from "../roles";

export const userRoles = mysqlTable("user_roles", {
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  roleId: varchar("role_id", { length: 36 }).notNull().references(() => roles.id, { onDelete: "cascade" }),
}, (table) => [ primaryKey({ columns: [table.userId, table.roleId] })]);

export const userRolesRelations = relations(userRoles, ({ one }) => ({
  user: one(users, { fields: [userRoles.userId], references: [users.id] }),
  role: one(roles, { fields: [userRoles.roleId], references: [roles.id] }),
}));