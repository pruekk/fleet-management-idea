"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Building2 } from "lucide-react"
import { PopupForm } from "@/components/popup-form"

interface Company {
  id: string
  name: string
  taxId: string
  address: string
  phone: string
  email: string
  status: "active" | "inactive"
  createdAt: string
}

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCompany, setEditingCompany] = useState<Company | null>(null)

  const companies: Company[] = [
    {
      id: "1",
      name: "บริษัท คอนกรีต เอ็กซ์เพรส จำกัด",
      taxId: "0123456789012",
      address: "123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110",
      phone: "02-123-4567",
      email: "info@concrete-express.com",
      status: "active",
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      name: "บริษัท มิกซ์ คอนกรีต โซลูชั่น จำกัด",
      taxId: "0987654321098",
      address: "456 ถนนพระราม 4 แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110",
      phone: "02-987-6543",
      email: "contact@mix-concrete.com",
      status: "active",
      createdAt: "2024-01-10",
    },
  ]

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.taxId.includes(searchTerm) ||
      company.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (company: Company) => {
    setEditingCompany(company)
    setIsFormOpen(true)
  }

  const handleAdd = () => {
    setEditingCompany(null)
    setIsFormOpen(true)
  }

  const companyFields = [
    { name: "name", label: "ชื่อบริษัท", type: "text", required: true },
    { name: "taxId", label: "เลขประจำตัวผู้เสียภาษี", type: "text", required: true },
    { name: "address", label: "ที่อยู่", type: "textarea", required: true },
    { name: "phone", label: "เบอร์โทรศัพท์", type: "text", required: true },
    { name: "email", label: "อีเมล", type: "email", required: true },
    {
      name: "status",
      label: "สถานะ",
      type: "select",
      options: [
        { value: "active", label: "ใช้งาน" },
        { value: "inactive", label: "ไม่ใช้งาน" },
      ],
      required: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการบริษัท</h1>
          <p className="text-gray-600 mt-2">จัดการข้อมูลบริษัทในระบบ</p>
        </div>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          เพิ่มบริษัท
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            รายการบริษัท
          </CardTitle>
          <CardDescription>จำนวนบริษัททั้งหมด {companies.length} บริษัท</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="ค้นหาบริษัท..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ชื่อบริษัท</TableHead>
                  <TableHead>เลขประจำตัวผู้เสียภาษี</TableHead>
                  <TableHead>เบอร์โทรศัพท์</TableHead>
                  <TableHead>อีเมล</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead>วันที่สร้าง</TableHead>
                  <TableHead className="text-right">การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompanies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.taxId}</TableCell>
                    <TableCell>{company.phone}</TableCell>
                    <TableCell>{company.email}</TableCell>
                    <TableCell>
                      <Badge variant={company.status === "active" ? "default" : "secondary"}>
                        {company.status === "active" ? "ใช้งาน" : "ไม่ใช้งาน"}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(company.createdAt).toLocaleDateString("th-TH")}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(company)}>
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
          </div>
        </CardContent>
      </Card>

      <PopupForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingCompany ? "แก้ไขบริษัท" : "เพิ่มบริษัท"}
        fields={companyFields}
        initialData={editingCompany}
        onSubmit={(data) => {
          console.log("Company data:", data)
          setIsFormOpen(false)
        }}
      />
    </div>
  )
}
