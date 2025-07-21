"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function MaintenancePage() {
  const maintenanceData = [
    { id: 1, date: "2023-03-05", truck: "83-5948(A202)", description: "เปลี่ยนยาง", cost: 5000, status: "เสร็จสิ้น" },
    {
      id: 2,
      date: "2023-03-10",
      truck: "83-5949(A203)",
      description: "ซ่อมเครื่องยนต์",
      cost: 15000,
      status: "กำลังดำเนินการ",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">ซ่อมบำรุง</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มข้อมูลซ่อมบำรุง
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>เพิ่มข้อมูลซ่อมบำรDialog</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  วันที่
                </Label>
                <Input id="date" type="date" defaultValue="2023-03-05" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="truck" className="text-right">
                  รถโม่
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="เลือกรถโม่" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="83-5947(A201)">83-5947(A201)</SelectItem>
                    <SelectItem value="83-5948(A202)">83-5948(A202)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  รายละเอียด
                </Label>
                <Textarea id="description" defaultValue="เปลี่ยนยาง" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cost" className="text-right">
                  ค่าใช้จ่าย
                </Label>
                <Input id="cost" type="number" defaultValue={0} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  สถานะ
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="เลือกสถานะ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="completed">เสร็จสิ้น</SelectItem>
                    <SelectItem value="in-progress">กำลังดำเนินการ</SelectItem>
                    <SelectItem value="pending">รอดำเนินการ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="col-span-4">
                บันทึก
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ข้อมูลซ่อมบำรุง</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>วันที่</TableHead>
                <TableHead>รถโม่</TableHead>
                <TableHead>รายละเอียด</TableHead>
                <TableHead>ค่าใช้จ่าย</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenanceData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.truck}</TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.cost.toLocaleString()}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">แก้ไข</span>
                      </Button>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">ลบ</span>
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
