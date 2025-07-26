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
import { Search, Plus, Users, Phone, Mail, MapPin, Edit, Eye } from "lucide-react";

export default function EmployeeBasicInfoPage() {
	const employees = [
		{
			id: "EMP001",
			name: "นายสมชาย ใจดี",
			position: "คนขับรถโม่",
			department: "ขนส่ง",
			phone: "08-1234-5678",
			email: "somchai@company.com",
			address: "123 ถ.รามอินทรา กรุงเทพฯ 10230",
			hireDate: "2023-01-15",
			status: "active",
			salary: 18000,
		},
		{
			id: "EMP002",
			name: "นายวิชัย รักงาน",
			position: "หัวหน้าขนส่ง",
			department: "ขนส่ง",
			phone: "08-9876-5432",
			email: "wichai@company.com",
			address: "456 ถ.ลาดพร้าว กรุงเทพฯ 10310",
			hireDate: "2022-06-01",
			status: "active",
			salary: 35000,
		},
		{
			id: "EMP003",
			name: "นางสุดา ขยันดี",
			position: "เจ้าหน้าที่บัญชี",
			department: "บัญชี",
			phone: "08-5555-1234",
			email: "suda@company.com",
			address: "789 ถ.พระราม 4 กรุงเทพฯ 10110",
			hireDate: "2023-03-10",
			status: "active",
			salary: 25000,
		},
		{
			id: "EMP004",
			name: "นายประยุทธ มีวินัย",
			position: "ช่างซ่อม",
			department: "ซ่อมบำรุง",
			phone: "08-7777-8888",
			email: "prayuth@company.com",
			address: "321 ถ.บางนา กรุงเทพฯ 10260",
			hireDate: "2021-11-20",
			status: "inactive",
			salary: 22000,
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "active":
				return (
					<Badge variant="default" className="bg-green-600">
						ปฏิบัติงาน
					</Badge>
				);
			case "inactive":
				return <Badge variant="secondary">หยุดงาน</Badge>;
			case "leave":
				return (
					<Badge variant="outline" className="text-yellow-600 border-yellow-600">
						ลาพัก
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
		return new Date(dateString).toLocaleDateString("th-TH");
	};

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">ข้อมูลพื้นฐานพนักงาน</h1>
				<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
					<Plus className="w-4 h-4 mr-2" />
					เพิ่มพนักงาน
				</Button>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหาพนักงาน</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input
								placeholder="ค้นหาชื่อ รหัสพนักงาน หรือตำแหน่ง..."
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
						<Users className="w-5 h-5" />
						รายชื่อพนักงาน
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">รหัสพนักงาน</TableHead>
								<TableHead className="text-muted-foreground">ชื่อ-นามสกุล</TableHead>
								<TableHead className="text-muted-foreground">ตำแหน่ง</TableHead>
								<TableHead className="text-muted-foreground">แผนก</TableHead>
								<TableHead className="text-muted-foreground">เบอร์โทร</TableHead>
								<TableHead className="text-muted-foreground">เงินเดือน</TableHead>
								<TableHead className="text-muted-foreground">วันที่เริ่มงาน</TableHead>
								<TableHead className="text-muted-foreground">สถานะ</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{employees.map((employee) => (
								<TableRow key={employee.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{employee.id}</TableCell>
									<TableCell className="text-foreground">{employee.name}</TableCell>
									<TableCell className="text-foreground">{employee.position}</TableCell>
									<TableCell className="text-muted-foreground">{employee.department}</TableCell>
									<TableCell className="text-muted-foreground">{employee.phone}</TableCell>
									<TableCell className="font-medium text-foreground">
										{formatCurrency(employee.salary)}
									</TableCell>
									<TableCell className="text-muted-foreground">
										{formatDate(employee.hireDate)}
									</TableCell>
									<TableCell>{getStatusBadge(employee.status)}</TableCell>
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
							<Users className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">24</p>
								<p className="text-sm text-muted-foreground">พนักงานทั้งหมด</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Users className="w-8 h-8 text-green-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">21</p>
								<p className="text-sm text-muted-foreground">ปฏิบัติงาน</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Users className="w-8 h-8 text-yellow-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">2</p>
								<p className="text-sm text-muted-foreground">ลาพัก</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Users className="w-8 h-8 text-red-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">1</p>
								<p className="text-sm text-muted-foreground">หยุดงาน</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
