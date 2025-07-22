"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, BarChart3, FileText, Download, Calendar } from "lucide-react"

export default function AnnualIncomePage() {
  const [annualIncomes] = useState([
    {
      employeeCode: "EMP001",
      employeeName: "สมชาย ใจดี",
      year: 2024,
      totalIncome: 262800,
      totalSocialSecurity: 9000,
      totalTax: 14400,
      totalFuelDeduction: 26280,
      netIncome: 213120,
      bonus: 12000,
      overtime: 28800,
      allowance: 6000,
    },
    {
      employeeCode: "EMP002",
      employeeName: "สมหญิง รักงาน",
      year: 2024,
      totalIncome: 199200,
      totalSocialSecurity: 9000,
      totalTax: 9600,
      totalFuelDeduction: 19920,
      netIncome: 160680,
      bonus: 6000,
      overtime: 9600,
      allowance: 3600,
    },
  ])

  const [yearlyComparison] = useState([
    {
      employeeCode: "EMP001",
      employeeName: "สมชาย ใจดี",
      year2023: 245000,
      year2024: 262800,
      growth: 7.3,
    },
    {
      employeeCode: "EMP002",
      employeeName: "สมหญิง รักงาน",
      year2023: 180000,
      year2024: 199200,
      growth: 10.7,
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">รายได้ประจำปี</h1>
        <p className="text-gray-600">สรุปรายได้และการเติบโตของพนักงานรายปี</p>
      </div>

      <Tabs defaultValue="annual" className="space-y-4">
        <TabsList>
          <TabsTrigger value="annual">รายได้รายปี</TabsTrigger>
          <TabsTrigger value="comparison">เปรียบเทียบรายปี</TabsTrigger>
          <TabsTrigger value="reports">รายงาน</TabsTrigger>
        </TabsList>

        <TabsContent value="annual">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    รายได้รายปี
                  </CardTitle>
                  <CardDescription>สรุปรายได้และการหักเงินรายปี</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    ส่งออก PDF
                  </Button>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    สร้างรายงาน
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div>
                  <Label htmlFor="year-filter">ปี</Label>
                  <Select defaultValue="2024">
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกปี" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รหัสพนักงาน</TableHead>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>รายได้รวม</TableHead>
                    <TableHead>โบนัส</TableHead>
                    <TableHead>ล่วงเวลา</TableHead>
                    <TableHead>ประกันสังคม</TableHead>
                    <TableHead>ภาษี</TableHead>
                    <TableHead>เหมาน้ำมัน</TableHead>
                    <TableHead>รายได้สุทธิ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {annualIncomes.map((income, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{income.employeeCode}</TableCell>
                      <TableCell>{income.employeeName}</TableCell>
                      <TableCell className="font-medium text-green-600">
                        ฿{income.totalIncome.toLocaleString()}
                      </TableCell>
                      <TableCell>฿{income.bonus.toLocaleString()}</TableCell>
                      <TableCell>฿{income.overtime.toLocaleString()}</TableCell>
                      <TableCell className="text-blue-600">฿{income.totalSocialSecurity.toLocaleString()}</TableCell>
                      <TableCell className="text-orange-600">฿{income.totalTax.toLocaleString()}</TableCell>
                      <TableCell className="text-purple-600">฿{income.totalFuelDeduction.toLocaleString()}</TableCell>
                      <TableCell className="font-bold text-green-700">฿{income.netIncome.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                เปรียบเทียบรายได้รายปี
              </CardTitle>
              <CardDescription>เปรียบเทียบการเติบโตของรายได้ระหว่างปี</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รหัสพนักงาน</TableHead>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>ปี 2023</TableHead>
                    <TableHead>ปี 2024</TableHead>
                    <TableHead>การเติบโต</TableHead>
                    <TableHead>เปอร์เซ็นต์</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {yearlyComparison.map((comparison, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{comparison.employeeCode}</TableCell>
                      <TableCell>{comparison.employeeName}</TableCell>
                      <TableCell>฿{comparison.year2023.toLocaleString()}</TableCell>
                      <TableCell>฿{comparison.year2024.toLocaleString()}</TableCell>
                      <TableCell className="text-green-600">
                        ฿{(comparison.year2024 - comparison.year2023).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={comparison.growth > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                        >
                          {comparison.growth > 0 ? "+" : ""}
                          {comparison.growth}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  รายงานรายได้รายปี
                </CardTitle>
                <CardDescription>สร้างรายงานสรุปรายได้ประจำปี</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="report-year">ปี</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกปี" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="report-format">รูปแบบรายงาน</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกรูปแบบ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    สร้างรายงาน
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  รายงานเปรียบเทียบ
                </CardTitle>
                <CardDescription>เปรียบเทียบรายได้ระหว่างปี</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="compare-year1">ปีที่ 1</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกปี" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="compare-year2">ปีที่ 2</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกปี" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    สร้างรายงานเปรียบเทียบ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
