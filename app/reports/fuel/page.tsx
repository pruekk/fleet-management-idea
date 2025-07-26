"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Download,
	TrendingUp,
	TrendingDown,
	BarChart3,
	Fuel,
	Building2,
	MapPin,
} from "lucide-react";

export default function FuelReportsPage() {
	const [selectedMonth, setSelectedMonth] = useState("2024-12");
	const [selectedPlant, setSelectedPlant] = useState("all");
	const [selectedStation, setSelectedStation] = useState("all");

	// Fuel Summary Data
	const fuelSummary = {
		carryForward: 2450.5, // ยอดยกมา
		carryOut: 2180.2, // ยอดยกไป
		paidThisMonth: 45280.75, // จ่ายในเดือนนี้
		refund: 1250.0, // เงินคืน
		totalConsumption: 47000.25, // ปริมาณใช้รวม
		averagePrice: 32.5, // ราคาเฉลี่ย
	};

	// Fuel by Station Data
	const fuelByStation = [
		{
			station: "ปตท. สาขาบางเขน",
			liters: 12500.5,
			totalCost: 406266.25,
			avgPrice: 32.5,
			visits: 45,
			percentage: 26.6,
		},
		{
			station: "เชลล์ สาขาลาดพร้าว",
			liters: 10800.0,
			totalCost: 351000.0,
			avgPrice: 32.5,
			visits: 38,
			percentage: 23.0,
		},
		{
			station: "บางจาก สาขาวิภาวดี",
			liters: 9200.75,
			totalCost: 299024.38,
			avgPrice: 32.5,
			visits: 32,
			percentage: 19.6,
		},
		{
			station: "ปตท. สาขาสะพานพุทธ",
			liters: 8850.0,
			totalCost: 287625.0,
			avgPrice: 32.5,
			visits: 31,
			percentage: 18.8,
		},
		{
			station: "เอสโซ่ สาขาราชดำริ",
			liters: 5649.0,
			totalCost: 183592.5,
			avgPrice: 32.5,
			visits: 20,
			percentage: 12.0,
		},
	];

	// Fuel by Plant Data
	const fuelByPlant = [
		{
			plant: "โรงงานบางเขน",
			liters: 18500.0,
			totalCost: 601250.0,
			avgPrice: 32.5,
			trips: 156,
			efficiency: 118.6, // ลิตร/เที่ยว
			percentage: 39.3,
		},
		{
			plant: "โรงงานลาดพร้าว",
			liters: 15200.25,
			totalCost: 494008.13,
			avgPrice: 32.5,
			trips: 128,
			efficiency: 118.8,
			percentage: 32.3,
		},
		{
			plant: "โรงงานสีลม",
			liters: 8850.0,
			totalCost: 287625.0,
			avgPrice: 32.5,
			trips: 74,
			efficiency: 119.6,
			percentage: 18.8,
		},
		{
			plant: "โรงงานสุขุมวิท",
			liters: 4450.0,
			totalCost: 144625.0,
			avgPrice: 32.5,
			trips: 38,
			efficiency: 117.1,
			percentage: 9.5,
		},
	];

	// Monthly Trend Data
	const monthlyTrend = [
		{ month: "ก.ค.", liters: 44500, cost: 1446250, avgPrice: 32.5 },
		{ month: "ส.ค.", liters: 45200, cost: 1469000, avgPrice: 32.5 },
		{ month: "ก.ย.", liters: 46800, cost: 1521000, avgPrice: 32.5 },
		{ month: "ต.ค.", liters: 47200, cost: 1534000, avgPrice: 32.5 },
		{ month: "พ.ย.", liters: 46500, cost: 1511250, avgPrice: 32.5 },
		{ month: "ธ.ค.", liters: 47000, cost: 1527500, avgPrice: 32.5 },
	];

	const formatNumber = (num: number) => {
		return new Intl.NumberFormat("th-TH").format(num);
	};

	const formatCurrency = (num: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(num);
	};

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">รายงานน้ำมัน</h1>
					<p className="text-muted-foreground">สรุปข้อมูลการใช้น้ำมันและค่าใช้จ่าย</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline">
						<Download className="h-4 w-4 mr-2" />
						ส่งออก Excel
					</Button>
					<Button>
						<BarChart3 className="h-4 w-4 mr-2" />
						พิมพ์รายงาน
					</Button>
				</div>
			</div>

			{/* Filters */}
			<Card>
				<CardHeader>
					<CardTitle>ตัวกรองข้อมูล</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<Label htmlFor="month">เดือน</Label>
							<Select value={selectedMonth} onValueChange={setSelectedMonth}>
								<SelectTrigger>
									<SelectValue placeholder="เลือกเดือน" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="2024-12">ธันวาคม 2024</SelectItem>
									<SelectItem value="2024-11">พฤศจิกายน 2024</SelectItem>
									<SelectItem value="2024-10">ตุลาคม 2024</SelectItem>
									<SelectItem value="2024-09">กันยายน 2024</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="plant">โรงงาน</Label>
							<Select value={selectedPlant} onValueChange={setSelectedPlant}>
								<SelectTrigger>
									<SelectValue placeholder="เลือกโรงงาน" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">ทั้งหมด</SelectItem>
									<SelectItem value="bangkhen">โรงงานบางเขน</SelectItem>
									<SelectItem value="ladprao">โรงงานลาดพร้าว</SelectItem>
									<SelectItem value="silom">โรงงานสีลม</SelectItem>
									<SelectItem value="sukhumvit">โรงงานสุขุมวิท</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="station">สถานีน้ำมัน</Label>
							<Select value={selectedStation} onValueChange={setSelectedStation}>
								<SelectTrigger>
									<SelectValue placeholder="เลือกสถานีน้ำมัน" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">ทั้งหมด</SelectItem>
									<SelectItem value="ptt-bangkhen">ปตท. สาขาบางเขน</SelectItem>
									<SelectItem value="shell-ladprao">เชลล์ สาขาลาดพร้าว</SelectItem>
									<SelectItem value="bangchak-vibhavadi">บางจาก สาขาวิภาวดี</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ยอดยกมา</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{formatNumber(fuelSummary.carryForward)} ลิตร</div>
						<p className="text-xs text-muted-foreground">ปริมาณคงเหลือจากเดือนก่อน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">จ่ายในเดือนนี้</CardTitle>
						<Fuel className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{formatCurrency(fuelSummary.paidThisMonth)}</div>
						<p className="text-xs text-muted-foreground">ค่าน้ำมันที่จ่ายทั้งหมด</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เงินคืน</CardTitle>
						<TrendingDown className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{formatCurrency(fuelSummary.refund)}</div>
						<p className="text-xs text-muted-foreground">เงินคืนและส่วนลด</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ยอดยกไป</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{formatNumber(fuelSummary.carryOut)} ลิตร</div>
						<p className="text-xs text-muted-foreground">ปริมาณคงเหลือไปเดือนถัดไป</p>
					</CardContent>
				</Card>
			</div>

			{/* Detailed Reports */}
			<Tabs defaultValue="summary" className="space-y-4">
				<TabsList>
					<TabsTrigger value="summary">สรุปรวม</TabsTrigger>
					<TabsTrigger value="by-station">ตามสถานีน้ำมัน</TabsTrigger>
					<TabsTrigger value="by-plant">ตามโรงงาน</TabsTrigger>
					<TabsTrigger value="trend">แนวโน้ม</TabsTrigger>
				</TabsList>

				<TabsContent value="summary" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>สรุปการใช้น้ำมันรายเดือน</CardTitle>
							<CardDescription>ข้อมูลการใช้น้ำมันและค่าใช้จ่ายโดยรวม</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="space-y-2">
									<div className="text-sm text-muted-foreground">ปริมาณใช้รวม</div>
									<div className="text-2xl font-bold">
										{formatNumber(fuelSummary.totalConsumption)} ลิตร
									</div>
								</div>
								<div className="space-y-2">
									<div className="text-sm text-muted-foreground">ราคาเฉลี่ย</div>
									<div className="text-2xl font-bold">
										{formatCurrency(fuelSummary.averagePrice)}/ลิตร
									</div>
								</div>
								<div className="space-y-2">
									<div className="text-sm text-muted-foreground">ค่าใช้จ่ายสุทธิ</div>
									<div className="text-2xl font-bold">
										{formatCurrency(fuelSummary.paidThisMonth - fuelSummary.refund)}
									</div>
								</div>
							</div>

							<div className="mt-6">
								<h4 className="text-lg font-semibold mb-4">การคำนวณยอด</h4>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span>ยอดยกมา:</span>
										<span>{formatNumber(fuelSummary.carryForward)} ลิตร</span>
									</div>
									<div className="flex justify-between">
										<span>เติมในเดือนนี้:</span>
										<span>{formatNumber(fuelSummary.totalConsumption)} ลิตร</span>
									</div>
									<div className="flex justify-between border-t pt-2">
										<span className="font-semibold">รวม:</span>
										<span className="font-semibold">
											{formatNumber(fuelSummary.carryForward + fuelSummary.totalConsumption)} ลิตร
										</span>
									</div>
									<div className="flex justify-between">
										<span>ยอดยกไป:</span>
										<span>{formatNumber(fuelSummary.carryOut)} ลิตร</span>
									</div>
									<div className="flex justify-between border-t pt-2 font-semibold">
										<span>ใช้จริง:</span>
										<span>
											{formatNumber(
												fuelSummary.carryForward +
													fuelSummary.totalConsumption -
													fuelSummary.carryOut
											)}{" "}
											ลิตร
										</span>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="by-station" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>รายงานการใช้น้ำมันตามสถานีน้ำมัน</CardTitle>
							<CardDescription>แยกตามสถานีน้ำมันที่เติม</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>สถานีน้ำมัน</TableHead>
										<TableHead className="text-right">ปริมาณ (ลิตร)</TableHead>
										<TableHead className="text-right">ค่าใช้จ่าย</TableHead>
										<TableHead className="text-right">ราคาเฉลี่ย</TableHead>
										<TableHead className="text-right">จำนวนครั้ง</TableHead>
										<TableHead className="text-right">สัดส่วน</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{fuelByStation.map((station, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">
												<div className="flex items-center gap-2">
													<MapPin className="h-4 w-4" />
													{station.station}
												</div>
											</TableCell>
											<TableCell className="text-right">{formatNumber(station.liters)}</TableCell>
											<TableCell className="text-right">
												{formatCurrency(station.totalCost)}
											</TableCell>
											<TableCell className="text-right">
												{formatCurrency(station.avgPrice)}
											</TableCell>
											<TableCell className="text-right">{station.visits}</TableCell>
											<TableCell className="text-right">
												<Badge variant="outline">{station.percentage}%</Badge>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="by-plant" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>รายงานการใช้น้ำมันตามโรงงาน</CardTitle>
							<CardDescription>แยกตามโรงงานปลายทาง</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>โรงงาน</TableHead>
										<TableHead className="text-right">ปริมาณ (ลิตร)</TableHead>
										<TableHead className="text-right">ค่าใช้จ่าย</TableHead>
										<TableHead className="text-right">จำนวนเที่ยว</TableHead>
										<TableHead className="text-right">ประสิทธิ์ภาพ</TableHead>
										<TableHead className="text-right">สัดส่วน</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{fuelByPlant.map((plant, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">
												<div className="flex items-center gap-2">
													<Building2 className="h-4 w-4" />
													{plant.plant}
												</div>
											</TableCell>
											<TableCell className="text-right">{formatNumber(plant.liters)}</TableCell>
											<TableCell className="text-right">
												{formatCurrency(plant.totalCost)}
											</TableCell>
											<TableCell className="text-right">{plant.trips}</TableCell>
											<TableCell className="text-right">
												<Badge variant={plant.efficiency < 120 ? "default" : "destructive"}>
													{plant.efficiency} ลิตร/เที่ยว
												</Badge>
											</TableCell>
											<TableCell className="text-right">
												<Badge variant="outline">{plant.percentage}%</Badge>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="trend" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>แนวโน้มการใช้น้ำมัน 6 เดือนย้อนหลัง</CardTitle>
							<CardDescription>เปรียบเทียบการใช้น้ำมันรายเดือน</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>เดือน</TableHead>
										<TableHead className="text-right">ปริมาณ (ลิตร)</TableHead>
										<TableHead className="text-right">ค่าใช้จ่าย</TableHead>
										<TableHead className="text-right">ราคาเฉลี่ย</TableHead>
										<TableHead className="text-right">เปลี่ยนแปลง</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{monthlyTrend.map((month, index) => {
										const prevMonth = monthlyTrend[index - 1];
										const change = prevMonth
											? ((month.liters - prevMonth.liters) / prevMonth.liters) * 100
											: 0;

										return (
											<TableRow key={index}>
												<TableCell className="font-medium">{month.month}</TableCell>
												<TableCell className="text-right">{formatNumber(month.liters)}</TableCell>
												<TableCell className="text-right">{formatCurrency(month.cost)}</TableCell>
												<TableCell className="text-right">
													{formatCurrency(month.avgPrice)}
												</TableCell>
												<TableCell className="text-right">
													{index > 0 && (
														<Badge variant={change > 0 ? "destructive" : "default"}>
															{change > 0 ? "+" : ""}
															{change.toFixed(1)}%
														</Badge>
													)}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
