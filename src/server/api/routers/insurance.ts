import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const insuranceRouter = createTRPCRouter({
  getAllInsurances: publicProcedure.query(({ ctx }) => {

    return ctx.prisma.insurance.findMany();
  }),
});
