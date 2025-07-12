"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Shield } from "lucide-react"

export default function SettingsPage() {
  const [roles] = useState([
    { id: 1, name: "ฝ่ายบริหาร", users: 3, permissions: ["ดูทั้งหมด", "แก้ไขทั้งหมด", "ลบข้อมูล"] },
    { id: 2, name: "ฝ่ายบุคลากร", users: 5, permissions: ["ดูข้อมูลพนักงาน", "แก้ไขข้อมูลพนักงาน"] },
    { id: 3, name: "ฝ่ายบัญชี/การเงิน", users: 4, permissions: ["ดูข้อมูลการเงิน", "แก้ไขข้อมูลการเงิน"] },
    { id: 4, name: "ฝ่ายปฏิบัติการ", users: 8, permissions: ["ดูข้อมูลปฏิบัติการ", "แก้ไขข้อมูลปฏิบัติการ"] },
    { id: 5, name: "ฝ่ายซ่อมบำรุง", users: 6, permissions: ["ดูข้อมูลซ่อมบำรุง", "แก้ไขข้อมูลซ่อมบำรุง"] },
  ])

  const [permissions] = useState([
    { id: 1, name: "ดูภาพรวม", description: "เข้าถึงหน้า Dashboard" },
    { id: 2, name: "จัดการข้อมูลพื้นฐาน", description: "เพิ่ม แก้ไข ลบข้อมูลพื้นฐาน" },
    { id: 3, name: "จัดการลูกค้า", description: "เพิ่ม แก้ไข ลบข้อมูลลูกค้า" },
    { id: 4, name: "จัดการปฏิบัติการ", description: "เพิ่ม แก้ไข ลบข้อมูลปฏิบัติการ" },
    { id: 5, name: "จัดการการเงิน", description: "เพิ่ม แก้ไข ลบข้อมูลการเงิน" },
    { id: 6, name: "ดูรายงาน", description: "เข้าถึงรายงานต่างๆ" },
    { id: 7, name: "จัดการระบบ", description: "ตั้งค่าระบบและจัดการผู้ใช้" },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ตั้งค่าระบบ</h1>
        <p className="text-gray-600">จัดการสิทธิ์การเข้าถึงและการตั้งค่าระบบ</p>
      </div>

      <Tabs defaultValue="roles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="roles">จัดการ Role</TabsTrigger>
          <TabsTrigger value="permissions">จัดการสิทธิ์</TabsTrigger>
          <TabsTrigger value="users">จัดการผู้ใช้</TabsTrigger>
          <TabsTrigger value="system">ตั้งค่าระบบ</TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>จัดการ Role</CardTitle>
                  <CardDescription>เพิ่ม แก้ไข หรือลบ role ในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่ม Role
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ชื่อ Role</TableHead>
                    <TableHead>จำนวนผู้ใช้</TableHead>
                    <TableHead>สิทธิ์</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell className="font-medium">{role.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{role.users} คน</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.slice(0, 2).map((permission, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                          {role.permissions.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{role.permissions.length - 2}
                            </Badge>
                          )}
                        </div>
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

        <TabsContent value="permissions">
          <Card>
            <CardHeader>
              <CardTitle>จัดการสิทธิ์</CardTitle>
              <CardDescription>กำหนดสิทธิ์การเข้าถึงแต่ละฟังก์ชัน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {permissions.map((permission) => (
                  <div key={permission.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <h3 className="font-medium">{permission.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{permission.description}</p>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>จัดการผู้ใช้</CardTitle>
                  <CardDescription>เพิ่ม แก้ไข หรือลบผู้ใช้ในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มผู้ใช้
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="search">ค้นหาผู้ใช้</Label>
                    <Input id="search" placeholder="ชื่อ หรือ อีเมล" />
                  </div>
                  <div>
                    <Label htmlFor="role-filter">กรองตาม Role</Label>
                    <Input id="role-filter" placeholder="เลือก Role" />
                  </div>
                  <div>
                    <Label htmlFor="status-filter">กรองตามสถานะ</Label>
                    <Input id="status-filter" placeholder="เลือกสถานะ" />
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ชื่อผู้ใช้</TableHead>
                      <TableHead>อีเมล</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>สถานะ</TableHead>
                      <TableHead>การจัดการ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">สมชาย ใจดี</TableCell>
                      <TableCell>somchai@company.com</TableCell>
                      <TableCell>
                        <Badge>ฝ่ายบริหาร</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          ใช้งานอยู่
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
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>การตั้งค่าทั่วไป</CardTitle>
                <CardDescription>ตั้งค่าพื้นฐานของระบบ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">ชื่อบริษัท</Label>
                  <Input id="company-name" defaultValue="บริษัท รถโม่ปูน จำกัด" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">เขตเวลา</Label>
                  <Input id="timezone" defaultValue="Asia/Bangkok" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">สกุลเงิน</Label>
                  <Input id="currency" defaultValue="THB" />
                </div>
                <Button>บันทึกการตั้งค่า</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>การสำรองข้อมูล</CardTitle>
                <CardDescription>จัดการการสำรองและกู้คืนข้อมูล</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">สำรองข้อมูลอัตโนมัติ</p>
                    <p className="text-sm text-muted-foreground">สำรองข้อมูลทุกวันเวลา 02:00 น.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">การสำรองล่าสุด</p>
                  <p className="text-sm text-muted-foreground">วันที่ 15 ธันวาคม 2024 เวลา 02:00 น.</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">สำรองข้อมูลตอนนี้</Button>
                  <Button variant="outline">กู้คืนข้อมูล</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
