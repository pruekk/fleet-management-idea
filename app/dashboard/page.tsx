"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Users, Building2, DollarSign, TrendingUp, AlertTriangle } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "รถโม่ทั้งหมด",
      value: "24",
      change: "+2",
      changeType: "positive" as const,
      icon: Truck,
    },
    {
      title: "พนักงาน",
      value: "48",
      change: "+3",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "ลูกค้าใช้งาน",
      value: "12",
      change: "+1",
      changeType: "positive" as const,
      icon: Building2,
    },
    {
      title: "รายได้เดือนนี้",
      value: "2.4M",
      change: "+12%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "trip",
      message: "รถโม่ 83-5948 เสร็จสิ้นการส่งมอบที่โครงการ ABC",
      time: "10 นาทีที่แล้ว",
      status: "completed",
    },
    {
      id: 2,
      type: "maintenance",
      message: "รถโม่ 83-5949 เข้าซ่อมบำรุงประจำ",
      time: "30 นาทีที่แล้ว",
      status: "in-progress",
    },
    {
      id: 3,
      type: "billing",
      message: "ออกใบแจ้งหนี้ให้บริษัท XYZ จำกัด",
      time: "1 ชั่วโมงที่แล้ว",
      status: "completed",
    },
    {
      id: 4,
      type: "alert",
      message: "รถโม่ 83-5950 ต้องการการซ่อมบำรุงด่วน",
      time: "2 ชั่วโมงที่แล้ว",
      status: "urgent",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "urgent":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "เสร็จสิ้น"
      case "in-progress":
        return "กำลังดำเนินการ"
      case "urgent":
        return "ด่วน"
      default:
        return "ปกติ"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ด</h1>
        <p className="text-gray-600">ภาพรวมระบบจัดการกองรถโม่ปูน</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.changeType === "positive" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>{" "}
                จากเดือนที่แล้ว
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>กิจกรรมล่าสุด</CardTitle>
            <CardDescription>กิจกรรมที่เกิดขึ้นในระบบล่าสุด</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {activity.type === "alert" ? (
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    ) : activity.type === "trip" ? (
                      <Truck className="h-5 w-5 text-blue-500" />
                    ) : activity.type === "maintenance" ? (
                      <TrendingUp className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <DollarSign className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                      <Badge className={getStatusColor(activity.status)}>{getStatusText(activity.status)}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>การดำเนินการด่วน</CardTitle>
            <CardDescription>ฟังก์ชันที่ใช้บ่อยในระบบ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Truck className="h-6 w-6" />
                <span className="text-sm">เพิ่มเที่ยววิ่ง</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <DollarSign className="h-6 w-6" />
                <span className="text-sm">วางบิล</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Users className="h-6 w-6" />
                <span className="text-sm">เพิ่มพนักงาน</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Building2 className="h-6 w-6" />
                <span className="text-sm">เพิ่มลูกค้า</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
