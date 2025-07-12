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
import { Plus, Edit, Trash2, Search, Filter, Truck } from "lucide-react"

export default function TrucksPage() {
  const [trucks, setTrucks] = useState([
    { id: 1, license: "80-1234", model: "Hino", year: 2020, status: "พร้อมใช้งาน", mileage: 45000, driver: "สมชาย ใจดี" },
    { id: 2, license: "80-1235", model: "Isuzu", year: 2019, status: "ซ่อมบำรุง", mileage: 52000, driver: "สมหญิง รักงาน" },
    { id: 3, license: "80-1236", model: "Hino", year: 2021, status: "พร้อมใช้งาน", mileage: 38000, driver: "สมศักดิ์ ขยัน" },
  ])

  const [newTruck, setNewTruck] = useState({
    license: "",
    model: "",
    year: "",
    status: "พร้อมใช้งาน",
    mileage: "",
    driver: "",
  })

  const handleAddTruck = () => {
    if (newTruck.license && newTruck.model && newTruck.year) {
      setTrucks([
        ...trucks,
        {
          id: trucks.length + 1,
          license: newTruck.license,
          model: newTruck.model,
          year: Number.parseInt(newTruck.year),
          status: newTruck.status,
          mileage: Number.parseInt(newTruck.mileage) || 0,
          driver: newTruck.driver,
        },
      ])
      setNewTruck({
        license: "",
        model: "",
        year: "",
        status: "พร้อมใช้งาน",
        mileage: "",
        driver: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการรถโม่</h1>
        <p className="text-gray-600">ข้อมูลรถโม่ทั้งหมดในระบบ</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                รายการรถโม่
              </CardTitle>
              <CardDescription>จัดการข้อมูลรถโม่ทั้งหมด</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มรถโม่
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>เพิ่มรถโม่ใหม่</DialogTitle>
                  <DialogDescription>กรอกข้อมูลรถโม่ใหม่</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="license">ทะเบียนรถ</Label>
                      <Input
                        id="license"
                        value={newTruck.license}
                        onChange={(e) => setNewTruck({ ...newTruck, license: e.target.value })}
                        placeholder="เช่น 80-1234"
                      />
                    </div>
                    <div>
                      <Label htmlFor="model">รุ่นรถ</Label>
                      <Input
                        id="model"
                        value={newTruck.model}
                        onChange={(e) => setNewTruck({ ...newTruck, model: e.target.value })}
                        placeholder="เช่น Hino"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year">ปีผลิต</Label>
                      <Input
                        id="year"
                        type="number"
                        value={newTruck.year}
                        onChange={(e) => setNewTruck({ ...newTruck, year: e.target.value })}
                        placeholder="เช่น 2020"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mileage">เลขไมล์</Label>
                      <Input
                        id="mileage"
                        type="number"
                        value={newTruck.mileage}
                        onChange={(e) => setNewTruck({ ...newTruck, mileage: e.target.value })}
                        placeholder="เช่น 45000"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="driver">คนขับประจำ</Label>
                    <Input
                      id="driver"
                      value={newTruck.driver}
                      onChange={(e) => setNewTruck({ ...newTruck, driver: e.target.value })}
                      placeholder="ชื่อคนขับ"
                    />
                  </div>
                  <Button onClick={handleAddTruck} className="w-full">
                    เพิ่มรถโม่
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="ค้นหาทะเบียนรถ..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              กรอง
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ทะเบียนรถ</TableHead>
                <TableHead>รุ่น</TableHead>
                <TableHead>ปีผลิต</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>เลขไมล์</TableHead>
                <TableHead>คนขับประจำ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trucks.map((truck) => (
                <TableRow key={truck.id}>
                  <TableCell className="font-medium">{truck.license}</TableCell>
                  <TableCell>{truck.model}</TableCell>
                  <TableCell>{truck.year}</TableCell>
                  <TableCell>
                    <Badge
                      variant={truck.status === "พร้อมใช้งาน" ? "secondary" : "destructive"}
                      className={truck.status === "พร้อมใช้งาน" ? "bg-green-100 text-green-800" : ""}
                    >
                      {truck.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{truck.mileage.toLocaleString()} กม.</TableCell>
                  <TableCell>{truck.driver}</TableCell>
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
