import { type ReactNode } from "react"

import { SiteHeader } from "@/components/site-header"

interface Props {
  children: ReactNode
}

export function MainLayout(props: Props) {
  return (
    <div className={`min-h-screen font-sans antialiased`}>
      <SiteHeader />
      <div className="container">{props.children}</div>
    </div>
  )
}
