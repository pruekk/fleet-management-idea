"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Users, Eye, MessageSquare } from "lucide-react"

export default function SendMessagePage() {
  const [recipients, setRecipients] = useState([
    { id: 1, name: "สมชาย ใจดี", type: "คนขับ", phone: "081-234-5678", selected: false },
    { id: 2, name: "สมหญิง รักงาน", type: "คนขับ", phone: "082-345-6789", selected: false },
    { id: 3, name: "สมศักดิ์ ขยัน", type: "คนขับ", phone: "083-456-7890", selected: false },
    { id: 4, name: "บริษัท ก่อสร้าง ABC จำกัด", type: "ลูกค้า", phone: "02-123-4567", selected: false },
    { id: 5, name: "บริษัท โครงการใหญ่ จำกัด", type: "ลูกค้า", phone: "02-234-5678", selected: false },
  ])

  const [messageData, setMessageData] = useState({
    recipientType: "",
    template: "",
    customMessage: "",
    scheduleDate: "",
    scheduleTime: "",
  })

  const [selectedRecipients, setSelectedRecipients] = useState<number[]>([])

  const handleRecipientSelect = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedRecipients([...selectedRecipients, id])
    } else {
      setSelectedRecipients(selectedRecipients.filter((recipientId) => recipientId !== id))
    }
  }

  const handleSelectAll = (type: string) => {
    const typeRecipients = recipients.filter((r) => r.type === type).map((r) => r.id)
    setSelectedRecipients([...new Set([...selectedRecipients, ...typeRecipients])])
  }

  const handleSendMessage = () => {
    if (selectedRecipients.length > 0 && (messageData.template || messageData.customMessage)) {
      // Simulate sending message
      alert(`ส่งข้อความไปยัง ${selectedRecipients.length} ผู้รับแล้ว`)
      setSelectedRecipients([])
      setMessageData({
        recipientType: "",
        template: "",
        customMessage: "",
        scheduleDate: "",
        scheduleTime: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ส่งข้อความ LINE</h1>
        <p className="text-gray-600">ส่งข้อความไปยังกลุ่มหรือบุคคลเฉพาะ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              เลือกผู้รับ
            </CardTitle>
            <CardDescription>เลือกผู้รับที่ต้องการส่งข้อความ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleSelectAll("คนขับ")}>
                  เลือกคนขับทั้งหมด
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleSelectAll("ลูกค้า")}>
                  เลือกลูกค้าทั้งหมด
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSelectedRecipients([])}>
                  ยกเลิกทั้งหมด
                </Button>
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {recipients.map((recipient) => (
                  <div key={recipient.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Checkbox
                      checked={selectedRecipients.includes(recipient.id)}
                      onCheckedChange={(checked) => handleRecipientSelect(recipient.id, checked as boolean)}
                    />
                    <div className="flex-1">
                      <div className="font-medium">{recipient.name}</div>
                      <div className="text-sm text-muted-foreground">{recipient.phone}</div>
                    </div>
                    <Badge variant="outline">{recipient.type}</Badge>
                  </div>
                ))}
              </div>

              <div className="text-sm text-muted-foreground">เลือกแล้ว: {selectedRecipients.length} ผู้รับ</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              เนื้อหาข้อความ
            </CardTitle>
            <CardDescription>เลือก template หรือพิมพ์ข้อความเอง</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="template">เลือก Template</Label>
                <Select
                  value={messageData.template}
                  onValueChange={(value) => setMessageData({ ...messageData, template: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="เลือก template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily-summary-driver">สรุปรายวันคนขับ</SelectItem>
                    <SelectItem value="daily-summary-customer">สรุปรายวันลูกค้า</SelectItem>
                    <SelectItem value="transport-notification">แจ้งเตือนโยกรถ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-center text-sm text-muted-foreground">หรือ</div>

              <div>
                <Label htmlFor="customMessage">ข้อความกำหนดเอง</Label>
                <Textarea
                  id="customMessage"
                  value={messageData.customMessage}
                  onChange={(e) => setMessageData({ ...messageData, customMessage: e.target.value })}
                  placeholder="พิมพ์ข้อความที่ต้องการส่ง..."
                  rows={6}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="scheduleDate">กำหนดเวลาส่ง (วันที่)</Label>
                  <Input
                    id="scheduleDate"
                    type="date"
                    value={messageData.scheduleDate}
                    onChange={(e) => setMessageData({ ...messageData, scheduleDate: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="scheduleTime">เวลา</Label>
                  <Input
                    id="scheduleTime"
                    type="time"
                    value={messageData.scheduleTime}
                    onChange={(e) => setMessageData({ ...messageData, scheduleTime: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Eye className="mr-2 h-4 w-4" />
                      ดูตัวอย่าง
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>ตัวอย่างข้อความ</DialogTitle>
                      <DialogDescription>ข้อความที่จะส่งไปยังผู้รับ</DialogDescription>
                    </DialogHeader>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-center mb-3">
                          <h3 className="font-bold text-lg">สรุปการวิ่งเที่ยววันนี้</h3>
                          <p className="text-sm text-gray-600">วันที่ 15 ธันวาคม 2024</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>รถโม่:</span>
                            <span className="font-medium">80-1234</span>
                          </div>
                          <div className="flex justify-between">
                            <span>จำนวนเที่ยว:</span>
                            <span className="font-medium">8 เที่ยว</span>
                          </div>
                          <div className="flex justify-between">
                            <span>รายได้:</span>
                            <span className="font-medium text-green-600">฿12,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button onClick={handleSendMessage} className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  {messageData.scheduleDate ? "กำหนดเวลาส่ง" : "ส่งทันที"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>การส่งข้อความด่วน</CardTitle>
          <CardDescription>ส่งข้อความแบบด่วนไปยังกลุ่มต่างๆ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
              <Users className="h-6 w-6" />
              <span>ส่งสรุปรายวัน</span>
              <span className="text-xs text-muted-foreground">ไปยังคนขับทั้งหมด</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
              <MessageSquare className="h-6 w-6" />
              <span>แจ้งเตือนโยกรถ</span>
              <span className="text-xs text-muted-foreground">ไปยังคนขับที่เกี่ยวข้อง</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
              <Send className="h-6 w-6" />
              <span>ส่งรายงานลูกค้า</span>
              <span className="text-xs text-muted-foreground">ไปยังลูกค้าทั้งหมด</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
