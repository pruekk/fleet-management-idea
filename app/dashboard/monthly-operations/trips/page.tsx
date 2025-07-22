"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Calendar, MapPin } from "lucide-react"

export default function TripsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const trips = [
    {
      id: 1,
      date: "2024-01-15",
      truckNumber: "83-5948",
      driver: "นายสมชาย ใจดี",
      customer: "บริษัท ก่อสร้าง ABC จำกัด",
      destination: "โครงการคอนโดมิเนียม ABC Tower",
      volume: "8.0",
      price: "3,200",
      status: "completed",
    },
    {
      id: 2,
      date: "2024-01-15",
      truckNumber: "83-5949",
      driver: "นายสมปอง เก่งงาน",
      customer: "บริษัท พัฒนาอสังหาริมทรัพย์ XYZ จำกัด",
      destination: "โครงการหมู่บ้าน XYZ Village",
      volume: "6.5",
      price: "2,600",
      status: "in-progress",
    },
    {
      id: 3,
      date: "2024-01-14",
      truckNumber: "83-5950",
      driver: "นายสมศักดิ์ รักงาน",
      customer: "บริษัท โครงสร้างพื้นฐาน DEF จำกัด",
      destination: "โครงการสะพาน DEF Bridge",
      volume: "10.0",
      price: "4,000",
      status: "completed",
    },
  ]

  const filteredTrips = trips.filter(
    (trip) =>
      trip.truckNumber.includes(searchTerm) ||
      trip.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "in-progress":
        return "secondary"
      case "cancelled":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "เสร็จสิ้น"
      case "in-progress":
        return "กำลังดำเนินการ"
      case "cancelled":
        return "ยกเลิก"
      default:
        return "ไม่ทราบสถานะ"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการเที่ยววิ่ง</h1>
          <p className="text-gray-600">จัดการข้อมูลเที่ยววิ่งของรถโม่ปูน</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          เพิ่มเที่ยววิ่ง
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            รายการเที่ยววิ่ง
          </CardTitle>
          <CardDescription>รายการเที่ยววิ่งทั้งหมดของรถโม่ปูน</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ค้นหาเที่ยววิ่ง..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>วันที่</TableHead>
                  <TableHead>หมายเลขรถ</TableHead>
                  <TableHead>คนขับ</TableHead>
                  <TableHead>ลูกค้า</TableHead>
                  <TableHead>จุดหมาย</TableHead>
                  <TableHead>ปริมาณ (ลบ.ม.)</TableHead>
                  <TableHead>ราคา (บาท)</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrips.map((trip) => (
                  <TableRow key={trip.id}>
                    <TableCell>{trip.date}</TableCell>
                    <TableCell className="font-medium">{trip.truckNumber}</TableCell>
                    <TableCell>{trip.driver}</TableCell>
                    <TableCell>{trip.customer}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {trip.destination}
                      </div>
                    </TableCell>
                    <TableCell>{trip.volume}</TableCell>
                    <TableCell>฿{trip.price}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(trip.status)}>{getStatusText(trip.status)}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
