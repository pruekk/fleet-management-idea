"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
	Plus,
	Search,
	Edit,
	Trash2,
	Eye,
	Phone,
	Mail,
	FileText,
	Calendar,
	DollarSign,
	User,
	Building,
	Clock,
	CheckCircle,
	XCircle,
	AlertCircle,
	Download,
	Send,
} from "lucide-react";

interface Quotation {
	id: string;
	quotationNumber: string;
	customerId: string;
	customerName: string;
	customerType: "บุคคลธรรมดา" | "นิติบุคคล";
	projectName: string;
	projectLocation: string;
	contactPerson: {
		name: string;
		phone: string;
		email: string;
	};
	quotationDate: string;
	validUntil: string;
	deliveryDate: string;
	items: {
		id: string;
		description: string;
		specification: string;
		quantity: number;
		unit: string;
		unitPrice: number;
		totalPrice: number;
	}[];
	subtotal: number;
	vat: number;
	vatAmount: number;
	grandTotal: number;
	paymentTerms: string;
	deliveryTerms: string;
	warrantyPeriod: string;
	status: "draft" | "sent" | "approved" | "rejected" | "expired";
	createdBy: string;
	createdDate: string;
	approvedDate?: string;
	notes: string;
	attachments: string[];
}

const mockQuotations: Quotation[] = [
	{
		id: "Q001",
		quotationNumber: "QT-2024-001",
		customerId: "C001",
		customerName: "บริษัท ซีเมนต์ไทย จำกัด",
		customerType: "นิติบุคคล",
		projectName: "โครงการอาคารสำนักงานใหม่",
		projectLocation: "เขตคลองเตย กรุงเทพมหานคร",
		contactPerson: {
			name: "คุณสมชาย รักดี",
			phone: "02-123-4567",
			email: "somchai@cement-thai.com",
		},
		quotationDate: "2024-01-15",
		validUntil: "2024-02-15",
		deliveryDate: "2024-02-01",
		items: [
			{
				id: "1",
				description: "คอนกรีตผสมเสร็จ M-300",
				specification: "กำลังอัด 300 กิโลกรัม/ตารางเซนติเมตร",
				quantity: 150,
				unit: "ลูกบาศก์เมตร",
				unitPrice: 3500,
				totalPrice: 525000,
			},
			{
				id: "2",
				description: "คอนกรีตผสมเสร็จ M-250",
				specification: "กำลังอัด 250 กิโลกรัม/ตารางเซนติเมตร",
				quantity: 200,
				unit: "ลูกบาศก์เมตร",
				unitPrice: 3200,
				totalPrice: 640000,
			},
		],
		subtotal: 1165000,
		vat: 7,
		vatAmount: 81550,
		grandTotal: 1246550,
		paymentTerms: "เครดิต 30 วัน",
		deliveryTerms: "จัดส่งถึงหน้างาน",
		warrantyPeriod: "รับประกันคุณภาพ 30 วัน",
		status: "approved",
		createdBy: "นายวิชาญ ขายดี",
		createdDate: "2024-01-15",
		approvedDate: "2024-01-18",
		notes: "ราคาพิเศษสำหรับลูกค้าประจำ",
		attachments: ["แบบแปลน.pdf", "ข้อมูลเทคนิค.pdf"],
	},
	{
		id: "Q002",
		quotationNumber: "QT-2024-002",
		customerId: "C002",
		customerName: "ห้างหุ้นส่วนจำกัด แสงทอง คอนสตรัคชั่น",
		customerType: "นิติบุคคล",
		projectName: "โครงการบ้านจัดสรร",
		projectLocation: "เขตบางกะปิ กรุงเทพมหานคร",
		contactPerson: {
			name: "คุณสมใจ ใจดี",
			phone: "02-987-6543",
			email: "info@saengtong.com",
		},
		quotationDate: "2024-01-12",
		validUntil: "2024-02-12",
		deliveryDate: "2024-01-25",
		items: [
			{
				id: "1",
				description: "คอนกรีตผสมเสร็จ M-200",
				specification: "กำลังอัด 200 กิโลกรัม/ตารางเซนติเมตร",
				quantity: 80,
				unit: "ลูกบาศก์เมตร",
				unitPrice: 3000,
				totalPrice: 240000,
			},
		],
		subtotal: 240000,
		vat: 7,
		vatAmount: 16800,
		grandTotal: 256800,
		paymentTerms: "เครดิต 15 วัน",
		deliveryTerms: "จัดส่งถึงหน้างาน",
		warrantyPeriod: "รับประกันคุณภาพ 30 วัน",
		status: "sent",
		createdBy: "นายวิชาญ ขายดี",
		createdDate: "2024-01-12",
		notes: "",
		attachments: [],
	},
	{
		id: "Q003",
		quotationNumber: "QT-2024-003",
		customerId: "C003",
		customerName: "คุณวิชาญ สร้างบ้าน",
		customerType: "บุคคลธรรมดา",
		projectName: "บ้านพักส่วนตัว",
		projectLocation: "เขตจตุจักร กรุงเทพมหานคร",
		contactPerson: {
			name: "คุณวิชาญ สร้างบ้าน",
			phone: "08-1234-5678",
			email: "wichan@gmail.com",
		},
		quotationDate: "2024-01-10",
		validUntil: "2024-02-10",
		deliveryDate: "2024-01-20",
		items: [
			{
				id: "1",
				description: "คอนกรีตผสมเสร็จ M-180",
				specification: "กำลังอัด 180 กิโลกรัม/ตารางเซนติเมตร",
				quantity: 25,
				unit: "ลูกบาศก์เมตร",
				unitPrice: 2800,
				totalPrice: 70000,
			},
		],
		subtotal: 70000,
		vat: 7,
		vatAmount: 4900,
		grandTotal: 74900,
		paymentTerms: "เครดิต 7 วัน",
		deliveryTerms: "จัดส่งถึงหน้างาน",
		warrantyPeriod: "รับประกันคุณภาพ 30 วัน",
		status: "draft",
		createdBy: "นายวิชาญ ขายดี",
		createdDate: "2024-01-10",
		notes: "ลูกค้าใหม่",
		attachments: [],
	},
];

