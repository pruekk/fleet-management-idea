"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Route, Fuel } from "lucide-react"

export default function TransportPage() {
  const [transportRates, setTransportRates] = useState([
    { id: 1, distanceFrom: 0, distanceTo: 10, rate: 500, fuelRate: 20 },
    { id: 2, distanceFrom: 11, distanceTo: 20, rate: 800, fuelRate: 35 },
    { id: 3, distanceFrom: 21, distanceTo: 30, rate: 1200, fuelRate: 50 },
    { id: 4, distanceFrom: 31, distanceTo: 50, rate: 1800, fuelRate: 75 },
  ])

  const [newRate, setNewRate] = useState({
    distanceFrom: "",
    distanceTo: "",
    rate: "",
    fuelRate: "",
  })

  const handleAddRate = () => {
    if (newRate.distanceFrom && newRate.distanceTo && newRate.rate && newRate.fuelRate) {
      setTransportRates([
        ...transportRates,
        {
          id: transportRates.length + 1,
          distanceFrom: Number.parseInt(newRate.distanceFrom),
          distanceTo: Number.parseInt(newRate.distanceTo),
          rate: Number.parseInt(newRate.rate),
          fuelRate: Number.parseInt(newRate.fuelRate),
        },
      ])
      setNewRate({
        distanceFrom: "",
        distanceTo: "",
        rate: "",
        fuelRate: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">การโยกรถ</h1>
        <p className="text-gray-600">ข้อมูลระยะทางและอัตราการจ่ายค่าโยกรถ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  อัตราค่าโยกรถ
                </CardTitle>
                <CardDescription>กำหนดอัตราค่าโยกรถตามระยะทาง</CardDescription>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    เพิ่มอัตรา
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>เพิ่มอัตราใหม่</DialogTitle>
                    <DialogDescription>กำหนดอัตราค่าโยกรถและน้ำมัน</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="distanceFrom">ระยะทางจาก (กม.)</Label>
                        <Input
                          id="distanceFrom"
                          type="number"
                          value={newRate.distanceFrom}
                          onChange={(e) => setNewRate({ ...newRate, distanceFrom: e.target.value })}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="distanceTo">ระยะทางถึง (กม.)</Label>
                        <Input
                          id="distanceTo"
                          type="number"
                          value={newRate.distanceTo}
                          onChange={(e) => setNewRate({ ...newRate, distanceTo: e.target.value })}
                          placeholder="10"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="rate">ค่าโยกรถ (บาท)</Label>
                        <Input
                          id="rate"
                          type="number"
                          value={newRate.rate}
                          onChange={(e) => setNewRate({ ...newRate, rate: e.target.value })}
                          placeholder="500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fuelRate">อัตราน้ำมัน (ลิตร)</Label>
                        <Input
                          id="fuelRate"
                          type="number"
                          value={newRate.fuelRate}
                          onChange={(e) => setNewRate({ ...newRate, fuelRate: e.target.value })}
                          placeholder="20"
                        />
                      </div>
                    </div>
                    <Button onClick={handleAddRate} className="w-full">
                      เพิ่มอัตรา
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
                  <TableHead>ระยะทาง (กม.)</TableHead>
                  <TableHead>ค่าโยกรถ</TableHead>
                  <TableHead>อัตราน้ำมัน</TableHead>
                  <TableHead>การจัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transportRates.map((rate) => (
                  <TableRow key={rate.id}>
                    <TableCell className="font-medium">
                      {rate.distanceFrom}-{rate.distanceTo} กม.
                    </TableCell>
                    <TableCell className="font-semibold text-green-600">฿{rate.rate.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold text-blue-600">{rate.fuelRate} ลิตร</TableCell>
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fuel className="h-5 w-5" />
              สรุปอัตราปัจจุบัน
            </CardTitle>
            <CardDescription>ตารางอัตราที่ใช้งานอยู่</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transportRates.map((rate) => (
                <div key={rate.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">
                      ระยะทาง {rate.distanceFrom}-{rate.distanceTo} กม.
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>ค่าโยกรถ:</span>
                      <span className="font-semibold text-green-600">฿{rate.rate.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>น้ำมัน:</span>
                      <span className="font-semibold text-blue-600">{rate.fuelRate} ลิตร</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
