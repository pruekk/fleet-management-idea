"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Truck, Users, Wrench, CheckCircle, AlertTriangle, Calendar, DollarSign, Fuel, Building2 } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ภาพรวม</h1>
        <p className="text-gray-600">สรุปข้อมูลสำคัญของระบบจัดการกองรถโม่ปูน</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รถโม่ทั้งหมด</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รถพร้อมใช้งาน</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">22</div>
            <p className="text-xs text-muted-foreground">91.7% ของรถทั้งหมด</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ลูกค้าทั้งหมด</CardTitle>
            <Building2 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">15</div>
            <p className="text-xs text-muted-foreground">+1 ลูกค้าใหม่เดือนนี้</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">พนักงานเช็คอิน</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">48</div>
            <p className="text-xs text-muted-foreground">จาก 52 คนทั้งหมด</p>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เที่ยววิ่งวันนี้</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">156</div>
            <p className="text-xs text-muted-foreground">+12% จากเมื่อวาน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายได้วันนี้</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">฿234,000</div>
            <p className="text-xs text-muted-foreground">+8% จากเมื่อวาน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">การใช้น้ำมัน</CardTitle>
            <Fuel className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">1,250</div>
            <p className="text-xs text-muted-foreground">ลิตร วันนี้</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รถซ่อมบำรุง</CardTitle>
            <Wrench className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">2</div>
            <p className="text-xs text-muted-foreground">8.3% ของรถทั้งหมด</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Additional Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>เป้าหมายรายได้เดือน</CardTitle>
            <CardDescription>เปรียบเทียบกับเป้าหมายที่ตั้งไว้</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">เดือนนี้</span>
                <span className="text-2xl font-bold text-green-600">฿6.8M</span>
              </div>
              <Progress value={85} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>เป้าหมาย: ฿8.0M</span>
                <span>85%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>สถานะรถโม่</CardTitle>
            <CardDescription>แยกตามสถานะการใช้งาน</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">พร้อมใช้งาน</span>
                </div>
                <Badge variant="secondary">22 คัน</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">ซ่อมบำรุง</span>
                </div>
                <Badge variant="secondary">2 คัน</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">เสียหาย</span>
                </div>
                <Badge variant="secondary">0 คัน</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>กิจกรรมล่าสุด</CardTitle>
          <CardDescription>อัพเดทข้อมูลล่าสุดในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">อัพเดทข้อมูลวิ่งเที่ยวประจำวัน</p>
                <p className="text-xs text-muted-foreground">2 ชั่วโมงที่แล้ว</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">บันทึกรายได้ประจำวัน</p>
                <p className="text-xs text-muted-foreground">4 ชั่วโมงที่แล้ว</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">รถโม่ 80-1234 เข้าซ่อมบำรุง</p>
                <p className="text-xs text-muted-foreground">6 ชั่วโมงที่แล้ว</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
