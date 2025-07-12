"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Search, Filter, Building2, Phone, CreditCard, History } from "lucide-react"

export default function SuppliersPage() {
  const [suppliers] = useState([
    {
      id: 1,
      name: "บริษัท ปตท. จำกัด",
      type: "น้ำมัน",
      contact: "คุณสมชาย",
      phone: "02-123-4567",
      bank: "กสิกรไทย 123-4-56789-0",
      totalPaid: 2500000,
      status: "ใช้งานอยู่",
    },
    {
      id: 2,
      name: "อู่ช่างสมชาย",
      type: "ซ่อมบำรุง",
      contact: "คุณสมชาย",
      phone: "081-234-5678",
      bank: "ไทยพาณิชย์ 234-5-67890-1",
      totalPaid: 850000,
      status: "ใช้งานอยู่",
    },
    {
      id: 3,
      name: "บริษัท อะไหล่รถ จำกัด",
      type: "อะไหล่",
      contact: "คุณสมหญิง",
      phone: "082-345-6789",
      bank: "กรุงเทพ 345-6-78901-2",
      totalPaid: 450000,
      status: "หยุดใช้งาน",
    },
  ])

  const [payments] = useState([
    {
      id: 1,
      supplier: "บริษัท ปตท. จำกัด",
      amount: 25000,
      date: "2024-12-15",
      description: "ค่าน้ำมันประจำวัน",
      status: "จ่ายแล้ว",
    },
    {
      id: 2,
      supplier: "อู่ช่างสมชาย",
      amount: 8500,
      date: "2024-12-14",
      description: "ซ่อมเบรครถ 80-1235",
      status: "รอจ่าย",
    },
    {
      id: 3,
      supplier: "บริษัท อะไหล่รถ จำกัด",
      amount: 15000,
      date: "2024-12-13",
      description: "ซื้ออะไหล่เปลี่ยน",
      status: "จ่ายแล้ว",
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการ Supplier</h1>
        <p className="text-gray-600">ข้อมูลซัพพลายเออร์และการชำระเงิน</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    รายชื่อ Supplier
                  </CardTitle>
                  <CardDescription>ซัพพลายเออร์ทั้งหมดในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่ม Supplier
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ค้นหาชื่อ Supplier..." className="pl-10" />
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
                    <TableHead>ยอดจ่ายรวม</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{supplier.type}</Badge>
                      </TableCell>
                      <TableCell>{supplier.contact}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          {supplier.phone}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-red-600">฿{supplier.totalPaid.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          variant={supplier.status === "ใช้งานอยู่" ? "secondary" : "destructive"}
                          className={supplier.status === "ใช้งานอยู่" ? "bg-green-100 text-green-800" : ""}
                        >
                          {supplier.status}
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

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                ข้อมูลการโอน
              </CardTitle>
              <CardDescription>บัญชีธนาคารของ Supplier</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suppliers
                  .filter((s) => s.status === "ใช้งานอยู่")
                  .map((supplier) => (
                    <div key={supplier.id} className="p-4 border rounded-lg space-y-2">
                      <h3 className="font-medium text-sm">{supplier.name}</h3>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{supplier.bank}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        คัดลอกเลขบัญชี
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                การชำระเงินล่าสุด
              </CardTitle>
              <CardDescription>รายการชำระเงินล่าสุด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {payments.slice(0, 3).map((payment) => (
                  <div key={payment.id} className="p-3 border rounded-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{payment.supplier}</span>
                      <Badge
                        variant={payment.status === "จ่ายแล้ว" ? "secondary" : "destructive"}
                        className={
                          payment.status === "จ่ายแล้ว" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                        }
                      >
                        {payment.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{payment.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-red-600">฿{payment.amount.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground">{payment.date}</span>
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
