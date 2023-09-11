import { MainLayout } from "@/components/main-layout"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
