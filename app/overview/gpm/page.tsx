"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
	Calculator,
	Target,
	BarChart3,
	ArrowUpRight,
	ArrowDownRight,
	Truck,
	Factory,
	Fuel,
	DollarSign,
	AlertTriangle,
	CheckCircle,
	Info,
	Users,
	Settings,
} from "lucide-react";

interface GPMData {
	period: string;
	totalGPM: number;
	transportGPM: number;
	concreteGPM: number;
	rentalGPM: number;
	revenue: number;
	grossProfit: number;
	change: number;
}

interface JobTypeGPM {
	jobType: string;
	gpm: number;
	revenue: number;
	grossProfit: number;
	change: number;
	trend: "up" | "down" | "stable";
	volume: number;
	unit: string;
}

const mockGPMData: GPMData[] = [
	{
		period: "ม.ค. 24",
		totalGPM: 22.4,
		transportGPM: 26.1,
		concreteGPM: 19.8,
		rentalGPM: 16.5,
		revenue: 2200000,
		grossProfit: 492800,
		change: 0,
	},
	{
		period: "ก.พ. 24",
		totalGPM: 23.1,
		transportGPM: 27.2,
		concreteGPM: 20.5,
		rentalGPM: 17.2,
		revenue: 2350000,
		grossProfit: 542850,
		change: 2.8,
	},
	{
		period: "มี.ค. 24",
		totalGPM: 23.8,
		transportGPM: 28.2,
		concreteGPM: 21.8,
		rentalGPM: 18.5,
		revenue: 2458750,
		grossProfit: 585183,
		change: 3.0,
	},
	{
		period: "เม.ย. 24",
		totalGPM: 24.5,
		transportGPM: 29.1,
		concreteGPM: 22.2,
		rentalGPM: 19.8,
		revenue: 2580000,
		grossProfit: 632100,
		change: 2.9,
	},
	{
		period: "พ.ค. 24",
		totalGPM: 25.2,
		transportGPM: 30.5,
		concreteGPM: 23.1,
		rentalGPM: 20.2,
		revenue: 2720000,
		grossProfit: 685440,
		change: 2.9,
	},
];

const mockJobTypeGPM: JobTypeGPM[] = [
	{
		jobType: "ขนส่งโม่ปูนระยะไกล (>50 กม.)",
		gpm: 32.5,
		revenue: 980000,
		grossProfit: 318500,
		change: 3.2,
		trend: "up",
		volume: 280,
		unit: "เที่ยว",
	},
	{
		jobType: "ขนส่งโม่ปูนระยะใกล้ (≤50 กม.)",
		gpm: 28.2,
		revenue: 1240000,
		grossProfit: 349680,
		change: 1.8,
		trend: "up",
		volume: 620,
		unit: "เที่ยว",
	},
	{
		jobType: "ขนส่งวัสดุก่อสร้าง",
		gpm: 22.8,
		revenue: 340000,
		grossProfit: 77520,
		change: -0.5,
		trend: "down",
		volume: 85,
		unit: "เที่ยว",
	},
	{
		jobType: "งานเช่ารถโม่ปูน",
		gpm: 18.5,
		revenue: 180000,
		grossProfit: 33300,
		change: 2.1,
		trend: "up",
		volume: 48,
		unit: "วัน",
	},
	{
		jobType: "บริการโม่ปูนพิเศษ",
		gpm: 35.8,
		revenue: 220000,
		grossProfit: 78760,
		change: 4.5,
		trend: "up",
		volume: 32,
		unit: "ออเดอร์",
	},
];

