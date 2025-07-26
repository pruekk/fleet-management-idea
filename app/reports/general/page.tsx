"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import {
	ClipboardList,
	Download,
	Search,
	Calendar,
	FileText,
	BarChart3,
	Truck,
	DollarSign,
	Users,
	Fuel,
	Eye,
	Filter,
} from "lucide-react";

export default function GeneralReportsPage() {
	const reportCategories = [
		{
			title: "รายงานการขนส่ง",
			icon: Truck,
			color: "bg-blue-100 text-blue-700",
			reports: [
				{
					name: "รายงานเที่ยววิ่งรายวัน",
					description: "สรุปเที่ยววิ่งของรถโม่ทั้งหมดในแต่ละวัน",
					lastGenerated: "2024-07-26",
					format: "PDF, Excel",
				},
				{
					name: "รายงานการใช้น้ำมัน",
					description: "ข้อมูลการเติมน้ำมันและค่าใช้จ่าย",
					lastGenerated: "2024-07-25",
					format: "Excel",
				},
				{
					name: "รายงานซ่อมบำรุง",
					description: "ประวัติการซ่อมบำรุงรถโม่และค่าใช้จ่าย",
					lastGenerated: "2024-07-24",
					format: "PDF",
				},
			],
		},
		{
			title: "รายงานการเงิน",
			icon: DollarSign,
			color: "bg-green-100 text-green-700",
			reports: [
				{
					name: "รายงานรายรับ-รายจ่าย",
					description: "สรุปรายรับและรายจ่ายรายเดือน",
					lastGenerated: "2024-07-26",
					format: "PDF, Excel",
				},
				{
					name: "รายงานลูกหนี้",
					description: "สถานะการชำระเงินของลูกค้า",
					lastGenerated: "2024-07-25",
					format: "Excel",
				},
				{
					name: "รายงานต้นทุนต่อเที่ยว",
					description: "การวิเคราะห์ต้นทุนการขนส่งแต่ละเที่ยว",
					lastGenerated: "2024-07-24",
					format: "PDF, Excel",
				},
			],
		},
		{
			title: "รายงานพนักงาน",
			icon: Users,
			color: "bg-purple-100 text-purple-700",
			reports: [
				{
					name: "รายงานการเข้างาน",
					description: "สถิติการเข้างานของพนักงานรายเดือน",
					lastGenerated: "2024-07-26",
					format: "Excel",
				},
				{
					name: "รายงานค่าแรงพนักงาน",
					description: "สรุปค่าแรงและค่าล่วงเวลาพนักงาน",
					lastGenerated: "2024-07-25",
					format: "PDF, Excel",
				},
				{
					name: "รายงานประเมินผลงาน",
					description: "ผลการประเมินและการพัฒนาพนักงาน",
					lastGenerated: "2024-07-20",
					format: "PDF",
				},
			],
		},
	];

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-3xl font-bold text-foreground">รายงานทั่วไป</h1>
					<p className="text-muted-foreground">รายงานประจำสำหรับการดำเนินงานทั่วไป</p>
				</div>
			</div>

			{/* ค้นหาและกรองข้อมูล */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหารายงาน</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input placeholder="ค้นหารายงาน..." className="pl-10 bg-background border-input" />
						</div>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="หมวดหมู่" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="transport">รายงานการขนส่ง</SelectItem>
								<SelectItem value="finance">รายงานการเงิน</SelectItem>
								<SelectItem value="employee">รายงานพนักงาน</SelectItem>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="ช่วงเวลา" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="today">วันนี้</SelectItem>
								<SelectItem value="week">สัปดาห์นี้</SelectItem>
								<SelectItem value="month">เดือนนี้</SelectItem>
								<SelectItem value="quarter">ไตรมาสนี้</SelectItem>
								<SelectItem value="year">ปีนี้</SelectItem>
							</SelectContent>
						</Select>
						<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
							<Filter className="w-4 h-4 mr-2" />
							กรองข้อมูล
						</Button>
					</div>
				</CardContent>
			</Card>

			{/* สถิติภาพรวมรายงาน */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายงานทั้งหมด</CardTitle>
						<FileText className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">9</div>
						<p className="text-xs text-muted-foreground">รายงานที่พร้อมใช้งาน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">สร้างวันนี้</CardTitle>
						<Calendar className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">3</div>
						<p className="text-xs text-muted-foreground">รายงานที่สร้างใหม่</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ดาวน์โหลดสัปดาห์นี้</CardTitle>
						<Download className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">24</div>
						<p className="text-xs text-muted-foreground">ครั้ง</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายงานยอดนิยม</CardTitle>
						<BarChart3 className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-lg font-bold">เที่ยววิ่งรายวัน</div>
						<p className="text-xs text-muted-foreground">8 ครั้ง/สัปดาห์</p>
					</CardContent>
				</Card>
			</div>

			{/* รายงานตามหมวดหมู่ */}
			<div className="space-y-6">
				{reportCategories.map((category, index) => (
					<Card key={index} className="bg-card border-border">
						<CardHeader>
							<CardTitle className="text-card-foreground flex items-center gap-2">
								<div className={`p-2 rounded-lg ${category.color}`}>
									<category.icon className="w-5 h-5" />
								</div>
								{category.title}
							</CardTitle>
							<CardDescription>
								รายงานที่เกี่ยวข้องกับ{category.title.replace("รายงาน", "")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
								{category.reports.map((report, reportIndex) => (
									<div
										key={reportIndex}
										className="p-4 border border-border rounded-lg bg-background hover:bg-muted/50 transition-colors"
									>
										<div className="space-y-3">
											<div>
												<h4 className="font-medium text-foreground">{report.name}</h4>
												<p className="text-sm text-muted-foreground">{report.description}</p>
											</div>

											<div className="flex items-center justify-between text-xs text-muted-foreground">
												<span>อัพเดทล่าสุด: {report.lastGenerated}</span>
												<Badge variant="outline" className="text-xs">
													{report.format}
												</Badge>
											</div>

											<div className="flex gap-2">
												<Button size="sm" variant="outline" className="flex-1">
													<Eye className="w-3 h-3 mr-1" />
													ดูรายงาน
												</Button>
												<Button size="sm" className="flex-1">
													<Download className="w-3 h-3 mr-1" />
													ดาวน์โหลด
												</Button>
											</div>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* รายงานที่ใช้บ่อย */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<BarChart3 className="w-5 h-5" />
						รายงานที่ใช้บ่อย
					</CardTitle>
					<CardDescription>รายงานที่มีการดาวน์โหลดบ่อยที่สุด</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-3">
						{[
							{ name: "รายงานเที่ยววิ่งรายวัน", downloads: 45, trend: "+12%" },
							{ name: "รายงานรายรับ-รายจ่าย", downloads: 32, trend: "+8%" },
							{ name: "รายงานการใช้น้ำมัน", downloads: 28, trend: "+15%" },
							{ name: "รายงานการเข้างาน", downloads: 24, trend: "+5%" },
							{ name: "รายงานลูกหนี้", downloads: 19, trend: "-2%" },
						].map((report, index) => (
							<div
								key={index}
								className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
							>
								<div className="flex items-center gap-3">
									<div className="text-sm font-medium text-foreground">{index + 1}</div>
									<div>
										<div className="font-medium text-foreground">{report.name}</div>
										<div className="text-sm text-muted-foreground">
											{report.downloads} ครั้งในเดือนนี้
										</div>
									</div>
								</div>
								<div className="text-right">
									<Badge
										variant={report.trend.startsWith("+") ? "default" : "destructive"}
										className="text-xs"
									>
										{report.trend}
									</Badge>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
