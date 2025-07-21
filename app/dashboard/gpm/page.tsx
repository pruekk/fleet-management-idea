"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function GPMPage() {
  const gpmData = [
    { id: 1, month: "มกราคม", year: 2023, revenue: 500000, expenses: 300000, gpm: 200000, gpmPercentage: 40 },
    { id: 2, month: "กุมภาพันธ์", year: 2023, revenue: 550000, expenses: 320000, gpm: 230000, gpmPercentage: 41.8 },
    { id: 3, month: "มีนาคม", year: 2023, revenue: 600000, expenses: 350000, gpm: 250000, gpmPercentage: 41.6 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">GPM (Gross Profit Margin)</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มข้อมูล GPM ใหม่
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>เพิ่มข้อมูล GPM ใหม่</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="month" className="text-right">
                  เดือน
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="เลือกเดือน" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="มกราคม">มกราคม</SelectItem>
                    <SelectItem value="กุมภาพันธ์">กุมภาพันธ์</SelectItem>
                    <SelectItem value="มีนาคม">มีนาคม</SelectItem>
                    {/* Add more months */}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  ปี
                </Label>
                <Input id="year" type="number" defaultValue={2023} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="revenue" className="text-right">
                  รายรับ
                </Label>
                <Input id="revenue" type="number" defaultValue={0} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="expenses" className="text-right">
                  รายจ่าย
                </Label>
                <Input id="expenses" type="number" defaultValue={0} className="col-span-3" />
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
          <CardTitle>ข้อมูล GPM</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>เดือน</TableHead>
                <TableHead>ปี</TableHead>
                <TableHead>รายรับ</TableHead>
                <TableHead>รายจ่าย</TableHead>
                <TableHead>GPM</TableHead>
                <TableHead>GPM (%)</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gpmData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.month}</TableCell>
                  <TableCell>{data.year}</TableCell>
                  <TableCell>{data.revenue.toLocaleString()}</TableCell>
                  <TableCell>{data.expenses.toLocaleString()}</TableCell>
                  <TableCell>{data.gpm.toLocaleString()}</TableCell>
                  <TableCell>{data.gpmPercentage.toFixed(2)}%</TableCell>
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
