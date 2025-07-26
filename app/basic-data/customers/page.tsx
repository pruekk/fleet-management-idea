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
	Building,
	CreditCard,
	User,
	Factory,
} from "lucide-react";

// Mock data สำหรับลูกค้า
const customerData = [
	{
		id: 1,
		companyName: "บริษัท คอนกรีต เอ็นจิเนียริ่ง จำกัด",
		companyCode: "CONE001",
		taxId: "0105558001234",
		address: "123/45 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110",
		contactPerson: {
			name: "นายสมชาย วิศวกรรม",
			position: "ผู้จัดการฝ่ายจัดซื้อ",
			phone: "02-123-4567",
			mobile: "081-234-5678",
			email: "somchai@concrete-eng.com",
		},
		businessType: "รับเหมาก่อสร้าง",
		creditLimit: 2000000,
		paymentTerms: "30 วัน",
		bankAccount: {
			bankName: "ธนาคารกสิกรไทย",
			accountNumber: "123-4-56789-0",
			accountName: "บริษัท คอนกรีต เอ็นจิเนียริ่ง จำกัด",
		},
		factoryCount: 2,
		status: "ใช้งาน",
		registrationDate: "2023-01-15",
		lastOrderDate: "2024-12-28",
		totalOrders: 156,
		totalRevenue: 45600000,
	},
	{
		id: 2,
		companyName: "บริษัท สร้างบ้าน ดีไซน์ จำกัด",
		companyCode: "HOME001",
		taxId: "0105558002345",
		address: "456/78 ถนนรามคำแหง แขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร 10240",
		contactPerson: {
			name: "นางสาวปรียา ก่อสร้าง",
			position: "หัวหน้าโครงการ",
			phone: "02-234-5678",
			mobile: "082-345-6789",
			email: "priya@home-design.com",
		},
		businessType: "รับเหมาก่อสร้างบ้านพักอาศัย",
		creditLimit: 1500000,
		paymentTerms: "45 วัน",
		bankAccount: {
			bankName: "ธนาคารไทยพาณิชย์",
			accountNumber: "234-5-67890-1",
			accountName: "บริษัท สร้างบ้าน ดีไซน์ จำกัด",
		},
		factoryCount: 1,
		status: "ใช้งาน",
		registrationDate: "2023-03-22",
		lastOrderDate: "2024-12-25",
		totalOrders: 89,
		totalRevenue: 28900000,
	},
	{
		id: 3,
		companyName: "บริษัท โครงการใหญ่ เดเวลอปเมนต์ จำกัด",
		companyCode: "MEGA001",
		taxId: "0105558003456",
		address: "789/12 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900",
		contactPerson: {
			name: "นายวิชัย โครงการ",
			position: "ผู้อำนวยการฝ่ายจัดซื้อ",
			phone: "02-345-6789",
			mobile: "083-456-7890",
			email: "wichai@mega-dev.com",
		},
		businessType: "พัฒนาอสังหาริมทรัพย์",
		creditLimit: 5000000,
		paymentTerms: "60 วัน",
		bankAccount: {
			bankName: "ธนาคารกรุงเทพ",
			accountNumber: "345-6-78901-2",
			accountName: "บริษัท โครงการใหญ่ เดเวลอปเมนต์ จำกัด",
		},
		factoryCount: 3,
		status: "ใช้งาน",
		registrationDate: "2022-11-10",
		lastOrderDate: "2024-12-30",
		totalOrders: 234,
		totalRevenue: 89500000,
	},
	{
		id: 4,
		companyName: "บริษัท รีสอร์ท แฟมิลี่ จำกัด",
		companyCode: "RESORT001",
		taxId: "0105558004567",
		address: "321/99 ถนนเพชรบุรี แขวงมักกะสัน เขตราชเทวี กรุงเทพมหานคร 10400",
		contactPerson: {
			name: "นางวรรณี ท่องเที่ยว",
			position: "ผู้จัดการทั่วไป",
			phone: "02-456-7890",
			mobile: "084-567-8901",
			email: "wannee@resort-family.com",
		},
		businessType: "ธุรกิจรีสอร์ทและที่พัก",
		creditLimit: 800000,
		paymentTerms: "30 วัน",
		bankAccount: {
			bankName: "ธนาคารกรุงศรีอยุธยา",
			accountNumber: "456-7-89012-3",
			accountName: "บริษัท รีสอร์ท แฟมิลี่ จำกัด",
		},
		factoryCount: 0,
		status: "ระงับ",
		registrationDate: "2023-08-05",
		lastOrderDate: "2024-10-15",
		totalOrders: 23,
		totalRevenue: 5600000,
	},
];

