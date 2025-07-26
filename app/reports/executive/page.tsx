"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	TrendingUp,
	BarChart3,
	PieChart,
	DollarSign,
	Download,
	Calendar,
	Eye,
	Shield,
	FileText,
} from "lucide-react";

export default function ExecutiveReportsPage() {
	const executiveReports = [
		{
			title: "Dashboard ผู้บริหาร",
			description: "ข้อมูลสำคัญของบริษัทแบบเรียลไทม์",
			icon: BarChart3,
			color: "bg-purple-100 text-purple-700",
			lastUpdate: "อัพเดทล่าสุด: วันนี้ 09:30",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานกำไรขาดทุน",
			description: "P&L Statement รายเดือน/รายไตรมาส/รายปี",
			icon: DollarSign,
			color: "bg-green-100 text-green-700",
			lastUpdate: "อัพเดทล่าสุด: เมื่อวาน 17:00",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานกระแสเงินสด",
			description: "Cash Flow Statement และการวิเคราะห์สภาพคล่อง",
			icon: TrendingUp,
			color: "bg-blue-100 text-blue-700",
			lastUpdate: "อัพเดทล่าสุด: เมื่อวาน 17:00",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานการวิเคราะห์ลูกค้า",
			description: "Top Customers, Customer Lifetime Value, Customer Segmentation",
			icon: PieChart,
			color: "bg-orange-100 text-orange-700",
			lastUpdate: "อัพเดทล่าสุด: สัปดาห์ที่แล้ว",
			status: "พร้อมใช้งาน",
		},
	];

	const kpis = [
		{
			title: "รายได้รวม (เดือนนี้)",
			value: "฿2,450,000",
			change: "+12.5%",
			trend: "up",
		},
		{
			title: "ต้นทุนรวม (เดือนนี้)",
			value: "฿1,680,000",
			change: "+8.2%",
			trend: "up",
		},
		{
			title: "กำไรสุทธิ (เดือนนี้)",
			value: "฿770,000",
			change: "+18.7%",
			trend: "up",
		},
		{
			title: "GPM (%)",
			value: "31.4%",
			change: "+2.8%",
			trend: "up",
		},
	];

	return (
		<div className="container mx-auto p-6 space-y-6">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold">รายงานผู้บริหาร</h1>
					<p className="text-muted-foreground mt-2">
						รายงานสำหรับผู้บริหารและข้อมูลที่มีความสำคัญสูง
					</p>
				</div>
			</div>

			{/* Quick KPIs */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{kpis.map((kpi, index) => (
					<Card key={index}>
						<CardHeader className="pb-2">
							<CardTitle className="text-sm font-medium text-muted-foreground">
								{kpi.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{kpi.value}</div>
							<div className="flex items-center mt-1">
								<TrendingUp className="h-4 w-4 text-green-500 mr-1" />
								<span className="text-sm text-green-600">{kpi.change}</span>
								<span className="text-sm text-muted-foreground ml-1">vs เดือนที่แล้ว</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Reports Tabs */}
			<Tabs defaultValue="reports" className="w-full">
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="reports">รายงานหลัก</TabsTrigger>
					<TabsTrigger value="analysis">การวิเคราะห์</TabsTrigger>
					<TabsTrigger value="forecast">การคาดการณ์</TabsTrigger>
				</TabsList>

				<TabsContent value="reports" className="space-y-4">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-semibold">รายงานสำหรับผู้บริหาร</h2>
						<div className="flex space-x-2">
							<Select defaultValue="thisMonth">
								<SelectTrigger className="w-40">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="thisMonth">เดือนนี้</SelectItem>
									<SelectItem value="lastMonth">เดือนที่แล้ว</SelectItem>
									<SelectItem value="thisQuarter">ไตรมาสนี้</SelectItem>
									<SelectItem value="thisYear">ปีนี้</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{executiveReports.map((report, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<div className="flex items-start justify-between">
										<div className="flex items-center space-x-3">
											<div className={`p-3 rounded-lg ${report.color}`}>
												<report.icon className="h-6 w-6" />
											</div>
											<div className="flex-1">
												<CardTitle className="text-lg">{report.title}</CardTitle>
												<CardDescription className="mt-1 text-sm">
													{report.description}
												</CardDescription>
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										<div className="flex justify-between items-center text-sm">
											<span className="text-muted-foreground">{report.lastUpdate}</span>
											<Badge variant="outline" className="text-green-600 border-green-600">
												{report.status}
											</Badge>
										</div>
										<div className="flex flex-col sm:flex-row gap-2">
											<Button size="sm" className="flex-1">
												<Eye className="h-4 w-4 mr-2" />
												ดูรายงาน
											</Button>
											<Button size="sm" variant="outline" className="flex-1">
												<Download className="h-4 w-4 mr-2" />
												ดาวน์โหลด
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>

				<TabsContent value="analysis" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>การวิเคราะห์ประสิทธิภาพ</CardTitle>
							<CardDescription>วิเคราะห์ข้อมูลเชิงลึกสำหรับการตัดสินใจทางธุรกิจ</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">วิเคราะห์ต้นทุน</h3>
									<p className="text-sm text-muted-foreground">
										การวิเคราะห์ต้นทุนการดำเนินงานและการหาจุดที่สามารถลดต้นทุนได้
									</p>
									<Button size="sm" className="mt-3">
										ดูรายละเอียด
									</Button>
								</div>
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">วิเคราะห์ลูกค้า</h3>
									<p className="text-sm text-muted-foreground">
										การวิเคราะห์พฤติกรรมลูกค้าและการหาลูกค้าที่มีศักยภาพ
									</p>
									<Button size="sm" className="mt-3">
										ดูรายละเอียด
									</Button>
								</div>
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">วิเคราะห์การแข่งขัน</h3>
									<p className="text-sm text-muted-foreground">
										การเปรียบเทียบผลประกอบการกับคู่แข่งในตลาด
									</p>
									<Button size="sm" className="mt-3">
										ดูรายละเอียด
									</Button>
								</div>
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">วิเคราะห์ความเสี่ยง</h3>
									<p className="text-sm text-muted-foreground">
										การประเมินความเสี่ยงทางธุรกิจและแนวทางการจัดการ
									</p>
									<Button size="sm" className="mt-3">
										ดูรายละเอียด
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="forecast" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>การคาดการณ์และแผนงาน</CardTitle>
							<CardDescription>การคาดการณ์รายได้และการวางแผนทางธุรกิจ</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<Card>
										<CardHeader className="pb-2">
											<CardTitle className="text-sm">คาดการณ์รายได้ (เดือนหน้า)</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="text-2xl font-bold text-green-600">฿2,680,000</div>
											<div className="text-sm text-muted-foreground">+9.4% vs เดือนนี้</div>
										</CardContent>
									</Card>
									<Card>
										<CardHeader className="pb-2">
											<CardTitle className="text-sm">คาดการณ์ต้นทุน (เดือนหน้า)</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="text-2xl font-bold text-orange-600">฿1,750,000</div>
											<div className="text-sm text-muted-foreground">+4.2% vs เดือนนี้</div>
										</CardContent>
									</Card>
									<Card>
										<CardHeader className="pb-2">
											<CardTitle className="text-sm">คาดการณ์กำไร (เดือนหน้า)</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="text-2xl font-bold text-blue-600">฿930,000</div>
											<div className="text-sm text-muted-foreground">+20.8% vs เดือนนี้</div>
										</CardContent>
									</Card>
								</div>

								<div className="mt-6">
									<h3 className="font-semibold mb-3">แผนการขยายธุรกิจ</h3>
									<div className="space-y-2">
										<div className="p-3 border rounded-lg">
											<div className="flex justify-between items-center">
												<span className="font-medium">เพิ่มรถโม่ใหม่ 2 คัน</span>
												<Badge>Q3 2024</Badge>
											</div>
											<p className="text-sm text-muted-foreground mt-1">
												คาดว่าจะเพิ่มกำลังการผลิตได้ 25%
											</p>
										</div>
										<div className="p-3 border rounded-lg">
											<div className="flex justify-between items-center">
												<span className="font-medium">ขยายพื้นที่บริการใหม่</span>
												<Badge>Q4 2024</Badge>
											</div>
											<p className="text-sm text-muted-foreground mt-1">
												เปิดให้บริการในจังหวัดใกล้เคียง
											</p>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
