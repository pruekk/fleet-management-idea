"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, Users, DollarSign, Calendar, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react"

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
      title: "รายได้เดือนนี้",
      value: "฿2,450,000",
      change: "+12%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "เที่ยววิ่งวันนี้",
      value: "156",
      change: "+8",
      changeType: "positive" as const,
      icon: Calendar,
    },
  ]

  const recentTrips = [
    {
      id: "T001",
      truck: "รถโม่ 001",
      driver: "สมชาย ใจดี",
      destination: "โครงการ ABC",
      status: "completed",
      time: "08:30",
    },
    {
      id: "T002",
      truck: "รถโม่ 002",
      driver: "สมศักดิ์ รักงาน",
      destination: "โครงการ XYZ",
      status: "in-progress",
      time: "09:15",
    },
    {
      id: "T003",
      truck: "รถโม่ 003",
      driver: "สมหมาย ขยัน",
      destination: "โครงการ DEF",
      status: "pending",
      time: "10:00",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            เสร็จสิ้น
          </Badge>
        )
      case "in-progress":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Clock className="w-3 h-3 mr-1" />
            กำลังดำเนินการ
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            รอดำเนินการ
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ด</h1>
        <p className="text-gray-600 mt-2">ภาพรวมการดำเนินงานของระบบจัดการรถโม่</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-gray-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500">{stat.change}</span>
                <span className="ml-1">จากเดือนที่แล้ว</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Trips */}
        <Card>
          <CardHeader>
            <CardTitle>เที่ยววิ่งล่าสุด</CardTitle>
            <CardDescription>รายการเที่ยววิ่งในวันนี้</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrips.map((trip) => (
                <div key={trip.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{trip.truck}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">{trip.driver}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {trip.destination} • {trip.time}
                    </div>
                  </div>
                  <div>{getStatusBadge(trip.status)}</div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              ดูทั้งหมด
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>การดำเนินการด่วน</CardTitle>
            <CardDescription>ฟังก์ชันที่ใช้บ่อย</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center">
                <Calendar className="h-6 w-6 mb-2" />
                <span className="text-sm">เพิ่มเที่ยววิ่ง</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                <Truck className="h-6 w-6 mb-2" />
                <span className="text-sm">จัดการรถโม่</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                <Users className="h-6 w-6 mb-2" />
                <span className="text-sm">จัดการพนักงาน</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                <DollarSign className="h-6 w-6 mb-2" />
                <span className="text-sm">วางบิล</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
            การแจ้งเตือน
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-yellow-500 mr-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">รถโม่ 005 ต้องเข้าซ่อมบำรุง</p>
                <p className="text-xs text-gray-500">กำหนดการซ่อมบำรุงในวันที่ 25 ม.ค. 2024</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <Clock className="h-4 w-4 text-blue-500 mr-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">ใบเสนอราคาใหม่รอการอนุมัติ</p>
                <p className="text-xs text-gray-500">โครงการ ABC - มูลค่า 450,000 บาท</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
