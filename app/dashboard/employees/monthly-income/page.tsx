"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Search, Filter, DollarSign, Calculator, FileText, Download } from "lucide-react"

export default function MonthlyIncomePage() {
  const [monthlyIncomes] = useState([
    {
      id: 1,
      employeeCode: "EMP001",
      employeeName: "สมชาย ใจดี",
      month: "2024-12",
      baseSalary: 18000,
      overtime: 2400,
      bonus: 1000,
      allowance: 500,
      totalIncome: 21900,
      socialSecurity: 750,
      tax: 1200,
      fuelDeduction: 2190,
      netIncome: 17760,
      payslipGenerated: true,
    },
    {
      id: 2,
      employeeCode: "EMP002",
      employeeName: "สมหญิง รักงาน",
      month: "2024-12",
      baseSalary: 15000,
      overtime: 800,
      bonus: 500,
      allowance: 300,
      totalIncome: 16600,
      socialSecurity: 750,
      tax: 800,
      fuelDeduction: 1660,
      netIncome: 13390,
      payslipGenerated: false,
    },
  ])

  const [cumulativeData] = useState([
    {
      employeeCode: "EMP001",
      employeeName: "สมชาย ใจดี",
      currentYearIncome: 262800,
      currentSocialSecurity: 9000,
      currentTax: 14400,
      currentFuelDeduction: 26280,
    },
    {
      employeeCode: "EMP002",
      employeeName: "สมหญิง รักงาน",
      currentYearIncome: 199200,
      currentSocialSecurity: 9000,
      currentTax: 9600,
      currentFuelDeduction: 19920,
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">รายได้ประจำเดือน</h1>
        <p className="text-gray-600">จัดการรายได้และการหักเงินของพนักงานรายเดือน</p>
      </div>

      <Tabs defaultValue="monthly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">รายได้รายเดือน</TabsTrigger>
          <TabsTrigger value="cumulative">ยอดสะสมปัจจุบัน</TabsTrigger>
          <TabsTrigger value="payslip">สลิปเงินเดือน</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    รายได้รายเดือน
                  </CardTitle>
                  <CardDescription>ข้อมูลรายได้และการหักเงินรายเดือน</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    ส่งออก Excel
                  </Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    เพิ่มรายได้
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div>
                  <Label htmlFor="month-filter">เดือน</Label>
                  <Input id="month-filter" type="month" defaultValue="2024-12" />
                </div>
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ค้นหาพนักงาน..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  กรอง
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รหัสพนักงาน</TableHead>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>เงินเดือนพื้นฐาน</TableHead>
                    <TableHead>ล่วงเวลา</TableHead>
                    <TableHead>โบนัส</TableHead>
                    <TableHead>รายได้รวม</TableHead>
                    <TableHead>หักประกันสังคม</TableHead>
                    <TableHead>หักภาษี</TableHead>
                    <TableHead>เหมาน้ำมัน 10%</TableHead>
                    <TableHead>รายได้สุทธิ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyIncomes.map((income) => (
                    <TableRow key={income.id}>
                      <TableCell className="font-medium">{income.employeeCode}</TableCell>
                      <TableCell>{income.employeeName}</TableCell>
                      <TableCell>฿{income.baseSalary.toLocaleString()}</TableCell>
                      <TableCell>฿{income.overtime.toLocaleString()}</TableCell>
                      <TableCell>฿{income.bonus.toLocaleString()}</TableCell>
                      <TableCell className="font-medium text-green-600">
                        ฿{income.totalIncome.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-red-600">-฿{income.socialSecurity.toLocaleString()}</TableCell>
                      <TableCell className="text-red-600">-฿{income.tax.toLocaleString()}</TableCell>
                      <TableCell className="text-red-600">-฿{income.fuelDeduction.toLocaleString()}</TableCell>
                      <TableCell className="font-bold text-blue-600">฿{income.netIncome.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4" />
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

        <TabsContent value="cumulative">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                ยอดสะสมปัจจุบัน
              </CardTitle>
              <CardDescription>ยอดรายได้และการหักเงินสะสมตั้งแต่ต้นปี</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รหัสพนักงาน</TableHead>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>รายได้สะสมปัจจุบัน</TableHead>
                    <TableHead>ประกันสังคมสะสม</TableHead>
                    <TableHead>ภาษีหัก ณ ที่จ่ายสะสม</TableHead>
                    <TableHead>เหมาน้ำมันสะสม</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cumulativeData.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{data.employeeCode}</TableCell>
                      <TableCell>{data.employeeName}</TableCell>
                      <TableCell className="font-medium text-green-600">
                        ฿{data.currentYearIncome.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-blue-600">฿{data.currentSocialSecurity.toLocaleString()}</TableCell>
                      <TableCell className="text-orange-600">฿{data.currentTax.toLocaleString()}</TableCell>
                      <TableCell className="text-purple-600">฿{data.currentFuelDeduction.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payslip">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                สลิปเงินเดือน
              </CardTitle>
              <CardDescription>จัดการและสร้างสลิปเงินเดือน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">สร้างสลิปเงินเดือน</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="payslip-month">เดือน</Label>
                      <Input id="payslip-month" type="month" />
                    </div>
                    <div>
                      <Label htmlFor="payslip-employee">พนักงาน</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกพนักงาน" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EMP001">EMP001 - สมชาย ใจดี</SelectItem>
                          <SelectItem value="EMP002">EMP002 - สมหญิง รักงาน</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">สร้างสลิปเงินเดือน</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">สลิปที่สร้างแล้ว</h3>
                  <div className="space-y-3">
                    {monthlyIncomes
                      .filter((income) => income.payslipGenerated)
                      .map((income) => (
                        <div key={income.id} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{income.employeeName}</p>
                              <p className="text-sm text-muted-foreground">
                                {income.month} - ฿{income.netIncome.toLocaleString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
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
