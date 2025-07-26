"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Truck, Plus, Search, Edit, Trash2, Settings, FileText, Wrench } from "lucide-react";

// Mock data สำหรับรถโม่
const trucks = [
	{
		id: 1,
		plateNumber: "83-5947", // ทะเบียนรถ
		chassisNumber: "CH123456789", // หมายเลขคลัทซ์ซีรถ
		type: "รถโม่",
		brand: "HINO", // ยี่ห้อรถ
		model: "500 Series", // รุ่นรถ
		year: 2020,
		age: 4, // อายุรถ
		registrationDate: "2020-03-15", // วันจดทะเบียน
		baseWeight: 12500, // น้ำหนักรถโม่
		currentWeight: 24800,
		totalKm: 145230, // ระยะกิโลรวมเพื่อถ่ายน้ำมันเครื่อง
		oilChangeKm: 8500,
		nextService: "2025-02-15",
		driverAssigned: "สมชาย ใจดี",
		status: "ใช้งานได้",
		lastInspection: "2024-12-15",
		insuranceExpiry: "2025-08-30",
		taxExpiry: "2025-09-15",
	},
	{
		id: 2,
		plateNumber: "83-5948",
		chassisNumber: "CH987654321",
		type: "รถโม่",
		brand: "ISUZU",
		model: "FVR34",
		year: 2019,
		age: 5,
		registrationDate: "2019-08-20",
		baseWeight: 11800,
		currentWeight: 23600,
		totalKm: 198745,
		oilChangeKm: 12300,
		nextService: "2025-03-01",
		driverAssigned: "ประจวบ เก่งกาจ",
		status: "ซ่อมบำรุง",
		lastInspection: "2024-11-20",
		insuranceExpiry: "2025-07-15",
		taxExpiry: "2025-08-20",
	},
	{
		id: 3,
		plateNumber: "83-5949",
		chassisNumber: "CH456789123",
		type: "รถโม่",
		brand: "MITSUBISHI",
		model: "Fuso Fighter",
		year: 2021,
		age: 3,
		registrationDate: "2021-01-10",
		baseWeight: 13200,
		currentWeight: 25100,
		totalKm: 89456,
		oilChangeKm: 5200,
		nextService: "2025-01-20",
		driverAssigned: "สมศักดิ์ รักงาน",
		status: "ใช้งานได้",
		lastInspection: "2024-10-30",
		insuranceExpiry: "2025-12-15",
		taxExpiry: "2025-01-10",
	},
];

// Mock data สำหรับประเภทรถ
const vehicleTypes = [
	{ id: 1, type: "รถโม่", description: "รถผสมคอนกรีต", capacity: "6-10 ลบ.ม.", code: "CM" },
	{
		id: 2,
		type: "รถบรรทุก",
		description: "รถบรรทุกขนส่งทั่วไป",
		capacity: "10-15 ตัน",
		code: "TR",
	},
	{ id: 3, type: "รถกระบะ", description: "รถกระบะขนส่งเบา", capacity: "1-2 ตัน", code: "PU" },
];

