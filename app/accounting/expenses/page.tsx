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
import {
	Plus,
	Search,
	Edit,
	Trash2,
	Download,
	Calendar,
	DollarSign,
	TrendingDown,
	Fuel,
	Wrench,
	Users,
} from "lucide-react";

// Mock data สำหรับรายจ่าย
const expenseData = [
	{
		id: 1,
		paymentDate: "2024-12-28",
		payeeName: "ปั๊มน้ำมัน PTT สาขาลาดพร้าว",
		description: "เติมน้ำมันดีเซล",
		taxInvoiceSummary: "บิลภาษีซื้อ 12345",
		dailyBillSummary: "บิลรายวัน 28/12/2024",
		actualPayment: 15000,
		fuelAllowance: 15000,
		salary: 0,
		maintenanceCost: 0,
		fuelByPump: {
			pump: "PTT สาขาลาดพร้าว",
			plan: "แพล้น A",
			amount: 15000,
		},
		category: "ค่าน้ำมัน",
		paymentMethod: "โอนเงิน",
		status: "จ่ายแล้ว",
		note: "เติมน้ำมันรถโม่ หมายเลข 1234",
	},
	{
		id: 2,
		paymentDate: "2024-12-30",
		payeeName: "บริษัท ซ่อมรถโม่ จำกัด",
		description: "ซ่อมแซมเครื่องยนต์รถโม่",
		taxInvoiceSummary: "บิลภาษีซื้อ 12346",
		dailyBillSummary: "บิลรายวัน 30/12/2024",
		actualPayment: 25000,
		fuelAllowance: 0,
		salary: 0,
		maintenanceCost: 25000,
		fuelByPump: {
			pump: "-",
			plan: "-",
			amount: 0,
		},
		category: "ค่าซ่อมบำรุง",
		paymentMethod: "เงินสด",
		status: "จ่ายแล้ว",
		note: "ซ่อมเครื่องยนต์รถโม่ ทะเบียน กข-1234",
	},
	{
		id: 3,
		paymentDate: "2024-12-31",
		payeeName: "พนักงานประจำ",
		description: "จ่ายเงินเดือนประจำเดือน ธันวาคม 2024",
		taxInvoiceSummary: "-",
		dailyBillSummary: "จ่ายเงินเดือน 31/12/2024",
		actualPayment: 180000,
		fuelAllowance: 0,
		salary: 180000,
		maintenanceCost: 0,
		fuelByPump: {
			pump: "-",
			plan: "-",
			amount: 0,
		},
		category: "เงินเดือน",
		paymentMethod: "โอนเงิน",
		status: "จ่ายแล้ว",
		note: "จ่ายเงินเดือนพนักงาน 8 คน",
	},
	{
		id: 4,
		paymentDate: "2025-01-02",
		payeeName: "ปั๊มน้ำมัน Shell สาขาสุขุมวิท",
		description: "เติมน้ำมันดีเซล",
		taxInvoiceSummary: "บิลภาษีซื้อ 12347",
		dailyBillSummary: "บิลรายวัน 02/01/2025",
		actualPayment: 12000,
		fuelAllowance: 12000,
		salary: 0,
		maintenanceCost: 0,
		fuelByPump: {
			pump: "Shell สาขาสุขุมวิท",
			plan: "แพล้น B",
			amount: 12000,
		},
		category: "ค่าน้ำมัน",
		paymentMethod: "เงินสด",
		status: "จ่ายแล้ว",
		note: "เติมน้ำมันรถโม่ หมายเลข 5678",
	},
	{
		id: 5,
		paymentDate: "2025-01-05",
		payeeName: "บริษัท อะไหล่รถโม่ จำกัด",
		description: "ซื้ออะไหล่เปลี่ยน",
		taxInvoiceSummary: "บิลภาษีซื้อ 12348",
		dailyBillSummary: "บิลรายวัน 05/01/2025",
		actualPayment: 8500,
		fuelAllowance: 0,
		salary: 0,
		maintenanceCost: 8500,
		fuelByPump: {
			pump: "-",
			plan: "-",
			amount: 0,
		},
		category: "ค่าซ่อมบำรุง",
		paymentMethod: "โอนเงิน",
		status: "รอจ่าย",
		note: "ซื้อยางรถโม่และน้ำมันเครื่อง",
	},
];

