"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Receipt, TrendingDown, Fuel, Users, Wrench } from "lucide-react";
import { useState } from "react";

export default function CompanyExpensesPage() {
	const [expenseData, setExpenseData] = useState([
		{
			id: 1,
			date: "2024-07-25",
			recipientName: "ปั้มบางจาก สาขาลาดพร้าว",
			description: "เติมน้ำมันรถโม่ A201",
			taxInvoiceSummary: 3000,
			dailyBillSummary: 3200,
			actualAmountPaid: 3000,
			fuelContractAmount: 120000,
			salary: 0,
			truckRepairCost: 0,
			fuelByStation: 3000,
			fuelByPlant: 3000,
			category: "เติมน้ำมัน",
			month: "กรกฎาคม 2024",
		},
		{
			id: 2,
			date: "2024-07-25",
			recipientName: "คุณสมชาย ใจดี",
			description: "เงินเดือนพนักงานขับรถ",
			taxInvoiceSummary: 0,
			dailyBillSummary: 18000,
			actualAmountPaid: 18000,
			fuelContractAmount: 0,
			salary: 18000,
			truckRepairCost: 0,
			fuelByStation: 0,
			fuelByPlant: 0,
			category: "เงินเดือน",
			month: "กรกฎาคม 2024",
		},
		{
			id: 3,
			date: "2024-07-24",
			recipientName: "อู่ซ่อมรถโชคชัย",
			description: "ซ่อมเครื่องยนต์รถโม่ A202",
			taxInvoiceSummary: 15000,
			dailyBillSummary: 15000,
			actualAmountPaid: 15000,
			fuelContractAmount: 0,
			salary: 0,
			truckRepairCost: 15000,
			fuelByStation: 0,
			fuelByPlant: 0,
			category: "ซ่อมบำรุง",
			month: "กรกฎาคม 2024",
		},
	]);

	// คำนวณสถิติ
	const totalExpenses = expenseData.reduce((sum, item) => sum + item.actualAmountPaid, 0);
	const totalTaxInvoice = expenseData.reduce((sum, item) => sum + item.taxInvoiceSummary, 0);
	const totalSalary = expenseData.reduce((sum, item) => sum + item.salary, 0);
	const totalRepairCost = expenseData.reduce((sum, item) => sum + item.truckRepairCost, 0);
	const totalFuelCost = expenseData.reduce((sum, item) => sum + item.fuelByStation, 0);

	// สรุปตามหมวดหมู่
	const expensesByCategory = expenseData.reduce((acc, item) => {
		if (!acc[item.category]) {
			acc[item.category] = { count: 0, total: 0 };
		}
		acc[item.category].count += 1;
		acc[item.category].total += item.actualAmountPaid;
		return acc;
	}, {} as Record<string, { count: number; total: number }>);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold">รายจ่ายบริษัท</h1>
				<Dialog>
					<DialogTrigger asChild>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							เพิ่มรายจ่าย
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[700px]">
						<DialogHeader>
							<DialogTitle>เพิ่มรายจ่ายใหม่</DialogTitle>
						</DialogHeader>
						<form className="grid gap-4 py-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="date">วันที่จ่าย</Label>
									<Input id="date" type="date" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="month">รอบเดือน</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="เลือกเดือน" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="2024-07">กรกฎาคม 2024</SelectItem>
											<SelectItem value="2024-06">มิถุนายน 2024</SelectItem>
											<SelectItem value="2024-05">พฤษภาคม 2024</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="recipientName">ชื่อผู้รับเงิน</Label>
								<Input id="recipientName" placeholder="เช่น ปั้มบางจาก สาขาลาดพร้าว" />
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">รายละเอียด</Label>
								<Textarea id="description" placeholder="อธิบายรายละเอียดการจ่ายเงิน" />
							</div>

							<div className="space-y-2">
								<Label htmlFor="category">หมวดหมู่</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="เลือกหมวดหมู่" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="เติมน้ำมัน">เติมน้ำมัน</SelectItem>
										<SelectItem value="เงินเดือน">เงินเดือน</SelectItem>
										<SelectItem value="ซ่อมบำรุง">ซ่อมบำรุง</SelectItem>
										<SelectItem value="เหมาน้ำมัน">เหมาน้ำมัน</SelectItem>
										<SelectItem value="อื่นๆ">อื่นๆ</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="grid grid-cols-3 gap-4">
								<div className="space-y-2">
									<Label htmlFor="taxInvoiceSummary">สรุปบิลภาษีซื้อ (บาท)</Label>
									<Input id="taxInvoiceSummary" type="number" step="0.01" placeholder="0.00" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="dailyBillSummary">สรุปบิลรายวัน (บาท)</Label>
									<Input id="dailyBillSummary" type="number" step="0.01" placeholder="0.00" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="actualAmountPaid">ยอดเงินที่จ่ายจริง (บาท)</Label>
									<Input id="actualAmountPaid" type="number" step="0.01" placeholder="0.00" />
								</div>
							</div>

							<div className="border-t pt-4">
								<h3 className="text-lg font-semibold mb-4">รายละเอียดเพิ่มเติม</h3>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="fuelContractAmount">เหมาน้ำมัน (บาท)</Label>
										<Input id="fuelContractAmount" type="number" step="0.01" placeholder="0.00" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="salary">เงินเดือน (บาท)</Label>
										<Input id="salary" type="number" step="0.01" placeholder="0.00" />
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4 mt-4">
									<div className="space-y-2">
										<Label htmlFor="truckRepairCost">ค่าซ่อมรถโม่ (บาท)</Label>
										<Input id="truckRepairCost" type="number" step="0.01" placeholder="0.00" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="fuelByStation">การเติมน้ำมันแต่ละปั้ม (บาท)</Label>
										<Input id="fuelByStation" type="number" step="0.01" placeholder="0.00" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="fuelByPlant">การเติมน้ำมันแต่ละแพล้น (บาท)</Label>
										<Input id="fuelByPlant" type="number" step="0.01" placeholder="0.00" />
									</div>
								</div>
							</div>

							<div className="flex justify-end gap-2 pt-4">
								<Button type="button" variant="outline">
									ยกเลิก
								</Button>
								<Button type="submit">บันทึก</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</div>

			{/* สถิติภาพรวม */}
			<div className="grid gap-4 md:grid-cols-5">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายจ่ายรวม</CardTitle>
						<TrendingDown className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalExpenses.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">ในเดือนนี้</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">บิลภาษีซื้อ</CardTitle>
						<Receipt className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalTaxInvoice.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">รวมบิล</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เงินเดือน</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalSalary.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">พนักงาน</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ซ่อมบำรุง</CardTitle>
						<Wrench className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalRepairCost.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">รถโม่</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">น้ำมัน</CardTitle>
						<Fuel className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalFuelCost.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">เติมน้ำมัน</p>
					</CardContent>
				</Card>
			</div>

			{/* ตารางรายจ่าย */}
			<Card>
				<CardHeader>
					<CardTitle>รายการรายจ่าย</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>วันที่จ่าย</TableHead>
								<TableHead>ชื่อผู้รับเงิน</TableHead>
								<TableHead>รายละเอียด</TableHead>
								<TableHead>หมวดหมู่</TableHead>
								<TableHead className="text-right">บิลภาษีซื้อ</TableHead>
								<TableHead className="text-right">บิลรายวัน</TableHead>
								<TableHead className="text-right">ยอดจ่ายจริง</TableHead>
								<TableHead>เดือน</TableHead>
								<TableHead className="text-center">จัดการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{expenseData.map((item) => (
								<TableRow key={item.id}>
									<TableCell>{new Date(item.date).toLocaleDateString("th-TH")}</TableCell>
									<TableCell className="font-medium max-w-[150px]">{item.recipientName}</TableCell>
									<TableCell className="max-w-[200px]">{item.description}</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 rounded-full text-xs ${
												item.category === "เติมน้ำมัน"
													? "bg-blue-100 text-blue-800"
													: item.category === "เงินเดือน"
													? "bg-green-100 text-green-800"
													: item.category === "ซ่อมบำรุง"
													? "bg-orange-100 text-orange-800"
													: "bg-gray-100 text-gray-800"
											}`}
										>
											{item.category}
										</span>
									</TableCell>
									<TableCell className="text-right">
										฿{item.taxInvoiceSummary.toLocaleString()}
									</TableCell>
									<TableCell className="text-right">
										฿{item.dailyBillSummary.toLocaleString()}
									</TableCell>
									<TableCell className="text-right font-bold">
										฿{item.actualAmountPaid.toLocaleString()}
									</TableCell>
									<TableCell>{item.month}</TableCell>
									<TableCell className="text-center">
										<div className="flex justify-center gap-2">
											<Button variant="outline" size="sm">
												<Edit className="h-4 w-4" />
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="text-red-600 hover:text-red-700"
											>
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

			{/* สรุปตามหมวดหมู่ */}
			<Card>
				<CardHeader>
					<CardTitle>สรุปรายจ่ายตามหมวดหมู่</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{Object.entries(expensesByCategory).map(([category, data]) => (
							<div key={category} className="p-4 bg-gray-50 rounded-lg">
								<div className="flex items-center justify-between mb-2">
									<div className="font-medium">{category}</div>
									<div className="text-sm text-gray-600">{data.count} รายการ</div>
								</div>
								<div className="text-xl font-bold">฿{data.total.toLocaleString()}</div>
								<div className="text-sm text-gray-600">
									เฉลี่ย ฿{(data.total / data.count).toLocaleString()} ต่อรายการ
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			{/* รายละเอียดเพิ่มเติม */}
			<div className="grid gap-4 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>รายละเอียดค่าใช้จ่ายพิเศษ</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							{expenseData
								.filter((item) => item.fuelContractAmount > 0 || item.truckRepairCost > 0)
								.map((item) => (
									<div key={item.id} className="p-3 bg-gray-50 rounded-lg">
										<div className="font-medium">{item.description}</div>
										<div className="text-sm text-gray-600 mt-1">
											{item.fuelContractAmount > 0 && (
												<div>เหมาน้ำมัน: ฿{item.fuelContractAmount.toLocaleString()}</div>
											)}
											{item.truckRepairCost > 0 && (
												<div>ซ่อมรถโม่: ฿{item.truckRepairCost.toLocaleString()}</div>
											)}
										</div>
									</div>
								))}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>สรุปการเติมน้ำมัน</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							{expenseData
								.filter((item) => item.fuelByStation > 0 || item.fuelByPlant > 0)
								.map((item) => (
									<div key={item.id} className="p-3 bg-gray-50 rounded-lg">
										<div className="font-medium">{item.recipientName}</div>
										<div className="text-sm text-gray-600 mt-1">
											{item.fuelByStation > 0 && (
												<div>ตามปั้ม: ฿{item.fuelByStation.toLocaleString()}</div>
											)}
											{item.fuelByPlant > 0 && (
												<div>ตามแพล้น: ฿{item.fuelByPlant.toLocaleString()}</div>
											)}
										</div>
									</div>
								))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
