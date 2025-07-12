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
import { Upload, Plus, Edit, Trash2, Fuel, TrendingUp, TrendingDown } from "lucide-react"

export default function FuelPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const excelTemplates = [
    { id: "fuel-standard", name: "แบบฟอร์มน้ำมันมาตรฐาน", description: "เทมเพลตสำหรับบันทึกการเติมน้ำมัน" },
    { id: "fuel-detailed", name: "แบบฟอร์มน้ำมันรายละเอียด", description: "เทมเพลตที่มีข้อมูลครบถ้วนรวมถึงเลขไมล์" },
    { id: "fuel-transfer", name: "แบบฟอร์มการให้น้ำมัน", description: "เทมเพลตสำหรับบันทึกการให้น้ำมันโยกรถ" },
  ]

  const [fuelRecords, setFuelRecords] = useState([
    {
      id: 1,
      date: "2024-12-15",
      truck: "80-1234",
      type: "เติมน้ำมัน",
      amount: 150,
      cost: 4500,
      station: "ปตท. สาขา 1",
      driver: "สมชาย ใจดี",
      mileage: 45150,
    },
    {
      id: 2,
      date: "2024-12-15",
      truck: "80-1235",
      type: "เติมน้ำมัน",
      amount: 120,
      cost: 3600,
      station: "บางจาก สาขา 2",
      driver: "สมหญิง รักงาน",
      mileage: 52120,
    },
    {
      id: 3,
      date: "2024-12-15",
      truck: "80-1234",
      type: "ให้น้ำมันโยกรถ",
      amount: 50,
      cost: 0,
      station: "-",
      driver: "สมชาย ใจดี",
      mileage: 45200,
    },
  ])

  const [newFuelRecord, setNewFuelRecord] = useState({
    date: "",
    truck: "",
    type: "เติมน้ำมัน",
    amount: "",
    cost: "",
    station: "",
    driver: "",
    mileage: "",
  })

  const handleAddFuelRecord = () => {
    if (newFuelRecord.date && newFuelRecord.truck && newFuelRecord.amount) {
      setFuelRecords([
        ...fuelRecords,
        {
          id: fuelRecords.length + 1,
          date: newFuelRecord.date,
          truck: newFuelRecord.truck,
          type: newFuelRecord.type,
          amount: Number.parseInt(newFuelRecord.amount),
          cost: Number.parseInt(newFuelRecord.cost) || 0,
          station: newFuelRecord.station,
          driver: newFuelRecord.driver,
          mileage: Number.parseInt(newFuelRecord.mileage) || 0,
        },
      ])
      setNewFuelRecord({
        date: "",
        truck: "",
        type: "เติมน้ำมัน",
        amount: "",
        cost: "",
        station: "",
        driver: "",
        mileage: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการน้ำมัน</h1>
        <p className="text-gray-600">ข้อมูลการเติมน้ำมันและการให้น้ำมัน</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">น้ำมันวันนี้</CardTitle>
            <Fuel className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">1,250</div>
            <p className="text-xs text-muted-foreground">ลิตร</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ค่าน้ำมันวันนี้</CardTitle>
            <TrendingUp className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">฿37,500</div>
            <p className="text-xs text-muted-foreground">+8% จากเมื่อวาน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เฉลี่ยต่อลิตร</CardTitle>
            <TrendingDown className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">฿30</div>
            <p className="text-xs text-muted-foreground">-฿2 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">น้ำมันเดือนนี้</CardTitle>
            <Fuel className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">28,500</div>
            <p className="text-xs text-muted-foreground">ลิตร</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>การเติมน้ำมัน</CardTitle>
            <CardDescription>รายการเติมน้ำมันจากปั๊ม</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {fuelRecords
                .filter((record) => record.type === "เติมน้ำมัน")
                .map((record) => (
                  <div key={record.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{record.truck}</p>
                      <p className="text-sm text-muted-foreground">{record.station}</p>
                      <p className="text-sm text-muted-foreground">{record.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{record.amount} ลิตร</p>
                      <p className="text-sm text-muted-foreground">฿{record.cost.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>การให้น้ำมัน</CardTitle>
            <CardDescription>น้ำมันที่ให้สำหรับโยกรถและงานพิเศษ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {fuelRecords
                .filter((record) => record.type === "ให้น้ำมันโยกรถ")
                .map((record) => (
                  <div key={record.id} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">{record.truck}</p>
                      <p className="text-sm text-muted-foreground">โยกรถ</p>
                      <p className="text-sm text-muted-foreground">{record.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{record.amount} ลิตร</p>
                      <p className="text-sm text-muted-foreground">ตามมาตรฐาน</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>บันทึกการใช้น้ำมัน</CardTitle>
              <CardDescription>รายการการใช้น้ำมันทั้งหมด</CardDescription>
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    นำเข้า Excel
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>เลือกเทมเพลต Excel</DialogTitle>
                    <DialogDescription>เลือกเทมเพลตที่เหมาะสมสำหรับการนำเข้าข้อมูล</DialogDescription>
                  </DialogHeader>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger className="w-[100%]">
                      <SelectValue placeholder="เลือกเทมเพลต" />
                    </SelectTrigger>
                    <SelectContent>
                      {excelTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedTemplate && (
                    <div className="mt-4">
                      <p>
                        <strong>{excelTemplates.find((t) => t.id === selectedTemplate)?.name}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {excelTemplates.find((t) => t.id === selectedTemplate)?.description}
                      </p>
                    </div>
                  )}
                  <Button disabled={!selectedTemplate} className="w-full mt-4">
                    นำเข้า
                  </Button>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    เพิ่มรายการ
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>เพิ่มรายการน้ำมัน</DialogTitle>
                    <DialogDescription>บันทึกข้อมูลการใช้น้ำมัน</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">วันที่</Label>
                        <Input
                          id="date"
                          type="date"
                          value={newFuelRecord.date}
                          onChange={(e) => setNewFuelRecord({ ...newFuelRecord, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="truck">รถโม่</Label>
                        <Select
                          value={newFuelRecord.truck}
                          onValueChange={(value) => setNewFuelRecord({ ...newFuelRecord, truck: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกรถโม่" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="80-1234">80-1234</SelectItem>
                            <SelectItem value="80-1235">80-1235</SelectItem>
                            <SelectItem value="80-1236">80-1236</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="type">ประเภท</Label>
                        <Select
                          value={newFuelRecord.type}
                          onValueChange={(value) => setNewFuelRecord({ ...newFuelRecord, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกประเภท" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="เติมน้ำมัน">เติมน้ำมัน</SelectItem>
                            <SelectItem value="ให้น้ำมันโยกรถ">ให้น้ำมันโยกรถ</SelectItem>
                            <SelectItem value="ให้น้ำมันงานพิเศษ">ให้น้ำมันงานพิเศษ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="amount">จำนวน (ลิตร)</Label>
                        <Input
                          id="amount"
                          type="number"
                          value={newFuelRecord.amount}
                          onChange={(e) => setNewFuelRecord({ ...newFuelRecord, amount: e.target.value })}
                          placeholder="150"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cost">ค่าใช้จ่าย (บาท)</Label>
                        <Input
                          id="cost"
                          type="number"
                          value={newFuelRecord.cost}
                          onChange={(e) => setNewFuelRecord({ ...newFuelRecord, cost: e.target.value })}
                          placeholder="4500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="mileage">เลขไมล์</Label>
                        <Input
                          id="mileage"
                          type="number"
                          value={newFuelRecord.mileage}
                          onChange={(e) => setNewFuelRecord({ ...newFuelRecord, mileage: e.target.value })}
                          placeholder="45150"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="station">ปั๊มน้ำมัน</Label>
                        <Input
                          id="station"
                          value={newFuelRecord.station}
                          onChange={(e) => setNewFuelRecord({ ...newFuelRecord, station: e.target.value })}
                          placeholder="ปตท. สาขา 1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="driver">คนขับ</Label>
                        <Select
                          value={newFuelRecord.driver}
                          onValueChange={(value) => setNewFuelRecord({ ...newFuelRecord, driver: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกคนขับ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="สมชาย ใจดี">สมชาย ใจดี</SelectItem>
                            <SelectItem value="สมหญิง รักงาน">สมหญิง รักงาน</SelectItem>
                            <SelectItem value="สมศักดิ์ ขยัน">สมศักดิ์ ขยัน</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleAddFuelRecord} className="w-full">
                      บันทึกข้อมูล
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>วันที่</TableHead>
                <TableHead>รถโม่</TableHead>
                <TableHead>ประเภท</TableHead>
                <TableHead>จำนวน</TableHead>
                <TableHead>ค่าใช้จ่าย</TableHead>
                <TableHead>ปั๊มน้ำมัน</TableHead>
                <TableHead>คนขับ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fuelRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell className="font-medium">{record.truck}</TableCell>
                  <TableCell>
                    <Badge variant={record.type === "เติมน้ำมัน" ? "secondary" : "outline"}>{record.type}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{record.amount} ลิตร</TableCell>
                  <TableCell className="font-medium text-red-600">
                    {record.cost > 0 ? `฿${record.cost.toLocaleString()}` : "-"}
                  </TableCell>
                  <TableCell>{record.station}</TableCell>
                  <TableCell>{record.driver}</TableCell>
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
