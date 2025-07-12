"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, TrendingDown, DollarSign, Calendar, BarChart3 } from "lucide-react"

export default function CompanyExpensesPage() {
  const [expenseRecords] = useState([
    { id: 1, date: "2024-12-15", type: "น้ำมัน", supplier: "ปตท.", amount: 25000, description: "เติมน้ำมันรถโม่ 5 คัน" },
    {
      id: 2,
      date: "2024-12-15",
      type: "ซ่อมบำรุง",
      supplier: "อู่ช่างสมชาย",
      amount: 8500,
      description: "ซ่อมเบรครถ 80-1235",
    },
    { id: 3, date: "2024-12-14", type: "เงินเดือน", supplier: "-", amount: 45000, description: "เงินเดือนพนักงาน" },
  ])

  const [expenseTypes] = useState([
    { id: 1, name: "น้ำมัน", budget: 300000, spent: 275000, percentage: 91.7 },
    { id: 2, name: "ซ่อมบำรุง", budget: 150000, spent: 125000, percentage: 83.3 },
    { id: 3, name: "เงินเดือน", budget: 500000, spent: 450000, percentage: 90.0 },
    { id: 4, name: "ค่าใช้จ่ายอื่นๆ", budget: 100000, spent: 65000, percentage: 65.0 },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">รายจ่ายบริษัท</h1>
        <p className="text-gray-600">จัดการและติดตามรายจ่ายของบริษัท</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายจ่ายวันนี้</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">฿78,500</div>
            <p className="text-xs text-muted-foreground">+5% จากเมื่อวาน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายจ่ายเดือนนี้</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">฿915,000</div>
            <p className="text-xs text-muted-foreground">-3% จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">งบประมาณคงเหลือ</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">฿135,000</div>
            <p className="text-xs text-muted-foreground">12.9% ของงบประมาณ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายจ่ายปีนี้</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">฿10.8M</div>
            <p className="text-xs text-muted-foreground">-8% จากปีที่แล้ว</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="records" className="space-y-4">
        <TabsList>
          <TabsTrigger value="records">บันทึกรายจ่าย</TabsTrigger>
          <TabsTrigger value="types">ประเภทรายจ่าย</TabsTrigger>
          <TabsTrigger value="summary">สรุปผล</TabsTrigger>
        </TabsList>

        <TabsContent value="records">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>บันทึกรายจ่าย</CardTitle>
                  <CardDescription>รายการรายจ่ายประจำวัน</CardDescription>
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
                  <Label htmlFor="expense-type">ประเภทรายจ่าย</Label>
                  <Input id="expense-type" placeholder="เลือกประเภท" />
                </div>
                <div>
                  <Label htmlFor="supplier-filter">ซัพพลายเออร์</Label>
                  <Input id="supplier-filter" placeholder="เลือกซัพพลายเออร์" />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>วันที่</TableHead>
                    <TableHead>ประเภท</TableHead>
                    <TableHead>ซั พพลายเออร์</TableHead>
                    <TableHead>จำนวนเงิน</TableHead>
                    <TableHead>รายละเอียด</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{record.type}</Badge>
                      </TableCell>
                      <TableCell>{record.supplier}</TableCell>
                      <TableCell className="font-medium text-red-600">฿{record.amount.toLocaleString()}</TableCell>
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
                  <CardTitle>ประเภทรายจ่าย</CardTitle>
                  <CardDescription>จัดการประเภทรายจ่ายและงบประมาณ</CardDescription>
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
                    <TableHead>ประเภทรายจ่าย</TableHead>
                    <TableHead>งบประมาณ</TableHead>
                    <TableHead>ใช้ไปแล้ว</TableHead>
                    <TableHead>เปอร์เซ็นต์</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseTypes.map((type) => (
                    <TableRow key={type.id}>
                      <TableCell className="font-medium">{type.name}</TableCell>
                      <TableCell>฿{type.budget.toLocaleString()}</TableCell>
                      <TableCell className="font-medium text-red-600">฿{type.spent.toLocaleString()}</TableCell>
                      <TableCell>{type.percentage}%</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            type.percentage > 90 ? "destructive" : type.percentage > 75 ? "secondary" : "outline"
                          }
                          className={
                            type.percentage > 90
                              ? ""
                              : type.percentage > 75
                                ? "bg-orange-100 text-orange-800"
                                : "bg-green-100 text-green-800"
                          }
                        >
                          {type.percentage > 90 ? "เกินงบ" : type.percentage > 75 ? "ใกล้เกิน" : "ปกติ"}
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

        <TabsContent value="summary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>สรุปรายจ่ายรายเดือน</CardTitle>
                <CardDescription>เปรียบเทียบรายจ่าย 6 เดือนย้อนหลัง</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "ธ.ค. 2024", amount: 915000, change: -3 },
                    { month: "พ.ย. 2024", amount: 942000, change: 2 },
                    { month: "ต.ค. 2024", amount: 923000, change: -5 },
                    { month: "ก.ย. 2024", amount: 972000, change: 8 },
                    { month: "ส.ค. 2024", amount: 900000, change: -2 },
                    { month: "ก.ค. 2024", amount: 918000, change: 4 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{item.month}</span>
                      <div className="text-right">
                        <span className="font-bold text-red-600">฿{item.amount.toLocaleString()}</span>
                        <div className={`text-xs ${item.change <= 0 ? "text-green-600" : "text-red-600"}`}>
                          {item.change > 0 ? "+" : ""}
                          {item.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>สัดส่วนรายจ่ายตามประเภท</CardTitle>
                <CardDescription>แบ่งตามประเภทรายจ่าย (เดือนนี้)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>เงินเดือน</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿450,000</span>
                      <div className="text-xs text-muted-foreground">49.2%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span>น้ำมัน</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿275,000</span>
                      <div className="text-xs text-muted-foreground">30.1%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span>ซ่อมบำรุง</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿125,000</span>
                      <div className="text-xs text-muted-foreground">13.7%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span>อื่นๆ</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">฿65,000</span>
                      <div className="text-xs text-muted-foreground">7.1%</div>
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
