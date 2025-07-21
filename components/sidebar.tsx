"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Building2,
  Users,
  Truck,
  Factory,
  UserCheck,
  FileText,
  Calendar,
  DollarSign,
  BarChart3,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronRight,
  Home,
  Package,
  Fuel,
  Wrench,
  Receipt,
  FileSpreadsheet,
  Bell,
  CheckSquare,
  Shield,
  UserCog,
  Cog,
} from "lucide-react"

interface MenuItem {
  title: string
  href?: string
  icon: React.ComponentType<{ className?: string }>
  children?: MenuItem[]
  roles?: string[]
}

const menuItems: MenuItem[] = [
  {
    title: "หน้าหลัก",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "ข้อมูลพื้นฐาน",
    icon: Package,
    children: [
      {
        title: "บริษัท",
        href: "/dashboard/basic-data/companies",
        icon: Building2,
      },
      {
        title: "พนักงาน",
        href: "/dashboard/basic-data/employees",
        icon: Users,
      },
      {
        title: "รถโม่",
        href: "/dashboard/basic-data/trucks",
        icon: Truck,
      },
      {
        title: "ขนส่ง",
        href: "/dashboard/basic-data/transport",
        icon: Truck,
      },
    ],
  },
  {
    title: "ลูกค้า",
    icon: Users,
    children: [
      {
        title: "รายชื่อลูกค้า",
        href: "/dashboard/customers",
        icon: Users,
      },
      {
        title: "โรงงาน",
        href: "/dashboard/customers/factories",
        icon: Factory,
      },
      {
        title: "ใบเสนอราคา",
        href: "/dashboard/customers/quotations",
        icon: FileText,
      },
    ],
  },
  {
    title: "การดำเนินงานรายเดือน",
    icon: Calendar,
    children: [
      {
        title: "เที่ยววิ่งวันนี้",
        href: "/dashboard/monthly-operations/today-trips",
        icon: Calendar,
      },
      {
        title: "เที่ยววิ่ง",
        href: "/dashboard/monthly-operations/trips",
        icon: Calendar,
      },
      {
        title: "วางบิล",
        href: "/dashboard/monthly-operations/billing",
        icon: Receipt,
      },
      {
        title: "พนักงาน",
        href: "/dashboard/monthly-operations/employees",
        icon: UserCheck,
      },
      {
        title: "น้ำมัน",
        href: "/dashboard/monthly-operations/fuel",
        icon: Fuel,
      },
      {
        title: "ซ่อมบำรุง",
        href: "/dashboard/monthly-operations/maintenance",
        icon: Wrench,
      },
      {
        title: "Excel Templates",
        href: "/dashboard/monthly-operations/excel-templates",
        icon: FileSpreadsheet,
      },
    ],
  },
  {
    title: "รายได้บริษัท",
    href: "/dashboard/company-income",
    icon: DollarSign,
  },
  {
    title: "รายจ่ายบริษัท",
    href: "/dashboard/company-expenses",
    icon: DollarSign,
  },
  {
    title: "ซัพพลายเออร์",
    href: "/dashboard/suppliers",
    icon: Building2,
  },
  {
    title: "รายงาน",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "GPM",
    href: "/dashboard/gpm",
    icon: BarChart3,
  },
  {
    title: "LINE OA",
    icon: MessageSquare,
    children: [
      {
        title: "ส่งข้อความ",
        href: "/dashboard/line-oa/send",
        icon: MessageSquare,
      },
      {
        title: "เทมเพลต",
        href: "/dashboard/line-oa/templates",
        icon: FileText,
      },
      {
        title: "ประวัติการส่ง",
        href: "/dashboard/line-oa/history",
        icon: Calendar,
      },
      {
        title: "วิเคราะห์",
        href: "/dashboard/line-oa/analytics",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "การแจ้งเตือน",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "ระบบอนุมัติ",
    href: "/dashboard/approval-system",
    icon: CheckSquare,
  },
  {
    title: "ตั้งค่าระบบ",
    icon: Settings,
    children: [
      {
        title: "ผู้ใช้งาน",
        href: "/dashboard/settings/users",
        icon: Users,
        roles: ["admin", "manager"],
      },
      {
        title: "บทบาท",
        href: "/dashboard/settings/roles",
        icon: Shield,
        roles: ["admin"],
      },
      {
        title: "สิทธิ์การเข้าถึง",
        href: "/dashboard/settings/permissions",
        icon: UserCog,
        roles: ["admin"],
      },
      {
        title: "ระบบ",
        href: "/dashboard/settings/system",
        icon: Cog,
        roles: ["admin"],
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const userRole = "admin" // This would come from your auth context

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const isItemVisible = (item: MenuItem) => {
    if (!item.roles) return true
    return item.roles.includes(userRole)
  }

  const renderMenuItem = (item: MenuItem, level = 0) => {
    if (!isItemVisible(item)) return null

    const isExpanded = expandedItems.includes(item.title)
    const hasChildren = item.children && item.children.length > 0
    const isActive = item.href === pathname

    if (hasChildren) {
      return (
        <div key={item.title}>
          <button
            onClick={() => toggleExpanded(item.title)}
            className={cn(
              "w-full flex items-center justify-between px-4 py-2 text-left text-sm font-medium rounded-lg transition-colors",
              "hover:bg-gray-100 text-gray-700",
              level > 0 && "ml-4",
            )}
          >
            <div className="flex items-center">
              <item.icon className="mr-3 h-4 w-4" />
              {item.title}
            </div>
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {isExpanded && (
            <div className="mt-1 space-y-1">{item.children.map((child) => renderMenuItem(child, level + 1))}</div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.title}
        href={item.href!}
        className={cn(
          "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100",
          level > 0 && "ml-4",
        )}
      >
        <item.icon className="mr-3 h-4 w-4" />
        {item.title}
      </Link>
    )
  }

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4 space-y-2">{menuItems.map((item) => renderMenuItem(item))}</nav>
    </div>
  )
}
