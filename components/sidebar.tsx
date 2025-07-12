"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  LayoutDashboard,
  Settings,
  Database,
  Calendar,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Truck,
  FileText,
  Building2,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface SidebarProps {
  open: boolean
  currentRole: string
}

const rolePermissions = {
  ฝ่ายบริหาร: [
    "dashboard",
    "basic-data",
    "customers",
    "monthly-operations",
    "line-oa",
    "company-income",
    "company-expenses",
    "suppliers",
    "reports",
    "settings",
  ],
  ฝ่ายบุคลากร: ["dashboard", "basic-data", "monthly-operations"],
  "ฝ่ายบัญชี/การเงิน": ["dashboard", "customers", "company-income", "company-expenses", "suppliers"],
  ฝ่ายปฏิบัติการ: ["dashboard", "basic-data-limited", "customers", "monthly-operations", "line-oa"],
  ฝ่ายซ่อมบำรุง: ["dashboard", "basic-data", "monthly-operations"],
  ผู้ดูแลระบบ: [
    "dashboard",
    "settings",
    "basic-data",
    "customers",
    "monthly-operations",
    "line-oa",
    "company-income",
    "company-expenses",
    "suppliers",
    "reports",
  ],
}

const menuCategories = [
  {
    id: "dashboard",
    label: "ภาพรวม",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "basic-data",
    label: "ข้อมูลพื้นฐาน",
    icon: Database,
    subItems: [
      { id: "trucks", label: "รถโม่", href: "/dashboard/basic-data/trucks" },
      { id: "employees", label: "พนักงาน", href: "/dashboard/basic-data/employees" },
      { id: "companies", label: "บริษัท", href: "/dashboard/basic-data/companies" },
      { id: "transport", label: "การโยกรถ", href: "/dashboard/basic-data/transport" },
    ],
  },
  {
    id: "customers",
    label: "ลูกค้า",
    icon: Building2,
    subItems: [
      { id: "customer-list", label: "รายชื่อลูกค้า", href: "/dashboard/customers" },
      { id: "factories", label: "โรงงาน", href: "/dashboard/customers/factories" },
    ],
  },
  {
    id: "monthly-operations",
    label: "ปฏิบัติการรายเดือน",
    icon: Calendar,
    subItems: [
      { id: "trips", label: "วิ่งเที่ยว", href: "/dashboard/monthly-operations/trips" },
      { id: "maintenance", label: "ซ่อมบำรุง", href: "/dashboard/monthly-operations/maintenance" },
      { id: "fuel", label: "น้ำมัน", href: "/dashboard/monthly-operations/fuel" },
      { id: "billing", label: "วางบิล", href: "/dashboard/monthly-operations/billing" },
      { id: "employee-work", label: "พนักงาน", href: "/dashboard/monthly-operations/employees" },
    ],
  },
  {
    id: "line-oa",
    label: "LINE OA",
    icon: MessageSquare,
    subItems: [
      { id: "templates", label: "Template", href: "/dashboard/line-oa/templates" },
      { id: "send-message", label: "ส่งข้อความ", href: "/dashboard/line-oa/send" },
      { id: "message-history", label: "ประวัติข้อความ", href: "/dashboard/line-oa/history" },
      { id: "analytics", label: "สถิติ", href: "/dashboard/line-oa/analytics" },
    ],
  },
  {
    id: "company-income",
    label: "รายได้บริษัท",
    icon: TrendingUp,
    href: "/dashboard/company-income",
  },
  {
    id: "company-expenses",
    label: "รายจ่ายบริษัท",
    icon: TrendingDown,
    href: "/dashboard/company-expenses",
  },
  {
    id: "suppliers",
    label: "Supplier",
    icon: Truck,
    href: "/dashboard/suppliers",
  },
  {
    id: "reports",
    label: "รายงาน",
    icon: FileText,
    href: "/dashboard/reports",
  },
  {
    id: "settings",
    label: "ตั้งค่าระบบ",
    icon: Settings,
    subItems: [
      { id: "roles", label: "จัดการ Role", href: "/dashboard/settings/roles" },
      { id: "permissions", label: "จัดการสิทธิ์", href: "/dashboard/settings/permissions" },
      { id: "users", label: "จัดการผู้ใช้", href: "/dashboard/settings/users" },
      { id: "system", label: "ตั้งค่าระบบ", href: "/dashboard/settings/system" },
    ],
  },
]

export function Sidebar({ open, currentRole }: SidebarProps) {
  const pathname = usePathname()
  const allowedItems = rolePermissions[currentRole as keyof typeof rolePermissions] || []
  const [openCategories, setOpenCategories] = useState<string[]>(["basic-data", "monthly-operations"])

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  return (
    <div
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40 flex flex-col",
        open ? "w-64" : "w-16",
      )}
    >
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuCategories
          .filter((category) => {
            if (currentRole === "ฝ่ายปฏิบัติการ" && category.id === "basic-data") {
              // สำหรับฝ่ายปฏิบัติการ ให้กรองเอา employees ออก
              return {
                ...category,
                subItems: category.subItems?.filter((item) => item.id !== "employees"),
              }
            }
            return allowedItems.includes(category.id)
          })
          .map((category) => {
            const Icon = category.icon
            const isActive = pathname === category.href
            const hasSubItems = category.subItems && category.subItems.length > 0
            const isOpen = openCategories.includes(category.id)

            if (!hasSubItems) {
              return (
                <Link key={category.id} href={category.href || "#"}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn("w-full justify-start", !open && "px-2")}
                  >
                    <Icon className={cn("h-5 w-5", open && "mr-3")} />
                    {open && <span>{category.label}</span>}
                  </Button>
                </Link>
              )
            }

            return (
              <Collapsible key={category.id} open={isOpen} onOpenChange={() => toggleCategory(category.id)}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className={cn("w-full justify-start", !open && "px-2")}>
                    <Icon className={cn("h-5 w-5", open && "mr-3")} />
                    {open && (
                      <>
                        <span className="flex-1 text-left">{category.label}</span>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                {open && (
                  <CollapsibleContent className="space-y-1">
                    {category.subItems?.map((subItem) => {
                      const isSubActive = pathname === subItem.href
                      return (
                        <Link key={subItem.id} href={subItem.href}>
                          <Button
                            variant={isSubActive ? "secondary" : "ghost"}
                            className="w-full justify-start pl-8 text-sm"
                          >
                            {subItem.label}
                          </Button>
                        </Link>
                      )
                    })}
                  </CollapsibleContent>
                )}
              </Collapsible>
            )
          })}
      </nav>
    </div>
  )
}
