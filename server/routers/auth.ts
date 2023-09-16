import { test, users } from "@/database/schema"
import { TRPCError } from "@trpc/server"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/lib/db"

import { procedure, router } from "../trpc"

export const authRouter = router({
  signUp: procedure
    .input(
      z.object({
        username: z.string().nonempty(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const usersWithSameName = await db
        .select()
        .from(users)
        .where(eq(users.name, input.username))
      if (usersWithSameName.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: JSON.stringify({
            username: "Username already exists.",
          }),
        })
      }
      return await db.select().from(test)
    }),
})
