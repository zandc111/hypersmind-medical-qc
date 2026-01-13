import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import * as db from "./db";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createMockContext(isAdmin = false): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: isAdmin ? "admin-user" : "regular-user",
    email: isAdmin ? "admin@example.com" : "user@example.com",
    name: isAdmin ? "Admin User" : "Regular User",
    loginMethod: "manus",
    role: isAdmin ? "admin" : "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

function createPublicContext(): TrpcContext {
  return {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("trialApplications router", () => {
  describe("submit (public)", () => {
    it("should successfully submit a trial application", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const input = {
        hospitalName: "测试医院",
        contactName: "张三",
        contactPhone: "13800138000",
        contactEmail: "zhangsan@test.com",
        department: "医务处",
        position: "主任",
        productInterest: "qc" as const,
        hospitalScale: "large" as const,
        requirements: "需要病历质控系统",
      };

      const result = await caller.trialApplications.submit(input);

      expect(result).toEqual({ success: true });
    });

    it("should handle missing optional fields", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const input = {
        hospitalName: "测试医院2",
        contactName: "李四",
        contactPhone: "13900139000",
        productInterest: "both" as const,
      };

      const result = await caller.trialApplications.submit(input);

      expect(result).toEqual({ success: true });
    });

    it("should reject invalid email format", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const input = {
        hospitalName: "测试医院3",
        contactName: "王五",
        contactPhone: "13700137000",
        contactEmail: "invalid-email",
        productInterest: "generation" as const,
      };

      await expect(caller.trialApplications.submit(input)).rejects.toThrow();
    });
  });

  describe("list (admin only)", () => {
    it("should allow admin to list applications", async () => {
      const ctx = createMockContext(true);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.trialApplications.list();

      expect(Array.isArray(result)).toBe(true);
    });

    it("should reject non-admin users", async () => {
      const ctx = createMockContext(false);
      const caller = appRouter.createCaller(ctx);

      await expect(caller.trialApplications.list()).rejects.toThrow(
        "Only admins can view applications"
      );
    });
  });

  describe("updateStatus (admin only)", () => {
    it("should allow admin to update status", async () => {
      const ctx = createMockContext(true);
      const caller = appRouter.createCaller(ctx);

      // First create an application
      const publicCtx = createPublicContext();
      const publicCaller = appRouter.createCaller(publicCtx);
      await publicCaller.trialApplications.submit({
        hospitalName: "测试医院4",
        contactName: "赵六",
        contactPhone: "13600136000",
        productInterest: "qc" as const,
      });

      // Get the application list to find the ID
      const applications = await caller.trialApplications.list();
      const lastApp = applications[applications.length - 1];

      if (lastApp) {
        const result = await caller.trialApplications.updateStatus({
          id: lastApp.id,
          status: "contacted",
          notes: "已联系客户",
        });

        expect(result).toEqual({ success: true });
      }
    });

    it("should reject non-admin users from updating status", async () => {
      const ctx = createMockContext(false);
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.trialApplications.updateStatus({
          id: 1,
          status: "contacted",
        })
      ).rejects.toThrow("Only admins can update applications");
    });
  });
});
