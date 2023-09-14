import { test } from "@/database/schema"

import { db } from "@/lib/db"

import { procedure, router } from "../trpc"

export const testRouter = router({
  get: procedure.query(async () => {
    await delay(2000)
    return await db.select().from(test)
  }),
})

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
