"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, CheckCircle, Clock } from "lucide-react"
import Truck from "path-to-Truck-icon" // Declare the Truck variable here

export default function TodayTripsPage() {
  const todayTrips = [
    { id: 1, time: "08:00", truck: "83-5947(A201)", driver: "นายสมชาย", customer: "บริษัท A", status: "สำเร็จ" },
    { id: 2, time: "09:30", truck: "83-5948(A202)", driver: "นายสมหญิง", customer: "บริษัท B", status: "กำลังดำเนินการ" },
    { id: 3, time: "11:00", truck: "83-5949(A203)", driver: "นายสมศักดิ์", customer: "บริษัท C", status: "สำเร็จ" },
  ]

  const todayTripsSummary = {
    total: 15,
    completed: 10,
    inProgress: 5,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">เที่ยววิ่งวันนี้</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มเที่ยววิ่งวันนี้
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>เพิ่มเที่ยววิ่งวันนี้</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tripTime" className="text-right">
                  เวลา
                </Label>
                <Input id="tripTime" type="time" defaultValue="08:00" className="col-span-3" />
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
                <Label htmlFor="customer" className="text-right">
                  ลูกค้า
                </Label>
                <Input id="customer" defaultValue="บริษัท A" className="col-span-3" />
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
                    <SelectItem value="completed">สำเร็จ</SelectItem>
                    <SelectItem value="in-progress">กำลังดำเนินการ</SelectItem>
                    <SelectItem value="cancelled">ยกเลิก</SelectItem>
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เที่ยววิ่งวันนี้รวม</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayTripsSummary.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เที่ยววิ่งสำเร็จ</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayTripsSummary.completed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เที่ยววิ่งกำลังดำเนินการ</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayTripsSummary.inProgress}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายการเที่ยววิ่งวันนี้</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>เวลา</TableHead>
                <TableHead>รถโม่</TableHead>
                <TableHead>คนขับ</TableHead>
                <TableHead>ลูกค้า</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {todayTrips.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.time}</TableCell>
                  <TableCell>{trip.truck}</TableCell>
                  <TableCell>{trip.driver}</TableCell>
                  <TableCell>{trip.customer}</TableCell>
                  <TableCell>{trip.status}</TableCell>
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
