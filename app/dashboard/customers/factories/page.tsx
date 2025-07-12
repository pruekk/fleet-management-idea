"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Plus, Edit, Trash2, Search, Filter, Factory, MapPin, Truck } from "lucide-react"

export default function FactoriesPage() {
  const [factories, setFactories] = useState([
    {
      id: 1,
      name: "โรงงานสาขา 1",
      customer: "บริษัท ก่อสร้าง ABC จำกัด",
      address: "123 ถนนพระราม 4 กรุงเทพฯ",
      assignedTrucks: ["80-1234", "80-1235"],
      status: "ใช้งานอยู่",
      contactPerson: "คุณสมชาย",
      phone: "02-123-4567",
    },
    {
      id: 2,
      name: "โรงงานสาขา 2",
      customer: "บริษัท ก่อสร้าง ABC จำกัด",
      address: "456 ถนนสุขุมวิท กรุงเทพฯ",
      assignedTrucks: ["80-1236"],
      status: "ใช้งานอยู่",
      contactPerson: "คุณสมหญิง",
      phone: "02-234-5678",
    },
    {
      id: 3,
      name: "โรงงานโครงการใหญ่",
      customer: "บริษัท โครงการใหญ่ จำกัด",
      address: "789 ถนนรัชดาภิเษก กรุงเทพฯ",
      assignedTrucks: ["80-1237", "80-1238"],
      status: "หยุดใช้งาน",
      contactPerson: "คุณสมศักดิ์",
      phone: "02-345-6789",
    },
  ])

  const [newFactory, setNewFactory] = useState({
    name: "",
    customer: "",
    address: "",
    contactPerson: "",
    phone: "",
    status: "ใช้งานอยู่",
  })

  const handleAddFactory = () => {
    if (newFactory.name && newFactory.customer && newFactory.address) {
      setFactories([
        ...factories,
        {
          id: factories.length + 1,
          name: newFactory.name,
          customer: newFactory.customer,
          address: newFactory.address,
          contactPerson: newFactory.contactPerson,
          phone: newFactory.phone,
          status: newFactory.status,
          assignedTrucks: [],
        },
      ])
      setNewFactory({
        name: "",
        customer: "",
        address: "",
        contactPerson: "",
        phone: "",
        status: "ใช้งานอยู่",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการโรงงาน</h1>
        <p className="text-gray-600">ข้อมูลโรงงานของลูกค้าทั้งหมด</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-5 w-5" />
                รายการโรงงาน
              </CardTitle>
              <CardDescription>จัดการข้อมูลโรงงานทั้งหมด</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มโรงงาน
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>เพิ่มโรงงานใหม่</DialogTitle>
                  <DialogDescription>กรอกข้อมูลโรงงานใหม่</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">ชื่อโรงงาน</Label>
                    <Input
                      id="name"
                      value={newFactory.name}
                      onChange={(e) => setNewFactory({ ...newFactory, name: e.target.value })}
                      placeholder="ชื่อโรงงาน"
                    />
                  </div>
                  <div>
                    <Label htmlFor="customer">ลูกค้า</Label>
                    <Select
                      value={newFactory.customer}
                      onValueChange={(value) => setNewFactory({ ...newFactory, customer: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกลูกค้า" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="บริษัท ก่อสร้าง ABC จำกัด">บริษัท ก่อสร้าง ABC จำกัด</SelectItem>
                        <SelectItem value="บริษัท โครงการใหญ่ จำกัด">บริษัท โครงการใหญ่ จำกัด</SelectItem>
                        <SelectItem value="บริษัท พัฒนาที่ดิน จำกัด">บริษัท พัฒนาที่ดิน จำกัด</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="address">ที่อยู่โรงงาน</Label>
                    <Textarea
                      id="address"
                      value={newFactory.address}
                      onChange={(e) => setNewFactory({ ...newFactory, address: e.target.value })}
                      placeholder="ที่อยู่โรงงาน"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactPerson">ผู้ติดต่อ</Label>
                      <Input
                        id="contactPerson"
                        value={newFactory.contactPerson}
                        onChange={(e) => setNewFactory({ ...newFactory, contactPerson: e.target.value })}
                        placeholder="คุณสมชาย"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">เบอร์ติดต่อ</Label>
                      <Input
                        id="phone"
                        value={newFactory.phone}
                        onChange={(e) => setNewFactory({ ...newFactory, phone: e.target.value })}
                        placeholder="02-123-4567"
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddFactory} className="w-full">
                    เพิ่มโรงงาน
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="ค้นหาชื่อโรงงาน..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              กรอง
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ชื่อโรงงาน</TableHead>
                <TableHead>ลูกค้า</TableHead>
                <TableHead>ที่อยู่</TableHead>
                <TableHead>ผู้ติดต่อ</TableHead>
                <TableHead>รถประจำ</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {factories.map((factory) => (
                <TableRow key={factory.id}>
                  <TableCell className="font-medium">{factory.name}</TableCell>
                  <TableCell>{factory.customer}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate max-w-xs">{factory.address}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{factory.contactPerson}</div>
                      <div className="text-sm text-muted-foreground">{factory.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {factory.assignedTrucks.map((truck, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Truck className="h-3 w-3 mr-1" />
                          {truck}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={factory.status === "ใช้งานอยู่" ? "secondary" : "destructive"}
                      className={factory.status === "ใช้งานอยู่" ? "bg-green-100 text-green-800" : ""}
                    >
                      {factory.status}
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
  )
}
