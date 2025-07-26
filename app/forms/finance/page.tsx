"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	DollarSign,
	Download,
	FileText,
	Search,
	Calendar,
	CreditCard,
	Receipt,
	Calculator,
	FileSpreadsheet,
	Plus,
	Eye,
	Banknote,
	PiggyBank,
	TrendingUp,
	Building,
} from "lucide-react";

export default function FinanceFormsPage() {
	const financeForms = [
		{
			title: "ใบเบิกค่าใช้จ่าย",
			description: "ฟอร์มขอเบิกค่าใช้จ่ายในการดำเนินงาน",
			icon: Receipt,
			category: "เบิกจ่าย",
			format: "PDF, Excel",
			downloadCount: 4340,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบสำคัญจ่าย",
			description: "เอกสารสำคัญจ่ายเงินและบันทึกรายจ่าย",
			icon: Banknote,
			category: "จ่าย",
			format: "PDF",
			downloadCount: 3856,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบสำคัญรับ",
			description: "เอกสารสำคัญรับเงินและบันทึกรายรับ",
			icon: PiggyBank,
			category: "รับ",
			format: "PDF, Excel",
			downloadCount: 2672,
			lastUpdated: "2024-07-25",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบขออนุมัติการโอนเงิน",
			description: "ฟอร์มขออนุมัติการโอนเงินระหว่างบัญชี",
			icon: CreditCard,
			category: "โอนเงิน",
			format: "PDF",
			downloadCount: 1234,
			lastUpdated: "2024-07-24",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบเสนอราคา",
			description: "ฟอร์มเสนอราคาสำหรับลูกค้า",
			icon: Calculator,
			category: "ขาย",
			format: "PDF, Excel",
			downloadCount: 2445,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบแจ้งหนี้",
			description: "เอกสารแจ้งหนี้ค้างชำระ",
			icon: FileText,
			category: "ขาย",
			format: "PDF",
			downloadCount: 1687,
			lastUpdated: "2024-07-25",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานกระแสเงินสด",
			description: "ฟอร์มรายงานกระแสเงินสดรายวัน",
			icon: TrendingUp,
			category: "รายงาน",
			format: "Excel",
			downloadCount: 987,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบขอเปิดบัญชีธนาคาร",
			description: "ฟอร์มขออนุมัติเปิดบัญชีธนาคารใหม่",
			icon: Building,
			category: "บัญชี",
			format: "PDF, Word",
			downloadCount: 156,
			lastUpdated: "2024-07-20",
			status: "พร้อมใช้งาน",
		},
	];

	const categories = [
		{ name: "ทั้งหมด", count: financeForms.length },
		{ name: "เบิกจ่าย", count: financeForms.filter((f) => f.category === "เบิกจ่าย").length },
		{ name: "จ่าย", count: financeForms.filter((f) => f.category === "จ่าย").length },
		{ name: "รับ", count: financeForms.filter((f) => f.category === "รับ").length },
		{ name: "โอนเงิน", count: financeForms.filter((f) => f.category === "โอนเงิน").length },
		{ name: "ขาย", count: financeForms.filter((f) => f.category === "ขาย").length },
		{ name: "รายงาน", count: financeForms.filter((f) => f.category === "รายงาน").length },
		{ name: "บัญชี", count: financeForms.filter((f) => f.category === "บัญชี").length },
	];

	const quickAccess = [
		{
			title: "คำนวณภาษี",
			description: "เครื่องมือคำนวณภาษีอย่างง่าย",
			icon: Calculator,
			action: "เปิดเครื่องมือ",
		},
		{
			title: "ตรวจสอบอัตราแลกเปลี่ยน",
			description: "อัตราแลกเปลี่ยนเงินตราต่างประเทศ",
			icon: DollarSign,
			action: "ดูอัตรา",
		},
		{
			title: "เทมเพลต Excel",
			description: "เทมเพลตสำเร็จรูปสำหรับงานการเงิน",
			icon: FileSpreadsheet,
			action: "ดาวน์โหลด",
		},
	];

	const recentTransactions = [
		{
			type: "รับเงิน",
			amount: "฿125,000",
			description: "ค่าบริการขนส่งลูกค้า ABC",
			date: "2024-07-26",
			status: "สำเร็จ",
		},
		{
			type: "จ่ายเงิน",
			amount: "฿45,000",
			description: "ค่าน้ำมันรถโม่",
			date: "2024-07-26",
			status: "สำเร็จ",
		},
		{
			type: "โอนเงิน",
			amount: "฿80,000",
			description: "โอนเงินเดือนพนักงาน",
			date: "2024-07-25",
			status: "รออนุมัติ",
		},
	];

	return (
		<div className="container mx-auto p-6 space-y-6">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold flex items-center">
						<DollarSign className="h-8 w-8 mr-3" />
						แบบฟอร์มฝ่ายการเงิน
					</h1>
					<p className="text-muted-foreground mt-2">
						รวมแบบฟอร์มและเอกสารสำหรับการบริหารการเงินและบัญชี
					</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					อัพโหลดฟอร์มใหม่
				</Button>
			</div>

			{/* Quick Access Tools */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{quickAccess.map((tool, index) => (
					<Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
						<CardContent className="pt-6">
							<div className="flex items-center space-x-3">
								<div className="p-2 rounded-lg bg-orange-100 text-orange-700">
									<tool.icon className="h-6 w-6" />
								</div>
								<div className="flex-1">
									<h3 className="font-semibold">{tool.title}</h3>
									<p className="text-sm text-muted-foreground">{tool.description}</p>
								</div>
								<Button size="sm" variant="outline">
									{tool.action}
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Search and Filter */}
			<Card>
				<CardContent className="pt-6">
					<div className="flex flex-col md:flex-row gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input placeholder="ค้นหาแบบฟอร์ม..." className="pl-10" />
						</div>
						<div className="flex gap-2">
							<Button variant="outline">
								<FileText className="h-4 w-4 mr-2" />
								ประเภทไฟล์
							</Button>
							<Button variant="outline">
								<Calendar className="h-4 w-4 mr-2" />
								วันที่อัพเดท
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Tabs defaultValue="forms" className="w-full">
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="forms">แบบฟอร์มทั้งหมด</TabsTrigger>
					<TabsTrigger value="transactions">รายการล่าสุด</TabsTrigger>
					<TabsTrigger value="reports">รายงาน</TabsTrigger>
					<TabsTrigger value="templates">เทมเพลต</TabsTrigger>
				</TabsList>

				<TabsContent value="forms" className="space-y-4">
					{/* Categories */}
					<div className="flex flex-wrap gap-2">
						{categories.map((category, index) => (
							<Badge
								key={index}
								variant={category.name === "ทั้งหมด" ? "default" : "outline"}
								className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
							>
								{category.name} ({category.count})
							</Badge>
						))}
					</div>

					{/* Forms Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
						{financeForms.map((form, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<div className="flex items-start justify-between">
										<div className="flex items-center space-x-3">
											<div className="p-2 rounded-lg bg-orange-100 text-orange-700">
												<form.icon className="h-6 w-6" />
											</div>
											<div className="flex-1">
												<CardTitle className="text-lg leading-tight">{form.title}</CardTitle>
												<Badge variant="outline" className="mt-1">
													{form.category}
												</Badge>
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="mb-4">{form.description}</CardDescription>
									<div className="space-y-3">
										<div className="flex justify-between text-sm">
											<span className="text-muted-foreground">รูปแบบ:</span>
											<span className="font-medium">{form.format}</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-muted-foreground">ดาวน์โหลด:</span>
											<span className="font-medium">{form.downloadCount.toLocaleString()}</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-muted-foreground">อัพเดทล่าสุด:</span>
											<span className="font-medium">{form.lastUpdated}</span>
										</div>
										<div className="flex space-x-2 mt-4">
											<Button size="sm" className="flex-1">
												<Eye className="h-4 w-4 mr-2" />
												ดูตัวอย่าง
											</Button>
											<Button size="sm" variant="outline">
												<Download className="h-4 w-4 mr-2" />
												ดาวน์โหลด
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>

				<TabsContent value="transactions" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>รายการทำรายการล่าสุด</CardTitle>
							<CardDescription>รายการทางการเงินที่เกิดขึ้นล่าสุด</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{recentTransactions.map((transaction, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 border rounded-lg"
									>
										<div className="flex items-center space-x-4">
											<div
												className={`p-2 rounded ${
													transaction.type === "รับเงิน"
														? "bg-green-100 text-green-700"
														: transaction.type === "จ่ายเงิน"
														? "bg-red-100 text-red-700"
														: "bg-blue-100 text-blue-700"
												}`}
											>
												{transaction.type === "รับเงิน" ? (
													<PiggyBank className="h-5 w-5" />
												) : transaction.type === "จ่ายเงิน" ? (
													<Receipt className="h-5 w-5" />
												) : (
													<CreditCard className="h-5 w-5" />
												)}
											</div>
											<div>
												<h3 className="font-medium">{transaction.description}</h3>
												<div className="text-sm text-muted-foreground">
													{transaction.type} • {transaction.date}
												</div>
											</div>
										</div>
										<div className="text-right">
											<div className="font-bold text-lg">{transaction.amount}</div>
											<Badge variant={transaction.status === "สำเร็จ" ? "default" : "secondary"}>
												{transaction.status}
											</Badge>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="reports" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>รายงานทางการเงิน</CardTitle>
							<CardDescription>รายงานและสรุปข้อมูลทางการเงินที่สำคัญ</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">รายงานกำไรขาดทุน</h3>
									<p className="text-sm text-muted-foreground mb-3">รายงาน P&L รายเดือนและรายปี</p>
									<Button size="sm">ดูรายงาน</Button>
								</div>
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">รายงานกระแสเงินสด</h3>
									<p className="text-sm text-muted-foreground mb-3">ติดตามการเข้าออกของเงินสด</p>
									<Button size="sm">ดูรายงาน</Button>
								</div>
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">รายงานลูกหนี้การค้า</h3>
									<p className="text-sm text-muted-foreground mb-3">รายการลูกหนี้ที่ค้างชำระ</p>
									<Button size="sm">ดูรายงาน</Button>
								</div>
								<div className="p-4 border rounded-lg">
									<h3 className="font-semibold mb-2">รายงานเจ้าหนี้การค้า</h3>
									<p className="text-sm text-muted-foreground mb-3">รายการเจ้าหนี้ที่ต้องชำระ</p>
									<Button size="sm">ดูรายงาน</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="templates" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>เทมเพลต Excel</CardTitle>
							<CardDescription>เทมเพลตสำเร็จรูปสำหรับงานทางการเงิน</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{[
									{ name: "เทมเพลตงบประมาณ", description: "วางแผนงบประมาณรายเดือน" },
									{
										name: "เทมเพลตติดตามค่าใช้จ่าย",
										description: "บันทึกและจัดหมวดหมู่ค่าใช้จ่าย",
									},
									{ name: "เทมเพลตคำนวณภาษี", description: "คำนวณภาษีอย่างง่าย" },
									{ name: "เทมเพลตใบเสนอราคา", description: "สร้างใบเสนอราคาอย่างมืออาชีพ" },
									{ name: "เทมเพลตวิเคราะห์ต้นทุน", description: "วิเคราะห์และควบคุมต้นทุน" },
									{ name: "เทมเพลตรายงานกำไร", description: "สรุปผลกำไรขาดทุน" },
								].map((template, index) => (
									<div key={index} className="p-4 border rounded-lg">
										<div className="flex items-center space-x-3 mb-3">
											<FileSpreadsheet className="h-6 w-6 text-green-600" />
											<div>
												<h3 className="font-medium">{template.name}</h3>
												<p className="text-sm text-muted-foreground">{template.description}</p>
											</div>
										</div>
										<Button size="sm" className="w-full">
											<Download className="h-4 w-4 mr-2" />
											ดาวน์โหลด
										</Button>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
