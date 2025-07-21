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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, CheckCircle, XCircle, Clock, Eye, AlertCircle } from "lucide-react"

export default function ApprovalSystemPage() {
  const [approvals, setApprovals] = useState([
    {
      id: 1,
      title: "ขออนุมัติซื้อรถโม่ใหม่",
      type: "purchase",
      description: "ขออนุมัติงบประมาณ 2,500,000 บาท สำหรับซื้อรถโม่ปูนใหม่ 1 คัน",
      amount: 2500000,
      requestedBy: {
        name: "สมชาย ใจดี",
        position: "ผู้จัดการฝ่ายปฏิบัติการ",
        avatar: "/placeholder-user.jpg",
      },
      approvers: [
        { name: "สมหญิง รักงาน", position: "ผู้จัดการฝ่ายการเงิน", status: "approved", date: "2024-12-10" },
        { name: "สมศักดิ์ ขยัน", position: "กรรมการผู้จัดการ", status: "pending", date: null },
      ],
      status: "pending",
      priority: "high",
      createdAt: "2024-12-08",
      dueDate: "2024-12-20",
    },
    {
      id: 2,
      title: "ขออนุมัติค่าซ่อมบำรุงรถโม่ 80-1234",
      type: "maintenance",
      description: "ซ่อมเครื่องยนต์และเปลี่ยนชิ้นส่วนสำคัญ",
      amount: 85000,
      requestedBy: {
        name: "สมปอง มั่นคง",
        position: "หัวหน้าช่าง",
        avatar: "/placeholder-user.jpg",
      },
      approvers: [{ name: "สมชาย ใจดี", position: "ผู้จัดการฝ่ายปฏิบัติการ", status: "approved", date: "2024-12-12" }],
      status: "approved",
      priority: "medium",
      createdAt: "2024-12-11",
      dueDate: "2024-12-18",
    },
    {
      id: 3,
      title: "ขออนุมัติจ้างพนักงานใหม่ 2 คน",
      type: "hiring",
      description: "จ้างคนขับรถโม่ 2 คน เงินเดือน 18,000 บาท/คน",
      amount: 36000,
      requestedBy: {
        name: "สมหญิง รักงาน",
        position: "ผู้จัดการฝ่ายบุคลากร",
        avatar: "/placeholder-user.jpg",
      },
      approvers: [
        {
          name: "สมศักดิ์ ขยัน",
          position: "กรรมการผู้จัดการ",
          status: "rejected",
          date: "2024-12-13",
          comment: "งบประมาณไม่เพียงพอ รอไตรมาสหน้า",
        },
      ],
      status: "rejected",
      priority: "low",
      createdAt: "2024-12-12",
      dueDate: "2024-12-25",
    },
  ])

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedApproval, setSelectedApproval] = useState(null)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-orange-100 text-orange-800">รออนุมัติ</Badge>
      case "approved":
        return <Badge className="bg-green-100 text-green-800">อนุมัติแล้ว</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">ปฏิเสธ</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "purchase":
        return "การซื้อ"
      case "maintenance":
        return "ซ่อมบำรุง"
      case "hiring":
        return "จ้างงาน"
      case "expense":
        return "ค่าใช้จ่าย"
      case "other":
        return "อื่นๆ"
      default:
        return type
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

  const pendingApprovals = approvals.filter((a) => a.status === "pending")
  const myApprovals = approvals.filter((a) => a.approvers.some((approver) => approver.status === "pending"))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ระบบอนุมัติ</h1>
          <p className="text-gray-600">จัดการคำขออนุมัติต่างๆ ในองค์กร</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              สร้างคำขออนุมัติ
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>สร้างคำขออนุมัติใหม่</DialogTitle>
              <DialogDescription>กรอกข้อมูลคำขออนุมัติและเลือกผู้อนุมัติ</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">หัวข้อคำขอ</Label>
                  <Input id="title" placeholder="เช่น ขออนุมัติซื้อรถโม่ใหม่" />
                </div>
                <div>
                  <Label htmlFor="type">ประเภท</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภท" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="purchase">การซื้อ</SelectItem>
                      <SelectItem value="maintenance">ซ่อมบำรุง</SelectItem>
                      <SelectItem value="hiring">จ้างงาน</SelectItem>
                      <SelectItem value="expense">ค่าใช้จ่าย</SelectItem>
                      <SelectItem value="other">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">รายละเอียด</Label>
                <Textarea id="description" placeholder="อธิบายรายละเอียดของคำขออนุมัติ" rows={3} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="amount">จำนวนเงิน (บาท)</Label>
                  <Input id="amount" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="priority">ความสำคัญ</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกความสำคัญ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">สูง</SelectItem>
                      <SelectItem value="medium">ปานกลาง</SelectItem>
                      <SelectItem value="low">ต่ำ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="approvers">ผู้อนุมัติ</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกผู้อนุมัติ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">ผู้จัดการฝ่าย</SelectItem>
                    <SelectItem value="director">กรรมการผู้จัดการ</SelectItem>
                    <SelectItem value="ceo">ประธานกรรมการ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  ยกเลิก
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>ส่งคำขออนุมัติ</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รออนุมัติ</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{pendingApprovals.length}</div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ต้องอนุมัติ</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{myApprovals.length}</div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">อนุมัติแล้ว</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {approvals.filter((a) => a.status === "approved").length}
            </div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ปฏิเสธ</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {approvals.filter((a) => a.status === "rejected").length}
            </div>
            <p className="text-xs text-muted-foreground">รายการ</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
          <TabsTrigger value="pending">รออนุมัติ</TabsTrigger>
          <TabsTrigger value="my-approvals">ต้องอนุมัติ</TabsTrigger>
          <TabsTrigger value="approved">อนุมัติแล้ว</TabsTrigger>
          <TabsTrigger value="rejected">ปฏิเสธ</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>คำขออนุมัติทั้งหมด</CardTitle>
              <CardDescription>รายการคำขออนุมัติทั้งหมดในระบบ</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>หัวข้อ</TableHead>
                    <TableHead>ผู้ขออนุมัติ</TableHead>
                    <TableHead>ประเภท</TableHead>
                    <TableHead>จำนวนเงิน</TableHead>
                    <TableHead>ความสำคัญ</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>วันที่สร้าง</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvals.map((approval) => (
                    <TableRow key={approval.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{approval.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {approval.description.substring(0, 50)}...
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={approval.requestedBy.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{approval.requestedBy.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">{approval.requestedBy.name}</div>
                            <div className="text-xs text-muted-foreground">{approval.requestedBy.position}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{getTypeLabel(approval.type)}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">฿{approval.amount.toLocaleString()}</TableCell>
                      <TableCell>{getPriorityBadge(approval.priority)}</TableCell>
                      <TableCell>{getStatusBadge(approval.status)}</TableCell>
                      <TableCell>{approval.createdAt}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedApproval(approval)
                            setIsDetailDialogOpen(true)
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-approvals">
          <Card>
            <CardHeader>
              <CardTitle>รายการที่ต้องอนุมัติ</CardTitle>
              <CardDescription>คำขออนุมัติที่รอการอนุมัติจากคุณ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myApprovals.map((approval) => (
                  <div key={approval.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{approval.title}</h3>
                          {getPriorityBadge(approval.priority)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{approval.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={approval.requestedBy.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{approval.requestedBy.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{approval.requestedBy.name}</span>
                          </div>
                          <span className="font-medium text-green-600">฿{approval.amount.toLocaleString()}</span>
                          <span className="text-muted-foreground">{approval.createdAt}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 bg-transparent">
                          <XCircle className="h-4 w-4 mr-1" />
                          ปฏิเสธ
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          อนุมัติ
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>รออนุมัติ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <div key={approval.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{approval.title}</h3>
                        <p className="text-sm text-muted-foreground">{approval.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">฿{approval.amount.toLocaleString()}</div>
                        {getPriorityBadge(approval.priority)}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">ขั้นตอนการอนุมัติ:</div>
                      {approval.approvers.map((approver, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              approver.status === "approved"
                                ? "bg-green-100 text-green-600"
                                : approver.status === "rejected"
                                  ? "bg-red-100 text-red-600"
                                  : "bg-orange-100 text-orange-600"
                            }`}
                          >
                            {approver.status === "approved" ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : approver.status === "rejected" ? (
                              <XCircle className="h-4 w-4" />
                            ) : (
                              <Clock className="h-4 w-4" />
                            )}
                          </div>
                          <span>{approver.name}</span>
                          <span className="text-muted-foreground">({approver.position})</span>
                          {approver.date && <span className="text-muted-foreground">- {approver.date}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved">
          <Card>
            <CardHeader>
              <CardTitle>อนุมัติแล้ว</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {approvals
                  .filter((a) => a.status === "approved")
                  .map((approval) => (
                    <div key={approval.id} className="border rounded-lg p-4 bg-green-50">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{approval.title}</h3>
                          <p className="text-sm text-muted-foreground">{approval.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className="bg-green-100 text-green-800">อนุมัติแล้ว</Badge>
                            <span className="text-sm text-muted-foreground">
                              อนุมัติเมื่อ: {approval.approvers.find((a) => a.status === "approved")?.date}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">฿{approval.amount.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardHeader>
              <CardTitle>ปฏิเสธ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {approvals
                  .filter((a) => a.status === "rejected")
                  .map((approval) => (
                    <div key={approval.id} className="border rounded-lg p-4 bg-red-50">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{approval.title}</h3>
                          <p className="text-sm text-muted-foreground">{approval.description}</p>
                          <div className="mt-2">
                            <Badge className="bg-red-100 text-red-800">ปฏิเสธ</Badge>
                            {approval.approvers.find((a) => a.status === "rejected")?.comment && (
                              <div className="mt-2 p-2 bg-red-100 rounded text-sm">
                                <strong>เหตุผล:</strong>{" "}
                                {approval.approvers.find((a) => a.status === "rejected")?.comment}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-red-600">฿{approval.amount.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-3xl">
          {selectedApproval && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedApproval.title}</DialogTitle>
                <DialogDescription>รายละเอียดคำขออนุมัติ</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>ผู้ขออนุมัติ</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={selectedApproval.requestedBy.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{selectedApproval.requestedBy.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{selectedApproval.requestedBy.name}</div>
                        <div className="text-sm text-muted-foreground">{selectedApproval.requestedBy.position}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>จำนวนเงิน</Label>
                    <div className="text-2xl font-bold text-green-600 mt-1">
                      ฿{selectedApproval.amount.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div>
                  <Label>รายละเอียด</Label>
                  <p className="mt-1 text-sm">{selectedApproval.description}</p>
                </div>

                <div>
                  <Label>ขั้นตอนการอนุมัติ</Label>
                  <div className="mt-2 space-y-3">
                    {selectedApproval.approvers.map((approver, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            approver.status === "approved"
                              ? "bg-green-100 text-green-600"
                              : approver.status === "rejected"
                                ? "bg-red-100 text-red-600"
                                : "bg-orange-100 text-orange-600"
                          }`}
                        >
                          {approver.status === "approved" ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : approver.status === "rejected" ? (
                            <XCircle className="h-5 w-5" />
                          ) : (
                            <Clock className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{approver.name}</div>
                          <div className="text-sm text-muted-foreground">{approver.position}</div>
                          {approver.comment && (
                            <div className="text-sm mt-1 p-2 bg-gray-100 rounded">{approver.comment}</div>
                          )}
                        </div>
                        <div className="text-right">
                          {getStatusBadge(approver.status)}
                          {approver.date && <div className="text-xs text-muted-foreground mt-1">{approver.date}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