export default function BasicDataTrucksPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">จัดการข้อมูลรถโม่</h1>
				<p className="text-muted-foreground">ข้อมูลรถโม่ปูนและการบำรุงรักษา</p>
			</div>

			<Tabs defaultValue="trucks" className="space-y-4">
				<TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
					<TabsTrigger value="trucks">ข้อมูลรถ</TabsTrigger>
					<TabsTrigger value="monthly">ข้อมูลรายเดือน</TabsTrigger>
					<TabsTrigger value="maintenance">การบำรุงรักษา</TabsTrigger>
					<TabsTrigger value="documents">เอกสารรถ</TabsTrigger>
					<TabsTrigger value="types">ประเภทรถ</TabsTrigger>
				</TabsList>

				<TabsContent value="trucks" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
									<Input placeholder="ค้นหาทะเบียนรถ..." className="pl-10 w-64" />
								</div>
								<Select>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="เลือกประเภทรถ" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">ทุกประเภท</SelectItem>
										<SelectItem value="concrete">รถโม่</SelectItem>
										<SelectItem value="truck">รถบรรทุก</SelectItem>
										<SelectItem value="pickup">รถกระบะ</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								เพิ่มรถใหม่
							</Button>
						</div>

						<div className="grid gap-4">
							{trucks.map((truck) => (
								<Card key={truck.id}>
									<CardContent className="p-6">
										<div className="flex items-start justify-between">
											<div className="flex items-start space-x-4">
												<div className="p-3 bg-blue-100 rounded-lg">
													<Truck className="h-8 w-8 text-blue-600" />
												</div>
												<div className="space-y-2">
													<div className="flex items-center space-x-2">
														<h3 className="text-lg font-semibold">{truck.plateNumber}</h3>
														<Badge variant="outline">{truck.type}</Badge>
														<Badge variant={truck.status === "ใช้งานได้" ? "default" : "secondary"}>
															{truck.status}
														</Badge>
													</div>
													<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
														<div>
															<span className="text-muted-foreground">ยี่ห้อ/รุ่น:</span>
															<div className="font-medium">
																{truck.brand} {truck.model}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">ปีรถ:</span>
															<div className="font-medium">
																{truck.year} (อายุ {truck.age} ปี)
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">หมายเลขตัวถัง:</span>
															<div className="font-medium">{truck.chassisNumber}</div>
														</div>
														<div>
															<span className="text-muted-foreground">น้ำหนักพื้นฐาน:</span>
															<div className="font-medium">
																{truck.baseWeight.toLocaleString()} กก.
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">วันจดทะเบียน:</span>
															<div className="font-medium">{truck.registrationDate}</div>
														</div>
														<div>
															<span className="text-muted-foreground">คนขับประจำ:</span>
															<div className="font-medium">{truck.driverAssigned}</div>
														</div>
														<div>
															<span className="text-muted-foreground">กิโลรวม:</span>
															<div className="font-medium">
																{truck.totalKm.toLocaleString()} กม.
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">ประกันหมดอายุ:</span>
															<div className="font-medium">{truck.insuranceExpiry}</div>
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

				<TabsContent value="monthly" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-xl font-semibold">ข้อมูลรายเดือน</h2>
								<p className="text-muted-foreground">ข้อมูลน้ำหนักและการบำรุงรักษาประจำเดือน</p>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								อัปเดตข้อมูล
							</Button>
						</div>

						<div className="grid gap-4">
							{trucks.map((truck) => (
								<Card key={truck.id}>
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Truck className="h-5 w-5" />
											{truck.plateNumber} - {truck.brand} {truck.model}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
											<div className="space-y-2">
												<Label>น้ำหนักรถปัจจุบัน</Label>
												<div className="text-2xl font-bold text-blue-600">
													{truck.currentWeight.toLocaleString()} กก.
												</div>
												<p className="text-xs text-muted-foreground">
													เพิ่มขึ้น {(truck.currentWeight - truck.baseWeight).toLocaleString()} กก.
												</p>
											</div>
											<div className="space-y-2">
												<Label>ระยะกิโลรวม</Label>
												<div className="text-2xl font-bold text-green-600">
													{truck.totalKm.toLocaleString()} กม.
												</div>
												<p className="text-xs text-muted-foreground">อัปเดตล่าสุด</p>
											</div>
											<div className="space-y-2">
												<Label>ระยะถ่ายน้ำมันเครื่อง</Label>
												<div className="text-2xl font-bold text-orange-600">
													{truck.oilChangeKm.toLocaleString()} กม.
												</div>
												<p className="text-xs text-muted-foreground">
													ถ่ายครั้งถัดไปที่{" "}
													{(truck.totalKm + 10000 - truck.oilChangeKm).toLocaleString()} กม.
												</p>
											</div>
											<div className="space-y-2">
												<Label>วันตรวจสภาพครั้งถัดไป</Label>
												<div className="text-lg font-bold text-purple-600">{truck.nextService}</div>
												<p className="text-xs text-muted-foreground">
													ตรวจครั้งล่าสุด: {truck.lastInspection}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="maintenance" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-xl font-semibold">การบำรุงรักษา</h2>
								<p className="text-muted-foreground">ประวัติและตารางการบำรุงรักษา</p>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								บันทึกการซ่อม
							</Button>
						</div>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Wrench className="h-5 w-5" />
									ตารางการบำรุงรักษา
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="rounded-md border">
									<div className="grid grid-cols-6 gap-4 p-4 font-medium border-b bg-gray-50">
										<div>ทะเบียนรถ</div>
										<div>ประเภทการซ่อม</div>
										<div>วันที่</div>
										<div>ค่าใช้จ่าย</div>
										<div>อู่ซ่อม</div>
										<div>สถานะ</div>
									</div>
									{[
										{
											plate: "กข-1234",
											type: "เปลี่ยนน้ำมันเครื่อง",
											date: "2025-01-15",
											cost: 2500,
											garage: "อู่สมชาย",
											status: "เสร็จสิ้น",
										},
										{
											plate: "กข-5678",
											type: "ซ่อมเกียร์",
											date: "2025-01-20",
											cost: 15000,
											garage: "อู่ช่างใหญ่",
											status: "กำลังซ่อม",
										},
									].map((maintenance, index) => (
										<div
											key={index}
											className="grid grid-cols-6 gap-4 p-4 border-b last:border-b-0 items-center"
										>
											<div className="font-medium">{maintenance.plate}</div>
											<div>{maintenance.type}</div>
											<div>{maintenance.date}</div>
											<div className="font-medium">฿{maintenance.cost.toLocaleString()}</div>
											<div>{maintenance.garage}</div>
											<div>
												<Badge
													variant={maintenance.status === "เสร็จสิ้น" ? "default" : "secondary"}
												>
													{maintenance.status}
												</Badge>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="documents" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-xl font-semibold">เอกสารรถ</h2>
								<p className="text-muted-foreground">เอกสารสำคัญและใบอนุญาตต่างๆ</p>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								เพิ่มเอกสาร
							</Button>
						</div>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<FileText className="h-5 w-5" />
									รายการเอกสาร
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{trucks.map((truck) => (
										<div key={truck.id} className="border rounded-lg p-4">
											<h4 className="font-semibold mb-3">{truck.plateNumber}</h4>
											<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
												<div>
													<span className="text-muted-foreground">สมุดทะเบียนรถ:</span>
													<div className="font-medium text-green-600">มี</div>
												</div>
												<div>
													<span className="text-muted-foreground">ประกันภัย:</span>
													<div className="font-medium">หมดอายุ {truck.insuranceExpiry}</div>
												</div>
												<div>
													<span className="text-muted-foreground">ภาษีรถ:</span>
													<div className="font-medium">หมดอายุ {truck.taxExpiry}</div>
												</div>
												<div>
													<span className="text-muted-foreground">ตรวจสภาพรถ:</span>
													<div className="font-medium">ครั้งล่าสุด {truck.lastInspection}</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="types" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-xl font-semibold">ประเภทรถ</h2>
								<p className="text-muted-foreground">จัดการประเภทและหมวดหมู่ของยานพาหนะ</p>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								เพิ่มประเภทใหม่
							</Button>
						</div>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Settings className="h-5 w-5" />
									รายการประเภทรถ
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="rounded-md border">
									<div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-gray-50">
										<div>รหัส</div>
										<div>ประเภท</div>
										<div>คำอธิบาย</div>
										<div>ขนาดบรรทุก</div>
										<div>การจัดการ</div>
									</div>
									{vehicleTypes.map((type) => (
										<div
											key={type.id}
											className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0 items-center"
										>
											<div className="font-mono text-sm font-medium">{type.code}</div>
											<div>
												<Badge variant="outline">{type.type}</Badge>
											</div>
											<div>{type.description}</div>
											<div className="font-medium">{type.capacity}</div>
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
