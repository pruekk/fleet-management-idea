"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Search, Filter, Building2, MapPin, Phone } from "lucide-react"

export default function CustomersPage() {
  const [customers] = useState([
    {
      id: 1,
      name: "บริษัท ก่อสร้าง ABC จำกัด",
      contact: "คุณสมชาย",
      phone: "02-123-4567",
      factories: 3,
      status: "ใช้งานอยู่",
    },
    {
      id: 2,
      name: "บริษัท โครงการใหญ่ จำกัด",
      contact: "คุณสมหญิง",
      phone: "02-234-5678",
      factories: 2,
      status: "ใช้งานอยู่",
    },
    {
      id: 3,
      name: "บริษัท พัฒนาที่ดิน จำกัด",
      contact: "คุณสมศักดิ์",
      phone: "02-345-6789",
      factories: 1,
      status: "หยุดใช้งาน",
    },
  ])

  const [factories] = useState([
    {
      id: 1,
      name: "โรงงานสาขา 1",
      customer: "บริษัท ก่อสร้าง ABC จำกัด",
      address: "123 ถนนพระราม 4 กรุงเทพฯ",
      assignedTrucks: ["80-1234", "80-1235"],
      status: "ใช้งานอยู่",
    },
    {
      id: 2,
      name: "โรงงานสาขา 2",
      customer: "บริษัท ก่อสร้าง ABC จำกัด",
      address: "456 ถนนสุขุมวิท กรุงเทพฯ",
      assignedTrucks: ["80-1236"],
      status: "ใช้งานอยู่",
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการลูกค้า</h1>
        <p className="text-gray-600">ข้อมูลลูกค้าและโรงงานในระบบ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    รายชื่อลูกค้า
                  </CardTitle>
                  <CardDescription>ลูกค้าทั้งหมดในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มลูกค้า
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ค้นหาชื่อลูกค้า..." className="pl-10" />
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
                    <TableHead>ผู้ติดต่อ</TableHead>
                    <TableHead>เบอร์โทร</TableHead>
                    <TableHead>โรงงาน</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.contact}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          {customer.phone}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{customer.factories} แห่ง</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={customer.status === "ใช้งานอยู่" ? "secondary" : "destructive"}
                          className={customer.status === "ใช้งานอยู่" ? "bg-green-100 text-green-800" : ""}
                        >
                          {customer.status}
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
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                โรงงาน
              </CardTitle>
              <CardDescription>โรงงานของลูกค้า</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {factories.map((factory) => (
                  <div key={factory.id} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{factory.name}</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {factory.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{factory.customer}</p>
                    <p className="text-sm text-muted-foreground">{factory.address}</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs text-muted-foreground">รถประจำ:</span>
                      {factory.assignedTrucks.map((truck, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {truck}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
