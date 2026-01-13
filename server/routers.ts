import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Trial Applications Router
  trialApplications: router({
    // Public: Submit trial application
    submit: publicProcedure
      .input(
        z.object({
          hospitalName: z.string().min(1, "医院名称不能为空"),
          contactName: z.string().min(1, "联系人姓名不能为空"),
          contactPhone: z.string().min(1, "联系电话不能为空"),
          contactEmail: z.string().email("邮箱格式不正确").optional().or(z.literal("")),
          department: z.string().optional(),
          position: z.string().optional(),
          productInterest: z.enum(["qc", "generation", "both"]),
          hospitalScale: z.enum(["small", "medium", "large", "extra_large"]).optional(),
          requirements: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await db.createTrialApplication({
          ...input,
          contactEmail: input.contactEmail || null,
        });
        
        // Notify owner about new application
        await notifyOwner({
          title: "新的试用申请",
          content: `医院: ${input.hospitalName}\n联系人: ${input.contactName}\n电话: ${input.contactPhone}\n产品: ${input.productInterest === "qc" ? "病历质控" : input.productInterest === "generation" ? "病历生成" : "两者都感兴趣"}`,
        });
        
        return { success: true };
      }),

    // Protected: List all applications (admin only)
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Only admins can view applications");
      }
      return await db.getAllTrialApplications();
    }),

    // Protected: Get single application (admin only)
    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Only admins can view applications");
        }
        return await db.getTrialApplicationById(input.id);
      }),

    // Protected: Update application status (admin only)
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["pending", "contacted", "demo_scheduled", "converted", "rejected"]),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Only admins can update applications");
        }
        await db.updateTrialApplicationStatus(input.id, input.status, input.notes);
        return { success: true };
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
