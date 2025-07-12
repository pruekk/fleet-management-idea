"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Download, Plus, Edit, Trash2, Route } from "lucide-react"

export default function TripsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const excelTemplates = [
    { id: "standard", name: "แบบฟอร์มมาตรฐาน", description: "เทมเพลตพื้นฐานสำหรับบันทึกการวิ่งเที่ยว" },
    { id: "detailed", name: "แบบฟอร์มรายละเอียด", description: "เทมเพลตที่มีข้อมูลครบถ้วน" },
    { id: "simple", name: "แบบฟอร์มง่าย", description: "เทมเพลตแบบง่ายสำหรับข้อมูลพื้นฐาน" },
  ]

  const [trips, setTrips] = useState([
    {
      id: 1,
      date: "2024-12-15",
      truck: "80-1234",
      driver: "สมชาย ใจดี",
      customer: "บริษัท ABC",
      factory: "โรงงานสาขา 1",
      trips: 8,
      revenue: 12000,
      distance: 15,
      fuelUsed: 80,
    },
    {
      id: 2,
      date: "2024-12-15",
      truck: "80-1235",
      driver: "สมหญิง รักงาน",
      customer: "บริษัท XYZ",
      factory: "โรงงานใหญ่",
      trips: 6,
      revenue: 9000,
      distance: 12,
      fuelUsed: 60,
    },
    {
      id: 3,
      date: "2024-12-15",
      truck: "80-1236",
      driver: "สมศักดิ์ ขยัน",
      customer: "บริษัท ABC",
      factory: "โรงงานสาขา 2",
      trips: 7,
      revenue: 10500,
      distance: 18,
      fuelUsed: 70,
    },
  ])

  const [newTrip, setNewTrip] = useState({
    date: "",
    truck: "",
    driver: "",
    customer: "",
    factory: "",
    trips: "",
    revenue: "",
    distance: "",
    fuelUsed: "",
  })

  const handleAddTrip = () => {
    if (newTrip.date && newTrip.truck && newTrip.driver && newTrip.trips) {
      setTrips([
        ...trips,
        {
          id: trips.length + 1,
          date: newTrip.date,
          truck: newTrip.truck,
          driver: newTrip.driver,
          customer: newTrip.customer,
          factory: newTrip.factory,
          trips: Number.parseInt(newTrip.trips),
          revenue: Number.parseInt(newTrip.revenue) || 0,
          distance: Number.parseInt(newTrip.distance) || 0,
          fuelUsed: Number.parseInt(newTrip.fuelUsed) || 0,
        },
      ])
      setNewTrip({
        date: "",
        truck: "",
        driver: "",
        customer: "",
        factory: "",
        trips: "",
        revenue: "",
        distance: "",
        fuelUsed: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">การวิ่งเที่ยว</h1>
        <p className="text-gray-600">ข้อมูลการวิ่งเที่ยวประจำวัน</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Route className="h-5 w-5" />
                บันทึกการวิ่งเที่ยว
              </CardTitle>
              <CardDescription>จัดการข้อมูลการวิ่งเที่ยวประจำวัน</CardDescription>
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    นำเข้า Excel
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>เลือกเทมเพลต Excel</DialogTitle>
                    <DialogDescription>เลือกรูปแบบเทมเพลตที่ต้องการใช้</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="template">เทมเพลต</Label>
                      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกเทมเพลต" />
                        </SelectTrigger>
                        <SelectContent>
                          {excelTemplates.map((template) => (
                            <SelectItem key={template.id} value={template.id}>
                              {template.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {selectedTemplate && (
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          {excelTemplates.find((t) => t.id === selectedTemplate)?.description}
                        </p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Upload className="mr-2 h-4 w-4" />
                        อัปโหลดไฟล์
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        ดาวน์โหลดเทมเพลต
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                ส่งออก
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    เพิ่มข้อมูล
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>เพิ่มข้อมูลการวิ่งเที่ยว</DialogTitle>
                    <DialogDescription>บันทึกข้อมูลการวิ่งเที่ยวใหม่</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">วันที่</Label>
                        <Input
                          id="date"
                          type="date"
                          value={newTrip.date}
                          onChange={(e) => setNewTrip({ ...newTrip, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="truck">รถโม่</Label>
                        <Select
                          value={newTrip.truck}
                          onValueChange={(value) => setNewTrip({ ...newTrip, truck: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกรถโม่" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="80-1234">80-1234</SelectItem>
                            <SelectItem value="80-1235">80-1235</SelectItem>
                            <SelectItem value="80-1236">80-1236</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="driver">คนขับ</Label>
                        <Select
                          value={newTrip.driver}
                          onValueChange={(value) => setNewTrip({ ...newTrip, driver: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกคนขับ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="สมชาย ใจดี">สมชาย ใจดี</SelectItem>
                            <SelectItem value="สมหญิง รักงาน">สมหญิง รักงาน</SelectItem>
                            <SelectItem value="สมศักดิ์ ขยัน">สมศักดิ์ ขยัน</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="customer">ลูกค้า</Label>
                        <Select
                          value={newTrip.customer}
                          onValueChange={(value) => setNewTrip({ ...newTrip, customer: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกลูกค้า" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="บริษัท ABC">บริษัท ABC</SelectItem>
                            <SelectItem value="บริษัท XYZ">บริษัท XYZ</SelectItem>
                            <SelectItem value="บริษัท DEF">บริษัท DEF</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="factory">โรงงาน</Label>
                      <Select
                        value={newTrip.factory}
                        onValueChange={(value) => setNewTrip({ ...newTrip, factory: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกโรงงาน" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="โรงงานสาขา 1">โรงงานสาขา 1</SelectItem>
                          <SelectItem value="โรงงานสาขา 2">โรงงานสาขา 2</SelectItem>
                          <SelectItem value="โรงงานใหญ่">โรงงานใหญ่</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="trips">จำนวนเที่ยว</Label>
                        <Input
                          id="trips"
                          type="number"
                          value={newTrip.trips}
                          onChange={(e) => setNewTrip({ ...newTrip, trips: e.target.value })}
                          placeholder="8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="revenue">รายได้ (บาท)</Label>
                        <Input
                          id="revenue"
                          type="number"
                          value={newTrip.revenue}
                          onChange={(e) => setNewTrip({ ...newTrip, revenue: e.target.value })}
                          placeholder="12000"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="distance">ระยะทาง (กม.)</Label>
                        <Input
                          id="distance"
                          type="number"
                          value={newTrip.distance}
                          onChange={(e) => setNewTrip({ ...newTrip, distance: e.target.value })}
                          placeholder="15"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fuelUsed">น้ำมันใช้ (ลิตร)</Label>
                        <Input
                          id="fuelUsed"
                          type="number"
                          value={newTrip.fuelUsed}
                          onChange={(e) => setNewTrip({ ...newTrip, fuelUsed: e.target.value })}
                          placeholder="80"
                        />
                      </div>
                    </div>
                    <Button onClick={handleAddTrip} className="w-full">
                      บันทึกข้อมูล
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <Label htmlFor="date-from">วันที่เริ่มต้น</Label>
              <Input id="date-from" type="date" />
            </div>
            <div>
              <Label htmlFor="date-to">วันที่สิ้นสุด</Label>
              <Input id="date-to" type="date" />
            </div>
            <div>
              <Label htmlFor="truck-filter">รถโม่</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกรถโม่" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทั้งหมด</SelectItem>
                  <SelectItem value="80-1234">80-1234</SelectItem>
                  <SelectItem value="80-1235">80-1235</SelectItem>
                  <SelectItem value="80-1236">80-1236</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="customer-filter">ลูกค้า</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกลูกค้า" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทั้งหมด</SelectItem>
                  <SelectItem value="บริษัท ABC">บริษัท ABC</SelectItem>
                  <SelectItem value="บริษัท XYZ">บริษัท XYZ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>วันที่</TableHead>
                <TableHead>รถโม่</TableHead>
                <TableHead>คนขับ</TableHead>
                <TableHead>ลูกค้า</TableHead>
                <TableHead>โรงงาน</TableHead>
                <TableHead>จำนวนเที่ยว</TableHead>
                <TableHead>รายได้</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.date}</TableCell>
                  <TableCell className="font-medium">{trip.truck}</TableCell>
                  <TableCell>{trip.driver}</TableCell>
                  <TableCell>{trip.customer}</TableCell>
                  <TableCell>{trip.factory}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{trip.trips} เที่ยว</Badge>
                  </TableCell>
                  <TableCell className="font-medium text-green-600">฿{trip.revenue.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
