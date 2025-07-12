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
import { Plus, Edit, Trash2, Copy, Eye, LayoutTemplateIcon as Template } from "lucide-react"

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "สรุปรายวันคนขับ",
      type: "flex",
      category: "รายงาน",
      usage: 45,
      lastUsed: "2024-12-15",
      content: {
        title: "สรุปการวิ่งเที่ยววันนี้",
        fields: ["รถโม่", "จำนวนเที่ยว", "รายได้", "ค่าเที่ยว"],
      },
    },
    {
      id: 2,
      name: "สรุปรายวันลูกค้า",
      type: "flex",
      category: "รายงาน",
      usage: 32,
      lastUsed: "2024-12-14",
      content: {
        title: "สรุปการทำงานประจำวัน",
        fields: ["ลูกค้า", "โรงงาน", "จำนวนเที่ยว", "รายได้รวม"],
      },
    },
    {
      id: 3,
      name: "แจ้งเตือนโยกรถ",
      type: "text",
      category: "แจ้งเตือน",
      usage: 18,
      lastUsed: "2024-12-13",
      content: {
        title: "แจ้งโยกรถ",
        fields: ["รถโม่", "จุดหมาย", "เวลา", "ระยะทาง"],
      },
    },
  ])

  const [newTemplate, setNewTemplate] = useState({
    name: "",
    type: "flex",
    category: "",
    title: "",
    description: "",
    content: "",
  })

  const handleAddTemplate = () => {
    if (newTemplate.name && newTemplate.category && newTemplate.title) {
      setTemplates([
        ...templates,
        {
          id: templates.length + 1,
          name: newTemplate.name,
          type: newTemplate.type,
          category: newTemplate.category,
          usage: 0,
          lastUsed: new Date().toISOString().split("T")[0],
          content: {
            title: newTemplate.title,
            fields: ["รถโม่", "จำนวนเที่ยว", "รายได้"],
          },
        },
      ])
      setNewTemplate({
        name: "",
        type: "flex",
        category: "",
        title: "",
        description: "",
        content: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Template LINE OA</h1>
        <p className="text-gray-600">จัดการ template สำหรับส่งข้อความ LINE</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Template className="h-5 w-5" />
                  รายการ Template
                </CardTitle>
                <CardDescription>สร้างและจัดการ template ทั้งหมด</CardDescription>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    สร้าง Template
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>สร้าง Template ใหม่</DialogTitle>
                    <DialogDescription>กรอกข้อมูลสำหรับสร้าง template</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">ชื่อ Template</Label>
                        <Input
                          id="name"
                          value={newTemplate.name}
                          onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                          placeholder="สรุปรายวันคนขับ"
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">ประเภท</Label>
                        <Select
                          value={newTemplate.type}
                          onValueChange={(value) => setNewTemplate({ ...newTemplate, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกประเภท" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="flex">Flex Message</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                            <SelectItem value="image">Image Message</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="category">หมวดหมู่</Label>
                      <Select
                        value={newTemplate.category}
                        onValueChange={(value) => setNewTemplate({ ...newTemplate, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกหมวดหมู่" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="รายงาน">รายงาน</SelectItem>
                          <SelectItem value="แจ้งเตือน">แจ้งเตือน</SelectItem>
                          <SelectItem value="ข้อมูลทั่วไป">ข้อมูลทั่วไป</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="title">หัวข้อข้อความ</Label>
                      <Input
                        id="title"
                        value={newTemplate.title}
                        onChange={(e) => setNewTemplate({ ...newTemplate, title: e.target.value })}
                        placeholder="สรุปการวิ่งเที่ยววันนี้"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">คำอธิบาย</Label>
                      <Textarea
                        id="description"
                        value={newTemplate.description}
                        onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
                        placeholder="อธิบายการใช้งาน template นี้"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">เนื้อหา Template</Label>
                      <Textarea
                        id="content"
                        value={newTemplate.content}
                        onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
                        placeholder="เนื้อหาของ template..."
                        rows={5}
                      />
                    </div>
                    <Button onClick={handleAddTemplate} className="w-full">
                      สร้าง Template
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
                  <TableHead>ชื่อ Template</TableHead>
                  <TableHead>ประเภท</TableHead>
                  <TableHead>หมวดหมู่</TableHead>
                  <TableHead>ใช้งาน</TableHead>
                  <TableHead>การจัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {templates.map((template) => (
                  <TableRow key={template.id}>
                    <TableCell className="font-medium">{template.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{template.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{template.category}</Badge>
                    </TableCell>
                    <TableCell>{template.usage} ครั้ง</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
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

        <Card>
          <CardHeader>
            <CardTitle>ตัวอย่าง Template</CardTitle>
            <CardDescription>แสดงตัวอย่างข้อความที่จะส่ง</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-center mb-3">
                  <h3 className="font-bold text-lg">สรุปการวิ่งเที่ยววันนี้</h3>
                  <p className="text-sm text-gray-600">วันที่ 15 ธันวาคม 2024</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>รถโม่:</span>
                    <span className="font-medium">80-1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>จำนวนเที่ยว:</span>
                    <span className="font-medium">8 เที่ยว</span>
                  </div>
                  <div className="flex justify-between">
                    <span>รายได้:</span>
                    <span className="font-medium text-green-600">฿12,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>ค่าเที่ยว:</span>
                    <span className="font-bold text-blue-600">฿1,200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="font-semibold">ตัวแปรที่ใช้ได้:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-blue-50 p-2 rounded">
                  <code>{"{{truck_id}}"}</code> - ทะเบียนรถ
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <code>{"{{trips}}"}</code> - จำนวนเที่ยว
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <code>{"{{revenue}}"}</code> - รายได้
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <code>{"{{date}}"}</code> - วันที่
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
