"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Search,
	Plus,
	Wrench,
	Calendar,
	Truck,
	DollarSign,
	AlertTriangle,
	Eye,
	Edit,
} from "lucide-react";

export default function MaintenancePage() {
	const maintenanceRecords = [
		{
			id: "M2024-001",
			truck: "ABC-1234",
			truckCode: "TRK-001",
			type: "ซ่อมเครื่องยนต์",
			category: "repair",
			priority: "high",
			date: "2024-01-15",
			startTime: "08:00",
			endTime: "16:30",
			cost: 15000,
			laborCost: 8000,
			partsCost: 7000,
			garage: "อู่ซ่อมรถใหญ่",
			garageContact: "02-123-4567",
			technician: "ช่างสมชาย",
			description: "เปลี่ยนลูกสูบ และซ่อมระบบเชื้อเพลิง",
			partsUsed: ["ลูกสูบ x4", "แหวนลูกสูบ x4", "หัวฉีดเชื้อเพลิง x2"],
			mileage: 125000,
			nextServiceKm: 130000,
			warrantyExpiry: "2024-07-15",
			status: "completed",
			nextService: "2024-04-15",
			attachments: ["invoice.pdf", "work_order.pdf"],
			notes: "ซ่อมเสร็จเรียบร้อย ทดสอบเครื่องยนต์แล้ว",
		},
		{
			id: "M2024-002",
			truck: "DEF-5678",
			truckCode: "TRK-002",
			type: "บำรุงรักษาประจำ",
			category: "maintenance",
			priority: "medium",
			date: "2024-01-10",
			startTime: "09:00",
			endTime: "12:00",
			cost: 8500,
			laborCost: 3500,
			partsCost: 5000,
			garage: "ศูนย์บริการรถยนต์",
			garageContact: "02-234-5678",
			technician: "ช่างสมศักดิ์",
			description: "เปลี่ยนน้ำมันเครื่อง, กรองอากาศ, ตรวจเบรก",
			partsUsed: ["น้ำมันเครื่อง 15W-40 20L", "กรองอากาศ", "กรองน้ำมันเครื่อง"],
			mileage: 98000,
			nextServiceKm: 108000,
			warrantyExpiry: "2024-04-10",
			status: "completed",
			nextService: "2024-04-10",
			attachments: ["receipt.pdf"],
			notes: "บำรุงรักษาตามกำหนด",
		},
		{
			id: "M2024-003",
			truck: "GHI-9012",
			truckCode: "TRK-003",
			type: "ซ่อมยาง",
			category: "repair",
			priority: "medium",
			date: "2024-01-12",
			startTime: "10:30",
			endTime: "11:30",
			cost: 3200,
			laborCost: 200,
			partsCost: 3000,
			garage: "ร้านยางรถบรรทุก",
			garageContact: "02-345-6789",
			technician: "ช่างนิพนธ์",
			description: "เปลี่ยนยางหน้า 2 เส้น",
			partsUsed: ["ยางรถบรรทุก 295/80R22.5 x2"],
			mileage: 87500,
			nextServiceKm: null,
			warrantyExpiry: "2025-01-12",
			status: "completed",
			nextService: "-",
			attachments: ["tire_receipt.pdf"],
			notes: "เปลี่ยนยางหน้าเนื่องจากสึกหรอ",
		},
		{
			id: "M2024-004",
			truck: "JKL-3456",
			truckCode: "TRK-004",
			type: "ซ่อมระบบไฟ",
			category: "repair",
			priority: "high",
			date: "2024-01-16",
			startTime: "13:00",
			endTime: "",
			cost: 4500,
			laborCost: 2000,
			partsCost: 2500,
			garage: "อู่ไฟฟ้ารถยนต์",
			garageContact: "02-456-7890",
			technician: "ช่างประยุทธ",
			description: "ซ่อมไฟหน้า และระบบไฟเลี้ยว",
			partsUsed: ["หลอดไฟหน้า H4 x2", "สวิตช์ไฟเลี้ยว"],
			mileage: 92000,
			nextServiceKm: null,
			warrantyExpiry: "2024-07-16",
			status: "in-progress",
			nextService: "-",
			attachments: [],
			notes: "กำลังซ่อมระบบไฟฟ้า",
		},
		{
			id: "M2024-005",
			truck: "MNO-7890",
			truckCode: "TRK-005",
			type: "ตรวจสอบเบรก",
			category: "inspection",
			priority: "high",
			date: "2024-01-17",
			startTime: "",
			endTime: "",
			cost: 2500,
			laborCost: 1500,
			partsCost: 1000,
			garage: "ศูนย์ตรวจสอบเบรก",
			garageContact: "02-567-8901",
			technician: "ช่างวิชัย",
			description: "ตรวจสอบและปรับระบบเบรก",
			partsUsed: ["น้ำมันเบรก DOT4"],
			mileage: 115000,
			nextServiceKm: 125000,
			warrantyExpiry: "2024-04-17",
			status: "scheduled",
			nextService: "2024-04-17",
			attachments: [],
			notes: "นัดหมายตรวจเบรก",
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "completed":
				return (
					<Badge variant="default" className="bg-green-600">
						เสร็จสิ้น
					</Badge>
				);
			case "in-progress":
				return (
					<Badge variant="outline" className="text-blue-600 border-blue-600">
						กำลังดำเนินการ
					</Badge>
				);
			case "scheduled":
				return (
					<Badge variant="outline" className="text-orange-600 border-orange-600">
						นัดหมายแล้ว
					</Badge>
				);
			case "pending":
				return (
					<Badge variant="outline" className="text-yellow-600 border-yellow-600">
						รอดำเนินการ
					</Badge>
				);
			default:
				return <Badge variant="secondary">ไม่ทราบสถานะ</Badge>;
		}
	};

	const getPriorityBadge = (priority: string) => {
		switch (priority) {
			case "high":
				return <Badge variant="destructive">สูง</Badge>;
			case "medium":
				return (
					<Badge variant="outline" className="text-yellow-600 border-yellow-600">
						ปานกลาง
					</Badge>
				);
			case "low":
				return (
					<Badge variant="outline" className="text-green-600 border-green-600">
						ต่ำ
					</Badge>
				);
			default:
				return <Badge variant="secondary">ไม่ระบุ</Badge>;
		}
	};

	const getCategoryBadge = (category: string) => {
		switch (category) {
			case "repair":
				return (
					<Badge variant="outline" className="text-red-600 border-red-600">
						ซ่อมแซม
					</Badge>
				);
			case "maintenance":
				return (
					<Badge variant="outline" className="text-blue-600 border-blue-600">
						บำรุงรักษา
					</Badge>
				);
			case "inspection":
				return (
					<Badge variant="outline" className="text-purple-600 border-purple-600">
						ตรวจสอบ
					</Badge>
				);
			default:
				return <Badge variant="secondary">ไม่ระบุ</Badge>;
		}
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	const formatDate = (dateString: string) => {
		if (dateString === "-") return "-";
		return new Date(dateString).toLocaleDateString("th-TH");
	};

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">ซ่อมบำรุง</h1>
				<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
					<Plus className="w-4 h-4 mr-2" />
					บันทึกการซ่อมบำรุง
				</Button>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหาบันทึกซ่อมบำรุง</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input
								placeholder="ค้นหาเลขที่บันทึก, ทะเบียนรถ หรือประเภทการซ่อม..."
								className="pl-10 bg-background border-input"
							/>
						</div>
						<Button variant="outline" className="border-input">
							ค้นหา
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<Wrench className="w-5 h-5" />
						บันทึกการซ่อมบำรุง
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="text-muted-foreground">เลขที่</TableHead>
									<TableHead className="text-muted-foreground">ทะเบียนรถ</TableHead>
									<TableHead className="text-muted-foreground">ประเภทการซ่อม</TableHead>
									<TableHead className="text-muted-foreground">หมวดหมู่</TableHead>
									<TableHead className="text-muted-foreground">ความสำคัญ</TableHead>
									<TableHead className="text-muted-foreground">วันที่</TableHead>
									<TableHead className="text-muted-foreground">ค่าแรง</TableHead>
									<TableHead className="text-muted-foreground">ค่าอะไหล่</TableHead>
									<TableHead className="text-muted-foreground">รวม</TableHead>
									<TableHead className="text-muted-foreground">อู่ซ่อม</TableHead>
									<TableHead className="text-muted-foreground">ช่าง</TableHead>
									<TableHead className="text-muted-foreground">เลขไมล์</TableHead>
									<TableHead className="text-muted-foreground">สถานะ</TableHead>
									<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{maintenanceRecords.map((record) => (
									<TableRow key={record.id} className="hover:bg-muted/50">
										<TableCell className="font-medium text-foreground">{record.id}</TableCell>
										<TableCell className="text-foreground">
											<div>
												<div>{record.truck}</div>
												<div className="text-xs text-muted-foreground">{record.truckCode}</div>
											</div>
										</TableCell>
										<TableCell className="text-foreground">{record.type}</TableCell>
										<TableCell>{getCategoryBadge(record.category)}</TableCell>
										<TableCell>{getPriorityBadge(record.priority)}</TableCell>
										<TableCell className="text-muted-foreground">
											{formatDate(record.date)}
										</TableCell>
										<TableCell className="font-medium text-blue-600">
											{formatCurrency(record.laborCost)}
										</TableCell>
										<TableCell className="font-medium text-orange-600">
											{formatCurrency(record.partsCost)}
										</TableCell>
										<TableCell className="font-medium text-foreground">
											{formatCurrency(record.cost)}
										</TableCell>
										<TableCell className="text-foreground">
											<div>
												<div>{record.garage}</div>
												<div className="text-xs text-muted-foreground">{record.garageContact}</div>
											</div>
										</TableCell>
										<TableCell className="text-foreground">{record.technician}</TableCell>
										<TableCell className="text-center text-muted-foreground">
											{record.mileage?.toLocaleString() || "-"}
										</TableCell>
										<TableCell>{getStatusBadge(record.status)}</TableCell>
										<TableCell>
											<div className="flex gap-2">
												<Button variant="outline" size="sm">
													<Eye className="w-4 h-4 mr-1" />
													ดู
												</Button>
												<Button variant="outline" size="sm">
													<Edit className="w-4 h-4 mr-1" />
													แก้ไข
												</Button>
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Wrench className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">{maintenanceRecords.length}</p>
								<p className="text-sm text-muted-foreground">ซ่อมบำรุงเดือนนี้</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<DollarSign className="w-8 h-8 text-green-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{formatCurrency(maintenanceRecords.reduce((sum, record) => sum + record.cost, 0))
										.replace("THB", "")
										.trim()}
								</p>
								<p className="text-sm text-muted-foreground">ค่าใช้จ่าย (บาท)</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Calendar className="w-8 h-8 text-yellow-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{maintenanceRecords.filter((r) => r.category === "maintenance").length}
								</p>
								<p className="text-sm text-muted-foreground">บำรุงรักษาประจำ</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<AlertTriangle className="w-8 h-8 text-red-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{maintenanceRecords.filter((r) => r.priority === "high").length}
								</p>
								<p className="text-sm text-muted-foreground">ความสำคัญสูง</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Cost Breakdown */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<DollarSign className="w-5 h-5" />
						สรุปค่าใช้จ่าย
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
							<p className="text-2xl font-bold text-blue-600">
								{formatCurrency(
									maintenanceRecords.reduce((sum, record) => sum + record.laborCost, 0)
								)}
							</p>
							<p className="text-sm text-muted-foreground">ค่าแรงรวม</p>
						</div>
						<div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
							<p className="text-2xl font-bold text-orange-600">
								{formatCurrency(
									maintenanceRecords.reduce((sum, record) => sum + record.partsCost, 0)
								)}
							</p>
							<p className="text-sm text-muted-foreground">ค่าอะไหล่รวม</p>
						</div>
						<div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
							<p className="text-2xl font-bold text-green-600">
								{formatCurrency(maintenanceRecords.reduce((sum, record) => sum + record.cost, 0))}
							</p>
							<p className="text-sm text-muted-foreground">ค่าใช้จ่ายรวม</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Maintenance by Category */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">สรุปตามหมวดหมู่</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="space-y-2">
							<h4 className="font-medium text-foreground">ซ่อมแซม</h4>
							<div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
								<p className="text-lg font-bold text-red-600">
									{maintenanceRecords.filter((r) => r.category === "repair").length} ครั้ง
								</p>
								<p className="text-sm text-muted-foreground">
									ค่าใช้จ่าย:{" "}
									{formatCurrency(
										maintenanceRecords
											.filter((r) => r.category === "repair")
											.reduce((sum, record) => sum + record.cost, 0)
									)}
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<h4 className="font-medium text-foreground">บำรุงรักษา</h4>
							<div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
								<p className="text-lg font-bold text-blue-600">
									{maintenanceRecords.filter((r) => r.category === "maintenance").length} ครั้ง
								</p>
								<p className="text-sm text-muted-foreground">
									ค่าใช้จ่าย:{" "}
									{formatCurrency(
										maintenanceRecords
											.filter((r) => r.category === "maintenance")
											.reduce((sum, record) => sum + record.cost, 0)
									)}
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<h4 className="font-medium text-foreground">ตรวจสอบ</h4>
							<div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
								<p className="text-lg font-bold text-purple-600">
									{maintenanceRecords.filter((r) => r.category === "inspection").length} ครั้ง
								</p>
								<p className="text-sm text-muted-foreground">
									ค่าใช้จ่าย:{" "}
									{formatCurrency(
										maintenanceRecords
											.filter((r) => r.category === "inspection")
											.reduce((sum, record) => sum + record.cost, 0)
									)}
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Upcoming Maintenance Alert */}
			<Card className="bg-card border-border border-l-4 border-l-yellow-500">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<AlertTriangle className="w-5 h-5 text-yellow-500" />
						รถที่ต้องบำรุงรักษาในเร็วๆ นี้
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-2">
						<div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
							<div>
								<p className="font-medium text-foreground">ABC-1234 (TRK-001)</p>
								<p className="text-sm text-muted-foreground">
									ครบกำหนดบำรุงรักษาประจำ: 15 ม.ค. 2567 (130,000 กม.)
								</p>
								<p className="text-xs text-muted-foreground">เลขไมล์ปัจจุบัน: 125,000 กม.</p>
							</div>
							<div className="text-right">
								<Button variant="outline" size="sm">
									จองคิว
								</Button>
								<p className="text-xs text-red-600 mt-1">เหลือ 5,000 กม.</p>
							</div>
						</div>
						<div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
							<div>
								<p className="font-medium text-foreground">MNO-7890 (TRK-005)</p>
								<p className="text-sm text-muted-foreground">นัดตรวจเบรก: 17 ม.ค. 2567</p>
								<p className="text-xs text-muted-foreground">ศูนย์ตรวจสอบเบรก - ช่างวิชัย</p>
							</div>
							<div className="text-right">
								<Button variant="outline" size="sm">
									ดูรายละเอียด
								</Button>
								<p className="text-xs text-orange-600 mt-1">นัดหมายแล้ว</p>
							</div>
						</div>
						<div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
							<div>
								<p className="font-medium text-foreground">DEF-5678 (TRK-002)</p>
								<p className="text-sm text-muted-foreground">
									ครบกำหนดบำรุงรักษา: 10 เม.ย. 2567 (108,000 กม.)
								</p>
								<p className="text-xs text-muted-foreground">เลขไมล์ปัจจุบัน: 98,000 กม.</p>
							</div>
							<div className="text-right">
								<Button variant="outline" size="sm">
									จองคิว
								</Button>
								<p className="text-xs text-yellow-600 mt-1">เหลือ 10,000 กม.</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Parts Inventory Alert */}
			<Card className="bg-card border-border border-l-4 border-l-orange-500">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<AlertTriangle className="w-5 h-5 text-orange-500" />
						อะไหล่ที่ใช้บ่อยและต้องจัดเตรียม
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<h4 className="font-medium text-foreground">อะไหล่สำคัญ</h4>
							<div className="space-y-2">
								<div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-950 rounded">
									<span className="text-sm">น้ำมันเครื่อง 15W-40</span>
									<span className="text-sm font-medium text-orange-600">ใช้บ่อย</span>
								</div>
								<div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-950 rounded">
									<span className="text-sm">กรองอากาศ</span>
									<span className="text-sm font-medium text-orange-600">ใช้บ่อย</span>
								</div>
								<div className="flex justify-between items-center p-2 bg-red-50 dark:bg-red-950 rounded">
									<span className="text-sm">ยางรถบรรทุก 295/80R22.5</span>
									<span className="text-sm font-medium text-red-600">ราคาสูง</span>
								</div>
							</div>
						</div>
						<div className="space-y-2">
							<h4 className="font-medium text-foreground">ค่าใช้จ่ายเฉลี่ย</h4>
							<div className="space-y-2">
								<div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-950 rounded">
									<span className="text-sm">บำรุงรักษาประจำ</span>
									<span className="text-sm font-medium">{formatCurrency(8500)}</span>
								</div>
								<div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-950 rounded">
									<span className="text-sm">ซ่อมเครื่องยนต์</span>
									<span className="text-sm font-medium">{formatCurrency(15000)}</span>
								</div>
								<div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-950 rounded">
									<span className="text-sm">เปลี่ยนยาง</span>
									<span className="text-sm font-medium">{formatCurrency(3200)}</span>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