export default function AccountingExpensesPage() {
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

	const totalPaid = expenseData
		.filter((item) => item.status === "จ่ายแล้ว")
		.reduce((sum, item) => sum + item.actualPayment, 0);

	const totalPending = expenseData
		.filter((item) => item.status === "รอจ่าย")
		.reduce((sum, item) => sum + item.actualPayment, 0);

	const totalFuel = expenseData.reduce((sum, item) => sum + item.fuelAllowance, 0);
	const totalSalary = expenseData.reduce((sum, item) => sum + item.salary, 0);
	const totalMaintenance = expenseData.reduce((sum, item) => sum + item.maintenanceCost, 0);

	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">รายจ่าย</h1>
				<p className="text-muted-foreground">จัดการรายจ่ายและการจ่ายเงินของบริษัท</p>
			</div>

			{/* สรุปข้อมูล */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายจ่ายรวม</CardTitle>
						<TrendingDown className="h-4 w-4 text-red-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600">
							{formatCurrency(totalPaid + totalPending)}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ค่าน้ำมัน</CardTitle>
						<Fuel className="h-4 w-4 text-orange-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-600">{formatCurrency(totalFuel)}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เงินเดือน</CardTitle>
						<Users className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">{formatCurrency(totalSalary)}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ค่าซ่อมบำรุง</CardTitle>
						<Wrench className="h-4 w-4 text-purple-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-purple-600">
							{formatCurrency(totalMaintenance)}
						</div>
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
							<SelectValue placeholder="หมวดหมู่" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="fuel">ค่าน้ำมัน</SelectItem>
							<SelectItem value="salary">เงินเดือน</SelectItem>
							<SelectItem value="maintenance">ค่าซ่อมบำรุง</SelectItem>
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
						เพิ่มรายการรายจ่าย
					</Button>
				</div>
			</div>

			{/* ตารางข้อมูล */}
			<Card>
				<CardContent className="p-0">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>วันที่จ่าย</TableHead>
								<TableHead>ชื่อผู้รับเงิน</TableHead>
								<TableHead>รายละเอียด</TableHead>
								<TableHead>สรุปบิล ภาษีซื้อ</TableHead>
								<TableHead>สรุปบิล รายวัน</TableHead>
								<TableHead className="text-right">ยอดเงินที่จ่ายจริง</TableHead>
								<TableHead className="text-right">เหมาน้ำมัน</TableHead>
								<TableHead className="text-right">เงินเดือน</TableHead>
								<TableHead className="text-right">ค่าซ่อมรถโม่</TableHead>
								<TableHead>การเติมน้ำมัน</TableHead>
								<TableHead>หมวดหมู่</TableHead>
								<TableHead>สถานะ</TableHead>
								<TableHead>หมายเหตุ</TableHead>
								<TableHead className="text-center">การจัดการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{expenseData.map((expense) => (
								<TableRow key={expense.id}>
									<TableCell>{formatDate(expense.paymentDate)}</TableCell>
									<TableCell className="font-medium">{expense.payeeName}</TableCell>
									<TableCell className="max-w-xs truncate" title={expense.description}>
										{expense.description}
									</TableCell>
									<TableCell>{expense.taxInvoiceSummary}</TableCell>
									<TableCell>{expense.dailyBillSummary}</TableCell>
									<TableCell className="text-right font-bold text-red-600">
										{formatCurrency(expense.actualPayment)}
									</TableCell>
									<TableCell className="text-right">
										{expense.fuelAllowance > 0 ? formatCurrency(expense.fuelAllowance) : "-"}
									</TableCell>
									<TableCell className="text-right">
										{expense.salary > 0 ? formatCurrency(expense.salary) : "-"}
									</TableCell>
									<TableCell className="text-right">
										{expense.maintenanceCost > 0 ? formatCurrency(expense.maintenanceCost) : "-"}
									</TableCell>
									<TableCell>
										{expense.fuelByPump.pump !== "-" ? (
											<div className="text-sm">
												<div className="font-medium">{expense.fuelByPump.pump}</div>
												<div className="text-muted-foreground">{expense.fuelByPump.plan}</div>
												<div className="text-orange-600">
													{formatCurrency(expense.fuelByPump.amount)}
												</div>
											</div>
										) : (
											"-"
										)}
									</TableCell>
									<TableCell>
										<Badge
											variant={
												expense.category === "ค่าน้ำมัน"
													? "default"
													: expense.category === "เงินเดือน"
													? "secondary"
													: "outline"
											}
										>
											{expense.category}
										</Badge>
									</TableCell>
									<TableCell>
										<Badge variant={expense.status === "จ่ายแล้ว" ? "default" : "destructive"}>
											{expense.status}
										</Badge>
									</TableCell>
									<TableCell className="max-w-xs truncate" title={expense.note}>
										{expense.note || "-"}
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
					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<h3 className="text-lg font-semibold mb-4">สรุปรายจ่ายตามประเภท</h3>
							<div className="space-y-2">
								<div className="flex justify-between">
									<span>ค่าน้ำมัน:</span>
									<span className="font-medium text-orange-600">{formatCurrency(totalFuel)}</span>
								</div>
								<div className="flex justify-between">
									<span>เงินเดือน:</span>
									<span className="font-medium text-blue-600">{formatCurrency(totalSalary)}</span>
								</div>
								<div className="flex justify-between">
									<span>ค่าซ่อมบำรุง:</span>
									<span className="font-medium text-purple-600">
										{formatCurrency(totalMaintenance)}
									</span>
								</div>
								<div className="border-t pt-2 flex justify-between font-bold">
									<span>รวมทั้งสิ้น:</span>
									<span className="text-red-600">{formatCurrency(totalPaid + totalPending)}</span>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">สรุปการจ่ายเงิน</h3>
							<div className="space-y-2">
								<div className="flex justify-between">
									<span>จ่ายแล้ว:</span>
									<span className="font-medium text-green-600">{formatCurrency(totalPaid)}</span>
								</div>
								<div className="flex justify-between">
									<span>รอจ่าย:</span>
									<span className="font-medium text-orange-600">
										{formatCurrency(totalPending)}
									</span>
								</div>
								<div className="border-t pt-2 flex justify-between">
									<span className="text-muted-foreground">รวม {expenseData.length} รายการ</span>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
