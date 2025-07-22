"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Search, Filter, Building2, MapPin, Phone } from "lucide-react"

export default function CustomersPage() {
  const [customers] = useState([
    {
      id: 1,
      name: "บริษัท ก่อสร้าง ABC จำกัด",
      contact: "คุณสมชาย",
      phone: "02-123-4567",
      taxId: "0123456789012",
      address: "123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110",
      email: "contact@abc-construction.com",
      factories: 3,
      status: "ใช้งานอยู่",
      contractValue: "2,500,000",
      type: "ลูกค้า",
    },
    {
      id: 2,
      name: "บริษัท โครงการใหญ่ จำกัด",
      contact: "คุณสมหญิง",
      phone: "02-234-5678",
      taxId: "0987654321098",
      address: "456 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900",
      email: "info@big-project.com",
      factories: 2,
      status: "ใช้งานอยู่",
      contractValue: "5,200,000",
      type: "ลูกค้า",
    },
    {
      id: 3,
      name: "บริษัท พัฒนาที่ดิน จำกัด",
      contact: "คุณสมศักดิ์",
      phone: "02-345-6789",
      taxId: "1122334455667",
      address: "789 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400",
      email: "contact@land-dev.com",
      factories: 1,
      status: "หยุดใช้งาน",
      contractValue: "1,800,000",
      type: "ลูกค้า",
    },
    {
      id: 4,
      name: "บริษัท วัสดุก่อสร้าง XYZ จำกัด",
      contact: "คุณสมปอง",
      phone: "02-456-7890",
      taxId: "2233445566778",
      address: "321 ถนนเพชรบุรี แขวงมักกะสัน เขตราชเทวี กรุงเทพฯ 10400",
      email: "supply@xyz-materials.com",
      factories: 0,
      status: "ใช้งานอยู่",
      contractValue: "800,000",
      type: "บริษัท",
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
        <h1 className="text-3xl font-bold text-gray-900">จัดการลูกค้าและบริษัท</h1>
        <p className="text-gray-600">ข้อมูลลูกค้า บริษัท และโรงงานในระบบ</p>
      </div>

      <Tabs defaultValue="customers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="customers">ลูกค้าและบริษัท</TabsTrigger>
          <TabsTrigger value="factories">โรงงาน</TabsTrigger>
        </TabsList>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    รายชื่อลูกค้าและบริษัท
                  </CardTitle>
                  <CardDescription>ลูกค้าและบริษัทคู่ค้าทั้งหมดในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มลูกค้า/บริษัท
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
                    <TableHead>ผู้ติดต่อ</TableHead>
                    <TableHead>เบอร์โทร</TableHead>
                    <TableHead>เลขประจำตัวผู้เสียภาษี</TableHead>
                    <TableHead>มูลค่าสัญญา</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            customer.type === "ลูกค้า" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"
                          }
                        >
                          {customer.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.contact}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          {customer.phone}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{customer.taxId}</TableCell>
                      <TableCell className="font-medium text-green-600">฿{customer.contractValue}</TableCell>
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
        </TabsContent>

        <TabsContent value="factories">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
