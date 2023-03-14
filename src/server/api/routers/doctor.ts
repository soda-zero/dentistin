import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const doctorRouter = createTRPCRouter({
  getAllDoctors: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.doctor.findMany({
      select: {
        id: true,
        doctorName: true,
        doctorImage: true,
        info: true,
        doctorInsurances: {
          select: {
            id: true,
            insurance: true,
          },
        },
        doctorSpecializations: {
          select: {
            id: true,
            specialization: true,
          },
        },
      },
    });
  }),
});
