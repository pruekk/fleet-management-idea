"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, FileText, Download, Upload, AlertCircle, CheckCircle } from "lucide-react"

export default function TaxManagementPage() {
  const [taxData] = useState([
    {
      employeeCode: "EMP001",
      employeeName: "สมชาย ใจดี",
      annualIncome: 262800,
      taxableIncome: 262800,
      personalDeduction: 60000,
      spouseDeduction: 60000,
      childDeduction: 30000,
      insuranceDeduction: 25000,
      netTaxableIncome: 87800,
      taxRate: 5,
      annualTax: 4390,
      withheldTax: 14400,
      refund: 10010,
      status: "ได้รับคืน",
    },
    {
      employeeCode: "EMP002",
      employeeName: "สมหญิง รักงาน",
      annualIncome: 199200,
      taxableIncome: 199200,
      personalDeduction: 60000,
      spouseDeduction: 0,
      childDeduction: 0,
      insuranceDeduction: 15000,
      netTaxableIncome: 124200,
      taxRate: 5,
      annualTax: 6210,
      withheldTax: 9600,
      refund: 3390,
      status: "ได้รับคืน",
    },
  ])

  const [socialSecurityData] = useState([
    {
      employeeCode: "EMP001",
      employeeName: "สมชาย ใจดี",
      monthlyContribution: 750,
      annualContribution: 9000,
      employerContribution: 9000,
      totalContribution: 18000,
      benefits: "ครบสิทธิ์",
    },
    {
      employeeCode: "EMP002",
      employeeName: "สมหญิง รักงาน",
      monthlyContribution: 750,
      annualContribution: 9000,
      employerContribution: 9000,
      totalContribution: 18000,
      benefits: "ครบสิทธิ์",
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการภาษี</h1>
        <p className="text-gray-600">จัดการภาษีเงินได้และประกันสังคมของพนักงาน</p>
      </div>

      <Tabs defaultValue="tax" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tax">ภาษีเงินได้</TabsTrigger>
          <TabsTrigger value="social-security">ประกันสังคม</TabsTrigger>
          <TabsTrigger value="documents">เอกสารภาษี</TabsTrigger>
        </TabsList>

        <TabsContent value="tax">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    ภาษีเงินได้บุคคลธรรมดา
                  </CardTitle>
                  <CardDescription>คำนวณและจัดการภาษีเงินได้ประจำปี</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    นำเข้าข้อมูล
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    ส่งออก หนด.1
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รหัสพนักงาน</TableHead>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>รายได้ประจำปี</TableHead>
                    <TableHead>รายได้ที่ต้องเสียภาษี</TableHead>
                    <TableHead>ค่าลดหย่อน</TableHead>
                    <TableHead>ภาษีที่ต้องชำระ</TableHead>
                    <TableHead>ภาษีที่หักไว้</TableHead>
                    <TableHead>คืน/ชำระเพิ่ม</TableHead>
                    <TableHead>สถานะ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {taxData.map((tax, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{tax.employeeCode}</TableCell>
                      <TableCell>{tax.employeeName}</TableCell>
                      <TableCell>฿{tax.annualIncome.toLocaleString()}</TableCell>
                      <TableCell>฿{tax.netTaxableIncome.toLocaleString()}</TableCell>
                      <TableCell>
                        ฿
                        {(
                          tax.personalDeduction +
                          tax.spouseDeduction +
                          tax.childDeduction +
                          tax.insuranceDeduction
                        ).toLocaleString()}
                      </TableCell>
                      <TableCell>฿{tax.annualTax.toLocaleString()}</TableCell>
                      <TableCell>฿{tax.withheldTax.toLocaleString()}</TableCell>
                      <TableCell className={tax.refund > 0 ? "text-green-600" : "text-red-600"}>
                        {tax.refund > 0 ? "คืน " : "ชำระเพิ่ม "}฿{Math.abs(tax.refund).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={
                            tax.status === "ได้รับคืน" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }
                        >
                          {tax.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social-security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                ประกันสังคม
              </CardTitle>
              <CardDescription>จัดการเงินสมทบประกันสังคมและสิทธิประโยชน์</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รหัสพนักงาน</TableHead>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>เงินสมทบรายเดือน</TableHead>
                    <TableHead>เงินสมทบรายปี</TableHead>
                    <TableHead>นายจ้างสมทบ</TableHead>
                    <TableHead>รวมเงินสมทบ</TableHead>
                    <TableHead>สิทธิประโยชน์</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {socialSecurityData.map((ss, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{ss.employeeCode}</TableCell>
                      <TableCell>{ss.employeeName}</TableCell>
                      <TableCell>฿{ss.monthlyContribution.toLocaleString()}</TableCell>
                      <TableCell>฿{ss.annualContribution.toLocaleString()}</TableCell>
                      <TableCell>฿{ss.employerContribution.toLocaleString()}</TableCell>
                      <TableCell className="font-medium text-blue-600">
                        ฿{ss.totalContribution.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {ss.benefits}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  เอกสารภาษีเงินได้
                </CardTitle>
                <CardDescription>จัดการเอกสารภาษีและใบรับรอง</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">หนังสือรับรอง หนด.1</p>
                        <p className="text-sm text-muted-foreground">ปี 2024</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">แบบ ภ.ง.ด.1</p>
                        <p className="text-sm text-muted-foreground">ปี 2024</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">สรุปภาษีหัก ณ ที่จ่าย</p>
                        <p className="text-sm text-muted-foreground">ปี 2024</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    สร้างเอกสารใหม่
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  การแจ้งเตือน
                </CardTitle>
                <CardDescription>แจ้งเตือนเกี่ยวกับภาษีและประกันสังคม</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                      <p className="text-sm font-medium text-yellow-800">กำหนดยื่นภาษี</p>
                    </div>
                    <p className="text-sm text-yellow-700 mt-1">กำหนดยื่นแบบ ภ.ง.ด.1 ภายในวันที่ 31 มีนาคม 2025</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <p className="text-sm font-medium text-blue-800">ประกันสังคม</p>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">เงินสมทบประกันสังคมเดือนธันวาคม ชำระแล้ว</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-sm font-medium text-green-800">ภาษีหัก ณ ที่จ่าย</p>
                    </div>
                    <p className="text-sm text-green-700 mt-1">ยื่นแบบ ภ.ง.ด.1ก ประจำเดือนธันวาคมแล้ว</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
