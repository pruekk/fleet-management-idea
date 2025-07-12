"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, TrendingUp, TrendingDown, BarChart3, Truck, DollarSign } from "lucide-react"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState({
    from: "2024-12-01",
    to: "2024-12-31",
  })

  const summaryData = {
    totalRevenue: 2450000,
    totalExpenses: 1850000,
    netProfit: 600000,
    totalTrips: 1250,
    totalFuel: 28500,
    maintenanceCost: 125000,
    activeDrivers: 24,
    activeTrucks: 18,
  }

  const monthlyData = [
    { month: "ม.ค.", revenue: 2100000, expenses: 1600000, trips: 1100 },
    { month: "ก.พ.", revenue: 2200000, expenses: 1650000, trips: 1150 },
    { month: "มี.ค.", revenue: 2300000, expenses: 1700000, trips: 1200 },
    { month: "เม.ย.", revenue: 2250000, expenses: 1680000, trips: 1180 },
    { month: "พ.ค.", revenue: 2400000, expenses: 1750000, trips: 1220 },
    { month: "มิ.ย.", revenue: 2450000, expenses: 1850000, trips: 1250 },
  ]

  const truckPerformance = [
    { truck: "80-1234", trips: 156, revenue: 234000, fuelCost: 45000, efficiency: 92 },
    { truck: "80-1235", trips: 142, revenue: 213000, fuelCost: 42000, efficiency: 89 },
    { truck: "80-1236", trips: 138, revenue: 207000, fuelCost: 41000, efficiency: 87 },
    { truck: "80-1237", trips: 145, revenue: 217500, fuelCost: 43500, efficiency: 90 },
  ]

  const driverPerformance = [
    { driver: "สมชาย ใจดี", trips: 156, revenue: 234000, rating: 4.8 },
    { driver: "สมหญิง รักงาน", trips: 142, revenue: 213000, rating: 4.6 },
    { driver: "สมศักดิ์ ขยัน", trips: 138, revenue: 207000, rating: 4.5 },
    { driver: "สมปอง มั่นคง", trips: 145, revenue: 217500, rating: 4.7 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">รายงาน</h1>
          <p className="text-gray-600">รายงานสรุปผลการดำเนินงาน</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            ส่งออก PDF
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            ส่งออก Excel
          </Button>
        </div>
      </div>

      {/* Date Range Filter */}
      <Card>
        <CardHeader>
          <CardTitle>เลือกช่วงเวลา</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="date-from">วันที่เริ่มต้น</Label>
              <Input
                id="date-from"
                type="date"
                value={dateRange.from}
                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="date-to">วันที่สิ้นสุด</Label>
              <Input
                id="date-to"
                type="date"
                value={dateRange.to}
                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                สร้างรายงาน
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายได้รวม</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">฿{summaryData.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% จากเดือนที่แล้ว
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ค่าใช้จ่ายรวม</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">฿{summaryData.totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% จากเดือนที่แล้ว
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">กำไรสุทธิ</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">฿{summaryData.netProfit.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18% จากเดือนที่แล้ว
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">จำนวนเที่ยว</CardTitle>
            <Truck className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{summaryData.totalTrips.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5% จากเดือนที่แล้ว
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
          <TabsTrigger value="trucks">ประสิทธิภาพรถ</TabsTrigger>
          <TabsTrigger value="drivers">ประสิทธิภาพคนขับ</TabsTrigger>
          <TabsTrigger value="financial">การเงิน</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>แนวโน้มรายได้รายเดือน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-green-600">฿{data.revenue.toLocaleString()}</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(data.revenue / 2500000) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>สัดส่วนค่าใช้จ่าย</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">น้ำมัน</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "45%" }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">เงินเดือน</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">ซ่อมบำรุง</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "15%" }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">อื่นๆ</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-500 h-2 rounded-full" style={{ width: "10%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trucks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>ประสิทธิภาพรถโม่</CardTitle>
              <CardDescription>เปรียบเทียบประสิทธิภาพของรถแต่ละคัน</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รถโม่</TableHead>
                    <TableHead>จำนวนเที่ยว</TableHead>
                    <TableHead>รายได้</TableHead>
                    <TableHead>ค่าน้ำมัน</TableHead>
                    <TableHead>ประสิทธิภาพ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {truckPerformance.map((truck) => (
                    <TableRow key={truck.truck}>
                      <TableCell className="font-medium">{truck.truck}</TableCell>
                      <TableCell>{truck.trips}</TableCell>
                      <TableCell className="text-green-600">฿{truck.revenue.toLocaleString()}</TableCell>
                      <TableCell className="text-red-600">฿{truck.fuelCost.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            truck.efficiency >= 90 ? "secondary" : truck.efficiency >= 85 ? "outline" : "destructive"
                          }
                          className={
                            truck.efficiency >= 90
                              ? "bg-green-100 text-green-800"
                              : truck.efficiency >= 85
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {truck.efficiency}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drivers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>ประสิทธิภาพคนขับ</CardTitle>
              <CardDescription>เปรียบเทียบประสิทธิภาพของคนขับแต่ละคน</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>คนขับ</TableHead>
                    <TableHead>จำนวนเที่ยว</TableHead>
                    <TableHead>รายได้</TableHead>
                    <TableHead>คะแนนประเมิน</TableHead>
                    <TableHead>สถานะ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {driverPerformance.map((driver) => (
                    <TableRow key={driver.driver}>
                      <TableCell className="font-medium">{driver.driver}</TableCell>
                      <TableCell>{driver.trips}</TableCell>
                      <TableCell className="text-green-600">฿{driver.revenue.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{driver.rating}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${i < Math.floor(driver.rating) ? "text-yellow-400" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          ปกติ
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>กำไรขาดทุนรายเดือน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => {
                    const profit = data.revenue - data.expenses
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">{data.month}</span>
                        <div className="text-right">
                          <div className={`font-semibold ${profit > 0 ? "text-green-600" : "text-red-600"}`}>
                            ฿{profit.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {((profit / data.revenue) * 100).toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ค่าใช้จ่ายรายหมวด</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">ค่าน้ำมัน</span>
                    <span className="font-semibold text-red-600">฿832,500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">เงินเดือน</span>
                    <span className="font-semibold text-blue-600">฿555,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">ซ่อมบำรุง</span>
                    <span className="font-semibold text-yellow-600">฿277,500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">อื่นๆ</span>
                    <span className="font-semibold text-gray-600">฿185,000</span>
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
