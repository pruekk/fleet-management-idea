"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Fuel, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function FuelPage() {
  const [fuelData, setFuelData] = useState([
    {
      id: 1,
      date: "2024-07-25",
      truckCode: "A201",
      plateNumber: "83-5947",
      driverName: "นายสมชาย",
      gasStation: "ปั้มบางจาก สาขาลาดพร้าว",
      liters: 120.5,
      pricePerLiter: 32.50,
      totalAmount: 3916.25,
      month: "กรกฎาคม 2024"
    },
    {
      id: 2,
      date: "2024-07-25",
      truckCode: "A202",
      plateNumber: "83-5948",
      driverName: "นายสมศักดิ์",
      gasStation: "ปั้มบางจาก สาขาวิภาวดี",
      liters: 115.0,
      pricePerLiter: 32.50,
      totalAmount: 3737.50,
      month: "กรกฎาคม 2024"
    },
    {
      id: 3,
      date: "2024-07-24",
      truckCode: "A203",
      plateNumber: "83-5949",
      driverName: "นายสมปอง",
      gasStation: "ปั้มเชลล์ สาขารังสิต",
      liters: 108.0,
      pricePerLiter: 32.80,
      totalAmount: 3542.40,
      month: "กรกฎาคม 2024"
    },
  ])

  // คำนวณสถิติ
  const totalLiters = fuelData.reduce((sum, item) => sum + item.liters, 0)
  const totalCost = fuelData.reduce((sum, item) => sum + item.totalAmount, 0)
  const averagePricePerLiter = totalCost / totalLiters

  // สรุปตามปั้ม
  const gasStationSummary = fuelData.reduce((acc, item) => {
    const station = item.gasStation
    if (!acc[station]) {
      acc[station] = { totalLiters: 0, totalCost: 0, count: 0 }
    }
    acc[station].totalLiters += item.liters
    acc[station].totalCost += item.totalAmount
    acc[station].count += 1
    return acc
  }, {} as Record<string, { totalLiters: number; totalCost: number; count: number }>)

  // สรุปตามรถ
  const truckSummary = fuelData.reduce((acc, item) => {
    const truck = `${item.plateNumber}(${item.truckCode})`
    if (!acc[truck]) {
      acc[truck] = { totalLiters: 0, totalCost: 0, count: 0 }
    }
    acc[truck].totalLiters += item.liters
    acc[truck].totalCost += item.totalAmount
    acc[truck].count += 1
    return acc
  }, {} as Record<string, { totalLiters: number; totalCost: number; count: number }>)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">การจัดการน้ำมัน</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มข้อมูลน้ำมัน
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>เพิ่มข้อมูลการเติมน้ำมัน</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">วันที่</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="month">รอบเดือน</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกเดือน" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-07">กรกฎาคม 2024</SelectItem>
                      <SelectItem value="2024-06">มิถุนายน 2024</SelectItem>
                      <SelectItem value="2024-05">พฤษภาคม 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="truckCode">รหัสรถโม่</Label>
                  <Input id="truckCode" placeholder="เช่น A201" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plateNumber">เบอร์รถ</Label>
                  <Input id="plateNumber" placeholder="เช่น 83-5947" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="driverName">ชื่อคนขับ</Label>
                <Input id="driverName" placeholder="เช่น นายสมชาย" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gasStation">ปั้มที่เติมน้ำมัน</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกปั้มน้ำมัน" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangchak-ladprao">ปั้มบางจาก สาขาลาดพร้าว</SelectItem>
                    <SelectItem value="bangchak-vibhavadi">ปั้มบางจาก สาขาวิภาวดี</SelectItem>
                    <SelectItem value="shell-rangsit">ปั้มเชลล์ สาขารังสิต</SelectItem>
                    <SelectItem value="ptt-kaset">ปั้มปตท. สาขาเกษตร</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="liters">จำนวนลิตร</Label>
                  <Input id="liters" type="number" step="0.1" placeholder="เช่น 120.5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pricePerLiter">ราคา/ลิตร</Label>
                  <Input id="pricePerLiter" type="number" step="0.01" placeholder="เช่น 32.50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="totalAmount">ยอดเงินที่จ่าย</Label>
                  <Input id="totalAmount" type="number" step="0.01" placeholder="คำนวณอัตโนมัติ" />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline">ยกเลิก</Button>
                <Button type="submit">บันทึก</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* สถิติภาพรวม */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รวมน้ำมันทั้งหมด</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLiters.toLocaleString()} ลิตร</div>
            <p className="text-xs text-muted-foreground">ในเดือนนี้</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ค่าใช้จ่ายรวม</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">฿{totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">ในเดือนนี้</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ราคาเฉลี่ย/ลิตร</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">฿{averagePricePerLiter.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">ราคาเฉลี่ย</p>
          </CardContent>
        </Card>
      </div>

      {/* ตารางข้อมูลน้ำมัน */}
      <Card>
        <CardHeader>
          <CardTitle>รายการการเติมน้ำมัน</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>วันที่</TableHead>
                <TableHead>รหัสรถโม่</TableHead>
                <TableHead>เบอร์รถ</TableHead>
                <TableHead>ชื่อคนขับ</TableHead>
                <TableHead>ปั้มน้ำมัน</TableHead>
                <TableHead className="text-right">ลิตร</TableHead>
                <TableHead className="text-right">ราคา/ลิตร</TableHead>
                <TableHead className="text-right">ยอดเงิน</TableHead>
                <TableHead>รอบเดือน</TableHead>
                <TableHead className="text-center">จัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fuelData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{new Date(item.date).toLocaleDateString('th-TH')}</TableCell>
                  <TableCell className="font-medium">{item.truckCode}</TableCell>
                  <TableCell>{item.plateNumber}</TableCell>
                  <TableCell>{item.driverName}</TableCell>
                  <TableCell>{item.gasStation}</TableCell>
                  <TableCell className="text-right">{item.liters.toLocaleString()}</TableCell>
                  <TableCell className="text-right">฿{item.pricePerLiter.toFixed(2)}</TableCell>
                  <TableCell className="text-right">฿{item.totalAmount.toLocaleString()}</TableCell>
                  <TableCell>{item.month}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
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

      {/* สรุปตามปั้มน้ำมัน */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>สรุปตามปั้มน้ำมัน</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(gasStationSummary).map(([station, data]) => (
                <div key={station} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{station}</div>
                    <div className="text-sm text-gray-600">{data.count} ครั้ง</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{data.totalLiters.toLocaleString()} ลิตร</div>
                    <div className="text-sm text-gray-600">฿{data.totalCost.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>สรุปตามรถโม่</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(truckSummary).map(([truck, data]) => (
                <div key={truck} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{truck}</div>
                    <div className="text-sm text-gray-600">{data.count} ครั้ง</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{data.totalLiters.toLocaleString()} ลิตร</div>
                    <div className="text-sm text-gray-600">฿{data.totalCost.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
