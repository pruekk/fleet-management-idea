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
import { Plus, Edit, Trash2, Search, Filter, Building2, Phone, MapPin } from "lucide-react"

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "บริษัท ก่อสร้าง ABC จำกัด",
      type: "ลูกค้า",
      contact: "02-123-4567",
      contactPerson: "คุณสมชาย",
      address: "123 ถนนพระราม 4 กรุงเทพฯ",
      taxId: "0123456789012",
    },
    {
      id: 2,
      name: "บริษัท วัสดุก่อสร้าง B จำกัด",
      type: "ซัพพลายเออร์",
      contact: "02-234-5678",
      contactPerson: "คุณสมหญิง",
      address: "456 ถนนสุขุมวิท กรุงเทพฯ",
      taxId: "0234567890123",
    },
    {
      id: 3,
      name: "บริษัท โครงการ C จำกัด",
      type: "ลูกค้า",
      contact: "02-345-6789",
      contactPerson: "คุณสมศักดิ์",
      address: "789 ถนนรัชดาภิเษก กรุงเทพฯ",
      taxId: "0345678901234",
    },
  ])

  const [newCompany, setNewCompany] = useState({
    name: "",
    type: "ลูกค้า",
    contact: "",
    contactPerson: "",
    address: "",
    taxId: "",
  })

  const handleAddCompany = () => {
    if (newCompany.name && newCompany.contact && newCompany.contactPerson) {
      setCompanies([
        ...companies,
        {
          id: companies.length + 1,
          name: newCompany.name,
          type: newCompany.type,
          contact: newCompany.contact,
          contactPerson: newCompany.contactPerson,
          address: newCompany.address,
          taxId: newCompany.taxId,
        },
      ])
      setNewCompany({
        name: "",
        type: "ลูกค้า",
        contact: "",
        contactPerson: "",
        address: "",
        taxId: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการบริษัท</h1>
        <p className="text-gray-600">ข้อมูลบริษัทและหน่วยงานต่างๆ</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                รายการบริษัท
              </CardTitle>
              <CardDescription>จัดการข้อมูลบริษัททั้งหมด</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มบริษัท
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>เพิ่มบริษัทใหม่</DialogTitle>
                  <DialogDescription>กรอกข้อมูลบริษัทใหม่</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">ชื่อบริษัท</Label>
                    <Input
                      id="name"
                      value={newCompany.name}
                      onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                      placeholder="ชื่อบริษัท"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="type">ประเภท</Label>
                      <Select
                        value={newCompany.type}
                        onValueChange={(value) => setNewCompany({ ...newCompany, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกประเภท" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ลูกค้า">ลูกค้า</SelectItem>
                          <SelectItem value="ซัพพลายเออร์">ซัพพลายเออร์</SelectItem>
                          <SelectItem value="พาร์ทเนอร์">พาร์ทเนอร์</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="taxId">เลขประจำตัวผู้เสียภาษี</Label>
                      <Input
                        id="taxId"
                        value={newCompany.taxId}
                        onChange={(e) => setNewCompany({ ...newCompany, taxId: e.target.value })}
                        placeholder="0123456789012"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact">เบอร์ติดต่อ</Label>
                      <Input
                        id="contact"
                        value={newCompany.contact}
                        onChange={(e) => setNewCompany({ ...newCompany, contact: e.target.value })}
                        placeholder="02-123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">ผู้ติดต่อ</Label>
                      <Input
                        id="contactPerson"
                        value={newCompany.contactPerson}
                        onChange={(e) => setNewCompany({ ...newCompany, contactPerson: e.target.value })}
                        placeholder="คุณสมชาย"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">ที่อยู่</Label>
                    <Textarea
                      id="address"
                      value={newCompany.address}
                      onChange={(e) => setNewCompany({ ...newCompany, address: e.target.value })}
                      placeholder="ที่อยู่บริษัท"
                      rows={3}
                    />
                  </div>
                  <Button onClick={handleAddCompany} className="w-full">
                    เพิ่มบริษัท
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
              <Input placeholder="ค้นหาชื่อบริษัท..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              กรอง
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ชื่อบริษัท</TableHead>
                <TableHead>ประเภท</TableHead>
                <TableHead>ผู้ติดต่อ</TableHead>
                <TableHead>เบอร์ติดต่อ</TableHead>
                <TableHead>ที่อยู่</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className="font-medium">{company.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{company.type}</Badge>
                  </TableCell>
                  <TableCell>{company.contactPerson}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      {company.contact}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate max-w-xs">{company.address}</span>
                    </div>
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
