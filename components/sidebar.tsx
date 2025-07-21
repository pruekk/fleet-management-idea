"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Building2,
  Users,
  Truck,
  Factory,
  FileText,
  Calculator,
  BarChart3,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronRight,
  Home,
  DollarSign,
  Package,
  Bell,
  CheckSquare,
  UserCheck,
  Shield,
  Calendar,
  MapPin,
  Fuel,
  Wrench,
  Receipt,
  FileSpreadsheet,
  Quote,
  TrendingUp,
  X,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItem {
  title: string
  href?: string
  icon: any
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
    icon: Building2,
    children: [
      { title: "บริษัท", href: "/dashboard/basic-data/companies", icon: Building2 },
      { title: "พนักงาน", href: "/dashboard/basic-data/employees", icon: Users },
      { title: "รถโม่", href: "/dashboard/basic-data/trucks", icon: Truck },
      { title: "ขนส่ง", href: "/dashboard/basic-data/transport", icon: MapPin },
    ],
  },
  {
    title: "ลูกค้า",
    icon: Users,
    children: [
      { title: "รายชื่อลูกค้า", href: "/dashboard/customers", icon: Users },
      { title: "โรงงาน", href: "/dashboard/customers/factories", icon: Factory },
      { title: "ใบเสนอราคา", href: "/dashboard/customers/quotations", icon: Quote },
    ],
  },
  {
    title: "การดำเนินงานรายเดือน",
    icon: Calendar,
    children: [
      { title: "เที่ยววิ่งวันนี้", href: "/dashboard/monthly-operations/today-trips", icon: Calendar },
      { title: "เที่ยววิ่ง", href: "/dashboard/monthly-operations/trips", icon: MapPin },
      { title: "วางบิล", href: "/dashboard/monthly-operations/billing", icon: Receipt },
      { title: "พนักงาน", href: "/dashboard/monthly-operations/employees", icon: Users },
      { title: "น้ำมัน", href: "/dashboard/monthly-operations/fuel", icon: Fuel },
      { title: "ซ่อมบำรุง", href: "/dashboard/monthly-operations/maintenance", icon: Wrench },
      { title: "เทมเพลต Excel", href: "/dashboard/monthly-operations/excel-templates", icon: FileSpreadsheet },
    ],
  },
  {
    title: "รายได้บริษัท",
    href: "/dashboard/company-income",
    icon: DollarSign,
  },
  {
    title: "ค่าใช้จ่ายบริษัท",
    href: "/dashboard/company-expenses",
    icon: Calculator,
  },
  {
    title: "ซัพพลายเออร์",
    href: "/dashboard/suppliers",
    icon: Package,
  },
  {
    title: "รายงาน",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "LINE OA",
    icon: MessageSquare,
    children: [
      { title: "ส่งข้อความ", href: "/dashboard/line-oa/send", icon: MessageSquare },
      { title: "เทมเพลตข้อความ", href: "/dashboard/line-oa/templates", icon: FileText },
      { title: "ประวัติการส่ง", href: "/dashboard/line-oa/history", icon: FileText },
      { title: "สถิติ", href: "/dashboard/line-oa/analytics", icon: TrendingUp },
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
    title: "GPM",
    href: "/dashboard/gpm",
    icon: TrendingUp,
  },
  {
    title: "ตั้งค่าระบบ",
    icon: Settings,
    children: [
      { title: "ผู้ใช้งาน", href: "/dashboard/settings/users", icon: Users },
      { title: "บทบาท", href: "/dashboard/settings/roles", icon: UserCheck },
      { title: "สิทธิ์การเข้าถึง", href: "/dashboard/settings/permissions", icon: Shield },
      { title: "ระบบ", href: "/dashboard/settings/system", icon: Settings },
    ],
  },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const isActive = item.href === pathname
    const isExpanded = expandedItems.includes(item.title)
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.title}>
        {item.href ? (
          <Link
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
              level > 0 && "ml-4",
              isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            )}
            onClick={onClose}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.title}
          </Link>
        ) : (
          <button
            onClick={() => toggleExpanded(item.title)}
            className={cn(
              "flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors",
              level > 0 && "ml-4",
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            <span className="flex-1 text-left">{item.title}</span>
            {hasChildren && (isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
          </button>
        )}

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">{item.children?.map((child) => renderMenuItem(child, level + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900">เมนู</h2>
          <button onClick={onClose} className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>
      </div>
    </>
  )
}
