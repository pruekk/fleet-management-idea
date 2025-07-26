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
import { Search, Plus, Calendar, MapPin, Truck, Clock, Eye, Edit, DollarSign } from "lucide-react";

export default function TripsPage() {
	const trips = [
		{
			id: "T2024-001",
			date: "2024-01-15",
			truck: "ABC-1234",
			truckCode: "TRK-001",
			driver: "นายสมชาย ใจดี",
			driverCode: "DRV-001",
			route: "กรุงเทพฯ - ชลบุรี",
			customer: "บริษัท ABC จำกัด",
			plant: "โรงงานชลบุรี",
			startTime: "06:00",
			endTime: "14:30",
			distance: 180,
			fuel: 45,
			fuelCost: 1800,
			concrete: "มอก. 240",
			concreteVolume: 8.5,
			yokCount: 1,
			tenantCount: 0,
			tripType: "yok",
			income: 4500,
			expenses: 2200,
			profit: 2300,
			tolls: 120,
			parking: 50,
			driverBonus: 200,
			overtime: 150,
			coordinates: {
				start: { lat: 13.7563, lng: 100.5018 },
				end: { lat: 13.3611, lng: 101.0017 },
			},
			status: "completed",
			remarks: "ส่งปูนตามกำหนด ไม่มีปัญหา",
		},
		{
			id: "T2024-002",
			date: "2024-01-15",
			truck: "DEF-5678",
			truckCode: "TRK-002",
			driver: "นายวิชัย รักงาน",
			driverCode: "DRV-002",
			route: "กรุงเทพฯ - ระยอง",
			customer: "บริษัท XYZ จำกัด",
			plant: "โรงงานระยอง",
			startTime: "05:30",
			endTime: "16:00",
			distance: 220,
			fuel: 55,
			fuelCost: 2200,
			concrete: "มอก. 210",
			concreteVolume: 9.0,
			yokCount: 0,
			tenantCount: 1,
			tripType: "tenant",
			income: 5200,
			expenses: 2800,
			profit: 2400,
			tolls: 180,
			parking: 80,
			driverBonus: 250,
			overtime: 200,
			coordinates: {
				start: { lat: 13.7563, lng: 100.5018 },
				end: { lat: 12.6807, lng: 101.2829 },
			},
			status: "in-progress",
			remarks: "เดินทางราบรื่น กำลังขนถ่าย",
		},
		{
			id: "T2024-003",
			date: "2024-01-14",
			truck: "GHI-9012",
			truckCode: "TRK-003",
			driver: "นายประยุทธ มีวินัย",
			driverCode: "DRV-003",
			route: "กรุงเทพฯ - สมุทรปราการ",
			customer: "บริษัท DEF จำกัด",
			plant: "โรงงานสมุทรปราการ",
			startTime: "07:00",
			endTime: "12:00",
			distance: 80,
			fuel: 25,
			fuelCost: 1000,
			concrete: "มอก. 280",
			concreteVolume: 7.5,
			yokCount: 1,
			tenantCount: 0,
			tripType: "yok",
			income: 3200,
			expenses: 1600,
			profit: 1600,
			tolls: 60,
			parking: 30,
			driverBonus: 150,
			overtime: 0,
			coordinates: {
				start: { lat: 13.7563, lng: 100.5018 },
				end: { lat: 13.5991, lng: 100.5992 },
			},
			status: "completed",
			remarks: "ส่งงานเสร็จสิ้น",
		},
		{
			id: "T2024-004",
			date: "2024-01-16",
			truck: "JKL-3456",
			truckCode: "TRK-004",
			driver: "นายสมศักดิ์ ทำงาน",
			driverCode: "DRV-004",
			route: "กรุงเทพฯ - นครปธม",
			customer: "บริษัท GHI จำกัด",
			plant: "โรงงานนครปธม",
			startTime: "08:00",
			endTime: "",
			distance: 65,
			fuel: 20,
			fuelCost: 800,
			concrete: "มอก. 240",
			concreteVolume: 8.0,
			yokCount: 0,
			tenantCount: 1,
			tripType: "tenant",
			income: 3800,
			expenses: 1800,
			profit: 2000,
			tolls: 40,
			parking: 20,
			driverBonus: 180,
			overtime: 0,
			coordinates: {
				start: { lat: 13.7563, lng: 100.5018 },
				end: { lat: 13.8199, lng: 100.084 },
			},
			status: "loading",
			remarks: "กำลังขนถ่ายปูน",
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
			case "loading":
				return (
					<Badge variant="outline" className="text-orange-600 border-orange-600">
						กำลังขนถ่าย
					</Badge>
				);
			case "cancelled":
				return <Badge variant="destructive">ยกเลิก</Badge>;
			default:
				return <Badge variant="secondary">ไม่ทราบสถานะ</Badge>;
		}
	};

	const getTripTypeBadge = (type: string) => {
		switch (type) {
			case "yok":
				return (
					<Badge variant="outline" className="text-purple-600 border-purple-600">
						ยก
					</Badge>
				);
			case "tenant":
				return (
					<Badge variant="outline" className="text-green-600 border-green-600">
						เช่า
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
		return new Date(dateString).toLocaleDateString("th-TH");
	};

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">เที่ยววิ่ง</h1>
				<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
					<Plus className="w-4 h-4 mr-2" />
					เพิ่มเที่ยววิ่ง
				</Button>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหาเที่ยววิ่ง</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input
								placeholder="ค้นหาเลขที่เที่ยว ทะเบียนรถ หรือชื่อพนักงานขับรถ..."
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
						<Calendar className="w-5 h-5" />
						รายการเที่ยววิ่ง
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="text-muted-foreground">เลขที่เที่ยว</TableHead>
									<TableHead className="text-muted-foreground">วันที่</TableHead>
									<TableHead className="text-muted-foreground">ทะเบียนรถ</TableHead>
									<TableHead className="text-muted-foreground">พนักงานขับรถ</TableHead>
									<TableHead className="text-muted-foreground">ลูกค้า</TableHead>
									<TableHead className="text-muted-foreground">โรงงาน</TableHead>
									<TableHead className="text-muted-foreground">ปูน (ลบ.ม.)</TableHead>
									<TableHead className="text-muted-foreground">ประเภท</TableHead>
									<TableHead className="text-muted-foreground">ยก/เช่า</TableHead>
									<TableHead className="text-muted-foreground">รายได้</TableHead>
									<TableHead className="text-muted-foreground">ค่าใช้จ่าย</TableHead>
									<TableHead className="text-muted-foreground">กำไร</TableHead>
									<TableHead className="text-muted-foreground">สถานะ</TableHead>
									<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{trips.map((trip) => (
									<TableRow key={trip.id} className="hover:bg-muted/50">
										<TableCell className="font-medium text-foreground">{trip.id}</TableCell>
										<TableCell className="text-muted-foreground">{formatDate(trip.date)}</TableCell>
										<TableCell className="text-foreground">
											<div>
												<div>{trip.truck}</div>
												<div className="text-xs text-muted-foreground">{trip.truckCode}</div>
											</div>
										</TableCell>
										<TableCell className="text-foreground">
											<div>
												<div>{trip.driver}</div>
												<div className="text-xs text-muted-foreground">{trip.driverCode}</div>
											</div>
										</TableCell>
										<TableCell className="text-foreground">{trip.customer}</TableCell>
										<TableCell className="text-foreground">{trip.plant}</TableCell>
										<TableCell className="text-center text-muted-foreground">
											<div>
												<div>{trip.concreteVolume}</div>
												<div className="text-xs text-muted-foreground">{trip.concrete}</div>
											</div>
										</TableCell>
										<TableCell className="text-center">{getTripTypeBadge(trip.tripType)}</TableCell>
										<TableCell className="text-center text-muted-foreground">
											{trip.yokCount > 0 && (
												<span className="text-purple-600">ยก: {trip.yokCount}</span>
											)}
											{trip.tenantCount > 0 && (
												<span className="text-green-600">เช่า: {trip.tenantCount}</span>
											)}
										</TableCell>
										<TableCell className="font-medium text-green-600">
											{formatCurrency(trip.income)}
										</TableCell>
										<TableCell className="font-medium text-red-600">
											{formatCurrency(trip.expenses)}
										</TableCell>
										<TableCell className="font-medium text-blue-600">
											{formatCurrency(trip.profit)}
										</TableCell>
										<TableCell>{getStatusBadge(trip.status)}</TableCell>
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

			{/* Trip Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Calendar className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{trips.filter((t) => t.date === "2024-01-15" || t.date === "2024-01-16").length}
								</p>
								<p className="text-sm text-muted-foreground">เที่ยววิ่งวันนี้</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Clock className="w-8 h-8 text-yellow-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{trips.filter((t) => t.status === "in-progress" || t.status === "loading").length}
								</p>
								<p className="text-sm text-muted-foreground">กำลังดำเนินการ</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Truck className="w-8 h-8 text-green-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{trips.filter((t) => t.status === "completed").length}
								</p>
								<p className="text-sm text-muted-foreground">เสร็จสิ้น</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<MapPin className="w-8 h-8 text-purple-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{trips.reduce((sum, trip) => sum + trip.distance, 0).toLocaleString()}
								</p>
								<p className="text-sm text-muted-foreground">รวมระยะทาง (กม.)</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Financial Summary */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<DollarSign className="w-5 h-5" />
						สรุปทางการเงิน
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
							<p className="text-2xl font-bold text-green-600">
								{formatCurrency(trips.reduce((sum, trip) => sum + trip.income, 0))}
							</p>
							<p className="text-sm text-muted-foreground">รายได้รวม</p>
						</div>
						<div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
							<p className="text-2xl font-bold text-red-600">
								{formatCurrency(trips.reduce((sum, trip) => sum + trip.expenses, 0))}
							</p>
							<p className="text-sm text-muted-foreground">ค่าใช้จ่ายรวม</p>
						</div>
						<div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
							<p className="text-2xl font-bold text-blue-600">
								{formatCurrency(trips.reduce((sum, trip) => sum + trip.profit, 0))}
							</p>
							<p className="text-sm text-muted-foreground">กำไรรวม</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Trip Details by Type */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">สรุปตามประเภทเที่ยว</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<h4 className="font-medium text-foreground">เที่ยวยก</h4>
							<div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
								<p className="text-lg font-bold text-purple-600">
									{trips.filter((t) => t.tripType === "yok").length} เที่ยว
								</p>
								<p className="text-sm text-muted-foreground">
									ปริมาณปูน:{" "}
									{trips
										.filter((t) => t.tripType === "yok")
										.reduce((sum, trip) => sum + trip.concreteVolume, 0)}{" "}
									ลบ.ม.
								</p>
								<p className="text-sm text-muted-foreground">
									กำไร:{" "}
									{formatCurrency(
										trips
											.filter((t) => t.tripType === "yok")
											.reduce((sum, trip) => sum + trip.profit, 0)
									)}
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<h4 className="font-medium text-foreground">เที่ยวเช่า</h4>
							<div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
								<p className="text-lg font-bold text-green-600">
									{trips.filter((t) => t.tripType === "tenant").length} เที่ยว
								</p>
								<p className="text-sm text-muted-foreground">
									ปริมาณปูน:{" "}
									{trips
										.filter((t) => t.tripType === "tenant")
										.reduce((sum, trip) => sum + trip.concreteVolume, 0)}{" "}
									ลบ.ม.
								</p>
								<p className="text-sm text-muted-foreground">
									กำไร:{" "}
									{formatCurrency(
										trips
											.filter((t) => t.tripType === "tenant")
											.reduce((sum, trip) => sum + trip.profit, 0)
									)}
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