export default function GPMPage() {
	const [selectedPeriod, setSelectedPeriod] = useState("currentMonth");
	const [selectedComparison, setSelectedComparison] = useState("lastMonth");

	const currentGPM = mockGPMData[mockGPMData.length - 1];
	const previousGPM = mockGPMData[mockGPMData.length - 2];
	const gpmChange = currentGPM.totalGPM - previousGPM.totalGPM;

	const getTrendIcon = (trend: string) => {
		switch (trend) {
			case "up":
				return <ArrowUpRight className="h-4 w-4 text-green-600" />;
			case "down":
				return <ArrowDownRight className="h-4 w-4 text-red-600" />;
			default:
				return <BarChart3 className="h-4 w-4 text-blue-600" />;
		}
	};

	const getTrendColor = (change: number) => {
		if (change > 0) return "text-green-600";
		if (change < 0) return "text-red-600";
		return "text-blue-600";
	};

	const getGPMBadge = (gpm: number) => {
		if (gpm >= 30) return <Badge className="bg-green-500">ดีเยี่ยม</Badge>;
		if (gpm >= 25) return <Badge className="bg-blue-500">ดี</Badge>;
		if (gpm >= 20) return <Badge className="bg-yellow-500">ปานกลาง</Badge>;
		return <Badge variant="destructive">ต้องปรับปรุง</Badge>;
	};

	return (
		<div className="flex-1 space-y-6 p-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">GPM Analysis</h2>
					<p className="text-muted-foreground">วิเคราะห์อัตรากำไรขั้นต้นและประสิทธิภาพทางการเงิน</p>
				</div>
				<div className="flex items-center space-x-2">
					<Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="เลือกช่วงเวลา" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="currentMonth">เดือนปัจจุบัน</SelectItem>
							<SelectItem value="quarter">ไตรมาสปัจจุบัน</SelectItem>
							<SelectItem value="year">ปีปัจจุบัน</SelectItem>
							<SelectItem value="custom">กำหนดเอง</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* KPI Cards */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
				<Card className="hover:shadow-lg transition-shadow">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">GPM รวม</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{currentGPM.totalGPM}%</div>
						<div className="flex items-center space-x-1 text-xs">
							{gpmChange > 0 ? (
								<ArrowUpRight className="h-3 w-3 text-green-600" />
							) : (
								<ArrowDownRight className="h-3 w-3 text-red-600" />
							)}
							<span className={getTrendColor(gpmChange)}>
								{gpmChange > 0 ? "+" : ""}
								{gpmChange.toFixed(1)}%
							</span>
							<span className="text-muted-foreground">จากเดือนที่แล้ว</span>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">GPM งานขนส่ง</CardTitle>
						<Truck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{currentGPM.transportGPM}%</div>
						<div className="flex items-center space-x-1 text-xs">
							<span className="text-green-600">+1.4% จากเดือนที่แล้ว</span>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">GPM โม่ปูน</CardTitle>
						<Factory className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{currentGPM.concreteGPM}%</div>
						<div className="flex items-center space-x-1 text-xs">
							<span className="text-green-600">+0.9% จากเดือนที่แล้ว</span>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">GPM งานเช่า</CardTitle>
						<Calculator className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{currentGPM.rentalGPM}%</div>
						<div className="flex items-center space-x-1 text-xs">
							<span className="text-green-600">+0.4% จากเดือนที่แล้ว</span>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เป้าหมาย GPM</CardTitle>
						<Target className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">25.0%</div>
						<div className="flex items-center space-x-1 text-xs">
							<span className="text-green-600">
								{Math.round((currentGPM.totalGPM / 25.0) * 100)}% ของเป้าหมาย
							</span>
						</div>
					</CardContent>
				</Card>
			</div>

			<Tabs defaultValue="trends" className="space-y-4">
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="trends">แนวโน้ม</TabsTrigger>
					<TabsTrigger value="breakdown">แยกตามประเภท</TabsTrigger>
					<TabsTrigger value="analysis">การวิเคราะห์</TabsTrigger>
					<TabsTrigger value="recommendations">ข้อเสนอแนะ</TabsTrigger>
				</TabsList>

				<TabsContent value="trends" className="space-y-4">
					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>แนวโน้ม GPM รายเดือน</CardTitle>
								<CardDescription>อัตรากำไรขั้นต้นในช่วง 5 เดือนที่ผ่านมา</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{mockGPMData.map((data, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-3 border rounded-lg"
										>
											<div className="flex items-center space-x-3">
												<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
												<span className="font-medium">{data.period}</span>
											</div>
											<div className="flex items-center space-x-4">
												<div className="text-right">
													<div className="font-medium">{data.totalGPM}%</div>
													{data.change !== 0 && (
														<div className={`text-xs ${getTrendColor(data.change)}`}>
															{data.change > 0 ? "+" : ""}
															{data.change.toFixed(1)}%
														</div>
													)}
												</div>
												<div className="text-right">
													<div className="text-sm text-muted-foreground">รายได้</div>
													<div className="font-medium">฿{data.revenue.toLocaleString()}</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>เปรียบเทียบ GPM ตามประเภท</CardTitle>
								<CardDescription>อัตรากำไรขั้นต้นแยกตามประเภทงาน</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<span>งานขนส่ง</span>
										<div className="flex items-center space-x-2">
											<div className="w-32 bg-gray-200 rounded-full h-2">
												<div
													className="bg-green-600 h-2 rounded-full"
													style={{ width: `${(currentGPM.transportGPM / 35) * 100}%` }}
												></div>
											</div>
											<span className="font-medium text-green-600">{currentGPM.transportGPM}%</span>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<span>โม่ปูน</span>
										<div className="flex items-center space-x-2">
											<div className="w-32 bg-gray-200 rounded-full h-2">
												<div
													className="bg-blue-600 h-2 rounded-full"
													style={{ width: `${(currentGPM.concreteGPM / 35) * 100}%` }}
												></div>
											</div>
											<span className="font-medium text-blue-600">{currentGPM.concreteGPM}%</span>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<span>งานเช่า</span>
										<div className="flex items-center space-x-2">
											<div className="w-32 bg-gray-200 rounded-full h-2">
												<div
													className="bg-orange-600 h-2 rounded-full"
													style={{ width: `${(currentGPM.rentalGPM / 35) * 100}%` }}
												></div>
											</div>
											<span className="font-medium text-orange-600">{currentGPM.rentalGPM}%</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="breakdown" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>GPM แยกตามประเภทงานรายละเอียด</CardTitle>
							<CardDescription>วิเคราะห์อัตรากำไรขั้นต้นของแต่ละประเภทงาน</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{mockJobTypeGPM.map((job, index) => (
									<div
										key={index}
										className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
									>
										<div className="flex items-center justify-between mb-3">
											<div className="flex items-center space-x-3">
												<div className="font-medium">{job.jobType}</div>
												{getGPMBadge(job.gpm)}
											</div>
											<div className="flex items-center space-x-2">
												{getTrendIcon(job.trend)}
												<span className={`font-medium ${getTrendColor(job.change)}`}>
													{job.change > 0 ? "+" : ""}
													{job.change}%
												</span>
											</div>
										</div>
										<div className="grid grid-cols-4 gap-4 text-sm">
											<div>
												<div className="text-muted-foreground">GPM</div>
												<div className="font-medium text-lg">{job.gpm}%</div>
											</div>
											<div>
												<div className="text-muted-foreground">รายได้</div>
												<div className="font-medium">฿{job.revenue.toLocaleString()}</div>
											</div>
											<div>
												<div className="text-muted-foreground">กำไรขั้นต้น</div>
												<div className="font-medium text-green-600">
													฿{job.grossProfit.toLocaleString()}
												</div>
											</div>
											<div>
												<div className="text-muted-foreground">ปริมาณงาน</div>
												<div className="font-medium">
													{job.volume} {job.unit}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="analysis" className="space-y-4">
					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>การวิเคราะห์ต้นทุน</CardTitle>
								<CardDescription>สัดส่วนต้นทุนที่ส่งผลต่อ GPM</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span>ค่าน้ำมัน</span>
										<div className="flex items-center space-x-2">
											<span className="text-sm text-muted-foreground">45%</span>
											<Fuel className="h-4 w-4 text-orange-500" />
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span>ค่าแรงขับรถ</span>
										<div className="flex items-center space-x-2">
											<span className="text-sm text-muted-foreground">25%</span>
											<Users className="h-4 w-4 text-blue-500" />
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span>ค่าซ่อมบำรุง</span>
										<div className="flex items-center space-x-2">
											<span className="text-sm text-muted-foreground">15%</span>
											<Settings className="h-4 w-4 text-green-500" />
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span>ค่าใช้จ่ายอื่นๆ</span>
										<div className="flex items-center space-x-2">
											<span className="text-sm text-muted-foreground">15%</span>
											<DollarSign className="h-4 w-4 text-gray-500" />
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>ปัจจัยที่ส่งผลต่อ GPM</CardTitle>
								<CardDescription>ตัวแปรสำคัญที่ควรติดตาม</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="border-l-4 border-red-500 pl-4">
										<h4 className="font-semibold text-red-700">ราคาน้ำมัน</h4>
										<p className="text-sm text-muted-foreground">
											เพิ่มขึ้น 8% ส่งผลกระทบต่อ GPM -2.1%
										</p>
									</div>
									<div className="border-l-4 border-green-500 pl-4">
										<h4 className="font-semibold text-green-700">ประสิทธิภาพเส้นทาง</h4>
										<p className="text-sm text-muted-foreground">
											การปรับปรุงเส้นทางช่วยลดต้นทุน 5%
										</p>
									</div>
									<div className="border-l-4 border-blue-500 pl-4">
										<h4 className="font-semibold text-blue-700">การใช้งานรถ</h4>
										<p className="text-sm text-muted-foreground">
											อัตราการใช้งาน 90% ช่วยกระจายต้นทุนคงที่
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="recommendations" className="space-y-4">
					<div className="grid gap-6 md:grid-cols-1">
						<Card>
							<CardHeader>
								<CardTitle>ข้อเสนอแนะเชิงกลยุทธ์</CardTitle>
								<CardDescription>แนวทางปรับปรุงและเพิ่มประสิทธิภาพ GPM</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-6">
									<div className="border rounded-lg p-4 bg-green-50">
										<div className="flex items-start space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600 mt-1" />
											<div>
												<h4 className="font-semibold text-green-700 mb-2">โอกาสการเจริญเติบโต</h4>
												<ul className="space-y-1 text-sm text-green-600">
													<li>• เพิ่มสัดส่วนงานขนส่งระยะไกลที่มี GPM สูง (32.5%)</li>
													<li>• ขยายบริการโม่ปูนพิเศษที่มีมาร์จิ้นสูง (35.8%)</li>
													<li>• พัฒนาแพ็กเกจบริการครบวงจรเพื่อเพิ่มมูลค่า</li>
												</ul>
											</div>
										</div>
									</div>

									<div className="border rounded-lg p-4 bg-yellow-50">
										<div className="flex items-start space-x-3">
											<AlertTriangle className="h-5 w-5 text-yellow-600 mt-1" />
											<div>
												<h4 className="font-semibold text-yellow-700 mb-2">จุดที่ควรปรับปรุง</h4>
												<ul className="space-y-1 text-sm text-yellow-600">
													<li>• ปรับปรุงประสิทธิภาพเชื้อเพลิงเพื่อลดต้นทุน</li>
													<li>• เจรจาต่อรองราคาน้ำมันกับซัพพลายเออร์</li>
													<li>• ปรับราคาบริการเช่ารถให้สอดคล้องกับต้นทุน</li>
												</ul>
											</div>
										</div>
									</div>

									<div className="border rounded-lg p-4 bg-blue-50">
										<div className="flex items-start space-x-3">
											<Info className="h-5 w-5 text-blue-600 mt-1" />
											<div>
												<h4 className="font-semibold text-blue-700 mb-2">การลงทุนระยะยาว</h4>
												<ul className="space-y-1 text-sm text-blue-600">
													<li>• ลงทุนในรถใหม่ที่ประหยัดเชื้อเพลิงมากขึ้น</li>
													<li>• ระบบ GPS ติดตามเส้นทางเพื่อลดต้นทุนขนส่ง</li>
													<li>• ระบบบริหารจัดการเชื้อเพลิงอัตโนมัติ</li>
												</ul>
											</div>
										</div>
									</div>

									<div className="grid gap-4 md:grid-cols-3">
										<Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
											<CardContent className="p-4">
												<div className="text-center">
													<div className="text-2xl font-bold">+3.2%</div>
													<div className="text-sm opacity-90">เป้าหมาย GPM เพิ่มขึ้น</div>
													<div className="text-xs opacity-75">ภายใน 6 เดือน</div>
												</div>
											</CardContent>
										</Card>
										<Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
											<CardContent className="p-4">
												<div className="text-center">
													<div className="text-2xl font-bold">-5%</div>
													<div className="text-sm opacity-90">ลดต้นทุนเชื้อเพลิง</div>
													<div className="text-xs opacity-75">ภายใน 3 เดือน</div>
												</div>
											</CardContent>
										</Card>
										<Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
											<CardContent className="p-4">
												<div className="text-center">
													<div className="text-2xl font-bold">25%</div>
													<div className="text-sm opacity-90">เพิ่มงานมาร์จิ้นสูง</div>
													<div className="text-xs opacity-75">ภายใน 4 เดือน</div>
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
