import { useEffect, useState } from "react"
import type { GetServerSidePropsContext } from "next"
import Link from "next/link"
import { getServerSession } from "next-auth/next"
import { signIn } from "next-auth/react"

import { trpc } from "@/lib/trpc"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

import { authOptions } from "../api/auth/[...nextauth]"

export default function SignIn() {
  const [mounted, setMounted] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const signUp = trpc.auth.signUp.useMutation()

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <Dialog open={mounted}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-2xl">Create an account</DialogTitle>
          <DialogDescription>
            Enter username and password below to create your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Username</Label>
            <Input
              id="email"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {signUp.error?.message && (
              <div>{JSON.parse(signUp.error?.message).username}</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            className="mt-2"
            onClick={() =>
              signUp.mutate({ username: username, password: password })
            }
          >
            Create account
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Button
              variant="outline"
              onClick={() => signIn("github", { redirect: false })}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account ?{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)
  if (session) {
    return { redirect: { destination: "/" } }
  }
  return { props: {} }
}
