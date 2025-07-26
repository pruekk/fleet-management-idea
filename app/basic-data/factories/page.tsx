"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Plus,
	Search,
	Edit,
	Trash2,
	Download,
	MapPin,
	Building,
	Clock,
	Truck,
	Users,
	Phone,
	Factory,
	Target,
	Calendar,
} from "lucide-react";

// Mock data สำหรับโรงงาน
const factoryData = [
	{
		id: 1,
		factoryName: "โรงงานคอนกรีต สาขาลาดพร้าว",
		factoryCode: "CONE-LP-001",
		customerId: 1,
		customerName: "บริษัท คอนกรีต เอ็นจิเนียริ่ง จำกัด",
		customerCode: "CONE001",
		address: "789/123 ถนนลาดพร้าว แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230",
		gpsCoordinates: "13.7563, 100.5018",
		factoryManager: {
			name: "นายประยุทธ์ โรงงาน",
			position: "ผู้จัดการโรงงาน",
			phone: "02-987-6543",
			mobile: "089-123-4567",
			email: "prayuth@concrete-eng.com",
		},
		operatingHours: {
			weekdays: "06:00 - 18:00",
			saturday: "06:00 - 16:00",
			sunday: "ปิด",
		},
		concreteTypes: ["M150", "M200", "M250", "M300"],
		capacity: {
			dailyProduction: 500,
			mixerCapacity: 8,
			storageCapacity: 1000,
		},
		deliveryRadius: 25,
		specialEquipment: ["ปั๊มคอนกรีต", "เครื่องผสมพิเศษ", "ระบบควบคุมคุณภาพ"],
		status: "ใช้งาน",
		establishedDate: "2020-03-15",
		lastDelivery: "2024-12-28",
		totalDeliveries: 1250,
		monthlyAverage: 85,
		qualityCertification: ["ISO 9001", "มอก. 291-2556"],
		paymentTerms: "30 วัน",
		notes: "โรงงานหลัก มีการผลิตตลอดสัปดาห์ ยกเว้นวันอาทิตย์",
	},
	{
		id: 2,
		factoryName: "โรงงานคอนกรีต สาขาบางนา",
		factoryCode: "CONE-BN-002",
		customerId: 1,
		customerName: "บริษัท คอนกรีต เอ็นจิเนียริ่ง จำกัด",
		customerCode: "CONE001",
		address: "456/78 ถนนบางนา แขวงบางนา เขตบางนา กรุงเทพมหานคร 10260",
		gpsCoordinates: "13.6667, 100.6000",
		factoryManager: {
			name: "นางสุภา ผลิตกรรม",
			position: "ผู้จัดการโรงงาน",
			phone: "02-876-5432",
			mobile: "089-234-5678",
			email: "supha@concrete-eng.com",
		},
		operatingHours: {
			weekdays: "05:00 - 17:00",
			saturday: "05:00 - 15:00",
			sunday: "ปิด",
		},
		concreteTypes: ["M200", "M250", "M300", "M350"],
		capacity: {
			dailyProduction: 300,
			mixerCapacity: 6,
			storageCapacity: 600,
		},
		deliveryRadius: 20,
		specialEquipment: ["ระบบผสมอัตโนมัติ", "เครื่องทดสอบคุณภาพ"],
		status: "ใช้งาน",
		establishedDate: "2021-08-10",
		lastDelivery: "2024-12-27",
		totalDeliveries: 890,
		monthlyAverage: 62,
		qualityCertification: ["ISO 9001", "มอก. 291-2556"],
		paymentTerms: "30 วัน",
		notes: "โรงงานสาขา เน้นการส่งมอบในพื้นที่บางนาและใกล้เคียง",
	},
	{
		id: 3,
		factoryName: "โรงงานผลิตคอนกรีต รามคำแหง",
		factoryCode: "HOME-RK-001",
		customerId: 2,
		customerName: "บริษัท สร้างบ้าน ดีไซน์ จำกัด",
		customerCode: "HOME001",
		address: "789/45 ถนนรามคำแหง แขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร 10240",
		gpsCoordinates: "13.7569, 100.6434",
		factoryManager: {
			name: "นายสมบัติ โรงผลิต",
			position: "หัวหน้าโรงงาน",
			phone: "02-765-4321",
			mobile: "089-345-6789",
			email: "sombat@home-design.com",
		},
		operatingHours: {
			weekdays: "06:30 - 17:30",
			saturday: "06:30 - 16:00",
			sunday: "08:00 - 12:00",
		},
		concreteTypes: ["M150", "M200", "M250"],
		capacity: {
			dailyProduction: 200,
			mixerCapacity: 4,
			storageCapacity: 400,
		},
		deliveryRadius: 15,
		specialEquipment: ["เครื่องผสมขนาดเล็ก", "ระบบบรรจุถุงอัตโนมัติ"],
		status: "ใช้งาน",
		establishedDate: "2022-01-20",
		lastDelivery: "2024-12-25",
		totalDeliveries: 456,
		monthlyAverage: 35,
		qualityCertification: ["มอก. 291-2556"],
		paymentTerms: "45 วัน",
		notes: "โรงงานขนาดกลาง เหมาะสำหรับโครงการก่อสร้างบ้านพักอาศัย",
	},
	{
		id: 4,
		factoryName: "โรงงานคอนกรีต โครงการใหญ่ พหลโยธิน",
		factoryCode: "MEGA-PY-001",
		customerId: 3,
		customerName: "บริษัท โครงการใหญ่ เดเวลอปเมนต์ จำกัด",
		customerCode: "MEGA001",
		address: "123/789 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900",
		gpsCoordinates: "13.8200, 100.5600",
		factoryManager: {
			name: "นายวีระ อุตสาหกรรม",
			position: "ผู้อำนวยการโรงงาน",
			phone: "02-654-3210",
			mobile: "089-456-7890",
			email: "wira@mega-dev.com",
		},
		operatingHours: {
			weekdays: "05:00 - 19:00",
			saturday: "05:00 - 17:00",
			sunday: "07:00 - 15:00",
		},
		concreteTypes: ["M200", "M250", "M300", "M350", "M400"],
		capacity: {
			dailyProduction: 800,
			mixerCapacity: 12,
			storageCapacity: 1500,
		},
		deliveryRadius: 35,
		specialEquipment: ["ปั๊มคอนกรีตขนาดใหญ่", "ระบบควบคุมคุณภาพอัตโนมัติ", "เครื่องทดสอบกำลังอัด"],
		status: "ใช้งาน",
		establishedDate: "2019-11-05",
		lastDelivery: "2024-12-30",
		totalDeliveries: 2150,
		monthlyAverage: 125,
		qualityCertification: ["ISO 9001", "ISO 14001", "มอก. 291-2556"],
		paymentTerms: "60 วัน",
		notes: "โรงงานที่ใหญ่ที่สุด สามารถรองรับโครงการขนาดใหญ่ได้",
	},
];

