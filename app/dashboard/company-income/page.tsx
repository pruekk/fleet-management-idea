"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, TrendingUp, DollarSign, Calendar, BarChart3 } from "lucide-react"

export default function CompanyIncomePage() {
  const [incomeRecords] = useState([
    { id: 1, date: "2024-12-15", type: "วิ่งเที่ยว", customer: "บริษัท ABC", amount: 45000, description: "วิ่งเที่ยว 30 เที่ยว" },
    { id: 2, date: "2024-12-15", type: "โยกรถ", customer: "บริษัท XYZ", amount: 2400, description: "โยกรถไปโรงงาน B" },
    { id: 3, date: "2024-12-14", type: "ค่าครองชีพ", customer: "บริษัท ABC", amount: 1200, description: "ค่าครองชีพเพิ่มเติม" },
  ])

  const [incomeTypes] = useState([
    { id: 1, name: "วิ่งเที่ยว", rate: 1500, unit: "เที่ยว", total: 450000 },
    { id: 2, name: "โยกรถ", rate: 1200, unit: "ครั้ง", total: 24000 },
    { id: 3, name: "ค่าครองชีพ", rate: 200, unit: "วัน", total: 12000 },
    { id: 4, name: "ป้ายแดง", rate: 500, unit: "ครั้ง", total: 5000 },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">รายได้บริษัท</h1>
        <p className="text-gray-600">จัดการและติดตามรายได้ของบริษัท</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายได้วันนี้</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">฿48,600</div>
            <p className="text-xs text-muted-foreground">+12% จากเมื่อวาน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายได้เดือนนี้</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">฿1,245,000</div>
            <p className="text-xs text-muted-foreground">+8% จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เป้าหมายเดือน</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83%</div>
            <p className="text-xs text-muted-foreground">เป้าหมาย ฿1,500,000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายได้ปีนี้</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">฿14.2M</div>
            <p className="text-xs text-muted-foreground">+15% จากปีที่แล้ว</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="records" className="space-y-4">
        <TabsList>
          <TabsTrigger value="records">บันทึกรายได้</TabsTrigger>
          <TabsTrigger value="types">ประเภทรายได้</TabsTrigger>
          <TabsTrigger value="summary">สรุปผล</TabsTrigger>
        </TabsList>

        <TabsContent value="records">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>บันทึกรายได้</CardTitle>
                  <CardDescription>รายการรายได้ประจำวัน</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มรายการ
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="date-from">วันที่เริ่มต้น</Label>
                  <Input id="date-from" type="date" />
                </div>
                <div>
                  <Label htmlFor="date-to">วันที่สิ้นสุด</Label>
                  <Input id="date-to" type="date" />
                </div>
                <div>
                  <Label htmlFor="income-type">ประเภทรายได้</Label>
                  <Input id="income-type" placeholder="เลือกประเภท" />
                </div>
                <div>
                  <Label htmlFor="customer-filter">ลูกค้า</Label>
                  <Input id="customer-filter" placeholder="เลือกลูกค้า" />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>วันที่</TableHead>
                    <TableHead>ประเภท</TableHead>
                    <TableHead>ลูกค้า</TableHead>
                    <TableHead>จำนวนเงิน</TableHead>
                    <TableHead>รายละเอียด</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incomeRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{record.type}</Badge>
                      </TableCell>
                      <TableCell>{record.customer}</TableCell>
                      <TableCell className="font-medium text-green-600">฿{record.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{record.description}</TableCell>
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

        <TabsContent value="types">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>ประเภทรายได้</CardTitle>
                  <CardDescription>จัดการประเภทรายได้และอัตรา</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มประเภท
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ประเภทรายได้</TableHead>
                    <TableHead>อัตรา</TableHead>
                    <TableHead>หน่วย</TableHead>
                    <TableHead>รายได้รวม (เดือนนี้)</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incomeTypes.map((type) => (
                    <TableRow key={type.id}>
                      <TableCell className="font-medium">{type.name}</TableCell>
                      <TableCell>฿{type.rate.toLocaleString()}</TableCell>
                      <TableCell>{type.unit}</TableCell>
                      <TableCell className="font-medium text-green-600">฿{type.total.toLocaleString()}</TableCell>
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

        <TabsContent value="summary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>สรุปรายได้รายเดือน</CardTitle>
                <CardDescription>เปรียบเทียบรายได้ 6 เดือนย้อนหลัง</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "ธ.ค. 2024", amount: 1245000, growth: 8 },
                    { month: "พ.ย. 2024", amount: 1152000, growth: 5 },
                    { month: "ต.ค. 2024", amount: 1098000, growth: -2 },
                    { month: "ก.ย. 2024", amount: 1120000, growth: 12 },
                    { month: "ส.ค. 2024", amount: 1000000, growth: 7 },
                    { month: "ก.ค. 2024", amount: 935000, growth: 3 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{item.month}</span>
                      <div className="text-right">
                        <span className="font-bold text-green-600">฿{item.amount.toLocaleString()}</span>
                        <div className={`text-xs ${item.growth >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {item.growth >= 0 ? "+" : ""}
                          {item.growth}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>สัดส่วนรายได้ตามประเภท</CardTitle>
                <CardDescription>แบ่งตามประเภทรายได้ (เดือนนี้)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span>วิ่งเที่ยว</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿450,000</span>
                      <div className="text-xs text-muted-foreground">36.1%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>โยกรถ</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿24,000</span>
                      <div className="text-xs text-muted-foreground">1.9%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span>ค่าครองชีพ</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿12,000</span>
                      <div className="text-xs text-muted-foreground">1.0%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span>อื่นๆ</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿759,000</span>
                      <div className="text-xs text-muted-foreground">61.0%</div>
                    </div>
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
