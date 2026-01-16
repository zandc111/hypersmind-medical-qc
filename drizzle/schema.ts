import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Username for password-based authentication. Unique per user. */
  username: varchar("username", { length: 50 }).unique(),
  /** Hashed password for password-based authentication. */
  passwordHash: varchar("passwordHash", { length: 255 }),
  /** Manus OAuth identifier (openId) - optional for backward compatibility. */
  openId: varchar("openId", { length: 64 }).unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Trial Applications Table
export const trialApplications = mysqlTable("trial_applications", {
  id: int("id").autoincrement().primaryKey(),
  hospitalName: varchar("hospital_name", { length: 255 }).notNull(),
  contactName: varchar("contact_name", { length: 100 }).notNull(),
  contactPhone: varchar("contact_phone", { length: 20 }).notNull(),
  contactEmail: varchar("contact_email", { length: 320 }),
  department: varchar("department", { length: 100 }),
  position: varchar("position", { length: 100 }),
  productInterest: mysqlEnum("product_interest", ["qc", "generation", "both"]).notNull(),
  hospitalScale: mysqlEnum("hospital_scale", ["small", "medium", "large", "extra_large"]),
  requirements: text("requirements"),
  status: mysqlEnum("status", ["pending", "contacted", "demo_scheduled", "converted", "rejected"]).default("pending").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type TrialApplication = typeof trialApplications.$inferSelect;
export type InsertTrialApplication = typeof trialApplications.$inferInsert;

// TODO: Add your tables here