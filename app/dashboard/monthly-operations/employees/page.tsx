"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function MonthlyEmployeesPage() {
  const [employeeRecords, setEmployeeRecords] = useState([
    { id: "REC001", month: "มกราคม", year: 2023, employeeName: "สมชาย ใจดี", salary: 25000, bonus: 2000, total: 27000 },
    { id: "REC002", month: "กุมภาพันธ์", year: 2023, employeeName: "สมหญิง มีสุข", salary: 26000, bonus: 1500, total: 27500 },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newRecord, setNewRecord] = useState({
    id: "",
    month: "",
    year: 0,
    employeeName: "",
    salary: 0,
    bonus: 0,
    total: 0,
  })

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault()
    setEmployeeRecords([
      ...employeeRecords,
      { ...newRecord, id: `REC${String(employeeRecords.length + 1).padStart(3, "0")}` },
    ])
    setNewRecord({ id: "", month: "", year: 0, employeeName: "", salary: 0, bonus: 0, total: 0 })
    setIsDialogOpen(false)
  }

  const handleDeleteRecord = (id: string) => {
    setEmployeeRecords(employeeRecords.filter((record) => record.id !== id))
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">ปฏิบัติการรายเดือน: พนักงาน</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              เพิ่มบันทึกพนักงาน
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>เพิ่มบันทึกพนักงานใหม่</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddRecord} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="month" className="text-right">
                  เดือน
                </Label>
                <Select
                  id="month"
                  value={newRecord.month}
                  onChange={(e) => setNewRecord({ ...newRecord, month: e.target.value })}
                  className="col-span-3"
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกเดือน" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="มกราคม">มกราคม</SelectItem>
                    <SelectItem value="กุมภาพันธ์">กุมภาพันธ์</SelectItem>
                    {/* Add more months */}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  ปี
                </Label>
                <Input
                  id="year"
                  type="number"
                  value={newRecord.year}
                  onChange={(e) => setNewRecord({ ...newRecord, year: Number.parseInt(e.target.value) })}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="employeeName" className="text-right">
                  ชื่อพนักงาน
                </Label>
                <Input
                  id="employeeName"
                  value={newRecord.employeeName}
                  onChange={(e) => setNewRecord({ ...newRecord, employeeName: e.target.value })}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="salary" className="text-right">
                  เงินเดือน
                </Label>
                <Input
                  id="salary"
                  type="number"
                  value={newRecord.salary}
                  onChange={(e) => setNewRecord({ ...newRecord, salary: Number.parseFloat(e.target.value) })}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bonus" className="text-right">
                  โบนัส
                </Label>
                <Input
                  id="bonus"
                  type="number"
                  value={newRecord.bonus}
                  onChange={(e) => setNewRecord({ ...newRecord, bonus: Number.parseFloat(e.target.value) })}
                  className="col-span-3"
                  required
                />
              </div>
              <Button type="submit" className="col-span-4">
                บันทึก
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <p className="text-gray-600">จัดการบันทึกการทำงานและเงินเดือนของพนักงานรายเดือน</p>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>บันทึกพนักงานรายเดือน</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>รหัสบันทึก</TableHead>
                <TableHead>เดือน</TableHead>
                <TableHead>ปี</TableHead>
                <TableHead>ชื่อพนักงาน</TableHead>
                <TableHead>เงินเดือน (฿)</TableHead>
                <TableHead>โบนัส (฿)</TableHead>
                <TableHead>รวม (฿)</TableHead>
                <TableHead className="text-right">การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.id}</TableCell>
                  <TableCell>{record.month}</TableCell>
                  <TableCell>{record.year}</TableCell>
                  <TableCell>{record.employeeName}</TableCell>
                  <TableCell>{record.salary.toLocaleString()}</TableCell>
                  <TableCell>{record.bonus.toLocaleString()}</TableCell>
                  <TableCell>{record.total.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">แก้ไข</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteRecord(record.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">ลบ</span>
                    </Button>
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
