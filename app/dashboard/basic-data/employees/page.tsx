"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Users } from "lucide-react"

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
      salary: "18,000",
      status: "active",
      startDate: "2023-01-15",
    },
    {
      id: 2,
      name: "นายสมศักดิ์ รักงาน",
      position: "หัวหน้าช่าง",
      department: "ฝ่ายซ่อมบำรุง",
      phone: "081-987-6543",
      email: "somsak@company.com",
      salary: "25,000",
      status: "active",
      startDate: "2022-06-01",
    },
    {
      id: 3,
      name: "นางสาวสมหญิง ขยัน",
      position: "เจ้าหน้าที่บัญชี",
      department: "ฝ่ายบัญชี/การเงิน",
      phone: "081-555-1234",
      email: "somying@company.com",
      salary: "22,000",
      status: "active",
      startDate: "2023-03-10",
    },
    {
      id: 4,
      name: "นายสมปอง เก่งงาน",
      position: "คนขับรถโม่",
      department: "ฝ่ายปฏิบัติการ",
      phone: "081-777-8888",
      email: "sompong@company.com",
      salary: "18,000",
      status: "inactive",
      startDate: "2022-12-01",
    },
  ]

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการข้อมูลพนักงาน</h1>
          <p className="text-gray-600">จัดการข้อมูลพนักงานในองค์กร</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          เพิ่มพนักงาน
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            รายชื่อพนักงาน
          </CardTitle>
          <CardDescription>รายการพนักงานทั้งหมดในองค์กร</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ค้นหาพนักงาน..."
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
                  <TableHead>ชื่อ-นามสกุล</TableHead>
                  <TableHead>ตำแหน่ง</TableHead>
                  <TableHead>แผนก</TableHead>
                  <TableHead>เบอร์โทร</TableHead>
                  <TableHead>เงินเดือน</TableHead>
                  <TableHead>วันที่เริ่มงาน</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.phone}</TableCell>
                    <TableCell>฿{employee.salary}</TableCell>
                    <TableCell>{employee.startDate}</TableCell>
                    <TableCell>
                      <Badge variant={employee.status === "active" ? "default" : "secondary"}>
                        {employee.status === "active" ? "ทำงาน" : "ลาออก"}
                      </Badge>
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
