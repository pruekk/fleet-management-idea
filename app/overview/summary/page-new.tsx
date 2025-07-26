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
	DollarSign,
	Users,
	Truck,
	Factory,
	CheckCircle,
	Clock,
	Calendar,
	Activity,
	Fuel,
	Wrench,
	Building,
} from "lucide-react";

export default function OverviewSummaryPage() {
	const [selectedPeriod, setSelectedPeriod] = useState("today");

	// ข้อมูลภาพรวมแยกตามแพล้น
	const plantData = [
		{
			plant: "แพล้น A",
			totalTrucks: 8, // รถประจำแยกตามแพล้น
			availableTrucks: 6, // รถพร้อมใช้งานแต่ละแพล้น
			checkedInEmployees: 12, // พนักงานเช็คอินแต่ละแพล้น
			underMaintenanceTrucks: 2, // รถซ่อมบำรุงแต่ละแพล้น
			yokJobs: 15, // รายการโยกแต่ละแพล้น
			tenantJobs: 8, // รายการเทนานแต่ละแพล้น
		},
		{
			plant: "แพล้น B",
			totalTrucks: 6,
			availableTrucks: 5,
			checkedInEmployees: 10,
			underMaintenanceTrucks: 1,
			yokJobs: 12,
			tenantJobs: 6,
		},
		{
			plant: "แพล้น C",
			totalTrucks: 4,
			availableTrucks: 3,
			checkedInEmployees: 8,
			underMaintenanceTrucks: 1,
			yokJobs: 8,
			tenantJobs: 4,
		},
	];

	// ข้อมูลรวมทั้งหมด
	const overallStats = {
		totalTrucks: plantData.reduce((sum, plant) => sum + plant.totalTrucks, 0), // รถโม่ทั้งหมด
		totalAvailableTrucks: plantData.reduce((sum, plant) => sum + plant.availableTrucks, 0),
		totalCheckedInEmployees: plantData.reduce((sum, plant) => sum + plant.checkedInEmployees, 0),
		totalUnderMaintenanceTrucks: plantData.reduce(
			(sum, plant) => sum + plant.underMaintenanceTrucks,
			0
		),
		totalYokJobs: plantData.reduce((sum, plant) => sum + plant.yokJobs, 0),
		totalTenantJobs: plantData.reduce((sum, plant) => sum + plant.tenantJobs, 0),
		todayTotalTrips: 42, // เที่ยววิ่งวันนี้รวม
		todayFuelUsage: 3420.5, // การใช้น้ำมันรวม (ลิตร)
		todayTotalRevenue: 285600, // รายได้วันนี้รวม (บาท)
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	return (
		<div className="container mx-auto p-6 space-y-6">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold">ภาพรวมการดำเนินงาน</h1>
					<p className="text-muted-foreground mt-2">สรุปข้อมูลการดำเนินงานรถโม่และบุคลากรทั้งหมด</p>
				</div>
				<Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
					<SelectTrigger className="w-40">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="today">วันนี้</SelectItem>
						<SelectItem value="week">สัปดาห์นี้</SelectItem>
						<SelectItem value="month">เดือนนี้</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* สรุปข้อมูลรวม */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
							<Truck className="h-4 w-4 mr-2" />
							รถโม่ทั้งหมด
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{overallStats.totalTrucks}</div>
						<div className="text-sm text-green-600">
							พร้อมใช้งาน {overallStats.totalAvailableTrucks} คัน
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
							<Users className="h-4 w-4 mr-2" />
							พนักงานเช็คอิน
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{overallStats.totalCheckedInEmployees}</div>
						<div className="text-sm text-blue-600">ทุกแพล้นรวม</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
							<Calendar className="h-4 w-4 mr-2" />
							เที่ยววิ่งวันนี้
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{overallStats.todayTotalTrips}</div>
						<div className="text-sm text-green-600">เที่ยว</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
							<DollarSign className="h-4 w-4 mr-2" />
							รายได้วันนี้
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">
							{formatCurrency(overallStats.todayTotalRevenue)}
						</div>
						<div className="text-sm text-muted-foreground">รวมทุกแพล้น</div>
					</CardContent>
				</Card>
			</div>

			{/* ข้อมูลแยกตามแพล้น */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{plantData.map((plant, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle className="flex items-center">
								<Factory className="h-5 w-5 mr-2" />
								{plant.plant}
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-1">
									<div className="text-sm text-muted-foreground">รถประจำ</div>
									<div className="text-lg font-semibold">{plant.totalTrucks} คัน</div>
								</div>
								<div className="space-y-1">
									<div className="text-sm text-muted-foreground">รถพร้อมใช้</div>
									<div className="text-lg font-semibold text-green-600">
										{plant.availableTrucks} คัน
									</div>
								</div>
								<div className="space-y-1">
									<div className="text-sm text-muted-foreground">พนักงานเช็คอิน</div>
									<div className="text-lg font-semibold text-blue-600">
										{plant.checkedInEmployees} คน
									</div>
								</div>
								<div className="space-y-1">
									<div className="text-sm text-muted-foreground">รถซ่อมบำรุง</div>
									<div className="text-lg font-semibold text-orange-600">
										{plant.underMaintenanceTrucks} คัน
									</div>
								</div>
							</div>

							<div className="border-t pt-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-1">
										<div className="text-sm text-muted-foreground">รายการโยก</div>
										<div className="text-lg font-semibold">{plant.yokJobs} รายการ</div>
									</div>
									<div className="space-y-1">
										<div className="text-sm text-muted-foreground">รายการเทนาน</div>
										<div className="text-lg font-semibold">{plant.tenantJobs} รายการ</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* ข้อมูลการใช้น้ำมันและซ่อมบำรุง */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center">
							<Fuel className="h-5 w-5 mr-2" />
							การใช้น้ำมันรวม
						</CardTitle>
						<CardDescription>ข้อมูลการใช้น้ำมันวันนี้</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-3xl font-bold text-orange-600">
							{overallStats.todayFuelUsage.toLocaleString()} L
						</div>
						<div className="text-sm text-muted-foreground mt-2">
							เฉลี่ย {(overallStats.todayFuelUsage / overallStats.todayTotalTrips).toFixed(1)}{" "}
							L/เที่ยว
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center">
							<Wrench className="h-5 w-5 mr-2" />
							รถซ่อมบำรุง
						</CardTitle>
						<CardDescription>รถที่อยู่ในระหว่างซ่อมบำรุง</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-3xl font-bold text-red-600">
							{overallStats.totalUnderMaintenanceTrucks}
						</div>
						<div className="text-sm text-muted-foreground mt-2">
							จาก {overallStats.totalTrucks} คัน (
							{(
								(overallStats.totalUnderMaintenanceTrucks / overallStats.totalTrucks) *
								100
							).toFixed(1)}
							%)
						</div>
					</CardContent>
				</Card>
			</div>

			{/* สถานะงานรวม */}
			<Card>
				<CardHeader>
					<CardTitle>สรุปงานทั้งหมด</CardTitle>
					<CardDescription>ภาพรวมการดำเนินงานในวันนี้</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">{overallStats.totalYokJobs}</div>
							<div className="text-sm text-muted-foreground">รายการโยกรวม</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-purple-600">
								{overallStats.totalTenantJobs}
							</div>
							<div className="text-sm text-muted-foreground">รายการเทนานรวม</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">
								{overallStats.totalAvailableTrucks}
							</div>
							<div className="text-sm text-muted-foreground">รถพร้อมใช้งาน</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-yellow-600">
								{overallStats.totalCheckedInEmployees}
							</div>
							<div className="text-sm text-muted-foreground">พนักงานปฏิบัติงาน</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
