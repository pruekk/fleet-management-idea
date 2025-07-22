"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentRole, setCurrentRole] = useState("ฝ่ายบริหาร")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex pt-16">
        <Sidebar open={sidebarOpen} currentRole={currentRole} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"} p-6 max-w-7xl mx-auto`}>
          {children}
        </main>
      </div>
    </div>
  )
}
