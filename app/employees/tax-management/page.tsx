"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import {
	Search,
	Plus,
	Calculator,
	FileText,
	Download,
	AlertTriangle,
	CheckCircle,
	Clock,
	Edit,
	Eye,
} from "lucide-react";

export default function TaxManagementPage() {
	const taxRecords = [
		{
			id: "EMP001",
			name: "นายสมชาย ใจดี",
			taxYear: 2024,
			annualIncome: 312600,
			taxableIncome: 272600,
			taxWithheld: 15000,
			taxOwed: 18500,
			taxStatus: "pending",
			filingStatus: "not-filed",
			dueDate: "2025-03-31",
		},
		{
			id: "EMP002",
			name: "นายวิชัย รักงาน",
			taxYear: 2024,
			annualIncome: 540000,
			taxableIncome: 490000,
			taxWithheld: 35000,
			taxOwed: 42000,
			taxStatus: "refund",
			filingStatus: "filed",
			dueDate: "2025-03-31",
		},
		{
			id: "EMP003",
			name: "นางสุดา ขยันดี",
			taxYear: 2024,
			annualIncome: 357000,
			taxableIncome: 307000,
			taxWithheld: 22000,
			taxOwed: 25000,
			taxStatus: "owed",
			filingStatus: "filed",
			dueDate: "2025-03-31",
		},
		{
			id: "EMP004",
			name: "นายประยุทธ มีวินัย",
			taxYear: 2024,
			annualIncome: 198000,
			taxableIncome: 148000,
			taxWithheld: 8000,
			taxOwed: 5500,
			taxStatus: "refund",
			filingStatus: "not-filed",
			dueDate: "2025-03-31",
		},
	];

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	const getTaxStatusBadge = (status: string) => {
		switch (status) {
			case "refund":
				return (
					<Badge variant="default" className="bg-green-600">
						คืนภาษี
					</Badge>
				);
			case "owed":
				return <Badge variant="destructive">ต้องจ่ายเพิ่ม</Badge>;
			case "pending":
				return (
					<Badge variant="outline" className="text-yellow-600 border-yellow-600">
						รอดำเนินการ
					</Badge>
				);
			default:
				return <Badge variant="secondary">ไม่ระบุ</Badge>;
		}
	};

	const getFilingStatusBadge = (status: string) => {
		switch (status) {
			case "filed":
				return (
					<Badge variant="default" className="bg-green-600">
						<CheckCircle className="w-3 h-3 mr-1" />
						ยื่นแล้ว
					</Badge>
				);
			case "not-filed":
				return (
					<Badge variant="outline" className="text-red-600 border-red-600">
						<Clock className="w-3 h-3 mr-1" />
						ยังไม่ยื่น
					</Badge>
				);
			case "processing":
				return (
					<Badge variant="outline" className="text-blue-600 border-blue-600">
						<Clock className="w-3 h-3 mr-1" />
						กำลังดำเนินการ
					</Badge>
				);
			default:
				return <Badge variant="secondary">ไม่ระบุ</Badge>;
		}
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("th-TH");
	};

	const totalTaxWithheld = taxRecords.reduce((sum, record) => sum + record.taxWithheld, 0);
	const totalTaxOwed = taxRecords.reduce((sum, record) => sum + record.taxOwed, 0);
	const notFiledCount = taxRecords.filter((record) => record.filingStatus === "not-filed").length;

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">จัดการภาษี</h1>
				<div className="flex gap-2">
					<Button variant="outline" className="border-input">
						<Download className="w-4 h-4 mr-2" />
						ส่งออกรายงานภาษี
					</Button>
					<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
						<Plus className="w-4 h-4 mr-2" />
						คำนวณภาษีใหม่
					</Button>
				</div>
			</div>

			{/* Alert for pending filings */}
			{notFiledCount > 0 && (
				<Card className="bg-card border-border border-l-4 border-l-red-500">
					<CardContent className="p-4">
						<div className="flex items-center gap-2">
							<AlertTriangle className="w-5 h-5 text-red-500" />
							<div>
								<p className="font-medium text-foreground">
									แจ้งเตือน: มีพนักงาน {notFiledCount} คน ที่ยังไม่ได้ยื่นภาษี
								</p>
								<p className="text-sm text-muted-foreground">กำหนดยื่น: 31 มีนาคม 2568</p>
							</div>
						</div>
					</CardContent>
				</Card>
			)}

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">เลือกปีภาษี และค้นหา</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4 items-center">
						<Input
							type="number"
							defaultValue="2024"
							min="2020"
							max="2030"
							className="bg-background border-input w-32"
						/>
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input
								placeholder="ค้นหาชื่อพนักงาน หรือรหัสพนักงาน..."
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
						<Calculator className="w-5 h-5" />
						ข้อมูลภาษีเงินได้ ปี 2567
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">รหัสพนักงาน</TableHead>
								<TableHead className="text-muted-foreground">ชื่อ-นามสกุล</TableHead>
								<TableHead className="text-muted-foreground">รายได้ประจำปี</TableHead>
								<TableHead className="text-muted-foreground">รายได้ที่ต้องเสียภาษี</TableHead>
								<TableHead className="text-muted-foreground">ภาษีที่หักไว้</TableHead>
								<TableHead className="text-muted-foreground">ภาษีที่ต้องจ่าย</TableHead>
								<TableHead className="text-muted-foreground">สถานะภาษี</TableHead>
								<TableHead className="text-muted-foreground">สถานะการยื่น</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{taxRecords.map((record) => (
								<TableRow key={record.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{record.id}</TableCell>
									<TableCell className="text-foreground">{record.name}</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(record.annualIncome)}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(record.taxableIncome)}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(record.taxWithheld)}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(record.taxOwed)}
									</TableCell>
									<TableCell>{getTaxStatusBadge(record.taxStatus)}</TableCell>
									<TableCell>{getFilingStatusBadge(record.filingStatus)}</TableCell>
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
							<Calculator className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-xl font-bold text-foreground">
									{(totalTaxWithheld / 1000).toFixed(0)}K
								</p>
								<p className="text-sm text-muted-foreground">ภาษีหักไว้รวม (บาท)</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<FileText className="w-8 h-8 text-green-500" />
							<div>
								<p className="text-xl font-bold text-foreground">
									{(totalTaxOwed / 1000).toFixed(0)}K
								</p>
								<p className="text-sm text-muted-foreground">ภาษีต้องจ่ายรวม (บาท)</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<CheckCircle className="w-8 h-8 text-purple-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">
									{taxRecords.filter((r) => r.filingStatus === "filed").length}
								</p>
								<p className="text-sm text-muted-foreground">ยื่นภาษีแล้ว</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<AlertTriangle className="w-8 h-8 text-red-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">{notFiledCount}</p>
								<p className="text-sm text-muted-foreground">ยังไม่ยื่นภาษี</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Card className="bg-card border-border">
					<CardHeader>
						<CardTitle className="text-card-foreground">สรุปสถานะภาษี</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
								<span className="text-foreground">ได้รับเงินคืนภาษี</span>
								<div className="flex items-center gap-2">
									<span className="text-2xl font-bold text-green-600">2</span>
									<span className="text-sm text-muted-foreground">คน</span>
								</div>
							</div>
							<div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
								<span className="text-foreground">ต้องจ่ายภาษีเพิ่ม</span>
								<div className="flex items-center gap-2">
									<span className="text-2xl font-bold text-red-600">1</span>
									<span className="text-sm text-muted-foreground">คน</span>
								</div>
							</div>
							<div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
								<span className="text-foreground">รอดำเนินการ</span>
								<div className="flex items-center gap-2">
									<span className="text-2xl font-bold text-yellow-600">1</span>
									<span className="text-sm text-muted-foreground">คน</span>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardHeader>
						<CardTitle className="text-card-foreground">รายการที่ต้องดำเนินการ</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							{taxRecords
								.filter((record) => record.filingStatus === "not-filed")
								.map((record) => (
									<div
										key={record.id}
										className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
									>
										<div>
											<p className="font-medium text-foreground">{record.name}</p>
											<p className="text-sm text-muted-foreground">
												กำหนดยื่น: {formatDate(record.dueDate)}
											</p>
										</div>
										<Button variant="outline" size="sm">
											ยื่นภาษี
										</Button>
									</div>
								))}
							{taxRecords.filter((record) => record.filingStatus === "not-filed").length === 0 && (
								<div className="text-center p-6 text-muted-foreground">
									<CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-500" />
									<p>ไม่มีรายการที่ต้องดำเนินการ</p>
								</div>
							)}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Tax Forms and Documents */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<FileText className="w-5 h-5" />
						เอกสารและแบบฟอร์มภาษี
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<Button variant="outline" className="h-20 border-input">
							<div className="text-center">
								<FileText className="w-8 h-8 mx-auto mb-2" />
								<p className="text-sm">หนังสือรับรองการหักภาษี</p>
								<p className="text-xs text-muted-foreground">ภ.ง.ด.1</p>
							</div>
						</Button>
						<Button variant="outline" className="h-20 border-input">
							<div className="text-center">
								<FileText className="w-8 h-8 mx-auto mb-2" />
								<p className="text-sm">แบบแสดงรายการภาษี</p>
								<p className="text-xs text-muted-foreground">ภ.ง.ด.90</p>
							</div>
						</Button>
						<Button variant="outline" className="h-20 border-input">
							<div className="text-center">
								<Calculator className="w-8 h-8 mx-auto mb-2" />
								<p className="text-sm">เครื่องคำนวณภาษี</p>
								<p className="text-xs text-muted-foreground">คำนวณอัตโนมัติ</p>
							</div>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
