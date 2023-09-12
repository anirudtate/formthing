import { test } from "@/database/schema"
import { procedure, router } from "@/server/trpc"

import { db } from "@/lib/db"

export const appRouter = router({
  test: procedure.query(async () => {
    await delay(2000)
    return await db.select().from(test)
  }),
})

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

// export type definition of API
export type AppRouter = typeof appRouter
