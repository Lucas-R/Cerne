import { mysqlTable, varchar, mysqlEnum, timestamp } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { roles } from "../roles";

export const rolePermissions = mysqlTable("role_permissions", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  roleId: varchar("role_id", { length: 36 }).notNull().references(() => roles.id, { onDelete: "cascade" }),
  action: mysqlEnum("action", ["SELECT", "INSERT", "UPDATE", "DELETE"]).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  deletedAt: timestamp("deleted_at")
});

export const rolePermissionsRelations = relations(rolePermissions, ({ one }) => ({
  role: one(roles, { fields: [rolePermissions.roleId], references: [roles.id] })
}));