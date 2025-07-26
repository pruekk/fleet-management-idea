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
			type: "ซ่อมเครื่องยนต์",
			date: "2024-01-15",
			cost: 15000,
			garage: "อู่ซ่อมรถใหญ่",
			description: "เปลี่ยนลูกสูบ และซ่อมระบบเชื้อเพลิง",
			status: "completed",
			nextService: "2024-04-15",
		},
		{
			id: "M2024-002",
			truck: "DEF-5678",
			type: "บำรุงรักษาประจำ",
			date: "2024-01-10",
			cost: 8500,
			garage: "ศูนย์บริการรถยนต์",
			description: "เปลี่ยนน้ำมันเครื่อง, กรองอากาศ, ตรวจเบรก",
			status: "completed",
			nextService: "2024-04-10",
		},
		{
			id: "M2024-003",
			truck: "GHI-9012",
			type: "ซ่อมยาง",
			date: "2024-01-12",
			cost: 3200,
			garage: "ร้านยางรถบรรทุก",
			description: "เปลี่ยนยางหน้า 2 เส้น",
			status: "completed",
			nextService: "-",
		},
		{
			id: "M2024-004",
			truck: "JKL-3456",
			type: "ซ่อมระบบไฟ",
			date: "2024-01-16",
			cost: 4500,
			garage: "อู่ไฟฟ้ารถยนต์",
			description: "ซ่อมไฟหน้า และระบบไฟเลี้ยว",
			status: "in-progress",
			nextService: "-",
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
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">เลขที่</TableHead>
								<TableHead className="text-muted-foreground">ทะเบียนรถ</TableHead>
								<TableHead className="text-muted-foreground">ประเภทการซ่อม</TableHead>
								<TableHead className="text-muted-foreground">วันที่</TableHead>
								<TableHead className="text-muted-foreground">ค่าใช้จ่าย</TableHead>
								<TableHead className="text-muted-foreground">อู่ซ่อม</TableHead>
								<TableHead className="text-muted-foreground">บำรุงครั้งถัดไป</TableHead>
								<TableHead className="text-muted-foreground">สถานะ</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{maintenanceRecords.map((record) => (
								<TableRow key={record.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{record.id}</TableCell>
									<TableCell className="text-foreground">{record.truck}</TableCell>
									<TableCell className="text-foreground">{record.type}</TableCell>
									<TableCell className="text-muted-foreground">{formatDate(record.date)}</TableCell>
									<TableCell className="font-medium text-foreground">
										{formatCurrency(record.cost)}
									</TableCell>
									<TableCell className="text-foreground">{record.garage}</TableCell>
									<TableCell className="text-muted-foreground">
										{formatDate(record.nextService)}
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
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Wrench className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">15</p>
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
								<p className="text-2xl font-bold text-foreground">125K</p>
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
								<p className="text-2xl font-bold text-foreground">8</p>
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
								<p className="text-2xl font-bold text-foreground">3</p>
								<p className="text-sm text-muted-foreground">รถต้องบำรุงด่วน</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

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
								<p className="font-medium text-foreground">ABC-1234</p>
								<p className="text-sm text-muted-foreground">
									ครบกำหนดบำรุงรักษาประจำ: 15 ม.ค. 2567
								</p>
							</div>
							<Button variant="outline" size="sm">
								จองคิว
							</Button>
						</div>
						<div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
							<div>
								<p className="font-medium text-foreground">DEF-5678</p>
								<p className="text-sm text-muted-foreground">ครบกำหนดเปลี่ยนยาง: 20 ม.ค. 2567</p>
							</div>
							<Button variant="outline" size="sm">
								จองคิว
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
