import { router } from "@/server/trpc"

import { authRouter } from "./auth"
import { testRouter } from "./test"

export const appRouter = router({
  test: testRouter,
  auth: authRouter,
})

export type AppRouter = typeof appRouter
