import { db } from "@/lib/db";
import { test } from "@/lib/schema";

export default async function IndexPage() {
  const data = await db.select().from(test).execute();
  return (
    <div className="container pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Hello World
      </h1>
      <div className="flex flex-col">
        {data.map((d, idx) => (
          <div key={idx}>{d.name}</div>
        ))}
      </div>
    </div>
  );
}
