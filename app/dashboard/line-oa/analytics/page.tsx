"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Send, Users, Eye, Clock } from "lucide-react"

export default function AnalyticsPage() {
  const chartData = [
    { day: "จ", messages: 12, reads: 10 },
    { day: "อ", messages: 19, reads: 16 },
    { day: "พ", messages: 15, reads: 13 },
    { day: "พฤ", messages: 24, reads: 21 },
    { day: "ศ", messages: 18, reads: 15 },
    { day: "ส", messages: 22, reads: 19 },
    { day: "อา", messages: 16, reads: 14 },
  ]

  const topTemplates = [
    { name: "สรุปรายวันคนขับ", usage: 45, readRate: 92 },
    { name: "สรุปรายวันลูกค้า", usage: 32, readRate: 88 },
    { name: "แจ้งเตือนโยกรถ", usage: 18, readRate: 95 },
    { name: "ประชุมประจำเดือน", usage: 12, readRate: 85 },
  ]

  const recipientStats = [
    { type: "คนขับรถโม่", count: 24, activeRate: 96 },
    { type: "ลูกค้า", count: 15, activeRate: 87 },
    { type: "พนักงานทั่วไป", count: 28, activeRate: 92 },
    { type: "ผู้จัดการ", count: 8, activeRate: 100 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">สถิติ LINE OA</h1>
        <p className="text-gray-600">วิเคราะห์การใช้งาน LINE Official Account</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ข้อความส่งวันนี้</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+12% จากเมื่อวาน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">อัตราการอ่าน</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5% จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ผู้ติดตาม</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+3 คนใหม่สัปดาห์นี้</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เวลาตอบกลับเฉลี่ย</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5</div>
            <p className="text-xs text-muted-foreground">นาที</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>กราฟการส่งข้อความ</CardTitle>
            <CardDescription>สถิติการส่งข้อความรายวันใน 7 วันที่ผ่านมา</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="flex flex-col gap-1">
                    <div
                      className="bg-blue-500 rounded-t w-8"
                      style={{ height: `${(data.messages / 24) * 150}px` }}
                      title={`ส่ง: ${data.messages}`}
                    ></div>
                    <div
                      className="bg-green-500 rounded-t w-8"
                      style={{ height: `${(data.reads / 24) * 150}px` }}
                      title={`อ่าน: ${data.reads}`}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">{data.day}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>ส่งข้อความ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>อ่านข้อความ</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Template ยอดนิยม</CardTitle>
            <CardDescription>Template ที่ใช้งานมากที่สุด</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTemplates.map((template, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-muted-foreground">ใช้งาน {template.usage} ครั้ง</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{template.readRate}%</div>
                    <div className="text-xs text-muted-foreground">อัตราการอ่าน</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>สถิติผู้รับข้อความ</CardTitle>
            <CardDescription>แยกตามประเภทผู้รับ</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ประเภท</TableHead>
                  <TableHead>จำนวน</TableHead>
                  <TableHead>อัตราการใช้งาน</TableHead>
                  <TableHead>สถานะ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recipientStats.map((stat, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{stat.type}</TableCell>
                    <TableCell>{stat.count} คน</TableCell>
                    <TableCell>{stat.activeRate}%</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          stat.activeRate >= 95 ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                        }
                      >
                        {stat.activeRate >= 95 ? "ดีเยี่ยม" : "ดี"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>เป้าหมายประจำเดือน</CardTitle>
            <CardDescription>ความคืบหน้าของเป้าหมายที่ตั้งไว้</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">ข้อความส่งต่อเดือน</span>
                  <span className="text-sm text-muted-foreground">450/500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">90% ของเป้าหมาย</div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">อัตราการอ่าน</span>
                  <span className="text-sm text-muted-foreground">87%/85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "102%" }}></div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">เกินเป้าหมาย 2%</div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">ผู้ติดตามใหม่</span>
                  <span className="text-sm text-muted-foreground">12/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">60% ของเป้าหมาย</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
