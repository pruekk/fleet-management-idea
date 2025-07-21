"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Search, Edit, Trash2, User, Phone, Mail, MapPin } from "lucide-react"

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const employees = [
    {
      id: 1,
      name: "นายสมชาย ใจดี",
      position: "คนขับรถโม่",
      department: "ฝ่ายปฏิบัติการ",
      phone: "081-234-5678",
      email: "somchai@company.com",
      address: "123 ถนนพระราม 4 แขวงสุริยวงศ์ เขตบางรัก กรุงเทพฯ 10500",
      hireDate: "2020-01-15",
      salary: 18000,
      status: "active",
      truckAssigned: "83-5947(A201)",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "นายสมศักดิ์ รักงาน",
      position: "คนขับรถโม่",
      department: "ฝ่ายปฏิบัติการ",
      phone: "082-345-6789",
      email: "somsak@company.com",
      address: "456 ถนนลาดพร้าว แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230",
      hireDate: "2019-03-20",
      salary: 19000,
      status: "active",
      truckAssigned: "83-5948(A202)",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "นายสมหญิง ขยันทำ",
      position: "ช่างซ่อมบำรุง",
      department: "ฝ่ายซ่อมบำรุง",
      phone: "083-456-7890",
      email: "somying@company.com",
      address: "789 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400",
      hireDate: "2021-06-10",
      salary: 22000,
      status: "active",
      truckAssigned: null,
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "นางสาวสมศรี มีความสุข",
      position: "เจ้าหน้าที่บัญชี",
      department: "ฝ่ายบัญชี/การเงิน",
      phone: "084-567-8901",
      email: "somsri@company.com",
      address: "321 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพฯ 10500",
      hireDate: "2018-09-05",
      salary: 25000,
      status: "active",
      truckAssigned: null,
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "นายสมปอง หยุดงาน",
      position: "คนขับรถโม่",
      department: "ฝ่ายปฏิบัติการ",
      phone: "085-678-9012",
      email: "sompong@company.com",
      address: "654 ถนนเพชรบุรี แขวงมักกะสัน เขตราชเทวี กรุงเทพฯ 10400",
      hireDate: "2017-12-01",
      salary: 17000,
      status: "inactive",
      truckAssigned: null,
      avatar: "/placeholder-user.jpg",
    },
  ]

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-100 text-green-800">ทำงาน</Badge>
    ) : (
      <Badge variant="secondary">หยุดงาน</Badge>
    )
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">จัดการข้อมูลพนักงาน</h1>
        <p className="text-muted-foreground">จัดการข้อมูลพนักงานและตำแหน่งงาน</p>
      </div>

      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="ค้นหาพนักงาน..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          เพิ่มพนักงานใหม่
        </Button>
      </div>

      {/* Employees Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                    <AvatarFallback>
                      <User className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg leading-tight">{employee.name}</CardTitle>
                    <CardDescription>{employee.position}</CardDescription>
                    <CardDescription className="text-xs">{employee.department}</CardDescription>
                  </div>
                </div>
                {getStatusBadge(employee.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{employee.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="truncate">{employee.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">{employee.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t text-sm">
                <div>
                  <span className="font-medium text-gray-600">วันที่เริ่มงาน:</span>
                  <div className="text-gray-800">{formatDate(employee.hireDate)}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-600">เงินเดือน:</span>
                  <div className="text-green-600 font-medium">{formatCurrency(employee.salary)}</div>
                </div>
              </div>

              {employee.truckAssigned && (
                <div className="pt-2 border-t">
                  <span className="text-sm font-medium text-gray-600">รถที่รับผิดชอบ:</span>
                  <Badge variant="outline" className="ml-2">
                    {employee.truckAssigned}
                  </Badge>
                </div>
              )}

              <div className="flex gap-2 pt-3">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Edit className="h-4 w-4 mr-1" />
                  แก้ไข
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่พบข้อมูลพนักงาน</h3>
          <p className="text-gray-600 mb-4">ไม่พบพนักงานที่ตรงกับคำค้นหา "{searchTerm}"</p>
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            ล้างการค้นหา
          </Button>
        </div>
      )}
    </div>
  )
}
