"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Plus, Bell, Calendar, AlertTriangle, CheckCircle, Clock, Edit, Trash2 } from "lucide-react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "ต่อทะเบียนรถโม่ 80-1234",
      type: "registration",
      description: "ทะเบียนรถโม่หมายเลข 80-1234 จะหมดอายุในวันที่ 25 ธันวาคม 2024",
      dueDate: "2024-12-25",
      status: "pending",
      priority: "high",
      isActive: true,
      createdAt: "2024-12-01",
    },
    {
      id: 2,
      title: "จ่ายภาษีประจำปี 2024",
      type: "tax",
      description: "ครบกำหนดชำระภาษีนิติบุคคลประจำปี 2024",
      dueDate: "2024-12-31",
      status: "pending",
      priority: "high",
      isActive: true,
      createdAt: "2024-11-15",
    },
    {
      id: 3,
      title: "ต่อ พรบ. รถโม่ 80-1235",
      type: "insurance",
      description: "ประกันภัย พรบ. รถโม่หมายเลข 80-1235 จะหมดอายุ",
      dueDate: "2024-12-20",
      status: "completed",
      priority: "medium",
      isActive: true,
      createdAt: "2024-11-20",
    },
    {
      id: 4,
      title: "นัดหมายลูกค้า ABC",
      type: "meeting",
      description: "ประชุมหารือโครงการใหม่กับบริษัท ABC",
      dueDate: "2024-12-18",
      status: "pending",
      priority: "medium",
      isActive: true,
      createdAt: "2024-12-10",
    },
  ])

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newNotification, setNewNotification] = useState({
    title: "",
    type: "",
    description: "",
    dueDate: "",
    priority: "medium",
    isActive: true,
  })

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "tax":
        return "ภาษี"
      case "registration":
        return "ทะเบียน"
      case "insurance":
        return "ประกัน"
      case "meeting":
        return "นัดหมาย"
      case "maintenance":
        return "ซ่อมบำรุง"
      case "other":
        return "อื่นๆ"
      default:
        return type
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tax":
        return <AlertTriangle className="h-4 w-4" />
      case "registration":
        return <Calendar className="h-4 w-4" />
      case "insurance":
        return <CheckCircle className="h-4 w-4" />
      case "meeting":
        return <Clock className="h-4 w-4" />
      case "maintenance":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-orange-100 text-orange-800">รอดำเนินการ</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800">เสร็จสิ้น</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800">เกินกำหนด</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">สูง</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">ปานกลาง</Badge>
      case "low":
        return <Badge className="bg-blue-100 text-blue-800">ต่ำ</Badge>
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">การแจ้งเตือน</h1>
          <p className="text-gray-600">จัดการการแจ้งเตือนสำหรับงานสำคัญต่างๆ</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              สร้างการแจ้งเตือน
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>สร้างการแจ้งเตือนใหม่</DialogTitle>
              <DialogDescription>ตั้งค่าการแจ้งเตือนสำหรับงานที่สำคัญ</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">หัวข้อ</Label>
                  <Input
                    id="title"
                    value={newNotification.title}
                    onChange={(e) => setNewNotification((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="เช่น ต่อทะเบียนรถโม่"
                  />
                </div>
                <div>
                  <Label htmlFor="type">ประเภท</Label>
                  <Select
                    value={newNotification.type}
                    onValueChange={(value) => setNewNotification((prev) => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภท" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tax">ภาษี</SelectItem>
                      <SelectItem value="registration">ทะเบียน</SelectItem>
                      <SelectItem value="insurance">ประกัน</SelectItem>
                      <SelectItem value="meeting">นัดหมาย</SelectItem>
                      <SelectItem value="maintenance">ซ่อมบำรุง</SelectItem>
                      <SelectItem value="other">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">รายละเอียด</Label>
                <Textarea
                  id="description"
                  value={newNotification.description}
                  onChange={(e) => setNewNotification((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="อธิบายรายละเอียดของการแจ้งเตือน"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dueDate">วันที่ครบกำหนด</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newNotification.dueDate}
                    onChange={(e) => setNewNotification((prev) => ({ ...prev, dueDate: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="priority">ความสำคัญ</Label>
                  <Select
                    value={newNotification.priority}
                    onValueChange={(value) => setNewNotification((prev) => ({ ...prev, priority: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">สูง</SelectItem>
                      <SelectItem value="medium">ปานกลาง</SelectItem>
                      <SelectItem value="low">ต่ำ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={newNotification.isActive}
                  onCheckedChange={(checked) => setNewNotification((prev) => ({ ...prev, isActive: checked }))}
                />
                <Label htmlFor="isActive">เปิดใช้งานการแจ้งเตือน</Label>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  ยกเลิก
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>สร้างการแจ้งเตือน</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รอดำเนินการ</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {notifications.filter((n) => n.status === "pending").length}
            </div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เกินกำหนด</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {notifications.filter((n) => getDaysUntilDue(n.dueDate) < 0).length}
            </div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ใกล้ครบกำหนด</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {
                notifications.filter((n) => {
                  const days = getDaysUntilDue(n.dueDate)
                  return days >= 0 && days <= 7
                }).length
              }
            </div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เสร็จสิ้น</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {notifications.filter((n) => n.status === "completed").length}
            </div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
          <TabsTrigger value="pending">รอดำเนินการ</TabsTrigger>
          <TabsTrigger value="urgent">เร่งด่วน</TabsTrigger>
          <TabsTrigger value="completed">เสร็จสิ้น</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                การแจ้งเตือนทั้งหมด
              </CardTitle>
              <CardDescription>รายการการแจ้งเตือนทั้งหมดในระบบ</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>หัวข้อ</TableHead>
                    <TableHead>ประเภท</TableHead>
                    <TableHead>วันครบกำหนด</TableHead>
                    <TableHead>เหลือเวลา</TableHead>
                    <TableHead>ความสำคัญ</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notifications.map((notification) => {
                    const daysLeft = getDaysUntilDue(notification.dueDate)
                    return (
                      <TableRow key={notification.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getTypeIcon(notification.type)}
                            <div>
                              <div className="font-medium">{notification.title}</div>
                              <div className="text-sm text-muted-foreground">{notification.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{getTypeLabel(notification.type)}</Badge>
                        </TableCell>
                        <TableCell>{notification.dueDate}</TableCell>
                        <TableCell>
                          <span
                            className={`font-medium ${
                              daysLeft < 0 ? "text-red-600" : daysLeft <= 7 ? "text-yellow-600" : "text-green-600"
                            }`}
                          >
                            {daysLeft < 0 ? `เกิน ${Math.abs(daysLeft)} วัน` : daysLeft === 0 ? "วันนี้" : `${daysLeft} วัน`}
                          </span>
                        </TableCell>
                        <TableCell>{getPriorityBadge(notification.priority)}</TableCell>
                        <TableCell>{getStatusBadge(notification.status)}</TableCell>
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
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>รอดำเนินการ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((n) => n.status === "pending")
                  .map((notification) => {
                    const daysLeft = getDaysUntilDue(notification.dueDate)
                    return (
                      <div key={notification.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {getTypeIcon(notification.type)}
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-sm text-muted-foreground">{notification.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              {getPriorityBadge(notification.priority)}
                              <span className="text-xs text-muted-foreground">ครบกำหนด: {notification.dueDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-semibold ${
                              daysLeft < 0 ? "text-red-600" : daysLeft <= 7 ? "text-yellow-600" : "text-green-600"
                            }`}
                          >
                            {daysLeft < 0
                              ? `เกิน ${Math.abs(daysLeft)} วัน`
                              : daysLeft === 0
                                ? "วันนี้"
                                : `เหลือ ${daysLeft} วัน`}
                          </div>
                          <Button size="sm" className="mt-2">
                            ทำเครื่องหมายเสร็จ
                          </Button>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="urgent">
          <Card>
            <CardHeader>
              <CardTitle>เร่งด่วน</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((n) => {
                    const daysLeft = getDaysUntilDue(n.dueDate)
                    return (daysLeft <= 7 && n.status === "pending") || n.priority === "high"
                  })
                  .map((notification) => {
                    const daysLeft = getDaysUntilDue(notification.dueDate)
                    return (
                      <div
                        key={notification.id}
                        className="flex items-center justify-between p-4 border-l-4 border-red-500 bg-red-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          {getTypeIcon(notification.type)}
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-sm text-muted-foreground">{notification.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              {getPriorityBadge(notification.priority)}
                              <span className="text-xs text-muted-foreground">ครบกำหนด: {notification.dueDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-red-600">
                            {daysLeft < 0
                              ? `เกิน ${Math.abs(daysLeft)} วัน`
                              : daysLeft === 0
                                ? "วันนี้"
                                : `เหลือ ${daysLeft} วัน`}
                          </div>
                          <Button size="sm" className="mt-2" variant="destructive">
                            ดำเนินการด่วน
                          </Button>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>เสร็จสิ้น</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((n) => n.status === "completed")
                  .map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <span className="text-xs text-muted-foreground">เสร็จสิ้นเมื่อ: {notification.dueDate}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">เสร็จสิ้น</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
