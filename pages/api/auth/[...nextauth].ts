import { DrizzleAdapter } from "@auth/drizzle-adapter"
import * as dotenv from "dotenv"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { db } from "@/lib/db"

dotenv.config()

export const authOptions = {
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}

export default NextAuth(authOptions)
