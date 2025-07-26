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
	Phone,
	Mail,
	MapPin,
	Building2,
	CreditCard,
	User,
	Wrench,
	Fuel,
	Package,
	Clock,
	DollarSign,
	Calendar,
	Star,
} from "lucide-react";

// Mock data สำหรับซัพพลายเออร์
const supplierData = [
	{
		id: 1,
		companyName: "บริษัท ซ่อมรถโม่ เอ็กซ์เปิร์ท จำกัด",
		companyCode: "SUP-REPAIR-001",
		taxId: "0105559001234",
		supplierType: "ซ่อมบำรุง",
		address: "456/123 ถนนลาดพร้าว แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230",
		contactPerson: {
			name: "นายสมเกียรติ ช่างเก่ง",
			position: "หัวหน้าช่าง",
			phone: "02-123-9876",
			mobile: "089-888-9999",
			email: "somkiat@repair-expert.com",
		},
		businessType: "ซ่อมแซมและบำรุงรักษารถโม่",
		services: [
			"ซ่อมเครื่องยนต์",
			"ซ่อมระบบไฮดรอลิก",
			"เปลี่ยนชิ้นส่วน",
			"บำรุงรักษาตามเวลา",
			"ตรวจเช็คคุณภาพ",
		],
		specialization: ["รถโม่ Mitsubishi", "รถโม่ Isuzu", "รถโม่ Hino"],
		paymentTerms: "15 วัน",
		creditLimit: 500000,
		bankAccount: {
			bankName: "ธนาคารกสิกรไทย",
			accountNumber: "987-6-54321-0",
			accountName: "บริษัท ซ่อมรถโม่ เอ็กซ์เปิร์ท จำกัด",
		},
		operatingHours: {
			weekdays: "08:00 - 17:00",
			saturday: "08:00 - 16:00",
			sunday: "ปิด",
		},
		emergencyService: true,
		rating: 4.8,
		responseTime: "2 ชั่วโมง",
		warranty: "6 เดือน",
		certifications: ["ISO 9001", "ใบอนุญาตซ่อมรถยนต์"],
		status: "ใช้งาน",
		registrationDate: "2022-03-15",
		lastService: "2024-12-25",
		totalOrders: 89,
		totalSpent: 2450000,
		averageOrderValue: 27528,
		notes: "ช่างมีความเชี่ยวชาญสูง ตอบสนองเร็ว บริการดีเยี่ยม",
	},
	{
		id: 2,
		companyName: "บริษัท อะไหล่รถโม่ ครบครัน จำกัด",
		companyCode: "SUP-PARTS-002",
		taxId: "0105559002345",
		supplierType: "อะไหล่",
		address: "789/456 ถนนรามคำแหง แขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร 10240",
		contactPerson: {
			name: "นางสาวปรียา อะไหล่ดี",
			position: "ผู้จัดการฝ่ายขาย",
			phone: "02-234-8765",
			mobile: "089-777-8888",
			email: "priya@parts-complete.com",
		},
		businessType: "จำหน่ายอะไหล่รถโม่และเครื่องจักร",
		services: [
			"จำหน่ายอะไหล่แท้",
			"อะไหล่ทดแทน",
			"ส่งของถึงหน้างาน",
			"รับประกันคุณภาพ",
			"คำปรึกษาทางเทคนิค",
		],
		specialization: ["อะไหล่เครื่องยนต์", "ชิ้นส่วนไฮดรอลิก", "ยางและล้อ", "ระบบเบรก"],
		paymentTerms: "30 วัน",
		creditLimit: 800000,
		bankAccount: {
			bankName: "ธนาคารไทยพาณิชย์",
			accountNumber: "876-5-43210-9",
			accountName: "บริษัท อะไหล่รถโม่ ครบครัน จำกัด",
		},
		operatingHours: {
			weekdays: "08:00 - 18:00",
			saturday: "08:00 - 17:00",
			sunday: "09:00 - 15:00",
		},
		emergencyService: false,
		rating: 4.5,
		responseTime: "4 ชั่วโมง",
		warranty: "1 ปี",
		certifications: ["ตัวแทนจำหน่ายอะไหล่แท้", "ISO 14001"],
		status: "ใช้งาน",
		registrationDate: "2021-08-10",
		lastService: "2024-12-28",
		totalOrders: 156,
		totalSpent: 1890000,
		averageOrderValue: 12115,
		notes: "มีอะไหล่ครบครัน ราคาดี ส่งของรวดเร็ว",
	},
	{
		id: 3,
		companyName: "ปั๊มน้ำมัน PTT สาขาลาดพร้าว",
		companyCode: "SUP-FUEL-003",
		taxId: "0105559003456",
		supplierType: "น้ำมันเชื้อเพลิง",
		address: "123/789 ถนนลาดพร้าว แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900",
		contactPerson: {
			name: "นายสุรชัย เชื้อเพลิง",
			position: "หัวหน้าสถานี",
			phone: "02-345-7654",
			mobile: "089-666-7777",
			email: "surachai@ptt-ladprao.com",
		},
		businessType: "จำหน่ายน้ำมันเชื้อเพลิง",
		services: [
			"จำหน่ายน้ำมันดีเซล",
			"น้ำมันเบนซิน",
			"น้ำมันหล่อลื่น",
			"บริการเติมน้ำมันนอกสถานที่",
			"บัตรเครดิตน้ำมัน",
		],
		specialization: ["ดีเซลพรีเมี่ยม", "น้ำมันหล่อลื่นรถบรรทุก", "สารเติมแต่ง"],
		paymentTerms: "7 วัน",
		creditLimit: 300000,
		bankAccount: {
			bankName: "ธนาคารกรุงเทพ",
			accountNumber: "765-4-32109-8",
			accountName: "ปั๊มน้ำมัน PTT สาขาลาดพร้าว",
		},
		operatingHours: {
			weekdays: "24 ชั่วโมง",
			saturday: "24 ชั่วโมง",
			sunday: "24 ชั่วโมง",
		},
		emergencyService: true,
		rating: 4.7,
		responseTime: "30 นาที",
		warranty: "N/A",
		certifications: ["มาตรฐานปิโตรเลียม", "ใบอนุญาตจำหน่ายน้ำมัน"],
		status: "ใช้งาน",
		registrationDate: "2020-12-01",
		lastService: "2024-12-29",
		totalOrders: 345,
		totalSpent: 4250000,
		averageOrderValue: 12319,
		notes: "สะดวก เปิด 24 ชั่วโมง ราคาเป็นธรรม",
	},
	{
		id: 4,
		companyName: "บริษัท ยางรถโม่ คุณภาพ จำกัด",
		companyCode: "SUP-TIRE-004",
		taxId: "0105559004567",
		supplierType: "ยางและล้อ",
		address: "654/321 ถนนบางนา แขวงบางนา เขตบางนา กรุงเทพมหานคร 10260",
		contactPerson: {
			name: "นายประสิทธิ์ ยางดี",
			position: "ผู้จัดการฝ่ายขาย",
			phone: "02-456-6543",
			mobile: "089-555-6666",
			email: "prasit@tire-quality.com",
		},
		businessType: "จำหน่ายยางและล้อรถบรรทุก",
		services: ["จำหน่ายยางใหม่", "ยางมือสอง", "ซ่อมยาง", "ถ่วงล้อ", "บริการนอกสถานที่"],
		specialization: ["ยางรถบรรทุกหนัก", "ยางรถโม่", "ล้อเหล็ก", "ล้ออัลลอย"],
		paymentTerms: "45 วัน",
		creditLimit: 600000,
		bankAccount: {
			bankName: "ธนาคารกรุงศรีอยุธยา",
			accountNumber: "654-3-21098-7",
			accountName: "บริษัท ยางรถโม่ คุณภาพ จำกัด",
		},
		operatingHours: {
			weekdays: "08:00 - 18:00",
			saturday: "08:00 - 17:00",
			sunday: "09:00 - 16:00",
		},
		emergencyService: true,
		rating: 4.3,
		responseTime: "1 ชั่วโมง",
		warranty: "2 ปี",
		certifications: ["ตัวแทนจำหน่ายยางแท้", "ISO 9001"],
		status: "ระงับ",
		registrationDate: "2023-02-20",
		lastService: "2024-11-15",
		totalOrders: 67,
		totalSpent: 890000,
		averageOrderValue: 13284,
		notes: "คุณภาพดี แต่ช่วงนี้มีปัญหาการส่งของล่าช้า",
	},
];

