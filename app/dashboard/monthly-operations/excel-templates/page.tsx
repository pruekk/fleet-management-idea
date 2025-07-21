"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"

export default function ExcelTemplatesPage() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "วิ่งเที่ยวมาตรฐาน",
      type: "trips",
      description: "เทมเพลตสำหรับบันทึกข้อมูลการวิ่งเที่ยวประจำวัน",
      columns: ["วันที่", "รถโม่", "คนขับ", "ลูกค้า", "จำนวนเที่ยว", "รายได้"],
      mapping: {
        วันที่: "A",
        รถโม่: "B",
        คนขับ: "C",
        ลูกค้า: "D",
        จำนวนเที่ยว: "E",
        รายได้: "F",
      },
      createdAt: "2024-12-01",
      lastUsed: "2024-12-15",
    },
    {
      id: 2,
      name: "น้ำมันรายวัน",
      type: "fuel",
      description: "เทมเพลตสำหรับบันทึกการเติมน้ำมัน",
      columns: ["วันที่", "รถโม่", "ลิตร", "ราคา", "ประเภท"],
      mapping: {
        วันที่: "A",
        รถโม่: "B",
        ลิตร: "C",
        ราคา: "D",
        ประเภท: "E",
      },
      createdAt: "2024-11-15",
      lastUsed: "2024-12-14",
    },
    {
      id: 3,
      name: "Ursa ซ่อมบำรุง",
      type: "maintenance",
      columns: ["รหัสงาน", "รถโม่", "ประเภท", "ค่าใช้จ่าย", "วันที่", "สถานะ"],
      mapping: {
        รหัสงาน: "A",
        รถโม่: "B",
        ประเภท: "C",
        ค่าใช้จ่าย: "D",
        วันที่: "E",
        สถานะ: "F",
      },
      createdAt: "2024-10-20",
      lastUsed: "2024-12-10",
    },
  ])

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newTemplate, setNewTemplate] = useState({
    name: "",
    type: "",
    columns: [""],
    mapping: {},
  })

  const addColumn = () => {
    setNewTemplate((prev) => ({
      ...prev,
      columns: [...prev.columns, ""],
    }))
  }

  const removeColumn = (index: number) => {
    setNewTemplate((prev) => ({
      ...prev,
      columns: prev.columns.filter((_, i) => i !== index),
    }))
  }

  const updateColumn = (index: number, value: string) => {
    setNewTemplate((prev) => ({
      ...prev,
      columns: prev.columns.map((col, i) => (i === index ? value : col)),
    }))
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "trips":
        return "วิ่งเที่ยว"
      case "fuel":
        return "น้ำมัน"
      case "maintenance":
        return "ซ่อมบำรุง"
      default:
        return type
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "trips":
        return "bg-blue-100 text-blue-800"
      case "fuel":
        return "bg-green-100 text-green-800"
      case "maintenance":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Excel Templates</h1>
          <p className="text-gray-600">จัดการเทมเพลตสำหรับการนำเข้าข้อมูลจาก Excel</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              สร้างเทมเพลต
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>สร้างเทมเพลตใหม่</DialogTitle>
              <DialogDescription>กำหนดการจับคู่คอลัมน์ Excel กับข้อมูลในระบบ</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="template-name">ชื่อเทมเพลต</Label>
                  <Input
                    id="template-name"
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="เช่น วิ่งเที่ยวรายวัน"
                  />
                </div>
                <div>
                  <Label htmlFor="template-type">ประเภท</Label>
                  <Select
                    value={newTemplate.type}
                    onChange={(e) => setNewTemplate((prev) => ({ ...prev, type: e.target.value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภท" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trips">วิ่งเที่ยว</SelectItem>
                      <SelectItem value="fuel">น้ำมัน</SelectItem>
                      <SelectItem value="maintenance">ซ่อมบำรุง</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label>คอลัมน์ข้อมูล</Label>
                  <Button variant="outline" size="sm" onClick={addColumn}>
                    <Plus className="h-4 w-4 mr-1" />
                    เพิ่มคอลัมน์
                  </Button>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {newTemplate.columns.map((column, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={column}
                        onChange={(e) => updateColumn(index, e.target.value)}
                        placeholder={`คอลัมน์ ${index + 1}`}
                        className="flex-1"
                      />
                      <Select>
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="A" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 26 }, (_, i) => (
                            <SelectItem key={i} value={String.fromCharCode(65 + i)}>
                              {String.fromCharCode(65 + i)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {newTemplate.columns.length > 1 && (
                        <Button variant="outline" size="sm" onClick={() => removeColumn(index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  ยกเลิก
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>สร้างเทมเพลต</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabs component is not included in the existing code, so it's assumed to be a placeholder for future implementation */}
      {/* <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
          <TabsTrigger value="trips">วิ่งเที่ยว</TabsTrigger>
          <TabsTrigger value="fuel">น้ำมัน</TabsTrigger>
          <TabsTrigger value="maintenance">ซ่อมบำรุง</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                เทมเพลตทั้งหมด
              </CardTitle>
              <CardDescription>รายการเทมเพลต Excel ที่สร้างไว้</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ชื่อเทมเพลต</TableHead>
                    <TableHead>ประเภท</TableHead>
                    <TableHead>จำนวนคอลัมน์</TableHead>
                    <TableHead>สร้างเมื่อ</TableHead>
                    <TableHead>ใช้ล่าสุด</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell>
                        <Badge className={getTypeBadgeColor(template.type)}>{getTypeLabel(template.type)}</Badge>
                      </TableCell>
                      <TableCell>{template.columns.length} คอลัมน์</TableCell>
                      <TableCell>{template.createdAt}</TableCell>
                      <TableCell>{template.lastUsed}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
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
        </TabsContent>

        <TabsContent value="trips">
          <Card>
            <CardHeader>
              <CardTitle>เทมเพลตวิ่งเที่ยว</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates
                  .filter((t) => t.type === "trips")
                  .map((template) => (
                    <Card key={template.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription>{template.columns.length} คอลัมน์</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">คอลัมน์:</div>
                          <div className="flex flex-wrap gap-1">
                            {template.columns.map((col, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {col}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" className="flex-1">
                              <Upload className="h-4 w-4 mr-1" />
                              ใช้งาน
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fuel">
          <Card>
            <CardHeader>
              <CardTitle>เทมเพลตน้ำมัน</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates
                  .filter((t) => t.type === "fuel")
                  .map((template) => (
                    <Card key={template.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription>{template.columns.length} คอลัมน์</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">คอลัมน์:</div>
                          <div className="flex flex-wrap gap-1">
                            {template.columns.map((col, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {col}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" className="flex-1">
                              <Upload className="h-4 w-4 mr-1" />
                              ใช้งาน
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <CardTitle>เทมเพลตซ่อมบำรุง</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates
                  .filter((t) => t.type === "maintenance")
                  .map((template) => (
                    <Card key={template.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription>{template.columns.length} คอลัมน์</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">คอลัมน์:</div>
                          <div className="flex flex-wrap gap-1">
                            {template.columns.map((col, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {col}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" className="flex-1">
                              <Upload className="h-4 w-4 mr-1" />
                              ใช้งาน
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs> */}
    </div>
  )
}
