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
import { Plus, Edit, Trash2, FileText, Upload, Download, Eye } from "lucide-react"

export default function QuotationsPage() {
  const [quotations, setQuotations] = useState([
    {
      id: 1,
      code: "QT-2024-001",
      customer: "บริษัท ก่อสร้าง ABC จำกัด",
      items: [
        { code: "1", queues: 5, price: 1143.43 },
        { code: "A", queues: 3, price: 1543.2 },
        { code: "B", queues: 8, price: 1200.0 },
      ],
      totalAmount: 15429.69,
      status: "อนุมัติแล้ว",
      createdAt: "2024-12-01",
      validUntil: "2024-12-31",
    },
    {
      id: 2,
      code: "QT-2024-002",
      customer: "บริษัท โครงการใหญ่ จำกัด",
      items: [
        { code: "2", queues: 10, price: 1350.0 },
        { code: "C", queues: 5, price: 1450.5 },
      ],
      totalAmount: 20752.5,
      status: "รออนุมัติ",
      createdAt: "2024-12-05",
      validUntil: "2025-01-05",
    },
  ])

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newQuotation, setNewQuotation] = useState({
    customer: "",
    items: [{ code: "", queues: 0, price: 0 }],
  })

  const addItem = () => {
    setNewQuotation((prev) => ({
      ...prev,
      items: [...prev.items, { code: "", queues: 0, price: 0 }],
    }))
  }

  const removeItem = (index: number) => {
    setNewQuotation((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }))
  }

  const updateItem = (index: number, field: string, value: any) => {
    setNewQuotation((prev) => ({
      ...prev,
      items: prev.items.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

  const calculateTotal = () => {
    return newQuotation.items.reduce((total, item) => total + item.queues * item.price, 0)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ใบราคา</h1>
          <p className="text-gray-600">จัดการใบเสนอราคาสำหรับลูกค้า</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            นำเข้า Excel
          </Button>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                สร้างใบราคา
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>สร้างใบเสนอราคา</DialogTitle>
                <DialogDescription>กรอกข้อมูลรายการและราคาสำหรับลูกค้า</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="customer">ลูกค้า</Label>
                  <Select
                    value={newQuotation.customer}
                    onValueChange={(value) => setNewQuotation((prev) => ({ ...prev, customer: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกลูกค้า" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="บริษัท ก่อสร้าง ABC จำกัด">บริษัท ก่อสร้าง ABC จำกัด</SelectItem>
                      <SelectItem value="บริษัท โครงการใหญ่ จำกัด">บริษัท โครงการใหญ่ จำกัด</SelectItem>
                      <SelectItem value="บริษัท พัฒนาที่ดิน จำกัด">บริษัท พัฒนาที่ดิน จำกัด</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label>รายการสินค้า</Label>
                    <Button variant="outline" size="sm" onClick={addItem}>
                      <Plus className="h-4 w-4 mr-1" />
                      เพิ่มรายการ
                    </Button>
                  </div>

                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>รหัส</TableHead>
                          <TableHead>จำนวนคิว</TableHead>
                          <TableHead>ราคาต่อคิว</TableHead>
                          <TableHead>รวม</TableHead>
                          <TableHead>การจัดการ</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {newQuotation.items.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Input
                                value={item.code}
                                onChange={(e) => updateItem(index, "code", e.target.value)}
                                placeholder="รหัส"
                                className="w-20"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                value={item.queues}
                                onChange={(e) => updateItem(index, "queues", Number.parseInt(e.target.value) || 0)}
                                placeholder="0"
                                className="w-24"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                step="0.01"
                                value={item.price}
                                onChange={(e) => updateItem(index, "price", Number.parseFloat(e.target.value) || 0)}
                                placeholder="0.00"
                                className="w-32"
                              />
                            </TableCell>
                            <TableCell>
                              <span className="font-medium">
                                ฿{(item.queues * item.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                              </span>
                            </TableCell>
                            <TableCell>
                              {newQuotation.items.length > 1 && (
                                <Button variant="outline" size="sm" onClick={() => removeItem(index)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell colSpan={3} className="text-right font-semibold">
                            รวมทั้งสิ้น:
                          </TableCell>
                          <TableCell className="font-bold text-green-600">
                            ฿{calculateTotal().toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    ยกเลิก
                  </Button>
                  <Button onClick={() => setIsCreateDialogOpen(false)}>สร้างใบราคา</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            รายการใบเสนอราคา
          </CardTitle>
          <CardDescription>ใบเสนอราคาทั้งหมดในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Input placeholder="ค้นหาเลขที่ใบราคา..." className="max-w-sm" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="สถานะ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ทั้งหมด</SelectItem>
                <SelectItem value="pending">รออนุมัติ</SelectItem>
                <SelectItem value="approved">อนุมัติแล้ว</SelectItem>
                <SelectItem value="rejected">ปฏิเสธ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>เลขที่ใบราคา</TableHead>
                <TableHead>ลูกค้า</TableHead>
                <TableHead>จำนวนรายการ</TableHead>
                <TableHead>ยอดรวม</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>วันที่สร้าง</TableHead>
                <TableHead>หมดอายุ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotations.map((quotation) => (
                <TableRow key={quotation.id}>
                  <TableCell className="font-medium">{quotation.code}</TableCell>
                  <TableCell>{quotation.customer}</TableCell>
                  <TableCell>{quotation.items.length} รายการ</TableCell>
                  <TableCell className="font-medium text-green-600">
                    ฿{quotation.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={quotation.status === "อนุมัติแล้ว" ? "secondary" : "destructive"}
                      className={
                        quotation.status === "อนุมัติแล้ว" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                      }
                    >
                      {quotation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{quotation.createdAt}</TableCell>
                  <TableCell>{quotation.validUntil}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ใบราคาทั้งหมด</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{quotations.length}</div>
            <p className="text-xs text-muted-foreground">ฉบับ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รออนุมัติ</CardTitle>
            <FileText className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {quotations.filter((q) => q.status === "รออนุมัติ").length}
            </div>
            <p className="text-xs text-muted-foreground">ฉบับ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">อนุมัติแล้ว</CardTitle>
            <FileText className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {quotations.filter((q) => q.status === "อนุมัติแล้ว").length}
            </div>
            <p className="text-xs text-muted-foreground">ฉบับ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">มูลค่ารวม</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ฿{quotations.reduce((sum, q) => sum + q.totalAmount, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">บาท</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
