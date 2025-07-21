"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface HeaderProps {
  currentRole: string
  setCurrentRole: (role: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Header({ currentRole, setCurrentRole, sidebarOpen, setSidebarOpen }: HeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const pathname = usePathname()

  const roles = ["ฝ่ายบริหาร", "ฝ่ายบุคลากร", "ฝ่ายบัญชี/การเงิน", "ฝ่ายปฏิบัติการ", "ฝ่ายซ่อมบำรุง", "ผู้ดูแลระบบ"]

  const notifications = [
    {
      id: 1,
      title: "รถโม่ต้องการซ่อมบำรุง",
      message: "รถโม่หมายเลข 83-5948 ต้องการการซ่อมบำรุงด่วน",
      time: "5 นาทีที่แล้ว",
      type: "warning",
    },
    {
      id: 2,
      title: "มีการวางบิลใหม่",
      message: "บริษัท ก่อสร้าง ABC จำกัด ได้วางบิลใหม่มูลค่า 45,000 บาท",
      time: "30 นาทีที่แล้ว",
      type: "info",
    },
    {
      id: 3,
      title: "การอนุมัติเสร็จสิ้น",
      message: "คำขอเบิกน้ำมันได้รับการอนุมัติแล้ว",
      time: "2 ชั่วโมงที่แล้ว",
      type: "success",
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">ระบบจัดการกองรถโม่ปูน</span>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Role Selector */}
        <div className="relative">
          <select
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-md border border-gray-200 bg-white shadow-lg">
              <div className="flex items-center justify-between border-b p-3">
                <h3 className="font-medium">การแจ้งเตือน</h3>
                <Link href="/dashboard/notifications" className="text-sm text-blue-600 hover:underline">
                  ดูทั้งหมด
                </Link>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border-b p-3 last:border-0">
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                          notification.type === "warning"
                            ? "bg-yellow-100 text-yellow-600"
                            : notification.type === "success"
                              ? "bg-green-100 text-green-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {notification.type === "warning" ? (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        ) : notification.type === "success" ? (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{notification.title}</h4>
                        <p className="text-xs text-gray-600">{notification.message}</p>
                        <span className="mt-1 block text-xs text-gray-500">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 rounded-md p-1 hover:bg-gray-100"
          >
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
              <Image src="/placeholder-user.jpg" alt="User" width={32} height={32} />
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-sm font-medium">คุณสมชาย</div>
              <div className="text-xs text-gray-500">{currentRole}</div>
            </div>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
              <div className="p-3">
                <div className="font-medium">คุณสมชาย</div>
                <div className="text-sm text-gray-500">admin@example.com</div>
              </div>
              <div className="border-t">
                <Link
                  href="/dashboard/settings/users"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  โปรไฟล์
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  ตั้งค่า
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  ออกจากระบบ
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
