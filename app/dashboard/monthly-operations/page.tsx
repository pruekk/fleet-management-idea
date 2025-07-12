"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Download, Plus, Edit, Trash2, FileText, Fuel, Route } from "lucide-react"

export default function MonthlyOperationsPage() {
  const [trips] = useState([
    { id: 1, date: "2024-12-15", truck: "80-1234", driver: "สมชาย", customer: "บริษัท ABC", trips: 8, revenue: 12000 },
    { id: 2, date: "2024-12-15", truck: "80-1235", driver: "สมหญิง", customer: "บริษัท XYZ", trips: 6, revenue: 9000 },
    { id: 3, date: "2024-12-15", truck: "80-1236", driver: "สมศักดิ์", customer: "บริษัท ABC", trips: 7, revenue: 10500 },
  ])

  const [maintenance] = useState([
    { id: 1, truck: "80-1234", type: "เปลี่ยนน้ำมันเครื่อง", cost: 2500, date: "2024-12-10", status: "เสร็จสิ้น" },
    { id: 2, truck: "80-1235", type: "ซ่อมเบรก", cost: 8500, date: "2024-12-12", status: "กำลังซ่อม" },
    { id: 3, truck: "80-1236", type: "เปลี่ยนยาง", cost: 15000, date: "2024-12-14", status: "เสร็จสิ้น" },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ปฏิบัติการรายเดือน</h1>
        <p className="text-gray-600">จัดการข้อมูลการปฏิบัติงานประจำเดือน</p>
      </div>

      <Tabs defaultValue="trips" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trips">วิ่งเที่ยว</TabsTrigger>
          <TabsTrigger value="maintenance">ซ่อมบำรุง</TabsTrigger>
          <TabsTrigger value="fuel">น้ำมัน</TabsTrigger>
          <TabsTrigger value="billing">วางบิล</TabsTrigger>
          <TabsTrigger value="employees">พนักงาน</TabsTrigger>
        </TabsList>

        <TabsContent value="trips">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Route className="h-5 w-5" />
                    การวิ่งเที่ยว
                  </CardTitle>
                  <CardDescription>ข้อมูลการวิ่งเที่ยวประจำวัน</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    นำเข้า Excel
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    ส่งออก
                  </Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    เพิ่มข้อมูล
                  </Button>
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
                  <Input id="truck-filter" placeholder="เลือกรถโม่" />
                </div>
                <div>
                  <Label htmlFor="customer-filter">ลูกค้า</Label>
                  <Input id="customer-filter" placeholder="เลือกลูกค้า" />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>วันที่</TableHead>
                    <TableHead>รถโม่</TableHead>
                    <TableHead>คนขับ</TableHead>
                    <TableHead>ลูกค้า</TableHead>
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
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>การซ่อมบำรุง</CardTitle>
                  <CardDescription>ข้อมูลการซ่อมบำรุงรถโม่</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    นำเข้าจาก Ursa
                  </Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    เพิ่มรายการ
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รถโม่</TableHead>
                    <TableHead>ประเภทการซ่อม</TableHead>
                    <TableHead>ค่าใช้จ่าย</TableHead>
                    <TableHead>วันที่</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maintenance.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.truck}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell className="font-medium text-red-600">฿{item.cost.toLocaleString()}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={item.status === "เสร็จสิ้น" ? "secondary" : "destructive"}
                          className={
                            item.status === "เสร็จสิ้น" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
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
        </TabsContent>

        <TabsContent value="fuel">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5" />
                จัดการน้ำมัน
              </CardTitle>
              <CardDescription>ข้อมูลการเติมน้ำมันและการให้น้ำมัน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">การเติมน้ำมัน</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">รถโม่ 80-1234</p>
                        <p className="text-sm text-muted-foreground">วันที่ 15/12/2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">150 ลิตร</p>
                        <p className="text-sm text-muted-foreground">฿4,500</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">รถโม่ 80-1235</p>
                        <p className="text-sm text-muted-foreground">วันที่ 15/12/2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">120 ลิตร</p>
                        <p className="text-sm text-muted-foreground">฿3,600</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">การให้น้ำมัน</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">โยกรถไปโรงงาน A</p>
                        <p className="text-sm text-muted-foreground">ระยะทาง 25 กม.</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">50 ลิตร</p>
                        <p className="text-sm text-muted-foreground">ตามมาตรฐาน</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">วิ่งเที่ยวปกติ</p>
                        <p className="text-sm text-muted-foreground">8 เที่ยว</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">80 ลิตร</p>
                        <p className="text-sm text-muted-foreground">10 ลิตร/เที่ยว</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  นำเข้า Excel
                </Button>
                <Button>เพิ่มรายการ</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    วางบิลลูกค้า
                  </CardTitle>
                  <CardDescription>สร้างและจัดการใบแจ้งหนี้</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  สร้างใบแจ้งหนี้
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="billing-month">เดือน</Label>
                    <Input id="billing-month" type="month" />
                  </div>
                  <div>
                    <Label htmlFor="billing-customer">ลูกค้า</Label>
                    <Input id="billing-customer" placeholder="เลือกลูกค้า" />
                  </div>
                  <div>
                    <Label htmlFor="billing-status">สถานะ</Label>
                    <Input id="billing-status" placeholder="เลือกสถานะ" />
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="font-semibold">รายการค่าใช้จ่าย</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>ค่าวิ่งเที่ยว (21 เที่ยว)</span>
                        <span className="font-medium">฿31,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ค่าโยกรถ (2 ครั้ง)</span>
                        <span className="font-medium">฿2,400</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ค่าครองชีพ</span>
                        <span className="font-medium">฿1,200</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>ค่าปรับเทนาน (1 ครั้ง)</span>
                        <span className="font-medium text-red-600">-฿500</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">รวมทั้งสิ้น</span>
                        <span className="font-bold text-green-600">฿34,600</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    ส่งออก PDF
                  </Button>
                  <Button>บันทึกใบแจ้งหนี้</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees">
          <Card>
            <CardHeader>
              <CardTitle>การปฏิบัติงานพนักงาน</CardTitle>
              <CardDescription>ข้อมูลการทำงานของพนักงานรายเดือน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">พนักงานรถโม่</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">สมชาย ใจดี</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          ทำงาน
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>งานใน: 20 เที่ยว × ฿150 = ฿3,000</p>
                        <p>งานนอก: 5 เที่ยว × ฿200 = ฿1,000</p>
                        <p>ล่วงเวลา: 8 ชม. × ฿50 = ฿400</p>
                        <p className="font-semibold text-green-600">รวม: ฿4,400</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">พนักงานทั่วไป</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">สมหญิง รักงาน</span>
                        <Badge variant="destructive" className="bg-orange-100 text-orange-800">
                          ลา
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>เงินเดือน: ฿15,000</p>
                        <p>วันลา: 2 วัน</p>
                        <p>หักเงิน: ฿1,000</p>
                        <p className="font-semibold text-green-600">รวม: ฿14,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
