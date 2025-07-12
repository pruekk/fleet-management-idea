"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Edit, Trash2, Shield, Users } from "lucide-react"

export default function RolesPage() {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "ฝ่ายบริหาร",
      description: "มีสิทธิ์เข้าถึงข้อมูลทั้งหมด",
      userCount: 3,
      permissions: {
        dashboard: { view: true, edit: true, delete: true },
        basicData: { view: true, edit: true, delete: true },
        employees: { view: true, edit: true, delete: true },
        customers: { view: true, edit: true, delete: true },
        operations: { view: true, edit: true, delete: true },
        lineOA: { view: true, edit: true, delete: true },
        reports: { view: true, edit: true, delete: true },
        settings: { view: true, edit: true, delete: true },
      },
    },
    {
      id: 2,
      name: "ฝ่ายปฏิบัติการ",
      description: "จัดการข้อมูลปฏิบัติการประจำวัน",
      userCount: 8,
      permissions: {
        dashboard: { view: true, edit: false, delete: false },
        basicData: { view: true, edit: true, delete: false },
        employees: { view: false, edit: false, delete: false },
        customers: { view: true, edit: true, delete: false },
        operations: { view: true, edit: true, delete: false },
        lineOA: { view: true, edit: true, delete: false },
        reports: { view: true, edit: false, delete: false },
        settings: { view: false, edit: false, delete: false },
      },
    },
    {
      id: 3,
      name: "คนขับ",
      description: "ดูข้อมูลเฉพาะที่เกี่ยวข้อง",
      userCount: 24,
      permissions: {
        dashboard: { view: true, edit: false, delete: false },
        basicData: { view: false, edit: false, delete: false },
        employees: { view: false, edit: false, delete: false },
        customers: { view: false, edit: false, delete: false },
        operations: { view: true, edit: false, delete: false },
        lineOA: { view: false, edit: false, delete: false },
        reports: { view: false, edit: false, delete: false },
        settings: { view: false, edit: false, delete: false },
      },
    },
  ])

  const [newRole, setNewRole] = useState({
    name: "",
    description: "",
    permissions: {
      dashboard: { view: false, edit: false, delete: false },
      basicData: { view: false, edit: false, delete: false },
      employees: { view: false, edit: false, delete: false },
      customers: { view: false, edit: false, delete: false },
      operations: { view: false, edit: false, delete: false },
      lineOA: { view: false, edit: false, delete: false },
      reports: { view: false, edit: false, delete: false },
      settings: { view: false, edit: false, delete: false },
    },
  })

  const permissionLabels = {
    dashboard: "แดชบอร์ด",
    basicData: "ข้อมูลพื้นฐาน",
    employees: "พนักงาน",
    customers: "ลูกค้า",
    operations: "ปฏิบัติการ",
    lineOA: "LINE OA",
    reports: "รายงาน",
    settings: "การตั้งค่า",
  }

  const handleAddRole = () => {
    if (newRole.name && newRole.description) {
      setRoles([
        ...roles,
        {
          id: roles.length + 1,
          name: newRole.name,
          description: newRole.description,
          userCount: 0,
          permissions: newRole.permissions,
        },
      ])
      setNewRole({
        name: "",
        description: "",
        permissions: {
          dashboard: { view: false, edit: false, delete: false },
          basicData: { view: false, edit: false, delete: false },
          employees: { view: false, edit: false, delete: false },
          customers: { view: false, edit: false, delete: false },
          operations: { view: false, edit: false, delete: false },
          lineOA: { view: false, edit: false, delete: false },
          reports: { view: false, edit: false, delete: false },
          settings: { view: false, edit: false, delete: false },
        },
      })
    }
  }

  const updatePermission = (module: string, type: string, value: boolean) => {
    setNewRole({
      ...newRole,
      permissions: {
        ...newRole.permissions,
        [module]: {
          ...newRole.permissions[module as keyof typeof newRole.permissions],
          [type]: value,
        },
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">การจัดการ Role</h1>
          <p className="text-gray-600">จัดการบทบาทและสิทธิ์การเข้าถึง</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              เพิ่ม Role
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>เพิ่ม Role ใหม่</DialogTitle>
              <DialogDescription>กำหนดบทบาทและสิทธิ์การเข้าถึง</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">ชื่อ Role</Label>
                  <Input
                    id="name"
                    value={newRole.name}
                    onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                    placeholder="เช่น ฝ่ายบัญชี"
                  />
                </div>
                <div>
                  <Label htmlFor="description">คำอธิบาย</Label>
                  <Textarea
                    id="description"
                    value={newRole.description}
                    onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                    placeholder="อธิบายหน้าที่และความรับผิดชอบ"
                    rows={3}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">กำหนดสิทธิ์</h3>
                <div className="space-y-4">
                  {Object.entries(permissionLabels).map(([key, label]) => (
                    <div key={key} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3">{label}</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`${key}-view`}
                            checked={newRole.permissions[key as keyof typeof newRole.permissions]?.view || false}
                            onCheckedChange={(checked) => updatePermission(key, "view", checked as boolean)}
                          />
                          <Label htmlFor={`${key}-view`}>ดู</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`${key}-edit`}
                            checked={newRole.permissions[key as keyof typeof newRole.permissions]?.edit || false}
                            onCheckedChange={(checked) => updatePermission(key, "edit", checked as boolean)}
                          />
                          <Label htmlFor={`${key}-edit`}>แก้ไข</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`${key}-delete`}
                            checked={newRole.permissions[key as keyof typeof newRole.permissions]?.delete || false}
                            onCheckedChange={(checked) => updatePermission(key, "delete", checked as boolean)}
                          />
                          <Label htmlFor={`${key}-delete`}>ลบ</Label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleAddRole} className="w-full">
                บันทึก Role
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Role ทั้งหมด</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{roles.length}</div>
            <p className="text-xs text-muted-foreground">บทบาทในระบบ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ผู้ใช้ทั้งหมด</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {roles.reduce((sum, role) => sum + role.userCount, 0)}
            </div>
            <p className="text-xs text-muted-foreground">คนในระบบ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Role ที่ใช้งานมากที่สุด</CardTitle>
            <Shield className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">คนขับ</div>
            <p className="text-xs text-muted-foreground">24 คน</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายการ Role</CardTitle>
          <CardDescription>จัดการบทบาทและสิทธิ์ทั้งหมด</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ชื่อ Role</TableHead>
                <TableHead>คำอธิบาย</TableHead>
                <TableHead>จำนวนผู้ใช้</TableHead>
                <TableHead>สิทธิ์หลัก</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium">{role.name}</TableCell>
                  <TableCell>{role.description}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{role.userCount} คน</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {Object.entries(role.permissions).map(([key, perms]) => {
                        if (perms.view || perms.edit || perms.delete) {
                          return (
                            <Badge key={key} variant="outline" className="text-xs">
                              {permissionLabels[key as keyof typeof permissionLabels]}
                            </Badge>
                          )
                        }
                        return null
                      })}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" disabled={role.userCount > 0}>
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
    </div>
  )
}
