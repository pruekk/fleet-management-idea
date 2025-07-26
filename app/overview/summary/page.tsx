"use client";

import { useState } from "react";
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
	BarChart3,
	TrendingUp,
	TrendingDown,
	DollarSign,
	Users,
	Truck,
	Factory,
	FileText,
	AlertCircle,
	CheckCircle,
	Clock,
	Target,
	Calendar,
	PieChart,
	Activity,
	ArrowUpRight,
	ArrowDownRight,
	Fuel,
	Wrench,
	Building,
} from "lucide-react";

interface KPIData {
	title: string;
	value: string;
	change: string;
	changeType: "increase" | "decrease" | "neutral";
	icon: React.ComponentType<{ className?: string }>;
	description: string;
}

interface MonthlyData {
	month: string;
	revenue: number;
	costs: number;
	profit: number;
	orders: number;
	gpm: number;
}

const mockKPIData: KPIData[] = [
	{
		title: "รายได้รวม",
		value: "฿2,458,750",
		change: "+12.5%",
		changeType: "increase",
		icon: DollarSign,
		description: "เปรียบเทียบกับเดือนที่แล้ว",
	},
	{
		title: "กำไรสุทธิ",
		value: "฿584,100",
		change: "+8.3%",
		changeType: "increase",
		icon: TrendingUp,
		description: "เพิ่มขึ้นจากเดือนที่แล้ว",
	},
	{
		title: "จำนวนออเดอร์",
		value: "156 ออเดอร์",
		change: "+15.2%",
		changeType: "increase",
		icon: FileText,
		description: "ออเดอร์ที่เสร็จสิ้นแล้ว",
	},
	{
		title: "GPM (%)",
		value: "23.8%",
		change: "-2.1%",
		changeType: "decrease",
		icon: Target,
		description: "อัตรากำไรขั้นต้น",
	},
	{
		title: "รถใช้งาน",
		value: "18/20 คัน",
		change: "90%",
		changeType: "neutral",
		icon: Truck,
		description: "อัตราการใช้งานรถ",
	},
	{
		title: "ลูกค้าใหม่",
		value: "8 ราย",
		change: "+33.3%",
		changeType: "increase",
		icon: Users,
		description: "ลูกค้าใหม่ในเดือนนี้",
	},
];

const mockMonthlyData: MonthlyData[] = [
	{ month: "ม.ค.", revenue: 2200000, costs: 1680000, profit: 520000, orders: 142, gpm: 23.6 },
	{ month: "ก.พ.", revenue: 2350000, costs: 1787500, profit: 562500, orders: 148, gpm: 23.9 },
	{ month: "มี.ค.", revenue: 2458750, costs: 1874850, profit: 583900, orders: 156, gpm: 23.8 },
	{ month: "เม.ย.", revenue: 2580000, costs: 1935000, profit: 645000, orders: 163, gpm: 25.0 },
	{ month: "พ.ค.", revenue: 2720000, costs: 2040000, profit: 680000, orders: 171, gpm: 25.0 },
];

const mockAlerts = [
	{
		id: 1,
		type: "warning",
		title: "รถ 80-1234 ต้องซ่อมบำรุง",
		description: "ถึงกำหนดซ่อมบำรุงในอีก 3 วัน",
		priority: "สูง",
		date: "2024-01-20",
	},
	{
		id: 2,
		type: "info",
		title: "ใบเสนอราคา QT-2024-015",
		description: "รอการอนุมัติจากลูกค้า ABC Corp",
		priority: "ปานกลาง",
		date: "2024-01-19",
	},
	{
		id: 3,
		type: "success",
		title: "ปฏิบัติการเดือนนี้",
		description: "บรรลุเป้าหมายรายได้ 105%",
		priority: "ต่ำ",
		date: "2024-01-18",
	},
	{
		id: 4,
		type: "warning",
		title: "สต็อกน้ำมัน",
		description: "น้ำมันดีเซลเหลือ 15% ควรเติมเพิ่ม",
		priority: "สูง",
		date: "2024-01-17",
	},
];