export default function BasicDataFactoriesPage() {
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("th-TH", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const activeFactories = factoryData.filter((factory) => factory.status === "ใช้งาน");
	const totalCapacity = factoryData.reduce(
		(sum, factory) => sum + factory.capacity.dailyProduction,
		0
	);
	const totalDeliveries = factoryData.reduce((sum, factory) => sum + factory.totalDeliveries, 0);

	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ข้อมูลโรงงาน</h1>
				<p className="text-muted-foreground">จัดการข้อมูลโรงงานผลิตคอนกรีตของลูกค้า</p>
			</div>

			{/* สรุปข้อมูล */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">โรงงานทั้งหมด</CardTitle>
						<Factory className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{factoryData.length}</div>
						<p className="text-xs text-muted-foreground">ใช้งาน: {activeFactories.length} แห่ง</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">กำลังผลิตรวม</CardTitle>
						<Target className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">{totalCapacity}</div>
						<p className="text-xs text-muted-foreground">คิว/วัน</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">การส่งมอบรวม</CardTitle>
						<Truck className="h-4 w-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">{totalDeliveries}</div>
						<p className="text-xs text-muted-foreground">เที่ยว</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ลูกค้าที่มีโรงงาน</CardTitle>
						<Building className="h-4 w-4 text-orange-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-600">
							{new Set(factoryData.map((f) => f.customerId)).size}
						</div>
						<p className="text-xs text-muted-foreground">บริษัท</p>
					</CardContent>
				</Card>
			</div>

			{/* ฟิลเตอร์และปุ่มเพิ่ม */}
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
						<Input placeholder="ค้นหาโรงงาน..." className="pl-10 w-64" />
					</div>
					<Select>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="เลือกลูกค้า" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทุกลูกค้า</SelectItem>
							<SelectItem value="CONE001">คอนกรีต เอ็นจิเนียริ่ง</SelectItem>
							<SelectItem value="HOME001">สร้างบ้าน ดีไซน์</SelectItem>
							<SelectItem value="MEGA001">โครงการใหญ่ เดเวลอปเมนต์</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="สถานะ" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="active">ใช้งาน</SelectItem>
							<SelectItem value="inactive">ไม่ใช้งาน</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center space-x-2">
					<Button variant="outline">
						<Download className="h-4 w-4 mr-2" />
						ส่งออก Excel
					</Button>
					<Button>
						<Plus className="h-4 w-4 mr-2" />
						เพิ่มโรงงานใหม่
					</Button>
				</div>
			</div>

			{/* รายการโรงงาน */}
			<div className="grid gap-6">
				{factoryData.map((factory) => (
					<Card key={factory.id} className="p-6">
						<div className="grid gap-6 lg:grid-cols-3">
							{/* ข้อมูลทั่วไป */}
							<div className="space-y-4">
								<div className="flex items-start justify-between">
									<div>
										<h3 className="text-lg font-semibold">{factory.factoryName}</h3>
										<p className="text-sm text-muted-foreground">รหัส: {factory.factoryCode}</p>
										<div className="flex items-center space-x-2 mt-1">
											<Building className="h-4 w-4 text-muted-foreground" />
											<p className="text-sm text-muted-foreground">
												{factory.customerName} ({factory.customerCode})
											</p>
										</div>
									</div>
									<Badge variant={factory.status === "ใช้งาน" ? "default" : "destructive"}>
										{factory.status}
									</Badge>
								</div>

								<div className="space-y-2">
									<div className="flex items-start space-x-2">
										<MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
										<div>
											<p className="text-sm">{factory.address}</p>
											<p className="text-xs text-muted-foreground">GPS: {factory.gpsCoordinates}</p>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">ผู้จัดการโรงงาน</h4>
									<div className="space-y-1">
										<div className="flex items-center space-x-2">
											<Users className="h-4 w-4 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">{factory.factoryManager.name}</p>
												<p className="text-xs text-muted-foreground">
													{factory.factoryManager.position}
												</p>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Phone className="h-4 w-4 text-muted-foreground" />
											<div className="text-xs">
												<p>โทร: {factory.factoryManager.phone}</p>
												<p>มือถือ: {factory.factoryManager.mobile}</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* ข้อมูลการผลิตและการดำเนินงาน */}
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2 text-sm">เวลาทำการ</h4>
									<div className="space-y-1 text-xs">
										<div className="flex justify-between">
											<span>จันทร์-ศุกร์:</span>
											<span>{factory.operatingHours.weekdays}</span>
										</div>
										<div className="flex justify-between">
											<span>เสาร์:</span>
											<span>{factory.operatingHours.saturday}</span>
										</div>
										<div className="flex justify-between">
											<span>อาทิตย์:</span>
											<span>{factory.operatingHours.sunday}</span>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">กำลังการผลิต</h4>
									<div className="grid grid-cols-2 gap-2 text-xs">
										<div>
											<p className="text-muted-foreground">ผลิต/วัน</p>
											<p className="font-medium">{factory.capacity.dailyProduction} คิว</p>
										</div>
										<div>
											<p className="text-muted-foreground">เครื่องผสม</p>
											<p className="font-medium">{factory.capacity.mixerCapacity} เครื่อง</p>
										</div>
										<div>
											<p className="text-muted-foreground">เก็บได้</p>
											<p className="font-medium">{factory.capacity.storageCapacity} คิว</p>
										</div>
										<div>
											<p className="text-muted-foreground">รัศมีส่งมอบ</p>
											<p className="font-medium">{factory.deliveryRadius} กม.</p>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">ประเภทคอนกรีต</h4>
									<div className="flex flex-wrap gap-1">
										{factory.concreteTypes.map((type, index) => (
											<Badge key={index} variant="outline" className="text-xs">
												{type}
											</Badge>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">อุปกรณ์พิเศษ</h4>
									<div className="space-y-1">
										{factory.specialEquipment.map((equipment, index) => (
											<p key={index} className="text-xs">
												• {equipment}
											</p>
										))}
									</div>
								</div>
							</div>

							{/* สถิติและข้อมูลเพิ่มเติม */}
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2 text-sm">สถิติการส่งมอบ</h4>
									<div className="grid grid-cols-2 gap-2 text-xs">
										<div>
											<p className="text-muted-foreground">ส่งมอบทั้งหมด</p>
											<p className="font-medium text-green-600">{factory.totalDeliveries} เที่ยว</p>
										</div>
										<div>
											<p className="text-muted-foreground">เฉลี่ย/เดือน</p>
											<p className="font-medium">{factory.monthlyAverage} เที่ยว</p>
										</div>
										<div>
											<p className="text-muted-foreground">ส่งมอบล่าสุด</p>
											<p className="font-medium">{formatDate(factory.lastDelivery)}</p>
										</div>
										<div>
											<p className="text-muted-foreground">เงื่อนไขชำระ</p>
											<p className="font-medium">{factory.paymentTerms}</p>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">การรับรอง</h4>
									<div className="flex flex-wrap gap-1">
										{factory.qualityCertification.map((cert, index) => (
											<Badge key={index} variant="secondary" className="text-xs">
												{cert}
											</Badge>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">หมายเหตุ</h4>
									<p className="text-xs text-muted-foreground">{factory.notes}</p>
								</div>

								<div className="text-xs">
									<p className="text-muted-foreground">
										วันที่ก่อตั้ง: {formatDate(factory.establishedDate)}
									</p>
								</div>
							</div>
						</div>

						<div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
							<Button variant="outline" size="sm">
								<MapPin className="h-4 w-4 mr-1" />
								แผนที่
							</Button>
							<Button variant="outline" size="sm">
								<Calendar className="h-4 w-4 mr-1" />
								ประวัติการส่งมอบ
							</Button>
							<Button variant="outline" size="sm">
								<Edit className="h-4 w-4 mr-1" />
								แก้ไข
							</Button>
							<Button variant="outline" size="sm">
								<Trash2 className="h-4 w-4 mr-1" />
								ลบ
							</Button>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
