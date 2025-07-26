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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Edit, Trash2, Download, Calendar, DollarSign, Filter } from "lucide-react";

// Mock data สำหรับรายได้
const incomeData = [
	{
		id: 1,
		receiveDate: "2024-12-28",
		monthlyPeriod: "ธันวาคม 2024",
		company: "บริษัท คอนกรีต จำกัด",
		plan: "แพล้น A",
		category: "ขายคอนกรีต",
		incomeType: "รายได้หลัก",
		description: "คอนกรีต M300 จำนวน 50 คิว",
		amountBeforeVAT: 125000,
		vat: 8750,
		withholdingTax: 1250,
		receivedAmount: 132500,
		bankAccount: "ธนาคารกสิกรไทย xxx-x-xxxx1-x",
		note: "ชำระครบถ้วน",
		status: "รับเงินแล้ว",
	},
	{
		id: 2,
		receiveDate: "2024-12-25",
		monthlyPeriod: "ธันวาคม 2024",
		company: "บริษัท สร้างบ้าน จำกัด",
		plan: "แพล้น B",
		category: "ขายคอนกรีต",
		incomeType: "รายได้หลัก",
		description: "คอนกรีต M250 จำนวน 30 คิว",
		amountBeforeVAT: 75000,
		vat: 5250,
		withholdingTax: 750,
		receivedAmount: 79500,
		bankAccount: "ธนาคารไทยพาณิชย์ xxx-x-xxxx2-x",
		note: "",
		status: "รับเงินแล้ว",
	},
	{
		id: 3,
		receiveDate: "2024-12-30",
		monthlyPeriod: "ธันวาคม 2024",
		company: "บริษัท โครงการใหญ่ จำกัด",
		plan: "แพล้น C",
		category: "ขายคอนกรีต",
		incomeType: "รายได้หลัก",
		description: "คอนกรีต M350 จำนวน 80 คิว",
		amountBeforeVAT: 200000,
		vat: 14000,
		withholdingTax: 2000,
		receivedAmount: 212000,
		bankAccount: "ธนาคารกรุงเทพ xxx-x-xxxx3-x",
		note: "โอนเงินล่าช้า 2 วัน",
		status: "รับเงินแล้ว",
	},
	{
		id: 4,
		receiveDate: "2025-01-05",
		monthlyPeriod: "มกราคม 2025",
		company: "บริษัท รีสอร์ท จำกัด",
		plan: "แพล้น A",
		category: "ขายคอนกรีต",
		incomeType: "รายได้หลัก",
		description: "คอนกรีต M300 จำนวน 25 คิว",
		amountBeforeVAT: 62500,
		vat: 4375,
		withholdingTax: 625,
		receivedAmount: 66250,
		bankAccount: "ธนาคารกสิกรไทย xxx-x-xxxx1-x",
		note: "",
		status: "รอรับเงิน",
	},
];

