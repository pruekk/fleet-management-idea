"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Users } from "lucide-react"
import { PopupForm } from "@/components/popup-form"

interface Employee {
  id: string
  employeeId: string
  name: string
  position: string
  department: string
  phone: string
  email: string
  salary: number
  status: "active" | "inactive"
  startDate: string
}

const mockEmployees: Employee[] = [
  {
    id: "1",
    employeeId: "EMP001",
    name: "สมชาย ใจดี",
    position: "คนขับรถโม่",
    department: "ขนส่ง",
    phone: "081-234-5678",
    email: "somchai@company.com",
    salary: 25000,
    status: "active",
    startDate: "2024-01-15",
  },
  {
    id: "2",
    employeeId: "EMP002",
    name: "สมหญิง รักงาน",
    position: "พนักงานบัญชี",
    department: "บัญชี",
    phone: "082-345-6789",
    email: "somying@company.com",
    salary: 30000,
    status: "active",
    startDate: "2024-01-20",
  },
]

const employeeFields = [
  { name: "employeeId", label: "รหัสพนักงาน", type: "text", required: true },
  { name: "name", label: "ชื่อ-นามสกุล", type: "text", required: true },
  { name: "position", label: "ตำแหน่ง", type: "text", required: true },
  {
    name: "department",
    label: "แผนก",
    type: "select",
    required: true,
    options: [
      { value: "ขนส่ง", label: "ขนส่ง" },
      { value: "บัญชี", label: "บัญชี" },
      { value: "ฝ่ายขาย", label: "ฝ่ายขาย" },
      { value: "บริหาร", label: "บริหาร" },
    ],
  },
  { name: "phone", label: "เบอร์โทรศัพท์", type: "text", required: true },
  { name: "email", label: "อีเมล", type: "email", required: true },
  { name: "salary", label: "เงินเดือน", type: "number", required: true },
  { name: "startDate", label: "วันที่เริ่มงาน", type: "date", required: true },
  {
    name: "status",
    label: "สถานะ",
    type: "select",
    required: true,
    options: [
      { value: "active", label: "ทำงาน" },
      { value: "inactive", label: "ลาออก" },
    ],
  },
]

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees)
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null)

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSubmit = (data: any) => {
    if (editingEmployee) {
      setEmployees(
        employees.map((employee) =>
          employee.id === editingEmployee.id ? { ...employee, ...data, salary: Number(data.salary) } : employee,
        ),
      )
    } else {
      const newEmployee: Employee = {
        id: Date.now().toString(),
        ...data,
        salary: Number(data.salary),
      }
      setEmployees([...employees, newEmployee])
    }
    setIsFormOpen(false)
    setEditingEmployee(null)
  }

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee)
    setIsFormOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("คุณต้องการลบพนักงานนี้หรือไม่?")) {
      setEmployees(employees.filter((employee) => employee.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">จัดการพนักงาน</h1>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          เพิ่มพนักงาน
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายชื่อพนักงาน</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="ค้นหาพนักงาน..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>รหัสพนักงาน</TableHead>
                <TableHead>ชื่อ-นามสกุล</TableHead>
                <TableHead>ตำแหน่ง</TableHead>
                <TableHead>แผนก</TableHead>
                <TableHead>เบอร์โทรศัพท์</TableHead>
                <TableHead>เงินเดือน</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead className="text-right">การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.employeeId}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>{employee.salary.toLocaleString()} บาท</TableCell>
                  <TableCell>
                    <Badge variant={employee.status === "active" ? "default" : "secondary"}>
                      {employee.status === "active" ? "ทำงาน" : "ลาออก"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(employee)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(employee.id)}>
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

      <PopupForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setEditingEmployee(null)
        }}
        onSubmit={handleSubmit}
        title={editingEmployee ? "แก้ไขพนักงาน" : "เพิ่มพนักงาน"}
        fields={employeeFields}
        initialData={editingEmployee}
      />
    </div>
  )
}
