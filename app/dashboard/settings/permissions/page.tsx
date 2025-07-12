"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Eye, Edit, Trash2 } from "lucide-react"

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState({
    ฝ่ายบริหาร: {
      ภาพรวม: { view: true, edit: true, delete: true },
      ข้อมูลพื้นฐาน: { view: true, edit: true, delete: true },
      รถโม่: { view: true, edit: true, delete: true },
      พนักงาน: { view: true, edit: true, delete: true },
      บริษัท: { view: true, edit: true, delete: true },
      การโยกรถ: { view: true, edit: true, delete: true },
      ลูกค้า: { view: true, edit: true, delete: true },
      โรงงาน: { view: true, edit: true, delete: true },
      ปฏิบัติการรายเดือน: { view: true, edit: true, delete: true },
      วิ่งเที่ยว: { view: true, edit: true, delete: true },
      ซ่อมบำรุง: { view: true, edit: true, delete: true },
      น้ำมัน: { view: true, edit: true, delete: true },
      วางบิล: { view: true, edit: true, delete: true },
      "LINE OA": { view: true, edit: true, delete: true },
      รายได้บริษัท: { view: true, edit: true, delete: true },
      รายจ่ายบริษัท: { view: true, edit: true, delete: true },
      Supplier: { view: true, edit: true, delete: true },
      รายงาน: { view: true, edit: true, delete: true },
      ตั้งค่าระบบ: { view: true, edit: true, delete: true },
    },
    ฝ่ายบุคลากร: {
      ภาพรวม: { view: true, edit: false, delete: false },
      ข้อมูลพื้นฐาน: { view: true, edit: true, delete: false },
      รถโม่: { view: true, edit: false, delete: false },
      พนักงาน: { view: true, edit: true, delete: false },
      บริษัท: { view: true, edit: false, delete: false },
      การโยกรถ: { view: true, edit: false, delete: false },
      ลูกค้า: { view: false, edit: false, delete: false },
      โรงงาน: { view: false, edit: false, delete: false },
      ปฏิบัติการรายเดือน: { view: true, edit: true, delete: false },
      วิ่งเที่ยว: { view: true, edit: true, delete: false },
      ซ่อมบำรุง: { view: true, edit: false, delete: false },
      น้ำมัน: { view: true, edit: false, delete: false },
      วางบิล: { view: false, edit: false, delete: false },
      "LINE OA": { view: false, edit: false, delete: false },
      รายได้บริษัท: { view: false, edit: false, delete: false },
      รายจ่ายบริษัท: { view: false, edit: false, delete: false },
      Supplier: { view: false, edit: false, delete: false },
      รายงาน: { view: true, edit: false, delete: false },
      ตั้งค่าระบบ: { view: false, edit: false, delete: false },
    },
    "ฝ่ายบัญชี/การเงิน": {
      ภาพรวม: { view: true, edit: false, delete: false },
      ข้อมูลพื้นฐาน: { view: true, edit: false, delete: false },
      รถโม่: { view: true, edit: false, delete: false },
      พนักงาน: { view: true, edit: false, delete: false },
      บริษัท: { view: true, edit: false, delete: false },
      การโยกรถ: { view: true, edit: false, delete: false },
      ลูกค้า: { view: true, edit: true, delete: false },
      โรงงาน: { view: true, edit: true, delete: false },
      ปฏิบัติการรายเดือน: { view: true, edit: false, delete: false },
      วิ่งเที่ยว: { view: true, edit: false, delete: false },
      ซ่อมบำรุง: { view: true, edit: false, delete: false },
      น้ำมัน: { view: true, edit: false, delete: false },
      วางบิล: { view: true, edit: true, delete: false },
      "LINE OA": { view: false, edit: false, delete: false },
      รายได้บริษัท: { view: true, edit: true, delete: false },
      รายจ่ายบริษัท: { view: true, edit: true, delete: false },
      Supplier: { view: true, edit: true, delete: false },
      รายงาน: { view: true, edit: false, delete: false },
      ตั้งค่าระบบ: { view: false, edit: false, delete: false },
    },
    ฝ่ายปฏิบัติการ: {
      ภาพรวม: { view: true, edit: false, delete: false },
      ข้อมูลพื้นฐาน: { view: true, edit: true, delete: false },
      รถโม่: { view: true, edit: true, delete: false },
      พนักงาน: { view: true, edit: false, delete: false },
      บริษัท: { view: true, edit: false, delete: false },
      การโยกรถ: { view: true, edit: true, delete: false },
      ลูกค้า: { view: true, edit: true, delete: false },
      โรงงาน: { view: true, edit: true, delete: false },
      ปฏิบัติการรายเดือน: { view: true, edit: true, delete: false },
      วิ่งเที่ยว: { view: true, edit: true, delete: false },
      ซ่อมบำรุง: { view: true, edit: false, delete: false },
      น้ำมัน: { view: true, edit: true, delete: false },
      วางบิล: { view: true, edit: false, delete: false },
      "LINE OA": { view: true, edit: true, delete: false },
      รายได้บริษัท: { view: false, edit: false, delete: false },
      รายจ่ายบริษัท: { view: false, edit: false, delete: false },
      Supplier: { view: false, edit: false, delete: false },
      รายงาน: { view: true, edit: false, delete: false },
      ตั้งค่าระบบ: { view: false, edit: false, delete: false },
    },
    ฝ่ายซ่อมบำรุง: {
      ภาพรวม: { view: true, edit: false, delete: false },
      ข้อมูลพื้นฐาน: { view: true, edit: false, delete: false },
      รถโม่: { view: true, edit: false, delete: false },
      พนักงาน: { view: true, edit: false, delete: false },
      บริษัท: { view: true, edit: false, delete: false },
      การโยกรถ: { view: true, edit: false, delete: false },
      ลูกค้า: { view: false, edit: false, delete: false },
      โรงงาน: { view: false, edit: false, delete: false },
      ปฏิบัติการรายเดือน: { view: true, edit: true, delete: false },
      วิ่งเที่ยว: { view: true, edit: false, delete: false },
      ซ่อมบำรุง: { view: true, edit: true, delete: false },
      น้ำมัน: { view: true, edit: false, delete: false },
      วางบิล: { view: false, edit: false, delete: false },
      "LINE OA": { view: false, edit: false, delete: false },
      รายได้บริษัท: { view: false, edit: false, delete: false },
      รายจ่ายบริษัท: { view: false, edit: false, delete: false },
      Supplier: { view: false, edit: false, delete: false },
      รายงาน: { view: true, edit: false, delete: false },
      ตั้งค่าระบบ: { view: false, edit: false, delete: false },
    },
    ผู้ดูแลระบบ: {
      ภาพรวม: { view: true, edit: true, delete: true },
      ข้อมูลพื้นฐาน: { view: true, edit: true, delete: true },
      รถโม่: { view: true, edit: true, delete: true },
      พนักงาน: { view: true, edit: true, delete: true },
      บริษัท: { view: true, edit: true, delete: true },
      การโยกรถ: { view: true, edit: true, delete: true },
      ลูกค้า: { view: true, edit: true, delete: true },
      โรงงาน: { view: true, edit: true, delete: true },
      ปฏิบัติการรายเดือน: { view: true, edit: true, delete: true },
      วิ่งเที่ยว: { view: true, edit: true, delete: true },
      ซ่อมบำรุง: { view: true, edit: true, delete: true },
      น้ำมัน: { view: true, edit: true, delete: true },
      วางบิล: { view: true, edit: true, delete: true },
      "LINE OA": { view: true, edit: true, delete: true },
      รายได้บริษัท: { view: true, edit: true, delete: true },
      รายจ่ายบริษัท: { view: true, edit: true, delete: true },
      Supplier: { view: true, edit: true, delete: true },
      รายงาน: { view: true, edit: true, delete: true },
      ตั้งค่าระบบ: { view: true, edit: true, delete: true },
    },
  })

  const [selectedRole, setSelectedRole] = useState("ฝ่ายบริหาร")

  const updatePermission = (
    role: string,
    feature: string,
    permissionType: "view" | "edit" | "delete",
    value: boolean,
  ) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [feature]: {
          ...prev[role][feature],
          [permissionType]: value,
        },
      },
    }))
  }

  const features = Object.keys(permissions[selectedRole])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">จัดการสิทธิ์</h1>
        <p className="text-gray-600">กำหนดสิทธิ์การเข้าถึงแต่ละฟังก์ชันตาม Role</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            การกำหนดสิทธิ์ตาม Role
          </CardTitle>
          <CardDescription>กำหนดสิทธิ์ 3 ระดับ: ดูได้อย่างเดียว / ดูและแก้ไข / ลบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6 flex-wrap">
            {Object.keys(permissions).map((role) => (
              <Button
                key={role}
                variant={selectedRole === role ? "default" : "outline"}
                onClick={() => setSelectedRole(role)}
                className="mb-2"
              >
                {role}
              </Button>
            ))}
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">ฟังก์ชัน</TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" />
                      ดูได้อย่างเดียว
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Edit className="h-4 w-4" />
                      ดูและแก้ไข
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      ลบ
                    </div>
                  </TableHead>
                  <TableHead className="text-center">สถานะ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => {
                  const perm = permissions[selectedRole][feature]
                  return (
                    <TableRow key={feature}>
                      <TableCell className="font-medium">{feature}</TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          checked={perm.view}
                          onCheckedChange={(checked) =>
                            updatePermission(selectedRole, feature, "view", checked as boolean)
                          }
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          checked={perm.edit}
                          onCheckedChange={(checked) =>
                            updatePermission(selectedRole, feature, "edit", checked as boolean)
                          }
                          disabled={!perm.view}
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          checked={perm.delete}
                          onCheckedChange={(checked) =>
                            updatePermission(selectedRole, feature, "delete", checked as boolean)
                          }
                          disabled={!perm.edit}
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        {perm.delete ? (
                          <Badge className="bg-red-100 text-red-800">เต็มสิทธิ์</Badge>
                        ) : perm.edit ? (
                          <Badge className="bg-orange-100 text-orange-800">แก้ไขได้</Badge>
                        ) : perm.view ? (
                          <Badge className="bg-green-100 text-green-800">ดูได้อย่างเดียว</Badge>
                        ) : (
                          <Badge variant="secondary">ไม่มีสิทธิ์</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 flex justify-end">
            <Button>บันทึกการตั้งค่า</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
