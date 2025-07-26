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
	Users,
	Calendar,
	DollarSign,
	Clock,
	TrendingUp,
	Download,
} from "lucide-react";

export default function MonthlyOperationsEmployeesPage() {
	const employeeWork = [
		{
			id: "EMP001",
			name: "นายสมชาย ใจดี",
			position: "คนขับรถโม่",
			workingDays: 26,
			overtime: 15,
			baseSalary: 18000,
			overtimePay: 3750,
			bonus: 2000,
			totalSalary: 23750,
			trips: 45,
		},
		{
			id: "EMP002",
			name: "นายวิชัย รักงาน",
			position: "หัวหน้าขนส่ง",
			workingDays: 26,
			overtime: 8,
			baseSalary: 35000,
			overtimePay: 2000,
			bonus: 5000,
			totalSalary: 42000,
			trips: 0,
		},
		{
			id: "EMP003",
			name: "นางสุดา ขยันดี",
			position: "เจ้าหน้าที่บัญชี",
			workingDays: 24,
			overtime: 5,
			baseSalary: 25000,
			overtimePay: 1250,
			bonus: 1500,
			totalSalary: 27750,
			trips: 0,
		},
	];

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	const totalSalaries = employeeWork.reduce((sum, emp) => sum + emp.totalSalary, 0);
	const totalTrips = employeeWork.reduce((sum, emp) => sum + emp.trips, 0);

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">พนักงาน - ปฏิบัติการรายเดือน</h1>
				<div className="flex gap-2">
					<Button variant="outline" className="border-input">
						<Download className="w-4 h-4 mr-2" />
						ส่งออก Excel
					</Button>
					<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
						<Plus className="w-4 h-4 mr-2" />
						บันทึกข้อมูลใหม่
					</Button>
				</div>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">เลือกเดือน/ปี</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4 items-center">
						<Input
							type="month"
							defaultValue="2024-01"
							className="bg-background border-input w-40"
						/>
						<Button variant="outline" className="border-input">
							แสดงข้อมูล
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<Users className="w-5 h-5" />
						สรุปการทำงานพนักงาน - มกราคม 2567
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">รหัสพนักงาน</TableHead>
								<TableHead className="text-muted-foreground">ชื่อ-นามสกุล</TableHead>
								<TableHead className="text-muted-foreground">ตำแหน่ง</TableHead>
								<TableHead className="text-muted-foreground">วันทำงาน</TableHead>
								<TableHead className="text-muted-foreground">OT (ชม.)</TableHead>
								<TableHead className="text-muted-foreground">เงินเดือนพื้นฐาน</TableHead>
								<TableHead className="text-muted-foreground">ค่า OT</TableHead>
								<TableHead className="text-muted-foreground">โบนัส</TableHead>
								<TableHead className="text-muted-foreground">รวมเงินเดือน</TableHead>
								<TableHead className="text-muted-foreground">เที่ยววิ่ง</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{employeeWork.map((employee) => (
								<TableRow key={employee.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{employee.id}</TableCell>
									<TableCell className="text-foreground">{employee.name}</TableCell>
									<TableCell className="text-foreground">{employee.position}</TableCell>
									<TableCell className="text-center text-muted-foreground">
										{employee.workingDays}
									</TableCell>
									<TableCell className="text-center text-muted-foreground">
										{employee.overtime}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(employee.baseSalary)}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(employee.overtimePay)}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(employee.bonus)}
									</TableCell>
									<TableCell className="font-medium text-foreground">
										{formatCurrency(employee.totalSalary)}
									</TableCell>
									<TableCell className="text-center text-muted-foreground">
										{employee.trips}
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
								<p className="text-2xl font-bold text-foreground">{employeeWork.length}</p>
								<p className="text-sm text-muted-foreground">พนักงานที่ทำงาน</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<DollarSign className="w-8 h-8 text-green-500" />
							<div>
								<p className="text-xl font-bold text-foreground">
									{(totalSalaries / 1000).toFixed(0)}K
								</p>
								<p className="text-sm text-muted-foreground">เงินเดือนรวม (บาท)</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Calendar className="w-8 h-8 text-purple-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">{totalTrips}</p>
								<p className="text-sm text-muted-foreground">เที่ยววิ่งรวม</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Clock className="w-8 h-8 text-yellow-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">28</p>
								<p className="text-sm text-muted-foreground">ชั่วโมง OT รวม</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Performance Summary */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<TrendingUp className="w-5 h-5" />
						สรุปประสิทธิ์ภาพ
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="p-4 bg-muted/30 rounded-lg">
							<h4 className="font-medium text-foreground mb-2">พนักงานขับรถยอดเยี่ยม</h4>
							<p className="text-2xl font-bold text-green-600">นายสมชาย ใจดี</p>
							<p className="text-sm text-muted-foreground">45 เที่ยววิ่ง</p>
						</div>
						<div className="p-4 bg-muted/30 rounded-lg">
							<h4 className="font-medium text-foreground mb-2">อัตราการทำงานเฉลี่ย</h4>
							<p className="text-2xl font-bold text-blue-600">96.2%</p>
							<p className="text-sm text-muted-foreground">25.3/26 วัน</p>
						</div>
						<div className="p-4 bg-muted/30 rounded-lg">
							<h4 className="font-medium text-foreground mb-2">ค่าจ้างเฉลี่ยต่อคน</h4>
							<p className="text-2xl font-bold text-purple-600">
								{formatCurrency(totalSalaries / employeeWork.length)}
							</p>
							<p className="text-sm text-muted-foreground">รวม OT และโบนัส</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
