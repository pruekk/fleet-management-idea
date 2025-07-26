"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Search, Edit, Trash2, Building2 } from "lucide-react";

// Mock data สำหรับตำแหน่งงาน
const positions = [
	{ id: 1, department: "ปฏิบัติการ", position: "คนขับรถโม่", level: "ระดับ 1", code: "OP-DR-1" },
	{ id: 2, department: "ปฏิบัติการ", position: "คนขับรถโม่", level: "ระดับ 2", code: "OP-DR-2" },
	{ id: 3, department: "ปฏิบัติการ", position: "ผู้ช่วยคนขับ", level: "ระดับ 1", code: "OP-AS-1" },
	{ id: 4, department: "บริหาร", position: "ผู้จัดการ", level: "ระดับ 1", code: "AD-MG-1" },
	{ id: 5, department: "บัญชี", position: "นักบัญชี", level: "ระดับ 1", code: "AC-AC-1" },
];

// Mock data สำหรับพนักงาน
const employees = [
	{
		id: 1,
		employeeCode: "OP-DR-1-001",
		firstName: "สมชาย",
		lastName: "ใจดี",
		nickname: "ชาย",
		phone: "081-234-5678",
		nationalId: "1234567890123",
		birthDate: "1985-05-15",
		age: 39,
		nationality: "ไทย",
		address: "123/45 หมู่ 2 ต.บางบัวทอง อ.บางบัวทอง จ.นนทบุรี 11110",
		maritalStatus: "แต่งงาน",
		education: "มัธยมศึกษาตอนปลาย",
		startDate: "2020-01-15",
		endDate: null, // วันออกทำงาน (null = ยังทำงานอยู่)
		socialSecurityStartDate: "2020-01-16", // วันยื่นเข้าประกันสังคม
		socialSecurityEndDate: null, // วันยื่นออกประกันสังคม (null = ยังคงเป็นสมาชิก)
		resignationReason: null, // สาเหตุการออก (null = ยังทำงานอยู่)
		employmentType: "ประจำ", // การจ้างงาน
		bankAccount: "1234567890", // เลขบัญชีธนาคาร
		bankBranch: "สาขาบางบัวทอง", // สาขาธนาคาร
		workYears: 5,
		hospital: "โรงพยาบาลบางบัวทอง",
		shirtSize: "L",
		pantSize: "32",
		shoeSize: "42",
		department: "ปฏิบัติการ",
		position: "คนขับรถโม่",
		level: "ระดับ 1",
		avatar: "/placeholder-user.jpg",
		status: "ทำงาน",
	},
	{
		id: 2,
		employeeCode: "AD-MG-1-001",
		firstName: "สมหญิง",
		lastName: "มีสุข",
		nickname: "หญิง",
		phone: "082-345-6789",
		nationalId: "2345678901234",
		birthDate: "1980-08-20",
		age: 44,
		nationality: "ไทย",
		address: "456/78 ซอยรามคำแหง 24 แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240",
		maritalStatus: "โสด",
		education: "ปริญญาตรี",
		startDate: "2018-03-01",
		endDate: null, // วันออกทำงาน (null = ยังทำงานอยู่)
		socialSecurityStartDate: "2018-03-02", // วันยื่นเข้าประกันสังคม
		socialSecurityEndDate: null, // วันยื่นออกประกันสังคม (null = ยังคงเป็นสมาชิก)
		resignationReason: null, // สาเหตุการออก (null = ยังทำงานอยู่)
		employmentType: "ประจำ", // การจ้างงาน
		bankAccount: "9876543210", // เลขบัญชีธนาคาร
		bankBranch: "สาขารามคำแหง", // สาขาธนาคาร
		workYears: 6,
		hospital: "โรงพยาบาลรามคำแหง",
		shirtSize: "M",
		pantSize: "28",
		shoeSize: "38",
		department: "บริหาร",
		position: "ผู้จัดการ",
		level: "ระดับ 1",
		avatar: "/placeholder-user.jpg",
		status: "ทำงาน",
	},
];

