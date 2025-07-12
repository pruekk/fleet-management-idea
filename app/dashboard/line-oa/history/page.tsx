"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MessageSquare, Eye, RotateCcw } from "lucide-react"

export default function MessageHistoryPage() {
  const [messages] = useState([
    {
      id: 1,
      recipient: "คนขับทั้งหมด",
      recipientCount: 15,
      content: "สรุปการวิ่งเที่ยววันนี้",
      template: "สรุปรายวันคนขับ",
      sent: "2024-12-15 18:00",
      status: "ส่งแล้ว",
      readCount: 12,
      deliveredCount: 15,
      type: "broadcast",
    },
    {
      id: 2,
      recipient: "บริษัท ABC",
      recipientCount: 1,
      content: "สรุปรายวันลูกค้า",
      template: "สรุปรายวันลูกค้า",
      sent: "2024-12-15 17:30",
      status: "ส่งแล้ว",
      readCount: 1,
      deliveredCount: 1,
      type: "individual",
    },
    {
      id: 3,
      recipient: "สมชาย ใจดี",
      recipientCount: 1,
      content: "แจ้งโยกรถไปโรงงาน B",
      template: "แจ้งเตือนโยกรถ",
      sent: "2024-12-15 14:00",
      status: "อ่านแล้ว",
      readCount: 1,
      deliveredCount: 1,
      type: "individual",
    },
    {
      id: 4,
      recipient: "คนขับทั้งหมด",
      recipientCount: 15,
      content: "ประชุมประจำเดือน",
      template: "ข้อความกำหนดเอง",
      sent: "2024-12-14 16:00",
      status: "ส่งแล้ว",
      readCount: 14,
      deliveredCount: 15,
      type: "broadcast",
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ประวัติการส่งข้อความ</h1>
        <p className="text-gray-600">รายการข้อความที่ส่งไปแล้วทั้งหมด</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ข้อความทั้งหมด</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">156</div>
            <p className="text-xs text-muted-foreground">ข้อความ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ส่งสำเร็จ</CardTitle>
            <MessageSquare className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">152</div>
            <p className="text-xs text-muted-foreground">97.4% ของทั้งหมด</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">อัตราการอ่าน</CardTitle>
            <Eye className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">87%</div>
            <p className="text-xs text-muted-foreground">+5% จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ข้อความวันนี้</CardTitle>
            <MessageSquare className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">24</div>
            <p className="text-xs text-muted-foreground">+12% จากเมื่อวาน</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายการข้อความ</CardTitle>
          <CardDescription>ประวัติการส่งข้อความทั้งหมด</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="ค้นหาข้อความ..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="ประเภทผู้รับ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ทั้งหมด</SelectItem>
                <SelectItem value="broadcast">ส่งหลายคน</SelectItem>
                <SelectItem value="individual">ส่งเดี่ยว</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="สถานะ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ทั้งหมด</SelectItem>
                <SelectItem value="ส่งแล้ว">ส่งแล้ว</SelectItem>
                <SelectItem value="อ่านแล้ว">อ่านแล้ว</SelectItem>
                <SelectItem value="ล้มเหลว">ล้มเหลว</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              กรอง
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ผู้รับ</TableHead>
                <TableHead>เนื้อหา</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>วันที่ส่ง</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>อัตราการอ่าน</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{message.recipient}</div>
                      <div className="text-sm text-muted-foreground">
                        {message.recipientCount} {message.recipientCount > 1 ? "คน" : "คน"}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate">{message.content}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{message.template}</Badge>
                  </TableCell>
                  <TableCell>{message.sent}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        message.status === "อ่านแล้ว"
                          ? "secondary"
                          : message.status === "ส่งแล้ว"
                            ? "outline"
                            : "destructive"
                      }
                      className={
                        message.status === "อ่านแล้ว"
                          ? "bg-green-100 text-green-800"
                          : message.status === "ส่งแล้ว"
                            ? "bg-blue-100 text-blue-800"
                            : ""
                      }
                    >
                      {message.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>
                        {message.readCount}/{message.deliveredCount}
                      </div>
                      <div className="text-muted-foreground">
                        {Math.round((message.readCount / message.deliveredCount) * 100)}%
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>รายละเอียดข้อความ</DialogTitle>
                            <DialogDescription>ข้อมูลการส่งข้อความ</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label>ผู้รับ</Label>
                              <p className="text-sm">{message.recipient}</p>
                            </div>
                            <div>
                              <Label>เนื้อหา</Label>
                              <p className="text-sm bg-gray-50 p-3 rounded">{message.content}</p>
                            </div>
                            <div>
                              <Label>สถิติการส่ง</Label>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>ส่งสำเร็จ: {message.deliveredCount}</div>
                                <div>อ่านแล้ว: {message.readCount}</div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
