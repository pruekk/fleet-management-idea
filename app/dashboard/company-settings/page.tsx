"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Building, FileText, CreditCard, Shield, Upload, Download, Edit, Trash2 } from "lucide-react"

export default function CompanySettingsPage() {
  const [companyInfo] = useState({
    name: "บริษัท ขนส่งคอนกรีต จำกัด",
    nameEn: "Concrete Transport Co., Ltd.",
    taxId: "0123456789012",
    registrationNumber: "0123456789012",
    address: "123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110",
    phone: "02-123-4567",
    fax: "02-123-4568",
    email: "info@concrete-transport.com",
    website: "www.concrete-transport.com",
    establishedDate: "2010-01-15",
    capital: "5000000",
    businessType: "ขนส่งและโลจิสติกส์",
  })

  const [bankAccounts] = useState([
    {
      id: 1,
      bankName: "ธนาคารกสิกรไทย",
      accountNumber: "123-456-7890",
      accountName: "บริษัท ขนส่งคอนกรีต จำกัด",
      branch: "สาขาสุขุมวิท",
      type: "กระแสรายวัน",
      status: "ใช้งาน",
    },
    {
      id: 2,
      bankName: "ธนาคารไทยพาณิชย์",
      accountNumber: "234-567-8901",
      accountName: "บริษัท ขนส่งคอนกรีต จำกัด",
      branch: "สาขาอโศก",
      type: "ออมทรัพย์",
      status: "ใช้งาน",
    },
  ])

  const [licenses] = useState([
    {
      id: 1,
      name: "ใบอนุญาตประกอบการขนส่ง",
      number: "ขส.001/2567",
      issueDate: "2024-01-15",
      expiryDate: "2027-01-14",
      issuedBy: "กรมการขนส่งทางบก",
      status: "ใช้งานได้",
    },
    {
      id: 2,
      name: "ใบอนุญาตประกอบกิจการโรงงาน",
      number: "รง.002/2567",
      issueDate: "2024-02-01",
      expiryDate: "2029-01-31",
      issuedBy: "กรมโรงงานอุตสาหกรรม",
      status: "ใช้งานได้",
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ตั้งค่าบริษัท</h1>
        <p className="text-gray-600">จัดการข้อมูลบริษัทในรูปแบบนิติบุคคล</p>
      </div>

      <Tabs defaultValue="company-info" className="space-y-4">
        <TabsList>
          <TabsTrigger value="company-info">ข้อมูลบริษัท</TabsTrigger>
          <TabsTrigger value="bank-info">ข้อมูลธนาคาร</TabsTrigger>
          <TabsTrigger value="licenses">ใบอนุญาต</TabsTrigger>
          <TabsTrigger value="documents">เอกสาร</TabsTrigger>
        </TabsList>

        <TabsContent value="company-info">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                ข้อมูลบริษัท
              </CardTitle>
              <CardDescription>ข้อมูลทั่วไปและการจดทะเบียนของบริษัท</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">ข้อมูลทั่วไป</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="company-name">ชื่อบริษัท (ไทย)</Label>
                      <Input id="company-name" defaultValue={companyInfo.name} />
                    </div>
                    <div>
                      <Label htmlFor="company-name-en">ชื่อบริษัท (อังกฤษ)</Label>
                      <Input id="company-name-en" defaultValue={companyInfo.nameEn} />
                    </div>
                    <div>
                      <Label htmlFor="tax-id">เลขประจำตัวผู้เสียภาษี</Label>
                      <Input id="tax-id" defaultValue={companyInfo.taxId} />
                    </div>
                    <div>
                      <Label htmlFor="registration-number">เลขทะเบียนบริษัท</Label>
                      <Input id="registration-number" defaultValue={companyInfo.registrationNumber} />
                    </div>
                    <div>
                      <Label htmlFor="established-date">วันที่จดทะเบียน</Label>
                      <Input id="established-date" type="date" defaultValue={companyInfo.establishedDate} />
                    </div>
                    <div>
                      <Label htmlFor="capital">ทุนจดทะเบียน</Label>
                      <Input id="capital" type="number" defaultValue={companyInfo.capital} />
                    </div>
                    <div>
                      <Label htmlFor="business-type">ประเภทธุรกิจ</Label>
                      <Input id="business-type" defaultValue={companyInfo.businessType} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">ข้อมูลติดต่อ</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="address">ที่อยู่</Label>
                      <Textarea id="address" defaultValue={companyInfo.address} />
                    </div>
                    <div>
                      <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                      <Input id="phone" defaultValue={companyInfo.phone} />
                    </div>
                    <div>
                      <Label htmlFor="fax">เบอร์แฟกซ์</Label>
                      <Input id="fax" defaultValue={companyInfo.fax} />
                    </div>
                    <div>
                      <Label htmlFor="email">อีเมล</Label>
                      <Input id="email" type="email" defaultValue={companyInfo.email} />
                    </div>
                    <div>
                      <Label htmlFor="website">เว็บไซต์</Label>
                      <Input id="website" defaultValue={companyInfo.website} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button>บันทึกข้อมูล</Button>
                <Button variant="outline">ยกเลิก</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bank-info">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    ข้อมูลธนาคาร
                  </CardTitle>
                  <CardDescription>บัญชีธนาคารของบริษัท</CardDescription>
                </div>
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  เพิ่มบัญชี
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ธนาคาร</TableHead>
                    <TableHead>เลขที่บัญชี</TableHead>
                    <TableHead>ชื่อบัญชี</TableHead>
                    <TableHead>สาขา</TableHead>
                    <TableHead>ประเภท</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bankAccounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell className="font-medium">{account.bankName}</TableCell>
                      <TableCell className="font-mono">{account.accountNumber}</TableCell>
                      <TableCell>{account.accountName}</TableCell>
                      <TableCell>{account.branch}</TableCell>
                      <TableCell>{account.type}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {account.status}
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
        </TabsContent>

        <TabsContent value="licenses">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    ใบอนุญาตและใบรับรอง
                  </CardTitle>
                  <CardDescription>ใบอนุญาตประกอบธุรกิจและใบรับรองต่างๆ</CardDescription>
                </div>
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  เพิ่มใบอนุญาต
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ชื่อใบอนุญาต</TableHead>
                    <TableHead>เลขที่</TableHead>
                    <TableHead>วันที่ออก</TableHead>
                    <TableHead>วันหมดอายุ</TableHead>
                    <TableHead>หน่วยงานที่ออก</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {licenses.map((license) => (
                    <TableRow key={license.id}>
                      <TableCell className="font-medium">{license.name}</TableCell>
                      <TableCell className="font-mono">{license.number}</TableCell>
                      <TableCell>{license.issueDate}</TableCell>
                      <TableCell>{license.expiryDate}</TableCell>
                      <TableCell>{license.issuedBy}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {license.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
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

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                เอกสารบริษัท
              </CardTitle>
              <CardDescription>เอกสารสำคัญของบริษัท</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">อัปโหลดเอกสาร</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="document-type">ประเภทเอกสาร</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกประเภทเอกสาร" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="certificate">หนังสือรับรองการจดทะเบียน</SelectItem>
                          <SelectItem value="memorandum">หนังสือบริคณห์สนธิ</SelectItem>
                          <SelectItem value="articles">ข้อบังคับบริษัท</SelectItem>
                          <SelectItem value="tax-certificate">ใบรับรองการจดทะเบียนภาษี</SelectItem>
                          <SelectItem value="vat-certificate">ใบรับรองการจดทะเบียนภาษีมูลค่าเพิ่ม</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="document-upload">ไฟล์เอกสาร</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">คลิกเพื่อเลือกไฟล์หรือลากไฟล์มาวางที่นี่</p>
                        <p className="text-xs text-gray-500">PDF, JPG, PNG ขนาดไม่เกิน 10MB</p>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      อัปโหลดเอกสาร
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">เอกสารที่อัปโหลดแล้ว</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">หนังสือรับรองการจดทะเบียน</p>
                          <p className="text-sm text-muted-foreground">อัปโหลดเมื่อ 15/12/2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">ใบรับรองการจดทะเบียนภาษี</p>
                          <p className="text-sm text-muted-foreground">อัปโหลดเมื่อ 10/12/2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
