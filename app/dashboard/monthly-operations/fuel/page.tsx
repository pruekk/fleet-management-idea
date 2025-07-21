"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function FuelPage() {
  const fuelData = [
    {
      id: 1,
      date: "2023-03-01",
      truck: "83-5947(A201)",
      driver: "นายสมชาย",
      liters: 100,
      pricePerLiter: 30,
      totalCost: 3000,
    },
    {
      id: 2,
      date: "2023-03-01",
      truck: "83-5948(A202)",
      driver: "นายสมหญิง",
      liters: 120,
      pricePerLiter: 30,
      totalCost: 3600,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">น้ำมัน</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มข้อมูลน้ำมัน
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>เพิ่มข้อมูลน้ำมัน</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  วันที่
                </Label>
                <Input id="date" type="date" defaultValue="2023-03-01" className="col-span-3" />
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
                <Label htmlFor="driver" className="text-right">
                  คนขับ
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="เลือกคนขับ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="นายสมชาย">นายสมชาย</SelectItem>
                    <SelectItem value="นายสมหญิง">นายสมหญิง</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="liters" className="text-right">
                  จำนวนลิตร
                </Label>
                <Input id="liters" type="number" defaultValue={0} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pricePerLiter" className="text-right">
                  ราคา/ลิตร
                </Label>
                <Input id="pricePerLiter" type="number" defaultValue={0} className="col-span-3" />
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
          <CardTitle>ข้อมูลน้ำมัน</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>วันที่</TableHead>
                <TableHead>รถโม่</TableHead>
                <TableHead>คนขับ</TableHead>
                <TableHead>จำนวนลิตร</TableHead>
                <TableHead>ราคา/ลิตร</TableHead>
                <TableHead>รวม</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fuelData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.truck}</TableCell>
                  <TableCell>{data.driver}</TableCell>
                  <TableCell>{data.liters}</TableCell>
                  <TableCell>{data.pricePerLiter.toFixed(2)}</TableCell>
                  <TableCell>{data.totalCost.toLocaleString()}</TableCell>
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
