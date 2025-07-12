"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, LayoutTemplateIcon as Template, Users, BarChart3 } from "lucide-react"

export default function LineOAPage() {
  const [templates] = useState([
    { id: 1, name: "สรุปรายวันคนขับ", type: "flex", usage: 45 },
    { id: 2, name: "สรุปรายวันลูกค้า", type: "flex", usage: 32 },
    { id: 3, name: "แจ้งเตือนโยกรถ", type: "text", usage: 18 },
  ])

  const [messages] = useState([
    { id: 1, recipient: "คนขับทั้งหมด", content: "สรุปการวิ่งเที่ยววันนี้", sent: "2024-12-15 18:00", status: "ส่งแล้ว" },
    { id: 2, recipient: "บริษัท ABC", content: "สรุปรายวันลูกค้า", sent: "2024-12-15 17:30", status: "ส่งแล้ว" },
    { id: 3, recipient: "สมชาย ใจดี", content: "แจ้งโยกรถไปโรงงาน B", sent: "2024-12-15 14:00", status: "อ่านแล้ว" },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">LINE OA</h1>
        <p className="text-gray-600">จัดการการส่งข้อความและ template ผ่าน LINE Official Account</p>
      </div>

      <Tabs defaultValue="templates" className="space-y-4">
        <TabsList>
          <TabsTrigger value="templates">Template</TabsTrigger>
          <TabsTrigger value="send">ส่งข้อความ</TabsTrigger>
          <TabsTrigger value="history">ประวัติการส่ง</TabsTrigger>
          <TabsTrigger value="analytics">สถิติ</TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Template className="h-5 w-5" />
                  Flex Message Templates
                </CardTitle>
                <CardDescription>สร้างและจัดการ template สำหรับส่งข้อความ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templates.map((template) => (
                    <div key={template.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{template.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{template.type}</Badge>
                          <span className="text-sm text-muted-foreground">ใช้งาน {template.usage} ครั้ง</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          แก้ไข
                        </Button>
                        <Button variant="outline" size="sm">
                          ใช้งาน
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full">
                    <Template className="mr-2 h-4 w-4" />
                    สร้าง Template ใหม่
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ตัวอย่าง Flex Message</CardTitle>
                <CardDescription>แสดงตัวอย่างข้อความที่จะส่ง</CardDescription>
              </CardHeader>
              <CardContent>
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
                      <div className="flex justify-between border-t pt-2">
                        <span>ค่าเที่ยว:</span>
                        <span className="font-bold text-blue-600">฿1,200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="send">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                ส่งข้อความ
              </CardTitle>
              <CardDescription>ส่งข้อความไปยังกลุ่มหรือบุคคลเฉพาะ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipient-type">ประเภทผู้รับ</Label>
                    <Input id="recipient-type" placeholder="เลือกประเภทผู้รับ" />
                  </div>
                  <div>
                    <Label htmlFor="recipient">ผู้รับ</Label>
                    <Input id="recipient" placeholder="เลือกผู้รับ" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message-type">ประเภทข้อความ</Label>
                  <Input id="message-type" placeholder="เลือกประเภทข้อความ" />
                </div>

                <div>
                  <Label htmlFor="message-content">เนื้อหาข้อความ</Label>
                  <Textarea id="message-content" placeholder="พิมพ์ข้อความที่ต้องการส่ง..." rows={6} />
                </div>

                <div className="flex gap-2">
                  <Button variant="outline">ดูตัวอย่าง</Button>
                  <Button>
                    <Send className="mr-2 h-4 w-4" />
                    ส่งข้อความ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>ประวัติการส่งข้อความ</CardTitle>
              <CardDescription>รายการข้อความที่ส่งไปแล้ว</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">{message.recipient}</span>
                        <Badge
                          variant={message.status === "อ่านแล้ว" ? "secondary" : "outline"}
                          className={message.status === "อ่านแล้ว" ? "bg-green-100 text-green-800" : ""}
                        >
                          {message.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{message.content}</p>
                      <p className="text-xs text-muted-foreground">{message.sent}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      ดูรายละเอียด
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
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
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
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
                <CardTitle className="text-sm font-medium">Template ยอดนิยม</CardTitle>
                <Template className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">สรุปรายวัน</div>
                <p className="text-xs text-muted-foreground">ใช้งาน 45 ครั้ง</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>กราฟการใช้งาน</CardTitle>
              <CardDescription>สถิติการส่งข้อความรายวันใน 7 วันที่ผ่านมา</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2">
                {[12, 19, 15, 24, 18, 22, 16].map((value, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="bg-blue-500 rounded-t w-8" style={{ height: `${(value / 24) * 200}px` }}></div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(Date.now() - (6 - index) * 24 * 60 * 60 * 1000).getDate()}
                    </span>
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