export default function EmployeeBasicInfoPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">จัดการข้อมูลพนักงาน</h1>
				<p className="text-muted-foreground">ข้อมูลพนักงานขับรถและบุคลากรในองค์กร</p>
			</div>

			<Tabs defaultValue="employees" className="space-y-4">
				<TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
					<TabsTrigger value="employees">ข้อมูลพนักงาน</TabsTrigger>
					<TabsTrigger value="positions">ตำแหน่งพนักงาน</TabsTrigger>
				</TabsList>

				<TabsContent value="employees" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
									<Input placeholder="ค้นหาพนักงาน..." className="pl-10 w-64" />
								</div>
								<Select>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="เลือกฝ่าย" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">ทุกฝ่าย</SelectItem>
										<SelectItem value="operation">ปฏิบัติการ</SelectItem>
										<SelectItem value="admin">บริหาร</SelectItem>
										<SelectItem value="accounting">บัญชี</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								เพิ่มพนักงานใหม่
							</Button>
						</div>

						<div className="grid gap-4">
							{employees.map((employee) => (
								<Card key={employee.id}>
									<CardContent className="p-6">
										<div className="flex items-start justify-between">
											<div className="flex items-start space-x-4">
												<Avatar className="h-16 w-16">
													<AvatarImage src={employee.avatar} alt={employee.firstName} />
													<AvatarFallback>
														{employee.firstName.charAt(0)}
														{employee.lastName.charAt(0)}
													</AvatarFallback>
												</Avatar>
												<div className="space-y-2">
													<div className="flex items-center space-x-2">
														<h3 className="text-lg font-semibold">
															{employee.firstName} {employee.lastName}
														</h3>
														<Badge variant="outline">{employee.nickname}</Badge>
														<Badge variant={employee.status === "ทำงาน" ? "default" : "secondary"}>
															{employee.status}
														</Badge>
													</div>
													<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
														<div>
															<span className="text-muted-foreground">รหัสพนักงาน:</span>
															<div className="font-medium">{employee.employeeCode}</div>
														</div>
														<div>
															<span className="text-muted-foreground">เบอร์โทร:</span>
															<div className="font-medium">{employee.phone}</div>
														</div>
														<div>
															<span className="text-muted-foreground">อายุ:</span>
															<div className="font-medium">{employee.age} ปี</div>
														</div>
														<div>
															<span className="text-muted-foreground">อายุงาน:</span>
															<div className="font-medium">{employee.workYears} ปี</div>
														</div>
														<div>
															<span className="text-muted-foreground">ฝ่าย:</span>
															<div className="font-medium">{employee.department}</div>
														</div>
														<div>
															<span className="text-muted-foreground">ตำแหน่ง:</span>
															<div className="font-medium">{employee.position}</div>
														</div>
														<div>
															<span className="text-muted-foreground">ระดับ:</span>
															<div className="font-medium">{employee.level}</div>
														</div>
														<div>
															<span className="text-muted-foreground">การศึกษา:</span>
															<div className="font-medium">{employee.education}</div>
														</div>
														<div>
															<span className="text-muted-foreground">วันเริ่มงาน:</span>
															<div className="font-medium">{employee.startDate}</div>
														</div>
														<div>
															<span className="text-muted-foreground">วันออกงาน:</span>
															<div className="font-medium">
																{employee.endDate || "ยังทำงานอยู่"}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">ประกันสังคม (เข้า):</span>
															<div className="font-medium">{employee.socialSecurityStartDate}</div>
														</div>
														<div>
															<span className="text-muted-foreground">ประกันสังคม (ออก):</span>
															<div className="font-medium">
																{employee.socialSecurityEndDate || "ยังคงเป็นสมาชิก"}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">สาเหตุการออก:</span>
															<div className="font-medium">{employee.resignationReason || "-"}</div>
														</div>
														<div>
															<span className="text-muted-foreground">การจ้างงาน:</span>
															<div className="font-medium">{employee.employmentType}</div>
														</div>
														<div>
															<span className="text-muted-foreground">เลขบัญชี:</span>
															<div className="font-medium">{employee.bankAccount}</div>
														</div>
														<div>
															<span className="text-muted-foreground">สาขาธนาคาร:</span>
															<div className="font-medium">{employee.bankBranch}</div>
														</div>
													</div>
												</div>
											</div>
											<div className="flex space-x-2">
												<Button variant="outline" size="sm">
													<Edit className="h-4 w-4 mr-1" />
													แก้ไข
												</Button>
												<Button
													variant="outline"
													size="sm"
													className="text-red-600 hover:text-red-700"
												>
													<Trash2 className="h-4 w-4 mr-1" />
													ลบ
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="positions" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-xl font-semibold">ตำแหน่งพนักงาน</h2>
								<p className="text-muted-foreground">จัดการฝ่าย ตำแหน่ง และระดับตำแหน่ง</p>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								เพิ่มตำแหน่งใหม่
							</Button>
						</div>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Building2 className="h-5 w-5" />
									รายการตำแหน่งงาน
								</CardTitle>
								<CardDescription>ข้อมูลโครงสร้างองค์กรและตำแหน่งงาน</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="rounded-md border">
									<div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-gray-50">
										<div>รหัสตำแหน่ง</div>
										<div>ฝ่าย</div>
										<div>ตำแหน่ง</div>
										<div>ระดับ</div>
										<div>การจัดการ</div>
									</div>
									{positions.map((position) => (
										<div
											key={position.id}
											className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0 items-center"
										>
											<div className="font-mono text-sm font-medium">{position.code}</div>
											<div>
												<Badge variant="outline">{position.department}</Badge>
											</div>
											<div className="font-medium">{position.position}</div>
											<div>{position.level}</div>
											<div className="flex space-x-2">
												<Button variant="outline" size="sm">
													<Edit className="h-3 w-3 mr-1" />
													แก้ไข
												</Button>
												<Button
													variant="outline"
													size="sm"
													className="text-red-600 hover:text-red-700"
												>
													<Trash2 className="h-3 w-3 mr-1" />
													ลบ
												</Button>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
