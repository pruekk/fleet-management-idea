"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight } from "lucide-react"

interface SidebarProps {
  open: boolean
  currentRole: string
  onToggle: () => void
}

export function Sidebar({ open, currentRole, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) => (prev.includes(menuId) ? prev.filter((id) => id !== menuId) : [...prev, menuId]))
  }

  const isExpanded = (menuId: string) => expandedMenus.includes(menuId)

  const menuItems = [
    {
      id: "dashboard",
      title: "แดชบอร์ด",
      icon: "🏠",
      href: "/dashboard",
      roles: ["ฝ่ายบริหาร", "ฝ่ายบุคลากร", "ฝ่ายบัญชี/การเงิน", "ฝ่ายปฏิบัติการ", "ฝ่ายซ่อมบำรุง", "ผู้ดูแลระบบ"],
    },
    {
      id: "basic-data",
      title: "ข้อมูลพื้นฐาน",
      icon: "📊",
      roles: ["ฝ่ายบริหาร", "ฝ่ายบุคลากร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
      children: [
        {
          title: "บริษัท",
          href: "/dashboard/basic-data/companies",
          roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
        },
        {
          title: "พนักงาน",
          href: "/dashboard/basic-data/employees",
          roles: ["ฝ่ายบริหาร", "ฝ่ายบุคลากร", "ผู้ดูแลระบบ"],
        },
        {
          title: "รถโม่",
          href: "/dashboard/basic-data/trucks",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ฝ่ายซ่อมบำรุง", "ผู้ดูแลระบบ"],
        },
        {
          title: "ขนส่ง",
          href: "/dashboard/basic-data/transport",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
        },
      ],
    },
    {
      id: "customers",
      title: "ลูกค้า",
      icon: "👥",
      roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
      children: [
        {
          title: "รายชื่อลูกค้า",
          href: "/dashboard/customers",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
        },
        {
          title: "โรงงาน",
          href: "/dashboard/customers/factories",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
        },
        {
          title: "ใบเสนอราคา",
          href: "/dashboard/customers/quotations",
          roles: ["ฝ่ายบริหาร", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
        },
      ],
    },
    {
      id: "monthly-operations",
      title: "การดำเนินงานรายเดือน",
      icon: "📅",
      roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ฝ่ายบัญชี/การเงิน", "ฝ่ายซ่อมบำรุง", "ผู้ดูแลระบบ"],
      children: [
        {
          title: "เที่ยววิ่งวันนี้",
          href: "/dashboard/monthly-operations/today-trips",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
        },
        {
          title: "เที่ยววิ่ง",
          href: "/dashboard/monthly-operations/trips",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
        },
        {
          title: "วางบิล",
          href: "/dashboard/monthly-operations/billing",
          roles: ["ฝ่ายบริหาร", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
        },
        {
          title: "พนักงาน",
          href: "/dashboard/monthly-operations/employees",
          roles: ["ฝ่ายบริหาร", "ฝ่ายบุคลากร", "ผู้ดูแลระบบ"],
        },
        {
          title: "น้ำมัน",
          href: "/dashboard/monthly-operations/fuel",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
        },
        {
          title: "ซ่อมบำรุง",
          href: "/dashboard/monthly-operations/maintenance",
          roles: ["ฝ่ายบริหาร", "ฝ่ายซ่อมบำรุง", "ผู้ดูแลระบบ"],
        },
        {
          title: "เทมเพลต Excel",
          href: "/dashboard/monthly-operations/excel-templates",
          roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
        },
      ],
    },
    {
      id: "company-income",
      title: "รายรับบริษัท",
      icon: "💰",
      href: "/dashboard/company-income",
      roles: ["ฝ่ายบริหาร", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
    },
    {
      id: "company-expenses",
      title: "รายจ่ายบริษัท",
      icon: "💸",
      href: "/dashboard/company-expenses",
      roles: ["ฝ่ายบริหาร", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
    },
    {
      id: "suppliers",
      title: "ซัพพลายเออร์",
      icon: "🏭",
      href: "/dashboard/suppliers",
      roles: ["ฝ่ายบริหาร", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
    },
    {
      id: "gpm",
      title: "GPM",
      icon: "📈",
      href: "/dashboard/gpm",
      roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
    },
    {
      id: "reports",
      title: "รายงาน",
      icon: "📋",
      href: "/dashboard/reports",
      roles: ["ฝ่ายบริหาร", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
    },
    {
      id: "line-oa",
      title: "LINE OA",
      icon: "💬",
      roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
      children: [
        {
          title: "ส่งข้อความ",
          href: "/dashboard/line-oa/send",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
        },
        {
          title: "เทมเพลตข้อความ",
          href: "/dashboard/line-oa/templates",
          roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
        },
        {
          title: "ประวัติการส่ง",
          href: "/dashboard/line-oa/history",
          roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ผู้ดูแลระบบ"],
        },
        {
          title: "สถิติ",
          href: "/dashboard/line-oa/analytics",
          roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
        },
      ],
    },
    {
      id: "notifications",
      title: "การแจ้งเตือน",
      icon: "🔔",
      href: "/dashboard/notifications",
      roles: ["ฝ่ายบริหาร", "ฝ่ายปฏิบัติการ", "ฝ่ายซ่อมบำรุง", "ผู้ดูแลระบบ"],
    },
    {
      id: "approval-system",
      title: "ระบบอนุมัติ",
      icon: "✅",
      href: "/dashboard/approval-system",
      roles: ["ฝ่ายบริหาร", "ฝ่ายบัญชี/การเงิน", "ผู้ดูแลระบบ"],
    },
    {
      id: "settings",
      title: "ตั้งค่าระบบ",
      icon: "⚙️",
      roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
      children: [
        {
          title: "ผู้ใช้งาน",
          href: "/dashboard/settings/users",
          roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
        },
        {
          title: "บทบาท",
          href: "/dashboard/settings/roles",
          roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
        },
        {
          title: "สิทธิ์การใช้งาน",
          href: "/dashboard/settings/permissions",
          roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
        },
        {
          title: "ตั้งค่าทั่วไป",
          href: "/dashboard/settings/system",
          roles: ["ผู้ดูแลระบบ"],
        },
      ],
    },
  ]

  const hasAccess = (roles: string[]) => {
    return roles.includes(currentRole)
  }

  const isActive = (href: string) => {
    return pathname === href
  }

  const isParentActive = (children: any[]) => {
    return children.some((child) => pathname === child.href)
  }

  return (
    <aside
      className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 ${
        open ? "w-64" : "w-20"
      } overflow-y-auto`}
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          if (!hasAccess(item.roles)) return null

          if (item.children) {
            const hasActiveChild = isParentActive(item.children)
            const expanded = isExpanded(item.id) || hasActiveChild

            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    hasActiveChild ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-3">{item.icon}</span>
                    {open && <span>{item.title}</span>}
                  </div>
                  {open && (expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
                </button>

                {expanded && open && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.children.map((child) => {
                      if (!hasAccess(child.roles)) return null

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                            isActive(child.href)
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          {child.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          }

          return (
            <Link
              key={item.id}
              href={item.href!}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(item.href!) ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {open && <span>{item.title}</span>}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
