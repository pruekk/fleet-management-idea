"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Building2 } from "lucide-react"

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
      projects: 15,
      totalValue: 2500000,
    },
    {
      id: 2,
      name: "บริษัท พัฒนาอสังหาริมทรัพย์ XYZ จำกัด",
      taxId: "0987654321098",
      address: "456 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900",
      phone: "02-987-6543",
      email: "info@xyz-property.com",
      status: "active",
      projects: 8,
      totalValue: 1800000,
    },
    {
      id: 3,
      name: "บริษัท โครงสร้างพื้นฐาน DEF จำกัด",
      taxId: "1122334455667",
      address: "789 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400",
      phone: "02-111-2233",
      email: "contact@def-infrastructure.com",
      status: "inactive",
      projects: 3,
      totalValue: 750000,
    },
  ]

  const filteredCompanies = companies.filter(
    (company) => company.name.toLowerCase().includes(searchTerm.toLowerCase()) || company.taxId.includes(searchTerm),
  )

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-100 text-green-800">ใช้งาน</Badge>
    ) : (
      <Badge variant="secondary">ไม่ใช้งาน</Badge>
    )
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">จัดการข้อมูลบริษัท</h1>
        <p className="text-muted-foreground">จัดการข้อมูลบริษัทลูกค้าและคู่ค้า</p>
      </div>

      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="ค้นหาบริษัท..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          เพิ่มบริษัทใหม่
        </Button>
      </div>

      {/* Companies Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight">{company.name}</CardTitle>
                    <CardDescription className="text-sm">เลขประจำตัวผู้เสียภาษี: {company.taxId}</CardDescription>
                  </div>
                </div>
                {getStatusBadge(company.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-600">ที่อยู่:</span>
                  <p className="text-gray-800 mt-1">{company.address}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">โทรศัพท์:</span>
                  <span className="ml-2 text-gray-800">{company.phone}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">อีเมล:</span>
                  <span className="ml-2 text-gray-800">{company.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{company.projects}</div>
                  <div className="text-xs text-gray-600">โครงการ</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{formatCurrency(company.totalValue)}</div>
                  <div className="text-xs text-gray-600">มูลค่ารวม</div>
                </div>
              </div>

              <div className="flex gap-2 pt-3">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Edit className="h-4 w-4 mr-1" />
                  แก้ไข
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่พบข้อมูลบริษัท</h3>
          <p className="text-gray-600 mb-4">ไม่พบบริษัทที่ตรงกับคำค้นหา "{searchTerm}"</p>
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            ล้างการค้นหา
          </Button>
        </div>
      )}
    </div>
  )
}