export default function SummaryPage() {
	const [selectedPeriod, setSelectedPeriod] = useState("thisMonth");

	const getChangeIcon = (changeType: string) => {
		switch (changeType) {
			case "increase":
				return <ArrowUpRight className="h-4 w-4 text-green-600" />;
			case "decrease":
				return <ArrowDownRight className="h-4 w-4 text-red-600" />;
			default:
				return <Activity className="h-4 w-4 text-blue-600" />;
		}
	};

	const getChangeColor = (changeType: string) => {
		switch (changeType) {
			case "increase":
				return "text-green-600";
			case "decrease":
				return "text-red-600";
			default:
				return "text-blue-600";
		}
	};

	const getAlertIcon = (type: string) => {
		switch (type) {
			case "warning":
				return <AlertCircle className="h-4 w-4 text-orange-500" />;
			case "success":
				return <CheckCircle className="h-4 w-4 text-green-500" />;
			default:
				return <Clock className="h-4 w-4 text-blue-500" />;
		}
	};

	const getAlertBadge = (priority: string) => {
		switch (priority) {
			case "สูง":
				return <Badge variant="destructive">สูง</Badge>;
			case "ปานกลาง":
				return <Badge variant="outline">ปานกลาง</Badge>;
			default:
				return <Badge variant="secondary">ต่ำ</Badge>;
		}
	};

	return (
		<div className="flex-1 space-y-6 p-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">สรุปผลการดำเนินงาน</h2>
					<p className="text-muted-foreground">ภาพรวมผลการดำเนินงานสำหรับผู้บริหาร</p>
				</div>
				<div className="flex items-center space-x-2">
					<Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="เลือกช่วงเวลา" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="thisMonth">เดือนนี้</SelectItem>
							<SelectItem value="lastMonth">เดือนที่แล้ว</SelectItem>
							<SelectItem value="quarter">ไตรมาสนี้</SelectItem>
							<SelectItem value="year">ปีนี้</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* KPI Cards */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{mockKPIData.map((kpi, index) => (
					<Card key={index} className="hover:shadow-lg transition-shadow">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
							<kpi.icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{kpi.value}</div>
							<div className="flex items-center space-x-1 text-xs text-muted-foreground">
								{getChangeIcon(kpi.changeType)}
								<span className={getChangeColor(kpi.changeType)}>{kpi.change}</span>
								<span>{kpi.description}</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="grid gap-6 md:grid-cols-7">
				{/* Main Content */}
				<div className="col-span-5 space-y-6">
					<Tabs defaultValue="performance" className="space-y-4">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="performance">ผลการดำเนินงาน</TabsTrigger>
							<TabsTrigger value="financial">การเงิน</TabsTrigger>
							<TabsTrigger value="operations">ปฏิบัติการ</TabsTrigger>
							<TabsTrigger value="resources">ทรัพยากร</TabsTrigger>
						</TabsList>

						<TabsContent value="performance" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle>ผลการดำเนินงานรายเดือน</CardTitle>
									<CardDescription>เปรียบเทียบรายได้ ต้นทุน และกำไร</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{mockMonthlyData.map((data, index) => (
											<div
												key={index}
												className="flex items-center justify-between p-4 border rounded-lg"
											>
												<div className="flex items-center space-x-4">
													<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
														<Calendar className="h-6 w-6 text-blue-600" />
													</div>
													<div>
														<div className="font-medium">{data.month} 2024</div>
														<div className="text-sm text-muted-foreground">
															{data.orders} ออเดอร์
														</div>
													</div>
												</div>
												<div className="grid grid-cols-3 gap-6 text-right">
													<div>
														<div className="text-sm text-muted-foreground">รายได้</div>
														<div className="font-medium">฿{data.revenue.toLocaleString()}</div>
													</div>
													<div>
														<div className="text-sm text-muted-foreground">กำไร</div>
														<div className="font-medium text-green-600">
															฿{data.profit.toLocaleString()}
														</div>
													</div>
													<div>
														<div className="text-sm text-muted-foreground">GPM</div>
														<div className="font-medium">{data.gpm}%</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="financial" className="space-y-4">
							<div className="grid gap-4 md:grid-cols-2">
								<Card>
									<CardHeader>
										<CardTitle>งบการเงิน</CardTitle>
										<CardDescription>สรุปรายได้และค่าใช้จ่าย</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="flex justify-between items-center">
												<span>รายได้รวม</span>
												<span className="font-medium text-green-600">฿2,458,750</span>
											</div>
											<div className="flex justify-between items-center">
												<span>ต้นทุนขาย</span>
												<span className="font-medium text-red-600">฿1,874,850</span>
											</div>
											<div className="flex justify-between items-center">
												<span>ค่าใช้จ่ายดำเนินงาน</span>
												<span className="font-medium text-red-600">฿420,000</span>
											</div>
											<hr />
											<div className="flex justify-between items-center text-lg">
												<span className="font-medium">กำไรสุทธิ</span>
												<span className="font-bold text-green-600">฿163,900</span>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>Cash Flow</CardTitle>
										<CardDescription>กระแสเงินสดและสภาพคล่อง</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="flex justify-between items-center">
												<span>เงินสดต้นเดือน</span>
												<span className="font-medium">฿850,000</span>
											</div>
											<div className="flex justify-between items-center">
												<span>เงินสดรับ</span>
												<span className="font-medium text-green-600">฿2,100,000</span>
											</div>
											<div className="flex justify-between items-center">
												<span>เงินสดจ่าย</span>
												<span className="font-medium text-red-600">฿1,980,000</span>
											</div>
											<hr />
											<div className="flex justify-between items-center text-lg">
												<span className="font-medium">เงินสดปลายเดือน</span>
												<span className="font-bold text-blue-600">฿970,000</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="operations" className="space-y-4">
							<div className="grid gap-4 md:grid-cols-3">
								<Card>
									<CardHeader>
										<CardTitle>ประสิทธิภาพรถ</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex justify-between">
												<span>รถใช้งาน</span>
												<span className="font-medium">18/20 คัน</span>
											</div>
											<div className="flex justify-between">
												<span>อัตราการใช้งาน</span>
												<span className="font-medium text-green-600">90%</span>
											</div>
											<div className="flex justify-between">
												<span>รถซ่อมบำรุง</span>
												<span className="font-medium text-orange-600">2 คัน</span>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>ผลิตภาพ</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex justify-between">
												<span>เที่ยววิ่งรวม</span>
												<span className="font-medium">1,248 เที่ยว</span>
											</div>
											<div className="flex justify-between">
												<span>เฉลี่ยต่อวัน</span>
												<span className="font-medium">42 เที่ยว</span>
											</div>
											<div className="flex justify-between">
												<span>ปริมาณส่ง</span>
												<span className="font-medium text-blue-600">18,720 ลบ.ม.</span>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>ลูกค้า</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex justify-between">
												<span>ลูกค้าทั้งหมด</span>
												<span className="font-medium">45 ราย</span>
											</div>
											<div className="flex justify-between">
												<span>ลูกค้าใหม่</span>
												<span className="font-medium text-green-600">8 ราย</span>
											</div>
											<div className="flex justify-between">
												<span>อัตราการกลับมา</span>
												<span className="font-medium">87%</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="resources" className="space-y-4">
							<div className="grid gap-4 md:grid-cols-2">
								<Card>
									<CardHeader>
										<CardTitle>บุคลากร</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex justify-between">
												<span>พนักงานทั้งหมด</span>
												<span className="font-medium">28 คน</span>
											</div>
											<div className="flex justify-between">
												<span>พนักงานขับรถ</span>
												<span className="font-medium">20 คน</span>
											</div>
											<div className="flex justify-between">
												<span>พนักงานสำนักงาน</span>
												<span className="font-medium">8 คน</span>
											</div>
											<div className="flex justify-between">
												<span>อัตราการลาออก</span>
												<span className="font-medium text-orange-600">5%</span>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>ทรัพยากร</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex justify-between">
												<span>รถโม่ปูน</span>
												<span className="font-medium">20 คัน</span>
											</div>
											<div className="flex justify-between">
												<span>โรงงานพาร์ทเนอร์</span>
												<span className="font-medium">8 แห่ง</span>
											</div>
											<div className="flex justify-between">
												<span>สต็อกน้ำมัน</span>
												<span className="font-medium text-orange-600">15%</span>
											</div>
											<div className="flex justify-between">
												<span>ค่าซ่อมบำรุงเฉลี่ย</span>
												<span className="font-medium">฿12,500/เดือน</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>

				{/* Sidebar - Alerts */}
				<div className="col-span-2">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center space-x-2">
								<AlertCircle className="h-5 w-5" />
								<span>แจ้งเตือนสำคัญ</span>
							</CardTitle>
							<CardDescription>รายการแจ้งเตือนที่ต้องติดตาม</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{mockAlerts.map((alert) => (
									<div
										key={alert.id}
										className="border rounded-lg p-3 hover:bg-muted/50 transition-colors"
									>
										<div className="flex items-start justify-between">
											<div className="flex items-start space-x-2">
												{getAlertIcon(alert.type)}
												<div className="flex-1">
													<div className="font-medium text-sm">{alert.title}</div>
													<div className="text-xs text-muted-foreground mt-1">
														{alert.description}
													</div>
													<div className="text-xs text-muted-foreground mt-1">{alert.date}</div>
												</div>
											</div>
											{getAlertBadge(alert.priority)}
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader>
							<CardTitle>เป้าหมายประจำเดือน</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<div className="flex justify-between mb-2">
										<span className="text-sm">รายได้</span>
										<span className="text-sm font-medium">105%</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-green-600 h-2 rounded-full" style={{ width: "105%" }}></div>
									</div>
								</div>
								<div>
									<div className="flex justify-between mb-2">
										<span className="text-sm">จำนวนออเดอร์</span>
										<span className="text-sm font-medium">98%</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-blue-600 h-2 rounded-full" style={{ width: "98%" }}></div>
									</div>
								</div>
								<div>
									<div className="flex justify-between mb-2">
										<span className="text-sm">อัตราการใช้รถ</span>
										<span className="text-sm font-medium">90%</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-orange-600 h-2 rounded-full" style={{ width: "90%" }}></div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
