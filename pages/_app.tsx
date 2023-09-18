import { trpc } from "@/lib/trpc";
import { MainLayout } from "@/components/main-layout";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default trpc.withTRPC(App);
