"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Search } from "lucide-react"

interface Supplier {
  id: string
  name: string
  type: string
  contact: string
  phone: string
  email: string
  address: string
  taxId: string
  status: string
}

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([
    {
      id: "SUP001",
      name: "บริษัท น้ำมันเชลล์ จำกัด",
      type: "น้ำมัน",
      contact: "คุณสมชาย",
      phone: "02-123-4567",
      email: "contact@shell.co.th",
      address: "123 ถนนสุขุมวิท กรุงเทพฯ 10110",
      taxId: "0123456789012",
      status: "ใช้งาน",
    },
    {
      id: "SUP002",
      name: "บริษัท อะไหล่รถยนต์ ABC จำกัด",
      type: "อะไหล่",
      contact: "คุณสมหญิง",
      phone: "02-234-5678",
      email: "info@abc-parts.com",
      address: "456 ถนนพหลโยธิน กรุงเทพฯ 10400",
      taxId: "0234567890123",
      status: "ใช้งาน",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    contact: "",
    phone: "",
    email: "",
    address: "",
    taxId: "",
    status: "ใช้งาน",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingSupplier) {
      setSuppliers(
        suppliers.map((supplier) => (supplier.id === editingSupplier.id ? { ...supplier, ...formData } : supplier)),
      )
    } else {
      const newSupplier: Supplier = {
        id: `SUP${String(suppliers.length + 1).padStart(3, "0")}`,
        ...formData,
      }
      setSuppliers([...suppliers, newSupplier])
    }

    setIsDialogOpen(false)
    setEditingSupplier(null)
    setFormData({
      name: "",
      type: "",
      contact: "",
      phone: "",
      email: "",
      address: "",
      taxId: "",
      status: "ใช้งาน",
    })
  }

  const handleEdit = (supplier: Supplier) => {
    setEditingSupplier(supplier)
    setFormData({
      name: supplier.name,
      type: supplier.type,
      contact: supplier.contact,
      phone: supplier.phone,
      email: supplier.email,
      address: supplier.address,
      taxId: supplier.taxId,
      status: supplier.status,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id))
  }

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ซัพพลายเออร์</h1>
        <p className="text-gray-600">จัดการข้อมูลซัพพลายเออร์และผู้ให้บริการ</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="ค้นหาซัพพลายเออร์..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingSupplier(null)
                setFormData({
                  name: "",
                  type: "",
                  contact: "",
                  phone: "",
                  email: "",
                  address: "",
                  taxId: "",
                  status: "ใช้งาน",
                })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มซัพพลายเออร์
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{editingSupplier ? "แก้ไขซัพพลายเออร์" : "เพิ่มซัพพลายเออร์ใหม่"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">ชื่อบริษัท/ร้านค้า *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="ระบุชื่อบริษัทหรือร้านค้า"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">ประเภทสินค้า/บริการ *</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภท" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="น้ำมัน">น้ำมัน</SelectItem>
                      <SelectItem value="อะไหล่">อะไหล่</SelectItem>
                      <SelectItem value="ยาง">ยาง</SelectItem>
                      <SelectItem value="บริการซ่อม">บริการซ่อม</SelectItem>
                      <SelectItem value="อื่นๆ">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact">ชื่อผู้ติดต่อ *</Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                    placeholder="ชื่อผู้ติดต่อหลัก"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="02-xxx-xxxx"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">อีเมล</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">เลขประจำตัวผู้เสียภาษี</Label>
                  <Input
                    id="taxId"
                    value={formData.taxId}
                    onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                    placeholder="13 หลัก"
                    maxLength={13}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">ที่อยู่ *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  placeholder="ที่อยู่สำหรับจัดส่งเอกสาร"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">สถานะ</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ใช้งาน">ใช้งาน</SelectItem>
                    <SelectItem value="ระงับ">ระงับ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  ยกเลิก
                </Button>
                <Button type="submit">{editingSupplier ? "บันทึกการแก้ไข" : "เพิ่มซัพพลายเออร์"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายการซัพพลายเออร์</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>รหัส</TableHead>
                <TableHead>ชื่อบริษัท/ร้านค้า</TableHead>
                <TableHead>ประเภท</TableHead>
                <TableHead>ผู้ติดต่อ</TableHead>
                <TableHead>เบอร์โทร</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead className="text-right">การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium">{supplier.id}</TableCell>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {supplier.type}
                    </span>
                  </TableCell>
                  <TableCell>{supplier.contact}</TableCell>
                  <TableCell>{supplier.phone}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        supplier.status === "ใช้งาน" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {supplier.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(supplier)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(supplier.id)}>
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