export default function BasicDataSuppliersPage() {
	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("th-TH", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const activeSuppliers = supplierData.filter((supplier) => supplier.status === "ใช้งาน");
	const totalSpent = supplierData.reduce((sum, supplier) => sum + supplier.totalSpent, 0);
	const totalOrders = supplierData.reduce((sum, supplier) => sum + supplier.totalOrders, 0);

	const getSupplierTypeIcon = (type: string) => {
		switch (type) {
			case "ซ่อมบำรุง":
				return <Wrench className="h-4 w-4" />;
			case "อะไหล่":
				return <Package className="h-4 w-4" />;
			case "น้ำมันเชื้อเพลิง":
				return <Fuel className="h-4 w-4" />;
			case "ยางและล้อ":
				return <Package className="h-4 w-4" />;
			default:
				return <Building2 className="h-4 w-4" />;
		}
	};

	const getSupplierTypeColor = (type: string) => {
		switch (type) {
			case "ซ่อมบำรุง":
				return "bg-red-100 text-red-800";
			case "อะไหล่":
				return "bg-blue-100 text-blue-800";
			case "น้ำมันเชื้อเพลิง":
				return "bg-orange-100 text-orange-800";
			case "ยางและล้อ":
				return "bg-purple-100 text-purple-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ข้อมูลซัพพลายเออร์</h1>
				<p className="text-muted-foreground">
					จัดการข้อมูลซัพพลายเออร์สำหรับการซ่อมบำรุงและจัดซื้อ
				</p>
			</div>

			{/* สรุปข้อมูล */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ซัพพลายเออร์ทั้งหมด</CardTitle>
						<Building2 className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{supplierData.length}</div>
						<p className="text-xs text-muted-foreground">
							ใช้งาน: {activeSuppliers.length} | ระงับ:{" "}
							{supplierData.length - activeSuppliers.length}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ค่าใช้จ่ายรวม</CardTitle>
						<DollarSign className="h-4 w-4 text-red-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600">{formatCurrency(totalSpent)}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">คำสั่งซื้อรวม</CardTitle>
						<Package className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">{totalOrders}</div>
						<p className="text-xs text-muted-foreground">คำสั่งซื้อ</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เครดิตรวม</CardTitle>
						<CreditCard className="h-4 w-4 text-orange-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-600">
							{formatCurrency(
								supplierData.reduce((sum, supplier) => sum + supplier.creditLimit, 0)
							)}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* ฟิลเตอร์และปุ่มเพิ่ม */}
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
						<Input placeholder="ค้นหาซัพพลายเออร์..." className="pl-10 w-64" />
					</div>
					<Select>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="ประเภทซัพพลายเออร์" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="repair">ซ่อมบำรุง</SelectItem>
							<SelectItem value="parts">อะไหล่</SelectItem>
							<SelectItem value="fuel">น้ำมันเชื้อเพลิง</SelectItem>
							<SelectItem value="tire">ยางและล้อ</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="สถานะ" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="active">ใช้งาน</SelectItem>
							<SelectItem value="suspended">ระงับ</SelectItem>
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
						เพิ่มซัพพลายเออร์ใหม่
					</Button>
				</div>
			</div>

			{/* รายการซัพพลายเออร์ */}
			<div className="grid gap-6">
				{supplierData.map((supplier) => (
					<Card key={supplier.id} className="p-6">
						<div className="grid gap-6 lg:grid-cols-3">
							{/* ข้อมูลทั่วไป */}
							<div className="space-y-4">
								<div className="flex items-start justify-between">
									<div>
										<h3 className="text-lg font-semibold">{supplier.companyName}</h3>
										<p className="text-sm text-muted-foreground">รหัส: {supplier.companyCode}</p>
										<p className="text-sm text-muted-foreground">
											เลขประจำตัวผู้เสียภาษี: {supplier.taxId}
										</p>
										<div className="flex items-center space-x-2 mt-2">
											<div
												className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSupplierTypeColor(
													supplier.supplierType
												)}`}
											>
												{getSupplierTypeIcon(supplier.supplierType)}
												<span className="ml-1">{supplier.supplierType}</span>
											</div>
										</div>
									</div>
									<Badge variant={supplier.status === "ใช้งาน" ? "default" : "destructive"}>
										{supplier.status}
									</Badge>
								</div>

								<div className="space-y-2">
									<div className="flex items-start space-x-2">
										<MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
										<p className="text-sm">{supplier.address}</p>
									</div>
									<div className="flex items-center space-x-2">
										<Building2 className="h-4 w-4 text-muted-foreground" />
										<p className="text-sm">{supplier.businessType}</p>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">ผู้ติดต่อ</h4>
									<div className="space-y-1">
										<div className="flex items-center space-x-2">
											<User className="h-4 w-4 text-muted-foreground" />
											<div>
												<p className="text-sm font-medium">{supplier.contactPerson.name}</p>
												<p className="text-xs text-muted-foreground">
													{supplier.contactPerson.position}
												</p>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Phone className="h-4 w-4 text-muted-foreground" />
											<div className="text-xs">
												<p>โทร: {supplier.contactPerson.phone}</p>
												<p>มือถือ: {supplier.contactPerson.mobile}</p>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Mail className="h-4 w-4 text-muted-foreground" />
											<p className="text-xs">{supplier.contactPerson.email}</p>
										</div>
									</div>
								</div>
							</div>

							{/* บริการและข้อมูลการดำเนินงาน */}
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2 text-sm">บริการที่ให้</h4>
									<div className="space-y-1">
										{supplier.services.map((service, index) => (
											<p key={index} className="text-xs">
												• {service}
											</p>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">ความเชี่ยวชาญ</h4>
									<div className="flex flex-wrap gap-1">
										{supplier.specialization.map((spec, index) => (
											<Badge key={index} variant="outline" className="text-xs">
												{spec}
											</Badge>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">เวลาทำการ</h4>
									<div className="space-y-1 text-xs">
										<div className="flex justify-between">
											<span>จันทร์-ศุกร์:</span>
											<span>{supplier.operatingHours.weekdays}</span>
										</div>
										<div className="flex justify-between">
											<span>เสาร์:</span>
											<span>{supplier.operatingHours.saturday}</span>
										</div>
										<div className="flex justify-between">
											<span>อาทิตย์:</span>
											<span>{supplier.operatingHours.sunday}</span>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-2 text-xs">
									<div>
										<p className="text-muted-foreground">บริการฉุกเฉิน</p>
										<p className="font-medium">{supplier.emergencyService ? "มี" : "ไม่มี"}</p>
									</div>
									<div>
										<p className="text-muted-foreground">เวลาตอบสนอง</p>
										<p className="font-medium">{supplier.responseTime}</p>
									</div>
									<div>
										<p className="text-muted-foreground">การรับประกัน</p>
										<p className="font-medium">{supplier.warranty}</p>
									</div>
									<div className="flex items-center space-x-1">
										<Star className="h-3 w-3 text-yellow-500 fill-current" />
										<p className="font-medium">{supplier.rating}</p>
									</div>
								</div>
							</div>

							{/* การเงินและสถิติ */}
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2 text-sm">ข้อมูลการเงิน</h4>
									<div className="grid grid-cols-2 gap-2 text-xs">
										<div>
											<p className="text-muted-foreground">เงื่อนไขชำระ</p>
											<p className="font-medium">{supplier.paymentTerms}</p>
										</div>
										<div>
											<p className="text-muted-foreground">วงเงินเครดิต</p>
											<p className="font-medium text-green-600">
												{formatCurrency(supplier.creditLimit)}
											</p>
										</div>
									</div>

									<div className="mt-2">
										<h5 className="font-medium text-xs mb-1">บัญชีธนาคาร</h5>
										<div className="space-y-1 text-xs">
											<p>
												<span className="text-muted-foreground">ธนาคาร:</span>{" "}
												{supplier.bankAccount.bankName}
											</p>
											<p>
												<span className="text-muted-foreground">เลขที่:</span>{" "}
												{supplier.bankAccount.accountNumber}
											</p>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">สถิติการซื้อ</h4>
									<div className="space-y-2 text-xs">
										<div className="flex justify-between">
											<span>คำสั่งซื้อทั้งหมด:</span>
											<span className="font-medium">{supplier.totalOrders} ใบ</span>
										</div>
										<div className="flex justify-between">
											<span>ค่าใช้จ่ายรวม:</span>
											<span className="font-medium text-red-600">
												{formatCurrency(supplier.totalSpent)}
											</span>
										</div>
										<div className="flex justify-between">
											<span>เฉลี่ย/ใบ:</span>
											<span className="font-medium">
												{formatCurrency(supplier.averageOrderValue)}
											</span>
										</div>
										<div className="flex justify-between">
											<span>สั่งซื้อล่าสุด:</span>
											<span className="font-medium">{formatDate(supplier.lastService)}</span>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">การรับรอง</h4>
									<div className="flex flex-wrap gap-1">
										{supplier.certifications.map((cert, index) => (
											<Badge key={index} variant="secondary" className="text-xs">
												{cert}
											</Badge>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-sm">หมายเหตุ</h4>
									<p className="text-xs text-muted-foreground">{supplier.notes}</p>
								</div>
							</div>
						</div>

						<div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
							<Button variant="outline" size="sm">
								<Calendar className="h-4 w-4 mr-1" />
								ประวัติการสั่งซื้อ
							</Button>
							<Button variant="outline" size="sm">
								<DollarSign className="h-4 w-4 mr-1" />
								ใบกำกับภาษี
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
