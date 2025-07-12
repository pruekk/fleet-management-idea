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
import { Plus, Edit, Trash2, Users, Clock, DollarSign } from "lucide-react"

export default function EmployeeWorkPage() {
  const [employeeWork, setEmployeeWork] = useState([
    {
      id: 1,
      name: "สมชาย ใจดี",
      position: "คนขับรถโม่",
      month: "2024-12",
      workDays: 26,
      insideTrips: 20,
      outsideTrips: 5,
      overtime: 8,
      bonus: 500,
      deduction: 0,
      totalSalary: 22400,
      status: "ทำงาน",
    },
    {
      id: 2,
      name: "สมหญิง รักงาน",
      position: "พนักงานทั่วไป",
      month: "2024-12",
      workDays: 24,
      insideTrips: 0,
      outsideTrips: 0,
      overtime: 4,
      bonus: 0,
      deduction: 1000,
      totalSalary: 14200,
      status: "ลา",
    },
    {
      id: 3,
      name: "สมศักดิ์ ขยัน",
      position: "คนขับรถโม่",
      month: "2024-12",
      workDays: 26,
      insideTrips: 18,
      outsideTrips: 3,
      overtime: 6,
      bonus: 300,
      deduction: 0,
      totalSalary: 21000,
      status: "ทำงาน",
    },
  ])

  const [newEmployeeWork, setNewEmployeeWork] = useState({
    name: "",
    position: "",
    month: "",
    workDays: "",
    insideTrips: "",
    outsideTrips: "",
    overtime: "",
    bonus: "",
    deduction: "",
  })

  const calculateSalary = () => {
    const baseSalary = newEmployeeWork.position === "คนขับรถโม่" ? 18000 : 15000
    const insideTrips = Number.parseInt(newEmployeeWork.insideTrips) || 0
    const outsideTrips = Number.parseInt(newEmployeeWork.outsideTrips) || 0
    const overtime = Number.parseInt(newEmployeeWork.overtime) || 0
    const bonus = Number.parseInt(newEmployeeWork.bonus) || 0
    const deduction = Number.parseInt(newEmployeeWork.deduction) || 0

    const tripIncome = insideTrips * 150 + outsideTrips * 200
    const overtimeIncome = overtime * 50

    return baseSalary + tripIncome + overtimeIncome + bonus - deduction
  }

  const handleAddEmployeeWork = () => {
    if (newEmployeeWork.name && newEmployeeWork.month && newEmployeeWork.workDays) {
      setEmployeeWork([
        ...employeeWork,
        {
          id: employeeWork.length + 1,
          name: newEmployeeWork.name,
          position: newEmployeeWork.position,
          month: newEmployeeWork.month,
          workDays: Number.parseInt(newEmployeeWork.workDays),
          insideTrips: Number.parseInt(newEmployeeWork.insideTrips) || 0,
          outsideTrips: Number.parseInt(newEmployeeWork.outsideTrips) || 0,
          overtime: Number.parseInt(newEmployeeWork.overtime) || 0,
          bonus: Number.parseInt(newEmployeeWork.bonus) || 0,
          deduction: Number.parseInt(newEmployeeWork.deduction) || 0,
          totalSalary: calculateSalary(),
          status: "ทำงาน",
        },
      ])
      setNewEmployeeWork({
        name: "",
        position: "",
        month: "",
        workDays: "",
        insideTrips: "",
        outsideTrips: "",
        overtime: "",
        bonus: "",
        deduction: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">การปฏิบัติงานพนักงาน</h1>
        <p className="text-gray-600">ข้อมูลการทำงานของพนักงานรายเดือน</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">พนักงานทั้งหมด</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">52</div>
            <p className="text-xs text-muted-foreground">คน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">มาทำงาน</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">48</div>
            <p className="text-xs text-muted-foreground">92.3% ของทั้งหมด</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เงินเดือนรวม</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">฿890,000</div>
            <p className="text-xs text-muted-foreground">เดือนนี้</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ลา/ขาด</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">4</div>
            <p className="text-xs text-muted-foreground">7.7% ของทั้งหมด</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>รายการการทำงาน</CardTitle>
              <CardDescription>ข้อมูลการทำงานของพนักงานรายเดือน</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มข้อมูล
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>เพิ่มข้อมูลการทำงาน</DialogTitle>
                  <DialogDescription>บันทึกข้อมูลการทำงานของพนักงาน</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">ชื่อพนักงาน</Label>
                      <Select
                        value={newEmployeeWork.name}
                        onValueChange={(value) => setNewEmployeeWork({ ...newEmployeeWork, name: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกพนักงาน" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="สมชาย ใจดี">สมชาย ใจดี</SelectItem>
                          <SelectItem value="สมหญิง รักงาน">สมหญิง รักงาน</SelectItem>
                          <SelectItem value="สมศักดิ์ ขยัน">สมศักดิ์ ขยัน</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="position">ตำแหน่ง</Label>
                      <Select
                        value={newEmployeeWork.position}
                        onValueChange={(value) => setNewEmployeeWork({ ...newEmployeeWork, position: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกตำแหน่ง" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="คนขับรถโม่">คนขับรถโม่</SelectItem>
                          <SelectItem value="พนักงานทั่วไป">พนักงานทั่วไป</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="month">เดือน</Label>
                      <Input
                        id="month"
                        type="month"
                        value={newEmployeeWork.month}
                        onChange={(e) => setNewEmployeeWork({ ...newEmployeeWork, month: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="workDays">วันทำงาน</Label>
                      <Input
                        id="workDays"
                        type="number"
                        value={newEmployeeWork.workDays}
                        onChange={(e) => setNewEmployeeWork({ ...newEmployeeWork, workDays: e.target.value })}
                        placeholder="26"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="insideTrips">งานใน (เที่ยว)</Label>
                      <Input
                        id="insideTrips"
                        type="number"
                        value={newEmployeeWork.insideTrips}
                        onChange={(e) => setNewEmployeeWork({ ...newEmployeeWork, insideTrips: e.target.value })}
                        placeholder="20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="outsideTrips">งานนอก (เที่ยว)</Label>
                      <Input
                        id="outsideTrips"
                        type="number"
                        value={newEmployeeWork.outsideTrips}
                        onChange={(e) => setNewEmployeeWork({ ...newEmployeeWork, outsideTrips: e.target.value })}
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="overtime">ล่วงเวลา (ชั่วโมง)</Label>
                      <Input
                        id="overtime"
                        type="number"
                        value={newEmployeeWork.overtime}
                        onChange={(e) => setNewEmployeeWork({ ...newEmployeeWork, overtime: e.target.value })}
                        placeholder="8"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bonus">โบนัส (บาท)</Label>
                      <Input
                        id="bonus"
                        type="number"
                        value={newEmployeeWork.bonus}
                        onChange={(e) => setNewEmployeeWork({ ...newEmployeeWork, bonus: e.target.value })}
                        placeholder="500"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="deduction">หักเงิน (บาท)</Label>
                    <Input
                      id="deduction"
                      type="number"
                      value={newEmployeeWork.deduction}
                      onChange={(e) => setNewEmployeeWork({ ...newEmployeeWork, deduction: e.target.value })}
                      placeholder="0"
                    />
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">เงินเดือนรวม</span>
                      <span className="font-bold text-xl text-green-600">฿{calculateSalary().toLocaleString()}</span>
                    </div>
                  </div>
                  <Button onClick={handleAddEmployeeWork} className="w-full">
                    บันทึกข้อมูล
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ชื่อพนักงาน</TableHead>
                <TableHead>ตำแหน่ง</TableHead>
                <TableHead>เดือน</TableHead>
                <TableHead>วันทำงาน</TableHead>
                <TableHead>งานใน/นอก</TableHead>
                <TableHead>ล่วงเวลา</TableHead>
                <TableHead>เงินเดือนรวม</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeWork.map((work) => (
                <TableRow key={work.id}>
                  <TableCell className="font-medium">{work.name}</TableCell>
                  <TableCell>{work.position}</TableCell>
                  <TableCell>{work.month}</TableCell>
                  <TableCell>{work.workDays} วัน</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>ใน: {work.insideTrips} เที่ยว</div>
                      <div>นอก: {work.outsideTrips} เที่ยว</div>
                    </div>
                  </TableCell>
                  <TableCell>{work.overtime} ชม.</TableCell>
                  <TableCell className="font-bold text-green-600">฿{work.totalSalary.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={work.status === "ทำงาน" ? "secondary" : "destructive"}
                      className={
                        work.status === "ทำงาน" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                      }
                    >
                      {work.status}
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
