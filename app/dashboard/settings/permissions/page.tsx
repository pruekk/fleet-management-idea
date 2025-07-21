"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Eye, Edit, Trash2 } from "lucide-react"

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState({
    ฝ่ายบริหาร: {
      // Main Categories
      ภาพรวม: { view: true, edit: true, delete: true },
      ข้อมูลพื้นฐาน: { view: true, edit: true, delete: true },
      ลูกค้า: { view: true, edit: true, delete: true },
      ปฏิบัติการรายเดือน: { view: true, edit: true, delete: true },
      "LINE OA": { view: true, edit: true, delete: true },
      รายได้บริษัท: { view: true, edit: true, delete: true },
      รายจ่ายบริษัท: { view: true, edit: true, delete: true },
      Supplier: { view: true, edit: true, delete: true },
      รายงาน: { view: true, edit: true, delete: true },
      การแจ้งเตือน: { view: true, edit: true, delete: true },
      ระบบอนุมัติ: { view: true, edit: true, delete: true },
      ตั้งค่าระบบ: { view: true, edit: true, delete: true },
      // Sub Categories
      "ภาพรวม - ข้อมูลทั่วไป": { view: true, edit: true, delete: true },
      "ภาพรวม - GPM": { view: true, edit: true, delete: true },
      "ข้อมูลพื้นฐาน - รถโม่": { view: true, edit: true, delete: true },
      "ข้อมูลพื้นฐาน - พนักงาน": { view: true, edit: true, delete: true },
      "ข้อมูลพื้นฐาน - บริษัท": { view: true, edit: true, delete: true },
      "ข้อมูลพื้นฐาน - การโยกรถ": { view: true, edit: true, delete: true },
      "ลูกค้า - รายชื่อลูกค้า": { view: true, edit: true, delete: true },
      "ลูกค้า - โรงงาน": { view: true, edit: true, delete: true },
      "ลูกค้า - ใบราคา": { view: true, edit: true, delete: true },
      "ปฏิบัติการรายเดือน - วิ่งเที่ยว": { view: true, edit: true, delete: true },
      "ปฏิบัติการรายเดือน - ซ่อมบำรุง": { view: true, edit: true, delete: true },
      "ปฏิบัติการรายเดือน - น้ำมัน": { view: true, edit: true, delete: true },
      "ปฏิบัติการรายเดือน - วางบิล": { view: true, edit: true, delete: true },
      "ปฏิบัติการรายเดือน - พนักงาน": { view: true, edit: true, delete: true },
      "ปฏิบัติการรายเดือน - Excel Templates": { view: true, edit: true, delete: true },
    },
    ฝ่ายปฏิบัติการ: {
      // Main Categories
      ภาพรวม: { view: true, edit: false, delete: false },
      ข้อมูลพื้นฐาน: { view: true, edit: true, delete: false },
      ลูกค้า: { view: true, edit: true, delete: false },
      ปฏิบัติการรายเดือน: { view: true, edit: true, delete: false },
      "LINE OA": { view: true, edit: true, delete: false },
      รายได้บริษัท: { view: false, edit: false, delete: false },
      รายจ่ายบริษัท: { view: false, edit: false, delete: false },
      Supplier: { view: false, edit: false, delete: false },
      รายงาน: { view: true, edit: false, delete: false },
      การแจ้งเตือน: { view: true, edit: true, delete: false },
      ระบบอนุมัติ: { view: true, edit: false, delete: false },
      ตั้งค่าระบบ: { view: false, edit: false, delete: false },
      // Sub Categories
      "ภาพรวม - ข้อมูลทั่วไป": { view: true, edit: false, delete: false },
      "ภาพรวม - GPM": { view: false, edit: false, delete: false },
      "ข้อมูลพื้นฐาน - รถโม่": { view: true, edit: true, delete: false },
      "ข้อมูลพื้นฐาน - พนักงาน": { view: false, edit: false, delete: false }, // ไม่เห็นเงินเดือน
      "ข้อมูลพื้นฐาน - บริษัท": { view: true, edit: false, delete: false },
      "ข้อมูลพื้นฐาน - การโยกรถ": { view: true, edit: true, delete: false },
      "ลูกค้า - รายชื่อลูกค้า": { view: true, edit: true, delete: false },
      "ลูกค้า - โรงงาน": { view: true, edit: true, delete: false },
      "ลูกค้า - ใบราคา": { view: true, edit: false, delete: false },
      "ปฏิบัติการรายเดือน - วิ่งเที่ยว": { view: true, edit: true, delete: false },
      "ปฏิบัติการรายเดือน - ซ่อมบำรุง": { view: true, edit: false, delete: false },
      "ปฏิบัติการรายเดือน - น้ำมัน": { view: true, edit: true, delete: false },
      "ปฏิบัติการรายเดือน - วางบิล": { view: true, edit: false, delete: false },
      "ปฏิบัติการรายเดือน - พนักงาน": { view: true, edit: true, delete: false },
      "ปฏิบัติการรายเดือน - Excel Templates": { view: true, edit: true, delete: false },
    },
    "ฝ่ายบัญชี/การเงิน": {
      // Main Categories
      ภาพรวม: { view: true, edit: false, delete: false },
      ข้อมูลพื้นฐาน: { view: true, edit: false, delete: false },
      ลูกค้า: { view: true, edit: false, delete: false },
      ปฏิบัติการรายเดือน: { view: true, edit: false, delete: false },
      "LINE OA": { view: false, edit: false, delete: false },
      รายได้บริษัท: { view: true, edit: true, delete: false },
      รายจ่ายบริษัท: { view: true, edit: true, delete: false },
      Supplier: { view: true, edit: true, delete: false },
      รายงาน: { view: true, edit: false, delete: false },
      การแจ้งเตือน: { view: true, edit: true, delete: false },
      ระบบอนุมัติ: { view: true, edit: true, delete: false },
      ตั้งค่าระบบ: { view: false, edit: false, delete: false },
      // Sub Categories
      "ภาพรวม - ข้อมูลทั่วไป": { view: true, edit: false, delete: false },
      "ภาพรวม - GPM": { view: false, edit: false, delete: false },
      "ข้อมูลพื้นฐาน - รถโม่": { view: true, edit: false, delete: false },
      "ข้อมูลพื้นฐาน - พนักงาน": { view: true, edit: false, delete: false },
      "ข้อมูลพื้นฐาน - บริษัท": { view: true, edit: false, delete: false },
      "ข้อมูลพื้นฐาน - การโยกรถ": { view: true, edit: false, delete: false },
      "ลูกค้า - รายชื่อลูกค้า": { view: true, edit: false, delete: false },
      "ลูกค้า - โรงงาน": { view: true, edit: false, delete: false },
      "ลูกค้า - ใบราคา": { view: true, edit: true, delete: false },
      "ปฏิบัติการรายเดือน - วิ่งเที่ยว": { view: true, edit: false, delete: false },
      "ปฏิบัติการรายเดือน - ซ่อมบำรุง": { view: true, edit: false, delete: false },
      "ปฏิบัติการรายเดือน - น้ำมัน": { view: true, edit: false, delete: false },
      "ปฏิบัติการรายเดือน - วางบิล": { view: true, edit: true, delete: false },
      "ปฏิบัติการรายเดือน - พนักงาน": { view: true, edit: false, delete: false },
      "ปฏิบัติการรายเดือน - Excel Templates": { view: true, edit: false, delete: false },
    },
  })

  const roles = Object.keys(permissions)
  const mainCategories = [
    "ภาพรวม",
    "ข้อมูลพื้นฐาน",
    "ลูกค้า",
    "ปฏิบัติการรายเดือน",
    "LINE OA",
    "รายได้บริษัท",
    "รายจ่ายบริษัท",
    "Supplier",
    "รายงาน",
    "การแจ้งเตือน",
    "ระบบอนุมัติ",
    "ตั้งค่าระบบ",
  ]

  const subCategories = {
    ภาพรวม: ["ข้อมูลทั่วไป", "GPM"],
    ข้อมูลพื้นฐาน: ["รถโม่", "พนักงาน", "บริษัท", "การโยกรถ"],
    ลูกค้า: ["รายชื่อลูกค้า", "โรงงาน", "ใบราคา"],
    ปฏิบัติการรายเดือน: ["วิ่งเที่ยว", "ซ่อมบำรุง", "น้ำมัน", "วางบิล", "พนักงาน", "Excel Templates"],
  }

  const updatePermission = (role: string, category: string, permission: string, value: boolean) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [category]: {
          ...prev[role][category],
          [permission]: value,
        },
      },
    }))
  }

  const getPermissionIcon = (hasPermission: boolean) => {
    return hasPermission ? (
      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    ) : (
      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการสิทธิ์</h1>
          <p className="text-gray-600">กำหนดสิทธิ์การเข้าถึงสำหรับแต่ละบทบาท</p>
        </div>
        <Button>
          <Shield className="mr-2 h-4 w-4" />
          บันทึกการตั้งค่า
        </Button>
      </div>

      <Tabs defaultValue="main-categories" className="space-y-4">
        <TabsList>
          <TabsTrigger value="main-categories">หมวดหมู่หลัก</TabsTrigger>
          <TabsTrigger value="sub-categories">หมวดหมู่ย่อย</TabsTrigger>
          <TabsTrigger value="summary">สรุปสิทธิ์</TabsTrigger>
        </TabsList>

        <TabsContent value="main-categories">
          <Card>
            <CardHeader>
              <CardTitle>สิทธิ์หมวดหมู่หลัก</CardTitle>
              <CardDescription>กำหนดสิทธิ์การเข้าถึงหมวดหมู่หลักของระบบ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-48">หมวดหมู่</TableHead>
                      {roles.map((role) => (
                        <TableHead key={role} className="text-center min-w-32">
                          <Badge variant="outline">{role}</Badge>
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mainCategories.map((category) => (
                      <TableRow key={category}>
                        <TableCell className="font-medium">{category}</TableCell>
                        {roles.map((role) => (
                          <TableCell key={`${role}-${category}`} className="text-center">
                            <div className="flex justify-center gap-4">
                              <div className="flex flex-col items-center gap-1">
                                <Checkbox
                                  checked={permissions[role][category]?.view || false}
                                  onCheckedChange={(checked) =>
                                    updatePermission(role, category, "view", checked as boolean)
                                  }
                                />
                                <span className="text-xs text-muted-foreground">ดู</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <Checkbox
                                  checked={permissions[role][category]?.edit || false}
                                  onCheckedChange={(checked) =>
                                    updatePermission(role, category, "edit", checked as boolean)
                                  }
                                />
                                <span className="text-xs text-muted-foreground">แก้ไข</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <Checkbox
                                  checked={permissions[role][category]?.delete || false}
                                  onCheckedChange={(checked) =>
                                    updatePermission(role, category, "delete", checked as boolean)
                                  }
                                />
                                <span className="text-xs text-muted-foreground">ลบ</span>
                              </div>
                            </div>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sub-categories">
          <div className="space-y-6">
            {Object.entries(subCategories).map(([mainCat, subs]) => (
              <Card key={mainCat}>
                <CardHeader>
                  <CardTitle>{mainCat} - หมวดหมู่ย่อย</CardTitle>
                  <CardDescription>กำหนดสิทธิ์การเข้าถึงหมวดหมู่ย่อยของ {mainCat}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-48">หมวดหมู่ย่อย</TableHead>
                          {roles.map((role) => (
                            <TableHead key={role} className="text-center min-w-32">
                              <Badge variant="outline">{role}</Badge>
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subs.map((subCat) => {
                          const fullCategoryName = `${mainCat} - ${subCat}`
                          return (
                            <TableRow key={subCat}>
                              <TableCell className="font-medium">{subCat}</TableCell>
                              {roles.map((role) => (
                                <TableCell key={`${role}-${subCat}`} className="text-center">
                                  <div className="flex justify-center gap-4">
                                    <div className="flex flex-col items-center gap-1">
                                      <Checkbox
                                        checked={permissions[role][fullCategoryName]?.view || false}
                                        onCheckedChange={(checked) =>
                                          updatePermission(role, fullCategoryName, "view", checked as boolean)
                                        }
                                      />
                                      <span className="text-xs text-muted-foreground">ดู</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                      <Checkbox
                                        checked={permissions[role][fullCategoryName]?.edit || false}
                                        onCheckedChange={(checked) =>
                                          updatePermission(role, fullCategoryName, "edit", checked as boolean)
                                        }
                                      />
                                      <span className="text-xs text-muted-foreground">แก้ไข</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                      <Checkbox
                                        checked={permissions[role][fullCategoryName]?.delete || false}
                                        onCheckedChange={(checked) =>
                                          updatePermission(role, fullCategoryName, "delete", checked as boolean)
                                        }
                                      />
                                      <span className="text-xs text-muted-foreground">ลบ</span>
                                    </div>
                                  </div>
                                </TableCell>
                              ))}
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="summary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Card key={role}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    {role}
                  </CardTitle>
                  <CardDescription>สรุปสิทธิ์การเข้าถึงของ {role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>สิทธิ์ดู:</span>
                      <Badge variant="secondary">
                        {Object.values(permissions[role]).filter((p) => p.view).length} หมวด
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>สิทธิ์แก้ไข:</span>
                      <Badge variant="secondary">
                        {Object.values(permissions[role]).filter((p) => p.edit).length} หมวด
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>สิทธิ์ลบ:</span>
                      <Badge variant="secondary">
                        {Object.values(permissions[role]).filter((p) => p.delete).length} หมวด
                      </Badge>
                    </div>

                    <div className="pt-3 border-t">
                      <div className="text-sm font-medium mb-2">หมวดหมู่ที่เข้าถึงได้:</div>
                      <div className="space-y-1 max-h-40 overflow-y-auto">
                        {Object.entries(permissions[role])
                          .filter(([_, perms]) => perms.view)
                          .map(([category, perms]) => (
                            <div key={category} className="flex items-center justify-between text-xs">
                              <span className="truncate">{category}</span>
                              <div className="flex gap-1 ml-2">
                                {perms.view && <Eye className="h-3 w-3 text-blue-500" />}
                                {perms.edit && <Edit className="h-3 w-3 text-green-500" />}
                                {perms.delete && <Trash2 className="h-3 w-3 text-red-500" />}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
