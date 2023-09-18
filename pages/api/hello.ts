// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { test } from "@/database/schema";

import { db } from "@/lib/db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const query = await db.select().from(test);
  res.status(200).json(query);
}
