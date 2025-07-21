"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Edit, Trash2, Users } from "lucide-react"
import { PopupForm } from "@/components/popup-form"

interface Employee {
  id: string
  name: string
  position: string
  department: string
  phone: string
  email: string
  salary: number
  hireDate: string
  status: "active" | "inactive"
  avatar?: string
}

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null)

  const employees: Employee[] = [
    {
      id: "1",
      name: "สมชาย ใจดี",
      position: "คนขับรถโม่",
      department: "ขนส่ง",
      phone: "081-234-5678",
      email: "somchai@company.com",
      salary: 18000,
      hireDate: "2023-01-15",
      status: "active",
    },
    {
      id: "2",
      name: "สมศักดิ์ รักงาน",
      position: "คนขับรถโม่",
      department: "ขนส่ง",
      phone: "082-345-6789",
      email: "somsak@company.com",
      salary: 19000,
      hireDate: "2023-02-01",
      status: "active",
    },
    {
      id: "3",
      name: "สมหญิง ขยัน",
      position: "เจ้าหน้าที่บัญชี",
      department: "บัญชี",
      phone: "083-456-7890",
      email: "somying@company.com",
      salary: 25000,
      hireDate: "2023-01-10",
      status: "active",
    },
  ]

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee)
    setIsFormOpen(true)
  }

  const handleAdd = () => {
    setEditingEmployee(null)
    setIsFormOpen(true)
  }

  const employeeFields = [
    { name: "name", label: "ชื่อ-นามสกุล", type: "text", required: true },
    { name: "position", label: "ตำแหน่ง", type: "text", required: true },
    {
      name: "department",
      label: "แผนก",
      type: "select",
      options: [
        { value: "ขนส่ง", label: "ขนส่ง" },
        { value: "บัญชี", label: "บัญชี" },
        { value: "ขาย", label: "ขาย" },
        { value: "บริหาร", label: "บริหาร" },
      ],
      required: true,
    },
    { name: "phone", label: "เบอร์โทรศัพท์", type: "text", required: true },
    { name: "email", label: "อีเมล", type: "email", required: true },
    { name: "salary", label: "เงินเดือน", type: "number", required: true },
    { name: "hireDate", label: "วันที่เริ่มงาน", type: "date", required: true },
    {
      name: "status",
      label: "สถานะ",
      type: "select",
      options: [
        { value: "active", label: "ทำงาน" },
        { value: "inactive", label: "ลาออก" },
      ],
      required: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการพนักงาน</h1>
          <p className="text-gray-600 mt-2">จัดการข้อมูลพนักงานในระบบ</p>
        </div>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          เพิ่มพนักงาน
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            รายการพนักงาน
          </CardTitle>
          <CardDescription>จำนวนพนักงานทั้งหมด {employees.length} คน</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="ค้นหาพนักงาน..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>พนักงาน</TableHead>
                  <TableHead>ตำแหน่ง</TableHead>
                  <TableHead>แผนก</TableHead>
                  <TableHead>เบอร์โทรศัพท์</TableHead>
                  <TableHead>เงินเดือน</TableHead>
                  <TableHead>วันที่เริ่มงาน</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.phone}</TableCell>
                    <TableCell>฿{employee.salary.toLocaleString()}</TableCell>
                    <TableCell>{new Date(employee.hireDate).toLocaleDateString("th-TH")}</TableCell>
                    <TableCell>
                      <Badge variant={employee.status === "active" ? "default" : "secondary"}>
                        {employee.status === "active" ? "ทำงาน" : "ลาออก"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(employee)}>
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
          </div>
        </CardContent>
      </Card>

      <PopupForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingEmployee ? "แก้ไขพนักงาน" : "เพิ่มพนักงาน"}
        fields={employeeFields}
        initialData={editingEmployee}
        onSubmit={(data) => {
          console.log("Employee data:", data)
          setIsFormOpen(false)
        }}
      />
    </div>
  )
}
