import { relations } from "drizzle-orm";
import { mysqlTable, varchar, timestamp, mysqlEnum } from "drizzle-orm/mysql-core";

import { userRoles } from "../userRoles";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 150 }).notNull().unique(),
  status: mysqlEnum("status", ["pending", "active", "inactive", "suspended"]).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  deletedAt: timestamp("deleted_at")
});

export const usersRelations = relations(users, ({ many }) => ({
  userRoles: many(userRoles),
}));