export default function QuotationsPage() {
	const [quotations] = useState<Quotation[]>(mockQuotations);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("all");

	const filteredQuotations = quotations.filter((quotation) => {
		const matchesSearch =
			quotation.quotationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
			quotation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			quotation.projectName.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesStatus = filterStatus === "all" || quotation.status === filterStatus;

		return matchesSearch && matchesStatus;
	});

	const totalQuotations = quotations.length;
	const approvedQuotations = quotations.filter((q) => q.status === "approved").length;
	const totalValue = quotations.reduce((sum, q) => sum + q.grandTotal, 0);
	const averageValue = totalValue / quotations.length;

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "draft":
				return <Badge variant="secondary">ร่าง</Badge>;
			case "sent":
				return <Badge variant="outline">ส่งแล้ว</Badge>;
			case "approved":
				return <Badge variant="default">อนุมัติ</Badge>;
			case "rejected":
				return <Badge variant="destructive">ปฏิเสธ</Badge>;
			case "expired":
				return <Badge variant="secondary">หมดอายุ</Badge>;
			default:
				return <Badge variant="secondary">{status}</Badge>;
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "draft":
				return <FileText className="h-4 w-4" />;
			case "sent":
				return <Send className="h-4 w-4" />;
			case "approved":
				return <CheckCircle className="h-4 w-4" />;
			case "rejected":
				return <XCircle className="h-4 w-4" />;
			case "expired":
				return <AlertCircle className="h-4 w-4" />;
			default:
				return <FileText className="h-4 w-4" />;
		}
	};

	return (
		<div className="flex-1 space-y-4 p-4 pt-6">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">ใบเสนอราคา</h2>
				<Button>
					<Plus className="mr-2 h-4 w-4" />
					สร้างใบเสนอราคาใหม่
				</Button>
			</div>

			{/* Summary Cards */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ใบเสนอราคาทั้งหมด</CardTitle>
						<FileText className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalQuotations}</div>
						<p className="text-xs text-muted-foreground">อนุมัติแล้ว {approvedQuotations} ฉบับ</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">มูลค่ารวม</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalValue.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">มูลค่าใบเสนอราคาทั้งหมด</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">มูลค่าเฉลี่ย</CardTitle>
						<Building className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{Math.round(averageValue).toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">ต่อใบเสนอราคา</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">อัตราการอนุมัติ</CardTitle>
						<CheckCircle className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{Math.round((approvedQuotations / totalQuotations) * 100)}%
						</div>
						<p className="text-xs text-muted-foreground">ของใบเสนอราคาทั้งหมด</p>
					</CardContent>
				</Card>
			</div>

			{/* Filters */}
			<div className="flex items-center justify-between space-x-2">
				<div className="flex items-center space-x-2">
					<div className="relative">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="ค้นหาใบเสนอราคา..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-8 w-64"
						/>
					</div>

					<Select value={filterStatus} onValueChange={setFilterStatus}>
						<SelectTrigger className="w-32">
							<SelectValue placeholder="สถานะ" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="draft">ร่าง</SelectItem>
							<SelectItem value="sent">ส่งแล้ว</SelectItem>
							<SelectItem value="approved">อนุมัติ</SelectItem>
							<SelectItem value="rejected">ปฏิเสธ</SelectItem>
							<SelectItem value="expired">หมดอายุ</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<Tabs defaultValue="list" className="space-y-4">
				<TabsList>
					<TabsTrigger value="list">รายการใบเสนอราคา</TabsTrigger>
					<TabsTrigger value="summary">สรุปยอดขาย</TabsTrigger>
					<TabsTrigger value="templates">แม่แบบ</TabsTrigger>
				</TabsList>

				<TabsContent value="list" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>รายการใบเสนอราคา</CardTitle>
							<CardDescription>จัดการใบเสนอราคาและติดตามสถานะ</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>เลขที่ใบเสนอราคา</TableHead>
										<TableHead>ลูกค้า/โครงการ</TableHead>
										<TableHead>ผู้ติดต่อ</TableHead>
										<TableHead>รายการสินค้า</TableHead>
										<TableHead>มูลค่า</TableHead>
										<TableHead>วันที่/ระยะเวลา</TableHead>
										<TableHead>สถานะ</TableHead>
										<TableHead className="text-right">การจัดการ</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{filteredQuotations.map((quotation) => (
										<TableRow key={quotation.id}>
											<TableCell>
												<div className="flex items-center space-x-2">
													{getStatusIcon(quotation.status)}
													<div>
														<div className="font-medium">{quotation.quotationNumber}</div>
														<div className="text-sm text-muted-foreground">
															สร้างโดย: {quotation.createdBy}
														</div>
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="font-medium">{quotation.customerName}</div>
													<div className="text-sm text-muted-foreground">
														{quotation.projectName}
													</div>
													<div className="text-sm text-muted-foreground">
														{quotation.projectLocation}
													</div>
													<Badge variant="outline" className="mt-1">
														{quotation.customerType}
													</Badge>
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="font-medium flex items-center">
														<User className="h-3 w-3 mr-1" />
														{quotation.contactPerson.name}
													</div>
													<div className="text-sm text-muted-foreground flex items-center">
														<Phone className="h-3 w-3 mr-1" />
														{quotation.contactPerson.phone}
													</div>
													<div className="text-sm text-muted-foreground flex items-center">
														<Mail className="h-3 w-3 mr-1" />
														{quotation.contactPerson.email}
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div>
													{quotation.items.slice(0, 2).map((item, index) => (
														<div key={index} className="text-sm">
															• {item.description}
															<span className="text-muted-foreground ml-1">
																({item.quantity} {item.unit})
															</span>
														</div>
													))}
													{quotation.items.length > 2 && (
														<div className="text-sm text-muted-foreground">
															+{quotation.items.length - 2} รายการอื่น
														</div>
													)}
													<div className="text-sm text-muted-foreground mt-1">
														เงื่อนไข: {quotation.paymentTerms}
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="font-medium text-lg">
														฿{quotation.grandTotal.toLocaleString()}
													</div>
													<div className="text-sm text-muted-foreground">
														ยอดรวม (รวม VAT {quotation.vat}%)
													</div>
													<div className="text-sm text-muted-foreground">
														ก่อน VAT: ฿{quotation.subtotal.toLocaleString()}
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="text-sm font-medium flex items-center">
														<Calendar className="h-3 w-3 mr-1" />
														{quotation.quotationDate}
													</div>
													<div className="text-sm text-muted-foreground">
														ใช้ได้ถึง: {quotation.validUntil}
													</div>
													<div className="text-sm text-blue-600">
														ส่งมอบ: {quotation.deliveryDate}
													</div>
													{quotation.approvedDate && (
														<div className="text-sm text-green-600">
															อนุมัติ: {quotation.approvedDate}
														</div>
													)}
												</div>
											</TableCell>
											<TableCell>
												<div className="space-y-2">
													{getStatusBadge(quotation.status)}
													{quotation.attachments.length > 0 && (
														<div className="text-xs text-muted-foreground">
															📎 {quotation.attachments.length} ไฟล์แนบ
														</div>
													)}
													{quotation.notes && (
														<div className="text-xs text-blue-600">📝 {quotation.notes}</div>
													)}
												</div>
											</TableCell>
											<TableCell className="text-right">
												<div className="flex justify-end space-x-2">
													<Button variant="ghost" size="icon" title="ดูรายละเอียด">
														<Eye className="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="icon" title="แก้ไข">
														<Edit className="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="icon" title="ดาวน์โหลด">
														<Download className="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="icon" title="ลบ">
														<Trash2 className="h-4 w-4" />
													</Button>
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="summary">
					<Card>
						<CardHeader>
							<CardTitle>สรุปยอดขาย</CardTitle>
							<CardDescription>สรุปข้อมูลยอดขายจากใบเสนอราคา</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-4 md:grid-cols-3">
								<div className="text-center p-4 border rounded-lg">
									<div className="text-2xl font-bold text-green-600">
										{quotations.filter((q) => q.status === "approved").length}
									</div>
									<div className="text-sm text-muted-foreground">ใบเสนอราคาที่อนุมัติ</div>
								</div>
								<div className="text-center p-4 border rounded-lg">
									<div className="text-2xl font-bold text-blue-600">
										฿
										{quotations
											.filter((q) => q.status === "approved")
											.reduce((sum, q) => sum + q.grandTotal, 0)
											.toLocaleString()}
									</div>
									<div className="text-sm text-muted-foreground">มูลค่าที่อนุมัติ</div>
								</div>
								<div className="text-center p-4 border rounded-lg">
									<div className="text-2xl font-bold text-purple-600">
										{quotations.filter((q) => q.status === "sent").length}
									</div>
									<div className="text-sm text-muted-foreground">รอการตอบกลับ</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="templates">
					<Card>
						<CardHeader>
							<CardTitle>แม่แบบใบเสนอราคา</CardTitle>
							<CardDescription>จัดการแม่แบบสำหรับสร้างใบเสนอราคา</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-center py-8 text-muted-foreground">
								แม่แบบใบเสนอราคามาตรฐานสำหรับประเภทงานต่างๆ
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
