"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function TrucksPage() {
  const trucks = [
    { id: 1, licensePlate: "83-5947(A201)", brand: "Hino", model: "FM1AK1A", year: 2018, status: "พร้อมใช้งาน" },
    { id: 2, licensePlate: "83-5948(A202)", brand: "Isuzu", model: "FXZ77N", year: 2019, status: "กำลังซ่อมบำรุง" },
    { id: 3, licensePlate: "83-5949(A203)", brand: "Fuso", model: "FV517J", year: 2020, status: "เสีย" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">ข้อมูลรถโม่</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มรถโม่ใหม่
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>เพิ่มรถโม่ใหม่</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="licensePlate" className="text-right">
                  เบอร์รถ เช่น 83-5947(A201)
                </Label>
                <Input id="licensePlate" defaultValue="83-5947(A201)" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right">
                  ยี่ห้อ
                </Label>
                <Input id="brand" defaultValue="Hino" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  รุ่น
                </Label>
                <Input id="model" defaultValue="FM1AK1A" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  ปีที่ผลิต
                </Label>
                <Input id="year" type="number" defaultValue={2018} className="col-span-3" />
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
                    <SelectItem value="available">พร้อมใช้งาน</SelectItem>
                    <SelectItem value="maintenance">กำลังซ่อมบำรุง</SelectItem>
                    <SelectItem value="broken">เสีย</SelectItem>
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
          <CardTitle>รายชื่อรถโม่</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>เบอร์รถ</TableHead>
                <TableHead>ยี่ห้อ</TableHead>
                <TableHead>รุ่น</TableHead>
                <TableHead>ปีที่ผลิต</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trucks.map((truck) => (
                <TableRow key={truck.id}>
                  <TableCell>{truck.licensePlate}</TableCell>
                  <TableCell>{truck.brand}</TableCell>
                  <TableCell>{truck.model}</TableCell>
                  <TableCell>{truck.year}</TableCell>
                  <TableCell>{truck.status}</TableCell>
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
