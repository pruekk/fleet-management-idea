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
import { Search, Plus, Calendar, MapPin, Truck, Clock, Eye, Edit } from "lucide-react";

export default function TripsPage() {
	const trips = [
		{
			id: "T2024-001",
			date: "2024-01-15",
			truck: "ABC-1234",
			driver: "นายสมชาย ใจดี",
			route: "กรุงเทพฯ - ชลบุรี",
			customer: "บริษัท ABC จำกัด",
			startTime: "06:00",
			endTime: "14:30",
			distance: 180,
			fuel: 45,
			status: "completed",
		},
		{
			id: "T2024-002",
			date: "2024-01-15",
			truck: "DEF-5678",
			driver: "นายวิชัย รักงาน",
			route: "กรุงเทพฯ - ระยอง",
			customer: "บริษัท XYZ จำกัด",
			startTime: "05:30",
			endTime: "16:00",
			distance: 220,
			fuel: 55,
			status: "in-progress",
		},
		{
			id: "T2024-003",
			date: "2024-01-14",
			truck: "GHI-9012",
			driver: "นายประยุทธ มีวินัย",
			route: "กรุงเทพฯ - สมุทรปราการ",
			customer: "บริษัท DEF จำกัด",
			startTime: "07:00",
			endTime: "12:00",
			distance: 80,
			fuel: 25,
			status: "completed",
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
			case "cancelled":
				return <Badge variant="destructive">ยกเลิก</Badge>;
			default:
				return <Badge variant="secondary">ไม่ทราบสถานะ</Badge>;
		}
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
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">เลขที่เที่ยว</TableHead>
								<TableHead className="text-muted-foreground">วันที่</TableHead>
								<TableHead className="text-muted-foreground">ทะเบียนรถ</TableHead>
								<TableHead className="text-muted-foreground">พนักงานขับรถ</TableHead>
								<TableHead className="text-muted-foreground">เส้นทาง</TableHead>
								<TableHead className="text-muted-foreground">ลูกค้า</TableHead>
								<TableHead className="text-muted-foreground">เวลา</TableHead>
								<TableHead className="text-muted-foreground">ระยะทาง (กม.)</TableHead>
								<TableHead className="text-muted-foreground">น้ำมัน (ลิตร)</TableHead>
								<TableHead className="text-muted-foreground">สถานะ</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{trips.map((trip) => (
								<TableRow key={trip.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{trip.id}</TableCell>
									<TableCell className="text-muted-foreground">{formatDate(trip.date)}</TableCell>
									<TableCell className="text-foreground">{trip.truck}</TableCell>
									<TableCell className="text-foreground">{trip.driver}</TableCell>
									<TableCell className="text-foreground">{trip.route}</TableCell>
									<TableCell className="text-foreground">{trip.customer}</TableCell>
									<TableCell className="text-muted-foreground">
										{trip.startTime} - {trip.endTime}
									</TableCell>
									<TableCell className="text-center text-muted-foreground">
										{trip.distance}
									</TableCell>
									<TableCell className="text-center text-muted-foreground">{trip.fuel}</TableCell>
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
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Calendar className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">45</p>
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
								<p className="text-2xl font-bold text-foreground">12</p>
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
								<p className="text-2xl font-bold text-foreground">30</p>
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
								<p className="text-2xl font-bold text-foreground">1,250</p>
								<p className="text-sm text-muted-foreground">รวมระยะทาง (กม.)</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
