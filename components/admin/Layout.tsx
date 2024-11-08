import React, { ReactNode } from "react"
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-slate-300 p-4">{children}</main>
    </div>
  )
}