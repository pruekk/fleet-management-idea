"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Search, Filter, Truck, Users, Building2 } from "lucide-react"

export default function BasicDataPage() {
  const [trucks] = useState([
    { id: 1, license: "80-1234", model: "Hino", year: 2020, status: "พร้อมใช้งาน", mileage: 45000 },
    { id: 2, license: "80-1235", model: "Isuzu", year: 2019, status: "ซ่อมบำรุง", mileage: 52000 },
    { id: 3, license: "80-1236", model: "Hino", year: 2021, status: "พร้อมใช้งาน", mileage: 38000 },
  ])

  const [employees] = useState([
    { id: 1, name: "สมชาย ใจดี", position: "คนขับรถโม่", phone: "081-234-5678", status: "ทำงาน" },
    { id: 2, name: "สมหญิง รักงาน", position: "พนักงานทั่วไป", phone: "082-345-6789", status: "ลา" },
    { id: 3, name: "สมศักดิ์ ขยัน", position: "คนขับรถโม่", phone: "083-456-7890", status: "ทำงาน" },
  ])

  const [companies] = useState([
    { id: 1, name: "บริษัท ก่อสร้าง A จำกัด", type: "ลูกค้า", contact: "02-123-4567" },
    { id: 2, name: "บริษัท วัสดุก่อสร้าง B จำกัด", type: "ซัพพลายเออร์", contact: "02-234-5678" },
    { id: 3, name: "บริษัท โครงการ C จำกัด", type: "ลูกค้า", contact: "02-345-6789" },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ข้อมูลพื้นฐาน</h1>
        <p className="text-gray-600">จัดการข้อมูลพื้นฐานของระบบ</p>
      </div>

      <Tabs defaultValue="trucks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trucks">รถโม่</TabsTrigger>
          <TabsTrigger value="employees">พนักงาน</TabsTrigger>
          <TabsTrigger value="companies">บริษัท</TabsTrigger>
          <TabsTrigger value="transport">การโยกรถ</TabsTrigger>
        </TabsList>

        <TabsContent value="trucks">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    จัดการรถโม่
                  </CardTitle>
                  <CardDescription>ข้อมูลรถโม่ทั้งหมดในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มรถโม่
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ค้นหาทะเบียนรถ..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  กรอง
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ทะเบียนรถ</TableHead>
                    <TableHead>รุ่น</TableHead>
                    <TableHead>ปีผลิต</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>เลขไมล์</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trucks.map((truck) => (
                    <TableRow key={truck.id}>
                      <TableCell className="font-medium">{truck.license}</TableCell>
                      <TableCell>{truck.model}</TableCell>
                      <TableCell>{truck.year}</TableCell>
                      <TableCell>
                        <Badge
                          variant={truck.status === "พร้อมใช้งาน" ? "secondary" : "destructive"}
                          className={truck.status === "พร้อมใช้งาน" ? "bg-green-100 text-green-800" : ""}
                        >
                          {truck.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{truck.mileage.toLocaleString()} กม.</TableCell>
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

        <TabsContent value="employees">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    จัดการพนักงาน
                  </CardTitle>
                  <CardDescription>ข้อมูลพนักงานทั้งหมดในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มพนักงาน
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ค้นหาชื่อพนักงาน..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  กรอง
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>ตำแหน่ง</TableHead>
                    <TableHead>เบอร์โทร</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.phone}</TableCell>
                      <TableCell>
                        <Badge
                          variant={employee.status === "ทำงาน" ? "secondary" : "destructive"}
                          className={
                            employee.status === "ทำงาน"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }
                        >
                          {employee.status}
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

        <TabsContent value="companies">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    จัดการบริษัท
                  </CardTitle>
                  <CardDescription>ข้อมูลบริษัทและหน่วยงานต่างๆ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มบริษัท
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ค้นหาชื่อบริษัท..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  กรอง
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ชื่อบริษัท</TableHead>
                    <TableHead>ประเภท</TableHead>
                    <TableHead>เบอร์ติดต่อ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companies.map((company) => (
                    <TableRow key={company.id}>
                      <TableCell className="font-medium">{company.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{company.type}</Badge>
                      </TableCell>
                      <TableCell>{company.contact}</TableCell>
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

        <TabsContent value="transport">
          <Card>
            <CardHeader>
              <CardTitle>การโยกรถ</CardTitle>
              <CardDescription>ข้อมูลระยะทางและอัตราการจ่ายค่าโยกรถ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">อัตราค่าโยกรถ</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>ระยะทาง 0-10 กม.</span>
                      <span className="font-semibold">500 บาท</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>ระยะทาง 11-20 กม.</span>
                      <span className="font-semibold">800 บาท</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>ระยะทาง 21-30 กม.</span>
                      <span className="font-semibold">1,200 บาท</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">อัตราน้ำมันตามระยะทาง</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>ระยะทาง 0-10 กม.</span>
                      <span className="font-semibold">20 ลิตร</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>ระยะทาง 11-20 กม.</span>
                      <span className="font-semibold">35 ลิตร</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>ระยะทาง 21-30 กม.</span>
                      <span className="font-semibold">50 ลิตร</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button>แก้ไขอัตรา</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
