import { test } from "@/database/schema";

import { db } from "@/lib/db";

import { procedure, router } from "../trpc";

export const testRouter = router({
  get: procedure.query(async () => {
    return await db.select().from(test);
  }),
});