export default function AccountingIncomePage() {
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

	const totalReceived = incomeData
		.filter((item) => item.status === "รับเงินแล้ว")
		.reduce((sum, item) => sum + item.receivedAmount, 0);

	const totalPending = incomeData
		.filter((item) => item.status === "รอรับเงิน")
		.reduce((sum, item) => sum + item.receivedAmount, 0);

	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">รายได้</h1>
				<p className="text-muted-foreground">จัดการรายได้และการรับเงินของบริษัท</p>
			</div>

			{/* สรุปข้อมูล */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายได้รวม</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{formatCurrency(totalReceived + totalPending)}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รับเงินแล้ว</CardTitle>
						<DollarSign className="h-4 w-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">{formatCurrency(totalReceived)}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รอรับเงิน</CardTitle>
						<DollarSign className="h-4 w-4 text-orange-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-600">{formatCurrency(totalPending)}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">จำนวนรายการ</CardTitle>
						<Calendar className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{incomeData.length}</div>
					</CardContent>
				</Card>
			</div>

			{/* ฟิลเตอร์และปุ่มเพิ่ม */}
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
						<Input placeholder="ค้นหารายการ..." className="pl-10 w-64" />
					</div>
					<Select>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="เลือกเดือน" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="2025-01">มกราคม 2025</SelectItem>
							<SelectItem value="2024-12">ธันวาคม 2024</SelectItem>
							<SelectItem value="2024-11">พฤศจิกายน 2024</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className="w-48">
							<SelectValue placeholder="สถานะ" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="received">รับเงินแล้ว</SelectItem>
							<SelectItem value="pending">รอรับเงิน</SelectItem>
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
						เพิ่มรายการรายได้
					</Button>
				</div>
			</div>

			{/* ตารางข้อมูล */}
			<Card>
				<CardContent className="p-0">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>วันที่รับเงิน</TableHead>
								<TableHead>ประจำรอบเดือน</TableHead>
								<TableHead>บริษัท</TableHead>
								<TableHead>แพล้น</TableHead>
								<TableHead>หมวดหมู่</TableHead>
								<TableHead>ประเภทรายได้</TableHead>
								<TableHead>รายละเอียด</TableHead>
								<TableHead className="text-right">ยอดเงิน(ก่อนVAT)</TableHead>
								<TableHead className="text-right">VAT</TableHead>
								<TableHead className="text-right">หัก ณ ที่จ่าย</TableHead>
								<TableHead className="text-right">ยอดรับเงิน</TableHead>
								<TableHead>บัญชีรับเงิน</TableHead>
								<TableHead>หมายเหตุ</TableHead>
								<TableHead>สถานะ</TableHead>
								<TableHead className="text-center">การจัดการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{incomeData.map((income) => (
								<TableRow key={income.id}>
									<TableCell>{formatDate(income.receiveDate)}</TableCell>
									<TableCell>{income.monthlyPeriod}</TableCell>
									<TableCell className="font-medium">{income.company}</TableCell>
									<TableCell>{income.plan}</TableCell>
									<TableCell>{income.category}</TableCell>
									<TableCell>{income.incomeType}</TableCell>
									<TableCell className="max-w-xs truncate" title={income.description}>
										{income.description}
									</TableCell>
									<TableCell className="text-right font-medium">
										{formatCurrency(income.amountBeforeVAT)}
									</TableCell>
									<TableCell className="text-right">{formatCurrency(income.vat)}</TableCell>
									<TableCell className="text-right text-red-600">
										{formatCurrency(income.withholdingTax)}
									</TableCell>
									<TableCell className="text-right font-bold text-green-600">
										{formatCurrency(income.receivedAmount)}
									</TableCell>
									<TableCell className="max-w-xs truncate" title={income.bankAccount}>
										{income.bankAccount}
									</TableCell>
									<TableCell className="max-w-xs truncate" title={income.note}>
										{income.note || "-"}
									</TableCell>
									<TableCell>
										<Badge variant={income.status === "รับเงินแล้ว" ? "default" : "secondary"}>
											{income.status}
										</Badge>
									</TableCell>
									<TableCell>
										<div className="flex space-x-2">
											<Button variant="outline" size="sm">
												<Edit className="h-4 w-4" />
											</Button>
											<Button variant="outline" size="sm">
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

			{/* สรุปยอดรวม */}
			<Card>
				<CardContent className="p-6">
					<div className="flex justify-between items-center">
						<div className="text-sm text-muted-foreground">รวม {incomeData.length} รายการ</div>
						<div className="space-y-2 text-right">
							<div className="text-lg">
								<span className="text-muted-foreground">ยอดรับเงินรวม: </span>
								<span className="font-bold text-2xl text-green-600">
									{formatCurrency(totalReceived + totalPending)}
								</span>
							</div>
							<div className="text-sm text-muted-foreground">
								รับเงินแล้ว: {formatCurrency(totalReceived)} | รอรับเงิน:{" "}
								{formatCurrency(totalPending)}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
