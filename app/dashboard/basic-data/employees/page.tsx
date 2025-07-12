"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Plus, Edit, Trash2, Search, Filter, Users } from "lucide-react"

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "สมชาย ใจดี",
      position: "คนขับรถโม่",
      phone: "081-234-5678",
      status: "ทำงาน",
      salary: 18000,
      startDate: "2023-01-15",
    },
    {
      id: 2,
      name: "สมหญิง รักงาน",
      position: "พนักงานทั่วไป",
      phone: "082-345-6789",
      status: "ลา",
      salary: 15000,
      startDate: "2023-03-20",
    },
    {
      id: 3,
      name: "สมศักดิ์ ขยัน",
      position: "คนขับรถโม่",
      phone: "083-456-7890",
      status: "ทำงาน",
      salary: 18000,
      startDate: "2023-02-10",
    },
  ])

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    phone: "",
    status: "ทำงาน",
    salary: "",
    startDate: "",
  })

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.position && newEmployee.phone) {
      setEmployees([
        ...employees,
        {
          id: employees.length + 1,
          name: newEmployee.name,
          position: newEmployee.position,
          phone: newEmployee.phone,
          status: newEmployee.status,
          salary: Number.parseInt(newEmployee.salary) || 0,
          startDate: newEmployee.startDate,
        },
      ])
      setNewEmployee({
        name: "",
        position: "",
        phone: "",
        status: "ทำงาน",
        salary: "",
        startDate: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการพนักงาน</h1>
        <p className="text-gray-600">ข้อมูลพนักงานทั้งหมดในระบบ</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                รายการพนักงาน
              </CardTitle>
              <CardDescription>จัดการข้อมูลพนักงานทั้งหมด</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มพนักงาน
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>เพิ่มพนักงานใหม่</DialogTitle>
                  <DialogDescription>กรอกข้อมูลพนักงานใหม่</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                    <Input
                      id="name"
                      value={newEmployee.name}
                      onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                      placeholder="ชื่อ-นามสกุล"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="position">ตำแหน่ง</Label>
                      <Select
                        value={newEmployee.position}
                        onValueChange={(value) => setNewEmployee({ ...newEmployee, position: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกตำแหน่ง" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="คนขับรถโม่">คนขับรถโม่</SelectItem>
                          <SelectItem value="พนักงานทั่วไป">พนักงานทั่วไป</SelectItem>
                          <SelectItem value="หัวหน้าแผนก">หัวหน้าแผนก</SelectItem>
                          <SelectItem value="ช่างซ่อมบำรุง">ช่างซ่อมบำรุง</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone">เบอร์โทร</Label>
                      <Input
                        id="phone"
                        value={newEmployee.phone}
                        onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                        placeholder="081-234-5678"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="salary">เงินเดือน</Label>
                      <Input
                        id="salary"
                        type="number"
                        value={newEmployee.salary}
                        onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
                        placeholder="15000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="startDate">วันที่เริ่มงาน</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={newEmployee.startDate}
                        onChange={(e) => setNewEmployee({ ...newEmployee, startDate: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddEmployee} className="w-full">
                    เพิ่มพนักงาน
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
                <TableHead>เงินเดือน</TableHead>
                <TableHead>วันที่เริ่มงาน</TableHead>
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
                  <TableCell>฿{employee.salary.toLocaleString()}</TableCell>
                  <TableCell>{employee.startDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={employee.status === "ทำงาน" ? "secondary" : "destructive"}
                      className={
                        employee.status === "ทำงาน" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
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
    </div>
  )
}
