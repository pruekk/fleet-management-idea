"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Building2 } from "lucide-react"

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const companies = [
    {
      id: 1,
      name: "บริษัท ก่อสร้าง ABC จำกัด",
      taxId: "0123456789012",
      address: "123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110",
      phone: "02-123-4567",
      email: "contact@abc-construction.com",
      status: "active",
      contractValue: "2,500,000",
    },
    {
      id: 2,
      name: "บริษัท พัฒนาอสังหาริมทรัพย์ XYZ จำกัด",
      taxId: "0987654321098",
      address: "456 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900",
      phone: "02-987-6543",
      email: "info@xyz-property.com",
      status: "active",
      contractValue: "5,200,000",
    },
    {
      id: 3,
      name: "บริษัท โครงสร้างพื้นฐาน DEF จำกัด",
      taxId: "1122334455667",
      address: "789 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400",
      phone: "02-111-2233",
      email: "contact@def-infrastructure.com",
      status: "inactive",
      contractValue: "1,800,000",
    },
  ]

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.taxId.includes(searchTerm) ||
      company.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการข้อมูลบริษัท</h1>
          <p className="text-gray-600">จัดการข้อมูลบริษัทลูกค้าและคู่ค้า</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          เพิ่มบริษัท
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building2 className="mr-2 h-5 w-5" />
            รายชื่อบริษัท
          </CardTitle>
          <CardDescription>รายการบริษัททั้งหมดในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ค้นหาบริษัท..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ชื่อบริษัท</TableHead>
                  <TableHead>เลขประจำตัวผู้เสียภาษี</TableHead>
                  <TableHead>เบอร์โทร</TableHead>
                  <TableHead>อีเมล</TableHead>
                  <TableHead>มูลค่าสัญญา</TableHead>
                  <TableHead>สถานะ</TableHead>
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
                    <TableCell>฿{company.contractValue}</TableCell>
                    <TableCell>
                      <Badge variant={company.status === "active" ? "default" : "secondary"}>
                        {company.status === "active" ? "ใช้งาน" : "ไม่ใช้งาน"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
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
    </div>
  )
}