export default function BasicDataCustomersPage() {
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

	const activeCustomers = customerData.filter((customer) => customer.status === "ใช้งาน");
	const totalRevenue = customerData.reduce((sum, customer) => sum + customer.totalRevenue, 0);
	const totalOrders = customerData.reduce((sum, customer) => sum + customer.totalOrders, 0);

	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ข้อมูลลูกค้า</h1>
				<p className="text-muted-foreground">จัดการข้อมูลลูกค้าและรายละเอียดการติดต่อ</p>
			</div>

			{/* สรุปข้อมูล */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ลูกค้าทั้งหมด</CardTitle>
						<Building className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{customerData.length}</div>
						<p className="text-xs text-muted-foreground">
							ใช้งาน: {activeCustomers.length} | ระงับ:{" "}
							{customerData.length - activeCustomers.length}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายได้รวม</CardTitle>
						<CreditCard className="h-4 w-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">{formatCurrency(totalRevenue)}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">คำสั่งซื้อรวม</CardTitle>
						<Factory className="h-4 w-4 text-blue-600" />
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
								customerData.reduce((sum, customer) => sum + customer.creditLimit, 0)
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
						<Input placeholder="ค้นหาลูกค้า..." className="pl-10 w-64" />
					</div>
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
					<Select>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="ประเภทธุรกิจ" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="construction">รับเหมาก่อสร้าง</SelectItem>
							<SelectItem value="housing">ก่อสร้างบ้าน</SelectItem>
							<SelectItem value="development">พัฒนาอสังหาฯ</SelectItem>
							<SelectItem value="hospitality">ธุรกิจที่พัก</SelectItem>
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
						เพิ่มลูกค้าใหม่
					</Button>
				</div>
			</div>

			{/* ตารางข้อมูล */}
			<div className="grid gap-6">
				{customerData.map((customer) => (
					<Card key={customer.id} className="p-6">
						<div className="grid gap-6 md:grid-cols-2">
							{/* ข้อมูลบริษัท */}
							<div className="space-y-4">
								<div className="flex items-start justify-between">
									<div>
										<h3 className="text-lg font-semibold">{customer.companyName}</h3>
										<p className="text-sm text-muted-foreground">รหัส: {customer.companyCode}</p>
										<p className="text-sm text-muted-foreground">
											เลขประจำตัวผู้เสียภาษี: {customer.taxId}
										</p>
									</div>
									<Badge variant={customer.status === "ใช้งาน" ? "default" : "destructive"}>
										{customer.status}
									</Badge>
								</div>

								<div className="space-y-2">
									<div className="flex items-start space-x-2">
										<MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
										<p className="text-sm">{customer.address}</p>
									</div>
									<div className="flex items-center space-x-2">
										<Building className="h-4 w-4 text-muted-foreground" />
										<p className="text-sm">{customer.businessType}</p>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4 text-sm">
									<div>
										<p className="text-muted-foreground">วงเงินเครดิต</p>
										<p className="font-medium text-green-600">
											{formatCurrency(customer.creditLimit)}
										</p>
									</div>
									<div>
										<p className="text-muted-foreground">เงื่อนไขการชำระ</p>
										<p className="font-medium">{customer.paymentTerms}</p>
									</div>
									<div>
										<p className="text-muted-foreground">จำนวนโรงงาน</p>
										<p className="font-medium">{customer.factoryCount} แห่ง</p>
									</div>
									<div>
										<p className="text-muted-foreground">คำสั่งซื้อทั้งหมด</p>
										<p className="font-medium">{customer.totalOrders} ใบ</p>
									</div>
								</div>
							</div>

							{/* ข้อมูลติดต่อและบัญชี */}
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">ผู้ติดต่อ</h4>
									<div className="space-y-2">
										<div className="flex items-center space-x-2">
											<User className="h-4 w-4 text-muted-foreground" />
											<div>
												<p className="font-medium">{customer.contactPerson.name}</p>
												<p className="text-sm text-muted-foreground">
													{customer.contactPerson.position}
												</p>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Phone className="h-4 w-4 text-muted-foreground" />
											<div className="text-sm">
												<p>โทร: {customer.contactPerson.phone}</p>
												<p>มือถือ: {customer.contactPerson.mobile}</p>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Mail className="h-4 w-4 text-muted-foreground" />
											<p className="text-sm">{customer.contactPerson.email}</p>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2">บัญชีธนาคาร</h4>
									<div className="space-y-1 text-sm">
										<p>
											<span className="text-muted-foreground">ธนาคาร:</span>{" "}
											{customer.bankAccount.bankName}
										</p>
										<p>
											<span className="text-muted-foreground">เลขที่บัญชี:</span>{" "}
											{customer.bankAccount.accountNumber}
										</p>
										<p>
											<span className="text-muted-foreground">ชื่อบัญชี:</span>{" "}
											{customer.bankAccount.accountName}
										</p>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4 text-sm">
									<div>
										<p className="text-muted-foreground">วันที่ลงทะเบียน</p>
										<p className="font-medium">{formatDate(customer.registrationDate)}</p>
									</div>
									<div>
										<p className="text-muted-foreground">สั่งซื้อล่าสุด</p>
										<p className="font-medium">{formatDate(customer.lastOrderDate)}</p>
									</div>
								</div>

								<div>
									<p className="text-muted-foreground text-sm">รายได้รวม</p>
									<p className="font-bold text-xl text-green-600">
										{formatCurrency(customer.totalRevenue)}
									</p>
								</div>
							</div>
						</div>

						<div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
							<Button variant="outline" size="sm">
								<Factory className="h-4 w-4 mr-1" />
								ดูโรงงาน ({customer.factoryCount})
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
