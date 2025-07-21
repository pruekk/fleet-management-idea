"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

const mockCompanies: Company[] = [
  {
    id: "1",
    name: "บริษัท คอนกรีต จำกัด",
    taxId: "0123456789012",
    address: "123 ถนนสุขุมวิท กรุงเทพฯ 10110",
    phone: "02-123-4567",
    email: "info@concrete.co.th",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "บริษัท ก่อสร้าง ABC จำกัด",
    taxId: "0987654321098",
    address: "456 ถนนพหลโยธิน กรุงเทพฯ 10400",
    phone: "02-987-6543",
    email: "contact@abc-construction.com",
    status: "active",
    createdAt: "2024-01-20",
  },
]

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
    required: true,
    options: [
      { value: "active", label: "ใช้งาน" },
      { value: "inactive", label: "ไม่ใช้งาน" },
    ],
  },
]

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>(mockCompanies)
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCompany, setEditingCompany] = useState<Company | null>(null)

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.taxId.includes(searchTerm) ||
      company.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSubmit = (data: any) => {
    if (editingCompany) {
      setCompanies(companies.map((company) => (company.id === editingCompany.id ? { ...company, ...data } : company)))
    } else {
      const newCompany: Company = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString().split("T")[0],
      }
      setCompanies([...companies, newCompany])
    }
    setIsFormOpen(false)
    setEditingCompany(null)
  }

  const handleEdit = (company: Company) => {
    setEditingCompany(company)
    setIsFormOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("คุณต้องการลบบริษัทนี้หรือไม่?")) {
      setCompanies(companies.filter((company) => company.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">จัดการบริษัท</h1>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          เพิ่มบริษัท
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายชื่อบริษัท</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="ค้นหาบริษัท..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ชื่อบริษัท</TableHead>
                <TableHead>เลขประจำตัวผู้เสียภาษี</TableHead>
                <TableHead>เบอร์โทรศัพท์</TableHead>
                <TableHead>อีเมล</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>วันที่สร้าง</TableHead>
                <TableHead className="text-right">การจัดการ</TableHead>
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
                  <TableCell>{company.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(company)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(company.id)}>
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

      <PopupForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setEditingCompany(null)
        }}
        onSubmit={handleSubmit}
        title={editingCompany ? "แก้ไขบริษัท" : "เพิ่มบริษัท"}
        fields={companyFields}
        initialData={editingCompany}
      />
    </div>
  )
}
