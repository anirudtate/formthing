import { trpc } from "@/lib/trpc"
import { MainLayout } from "@/components/main-layout"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

import type { AppProps } from "next/app"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default trpc.withTRPC(App)
