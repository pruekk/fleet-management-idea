"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Plus, Edit, Trash2, Wrench, AlertTriangle } from "lucide-react"

export default function MaintenancePage() {
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const maintenanceTemplates = [
    { id: "ursa-standard", name: "Ursa มาตรฐาน", description: "เทมเพลตมาตรฐานจากระบบ Ursa" },
    { id: "ursa-detailed", name: "Ursa รายละเอียด", description: "เทมเพลตรายละเอียดจากระบบ Ursa" },
    { id: "manual", name: "บันทึกด้วยตนเอง", description: "เทมเพลตสำหรับบันทึกข้อมูลเอง" },
  ]

  const [maintenance, setMaintenance] = useState([
    {
      id: 1,
      truck: "80-1234",
      type: "เปลี่ยนน้ำมันเครื่อง",
      cost: 2500,
      date: "2024-12-10",
      status: "เสร็จสิ้น",
      description: "เปลี่ยนน้ำมันเครื่องตามกำหนด",
      mechanic: "ช่างสมชาย",
      nextService: "2025-01-10",
    },
    {
      id: 2,
      truck: "80-1235",
      type: "ซ่อมเบรก",
      cost: 8500,
      date: "2024-12-12",
      status: "กำลังซ่อม",
      description: "เบรกหน้าเสียหาย ต้องเปลี่ยนผ้าเบรก",
      mechanic: "ช่างสมหญิง",
      nextService: "2024-12-20",
    },
    {
      id: 3,
      truck: "80-1236",
      type: "เปลี่ยนยาง",
      cost: 15000,
      date: "2024-12-14",
      status: "เสร็จสิ้น",
      description: "เปลี่ยนยางทั้ง 4 เส้น",
      mechanic: "ช่างสมศักดิ์",
      nextService: "2025-06-14",
    },
  ])

  const [newMaintenance, setNewMaintenance] = useState({
    truck: "",
    type: "",
    cost: "",
    date: "",
    status: "รอดำเนินการ",
    description: "",
    mechanic: "",
    nextService: "",
  })

  const handleAddMaintenance = () => {
    if (newMaintenance.truck && newMaintenance.type && newMaintenance.cost) {
      setMaintenance([
        ...maintenance,
        {
          id: maintenance.length + 1,
          truck: newMaintenance.truck,
          type: newMaintenance.type,
          cost: Number.parseInt(newMaintenance.cost),
          date: newMaintenance.date,
          status: newMaintenance.status,
          description: newMaintenance.description,
          mechanic: newMaintenance.mechanic,
          nextService: newMaintenance.nextService,
        },
      ])
      setNewMaintenance({
        truck: "",
        type: "",
        cost: "",
        date: "",
        status: "รอดำเนินการ",
        description: "",
        mechanic: "",
        nextService: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">การซ่อมบำรุง</h1>
        <p className="text-gray-600">ข้อมูลการซ่อมบำรุงรถโม่</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รถกำลังซ่อม</CardTitle>
            <Wrench className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">2</div>
            <p className="text-xs text-muted-foreground">8.3% ของรถทั้งหมด</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ค่าซ่อมเดือนนี้</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">฿26,000</div>
            <p className="text-xs text-muted-foreground">+15% จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">งานเสร็จแล้ว</CardTitle>
            <Wrench className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">15</div>
            <p className="text-xs text-muted-foreground">งานในเดือนนี้</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รอซ่อม</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <p className="text-xs text-muted-foreground">รายการรอดำเนินการ</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>รายการซ่อมบำรุง</CardTitle>
              <CardDescription>ข้อมูลการซ่อมบำรุงรถโม่ทั้งหมด</CardDescription>
            </div>
            <div className="flex gap-2">
              <Select onValueChange={setSelectedTemplate} value={selectedTemplate}>
                <SelectTrigger className="w-[220px]">
                  <SelectValue placeholder="นำเข้าจาก Ursa" />
                </SelectTrigger>
                <SelectContent>
                  {maintenanceTemplates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    เพิ่มรายการ
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>เพิ่มรายการซ่อมบำรุง</DialogTitle>
                    <DialogDescription>บันทึกข้อมูลการซ่อมบำรุงใหม่</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="truck">รถโม่</Label>
                        <Select
                          value={newMaintenance.truck}
                          onValueChange={(value) => setNewMaintenance({ ...newMaintenance, truck: value })}
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
                      <div>
                        <Label htmlFor="type">ประเภทการซ่อม</Label>
                        <Select
                          value={newMaintenance.type}
                          onValueChange={(value) => setNewMaintenance({ ...newMaintenance, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกประเภท" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="เปลี่ยนน้ำมันเครื่อง">เปลี่ยนน้ำมันเครื่อง</SelectItem>
                            <SelectItem value="ซ่อมเบรก">ซ่อมเบรก</SelectItem>
                            <SelectItem value="เปลี่ยนยาง">เปลี่ยนยาง</SelectItem>
                            <SelectItem value="ซ่อมเครื่องยนต์">ซ่อมเครื่องยนต์</SelectItem>
                            <SelectItem value="ซ่อมระบบไฟ">ซ่อมระบบไฟ</SelectItem>
                            <SelectItem value="อื่นๆ">อื่นๆ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cost">ค่าใช้จ่าย (บาท)</Label>
                        <Input
                          id="cost"
                          type="number"
                          value={newMaintenance.cost}
                          onChange={(e) => setNewMaintenance({ ...newMaintenance, cost: e.target.value })}
                          placeholder="2500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="date">วันที่ซ่อม</Label>
                        <Input
                          id="date"
                          type="date"
                          value={newMaintenance.date}
                          onChange={(e) => setNewMaintenance({ ...newMaintenance, date: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="mechanic">ช่างผู้รับผิดชอบ</Label>
                        <Select
                          value={newMaintenance.mechanic}
                          onValueChange={(value) => setNewMaintenance({ ...newMaintenance, mechanic: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกช่าง" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ช่างสมชาย">ช่างสมชาย</SelectItem>
                            <SelectItem value="ช่างสมหญิง">ช่างสมหญิง</SelectItem>
                            <SelectItem value="ช่างสมศักดิ์">ช่างสมศักดิ์</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="nextService">วันที่ซ่อมครั้งต่อไป</Label>
                        <Input
                          id="nextService"
                          type="date"
                          value={newMaintenance.nextService}
                          onChange={(e) => setNewMaintenance({ ...newMaintenance, nextService: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">รายละเอียด</Label>
                      <Textarea
                        id="description"
                        value={newMaintenance.description}
                        onChange={(e) => setNewMaintenance({ ...newMaintenance, description: e.target.value })}
                        placeholder="รายละเอียดการซ่อม..."
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleAddMaintenance} className="w-full">
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
                <TableHead>รถโม่</TableHead>
                <TableHead>ประเภทการซ่อม</TableHead>
                <TableHead>ค่าใช้จ่าย</TableHead>
                <TableHead>วันที่</TableHead>
                <TableHead>ช่าง</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenance.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.truck}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell className="font-medium text-red-600">฿{item.cost.toLocaleString()}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.mechanic}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "เสร็จสิ้น" ? "secondary" : item.status === "กำลังซ่อม" ? "destructive" : "outline"
                      }
                      className={
                        item.status === "เสร็จสิ้น"
                          ? "bg-green-100 text-green-800"
                          : item.status === "กำลังซ่อม"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
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
