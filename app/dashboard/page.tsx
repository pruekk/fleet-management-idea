"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Truck,
  Users,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "รถโม่ทั้งหมด",
      value: "24",
      change: "+2",
      changeType: "increase" as const,
      icon: Truck,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "พนักงานทั้งหมด",
      value: "48",
      change: "+3",
      changeType: "increase" as const,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "รายได้เดือนนี้",
      value: "2,450,000",
      change: "+12.5%",
      changeType: "increase" as const,
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      title: "เที่ยววิ่งวันนี้",
      value: "156",
      change: "-8",
      changeType: "decrease" as const,
      icon: BarChart3,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "billing",
      title: "วางบิลใหม่",
      description: "บริษัท ก่อสร้าง ABC จำกัด - 45,000 บาท",
      time: "5 นาทีที่แล้ว",
      status: "pending",
    },
    {
      id: 2,
      type: "maintenance",
      title: "ซ่อมบำรุงเสร็จสิ้น",
      description: "รถโม่หมายเลข 83-5948 - เปลี่ยนยางหน้า",
      time: "30 นาทีที่แล้ว",
      status: "completed",
    },
    {
      id: 3,
      type: "trip",
      title: "เที่ยววิ่งใหม่",
      description: "โครงการคอนโดมิเนียม XYZ - 3 เที่ยว",
      time: "1 ชั่วโมงที่แล้ว",
      status: "in-progress",
    },
    {
      id: 4,
      type: "approval",
      title: "รออนุมัติ",
      description: "คำขอเบิกน้ำมัน - 15,000 บาท",
      time: "2 ชั่วโมงที่แล้ว",
      status: "pending",
    },
  ]

  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "รถโม่ต้องการซ่อมบำรุง",
      description: "รถโม่หมายเลข 83-5947 ครบกำหนดซ่อมบำรุงใน 3 วัน",
      priority: "high",
    },
    {
      id: 2,
      type: "info",
      title: "ใบเสนอราคาใกล้หมดอายุ",
      description: "ใบเสนอราคาโครงการ DEF หมดอายุใน 5 วัน",
      priority: "medium",
    },
    {
      id: 3,
      type: "success",
      title: "การชำระเงินเสร็จสิ้น",
      description: "ได้รับชำระเงินจากบริษัท GHI จำกัด แล้ว",
      priority: "low",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "pending":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      default:
        return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <FileText className="h-4 w-4 text-blue-600" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">สูง</Badge>
      case "medium":
        return <Badge variant="secondary">ปานกลาง</Badge>
      case "low":
        return <Badge variant="outline">ต่ำ</Badge>
      default:
        return <Badge variant="outline">ปกติ</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">แดชบอร์ด</h1>
        <p className="text-muted-foreground">ภาพรวมระบบจัดการกองรถโม่ปูน</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`rounded-full p-2 ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.changeType === "increase" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
                )}
                <span className={stat.changeType === "increase" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>
                <span className="ml-1">จากเดือนที่แล้ว</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activities */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>กิจกรรมล่าสุด</CardTitle>
            <CardDescription>รายการกิจกรรมที่เกิดขึ้นในระบบ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{getStatusIcon(activity.status)}</div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>การแจ้งเตือน</CardTitle>
            <CardDescription>รายการแจ้งเตือนที่ต้องดำเนินการ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium leading-none">{alert.title}</p>
                      {getPriorityBadge(alert.priority)}
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full bg-transparent">
                ดูการแจ้งเตือนทั้งหมด
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
