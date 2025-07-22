"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Search, Filter, Users, UserPlus } from "lucide-react"

export default function EmployeeBasicInfoPage() {
  const [employees] = useState([
    {
      id: 1,
      employeeCode: "EMP001",
      fullName: "สมชาย ใจดี",
      nickname: "ชาย",
      phone: "081-234-5678",
      idCard: "1234567890123",
      birthDate: "1985-05-15",
      age: 38,
      nationality: "ไทย",
      address: "123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110",
      maritalStatus: "แต่งงาน",
      education: "ปริญญาตรี",
      workExperience: "5 ปี",
      hospital: "โรงพยาบาลบำรุงราษฎร์",
      shirtSize: "L",
      pantsSize: "32",
      shoeSize: "42",
      department: "ขนส่ง",
      position: "คนขับรถโม่",
      positionLevel: "ระดับ 2",
      salary: 18000,
      startDate: "2019-01-15",
      endDate: null,
      socialSecurityStart: "2019-01-15",
      socialSecurityEnd: null,
      resignReason: null,
      employmentType: "พนักงานประจำ",
      bankAccount: "123-456-7890",
      bankBranch: "สาขาสุขุมวิท",
      status: "ทำงาน",
    },
    {
      id: 2,
      employeeCode: "EMP002",
      fullName: "สมหญิง รักงาน",
      nickname: "หญิง",
      phone: "082-345-6789",
      idCard: "2345678901234",
      birthDate: "1990-08-20",
      age: 33,
      nationality: "ไทย",
      address: "456 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900",
      maritalStatus: "โสด",
      education: "ปวส.",
      workExperience: "3 ปี",
      hospital: "โรงพยาบาลวิภาวดี",
      shirtSize: "M",
      pantsSize: "28",
      shoeSize: "38",
      department: "สำนักงาน",
      position: "พนักงานทั่วไป",
      positionLevel: "ระดับ 1",
      salary: 15000,
      startDate: "2021-03-01",
      endDate: null,
      socialSecurityStart: "2021-03-01",
      socialSecurityEnd: null,
      resignReason: null,
      employmentType: "พนักงานประจำ",
      bankAccount: "234-567-8901",
      bankBranch: "สาขาพหลโยธิน",
      status: "ลา",
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">ข้อมูลพื้นฐานพนักงาน</h1>
        <p className="text-gray-600">จัดการข้อมูลส่วนตัวและรายละเอียดการทำงานของพนักงาน</p>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">รายชื่อพนักงาน</TabsTrigger>
          <TabsTrigger value="add">เพิ่มพนักงาน</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    รายชื่อพนักงานทั้งหมด
                  </CardTitle>
                  <CardDescription>ข้อมูลพนักงานในระบบ</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  เพิ่มพนักงาน
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ค้นหาชื่อพนักงาน..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  กรอง
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>รหัสพนักงาน</TableHead>
                    <TableHead>ชื่อ-นามสกุล</TableHead>
                    <TableHead>ตำแหน่ง</TableHead>
                    <TableHead>ฝ่าย</TableHead>
                    <TableHead>เบอร์โทร</TableHead>
                    <TableHead>สถานะ</TableHead>
                    <TableHead>การจัดการ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.employeeCode}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{employee.fullName}</div>
                          <div className="text-sm text-muted-foreground">({employee.nickname})</div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.phone}</TableCell>
                      <TableCell>
                        <Badge
                          variant={employee.status === "ทำงาน" ? "secondary" : "destructive"}
                          className={
                            employee.status === "ทำงาน"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }
                        >
                          {employee.status}
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
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                เพิ่มพนักงานใหม่
              </CardTitle>
              <CardDescription>กรอกข้อมูลพนักงานใหม่</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">ข้อมูลส่วนตัว</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="fullName">ชื่อจริง-นามสกุล</Label>
                      <Input id="fullName" placeholder="กรอกชื่อ-นามสกุล" />
                    </div>
                    <div>
                      <Label htmlFor="nickname">ชื่อเล่น</Label>
                      <Input id="nickname" placeholder="กรอกชื่อเล่น" />
                    </div>
                    <div>
                      <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                      <Input id="phone" placeholder="กรอกเบอร์โทรศัพท์" />
                    </div>
                    <div>
                      <Label htmlFor="idCard">เลขประจำตัวประชาชน</Label>
                      <Input id="idCard" placeholder="กรอกเลขประจำตัวประชาชน" />
                    </div>
                    <div>
                      <Label htmlFor="birthDate">วันเดือนปีเกิด</Label>
                      <Input id="birthDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="nationality">สัญชาติ</Label>
                      <Input id="nationality" placeholder="กรอกสัญชาติ" defaultValue="ไทย" />
                    </div>
                    <div>
                      <Label htmlFor="address">ที่อยู่ตามบัตรประชาชน</Label>
                      <Input id="address" placeholder="กรอกที่อยู่" />
                    </div>
                    <div>
                      <Label htmlFor="maritalStatus">สถานภาพ</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกสถานภาพ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">โสด</SelectItem>
                          <SelectItem value="married">แต่งงาน</SelectItem>
                          <SelectItem value="divorced">หย่าร้าง</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="education">ระดับการศึกษา</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกระดับการศึกษา" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">ประถมศึกษา</SelectItem>
                          <SelectItem value="secondary">มัธยมศึกษา</SelectItem>
                          <SelectItem value="vocational">ปวช./ปวส.</SelectItem>
                          <SelectItem value="bachelor">ปริญญาตรี</SelectItem>
                          <SelectItem value="master">ปริญญาโท</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">ข้อมูลการทำงาน</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="employeeCode">รหัสพนักงาน</Label>
                      <Input id="employeeCode" placeholder="กรอกรหัสพนักงาน" />
                    </div>
                    <div>
                      <Label htmlFor="department">ฝ่าย</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกฝ่าย" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transport">ขนส่ง</SelectItem>
                          <SelectItem value="office">สำนักงาน</SelectItem>
                          <SelectItem value="maintenance">ซ่อมบำรุง</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="position">ตำแหน่ง</Label>
                      <Input id="position" placeholder="กรอกตำแหน่ง" />
                    </div>
                    <div>
                      <Label htmlFor="positionLevel">ระดับตำแหน่ง</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกระดับตำแหน่ง" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="level1">ระดับ 1</SelectItem>
                          <SelectItem value="level2">ระดับ 2</SelectItem>
                          <SelectItem value="level3">ระดับ 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="salary">รายได้</Label>
                      <Input id="salary" type="number" placeholder="กรอกรายได้" />
                    </div>
                    <div>
                      <Label htmlFor="startDate">วันที่เริ่มทำงาน</Label>
                      <Input id="startDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="employmentType">การจ้างงาน</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกประเภทการจ้างงาน" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="permanent">พนักงานประจำ</SelectItem>
                          <SelectItem value="contract">พนักงานสัญญาจ้าง</SelectItem>
                          <SelectItem value="parttime">พนักงานชั่วคราว</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="socialSecurityStart">วันยื่นเข้าประกันสังคม</Label>
                      <Input id="socialSecurityStart" type="date" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">ข้อมูลเพิ่มเติม</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="hospital">สถานพยาบาล</Label>
                      <Input id="hospital" placeholder="กรอกชื่อสถานพยาบาล" />
                    </div>
                    <div>
                      <Label htmlFor="shirtSize">ขนาดเสื้อ</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกขนาดเสื้อ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="S">S</SelectItem>
                          <SelectItem value="M">M</SelectItem>
                          <SelectItem value="L">L</SelectItem>
                          <SelectItem value="XL">XL</SelectItem>
                          <SelectItem value="XXL">XXL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="pantsSize">ขนาดกางเกง</Label>
                      <Input id="pantsSize" placeholder="กรอกขนาดกางเกง" />
                    </div>
                    <div>
                      <Label htmlFor="shoeSize">ขนาดรองเท้า</Label>
                      <Input id="shoeSize" placeholder="กรอกขนาดรองเท้า" />
                    </div>
                    <div>
                      <Label htmlFor="bankAccount">เลขบัญชีธนาคาร</Label>
                      <Input id="bankAccount" placeholder="กรอกเลขบัญชีธนาคาร" />
                    </div>
                    <div>
                      <Label htmlFor="bankBranch">สาขาธนาคาร</Label>
                      <Input id="bankBranch" placeholder="กรอกสาขาธนาคาร" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button>บันทึกข้อมูล</Button>
                <Button variant="outline">ยกเลิก</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
