"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
	Download,
	Plus,
	Search,
	DollarSign,
	TrendingUp,
	Calendar,
	Eye,
	Edit,
	Users,
	Receipt,
} from "lucide-react";

// Mock data สำหรับรายได้ประจำเดือน
const monthlyIncomes = [
	{
		id: 1,
		employeeCode: "OP-DR-1-001",
		employeeName: "สมชาย ใจดี",
		department: "ปฏิบัติการ",
		position: "คนขับรถบรรทุก",
		avatar: "/placeholder-user.jpg",
		month: "2024-12",
		baseSalary: 25000,
		overtime: 3500,
		bonus: 2000,
		allowances: {
			transportation: 2000,
			meal: 1500,
			phone: 500,
			other: 1500,
		},
		deductions: {
			tax: 2100,
			socialSecurity: 750,
			providentFund: 1750,
			other: 0,
		},
		// ข้อมูลสะสมปัจจุบัน
		yearToDateTotals: {
			totalIncome: 558000, // รายได้สะสมปัจจุบัน
			socialSecurityAccumulated: 9000, // ประกันสังคมยอดสะสมปัจจุบัน
			taxAccumulated: 25200, // ภาษีหัก ณ ที่จ่ายสะสมปัจจุบัน
			fuelAllowanceAccumulated: 55800, // เหมาน้ำมันสะสมปัจจุบัน
		},
		// ข้อมูลเดือนนี้
		currentMonth: {
			income: 46500, // รายได้เดือนนี้
			socialSecurityDeduction: 750, // หักประกันสังคมเดือนนี้
			taxDeduction: 2100, // ภาษีหัก ณ ที่จ่ายเดือนนี้
			fuelAllowance10Percent: 4650, // เหมาน้ำมัน10%เดือนนี้
		},
		workingDays: 22,
		overtimeHours: 0,
		totalIncome: 46500,
		totalDeductions: 4600,
		netSalary: 41900,
		status: "จ่ายแล้ว",
		payDate: "2024-12-30",
	},
];

// Mock data สำหรับสรุปรายได้รายเดือน
const monthlySummary = {
	totalEmployees: 24,
	totalSalaryBudget: 580000,
	totalPaid: 565200,
	averageSalary: 23550,
	topEarner: { name: "สมหญิง มีสุข", amount: 41900 },
	totalOvertime: 42500,
	totalBonuses: 28000,
};

export default function EmployeeMonthlyIncomePage() {
	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">รายได้ประจำเดือน</h1>
				<p className="text-muted-foreground">จัดการเงินเดือนและรายได้ประจำเดือนของพนักงาน</p>
			</div>

			<Tabs defaultValue="salaries" className="space-y-4">
				<TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
					<TabsTrigger value="salaries">เงินเดือนรายคน</TabsTrigger>
					<TabsTrigger value="summary">สรุปรายเดือน</TabsTrigger>
					<TabsTrigger value="payroll">ใบจ่ายเงินเดือน</TabsTrigger>
				</TabsList>

				<TabsContent value="salaries" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
									<Input placeholder="ค้นหาพนักงาน..." className="pl-10 w-64" />
								</div>
								<Select>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="เลือกเดือน" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="2024-12">ธันวาคม 2024</SelectItem>
										<SelectItem value="2024-11">พฤศจิกายน 2024</SelectItem>
										<SelectItem value="2024-10">ตุลาคม 2024</SelectItem>
										<SelectItem value="2024-09">กันยายน 2024</SelectItem>
									</SelectContent>
								</Select>
								<Select>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="เลือกฝ่าย" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">ทุกฝ่าย</SelectItem>
										<SelectItem value="operation">ปฏิบัติการ</SelectItem>
										<SelectItem value="admin">บริหาร</SelectItem>
										<SelectItem value="accounting">บัญชี</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								คำนวณเงินเดือน
							</Button>
						</div>

						<div className="grid gap-4">
							{monthlyIncomes.map((income) => (
								<Card key={income.id}>
									<CardContent className="p-6">
										<div className="flex items-start justify-between">
											<div className="flex items-start space-x-4">
												<Avatar className="h-16 w-16">
													<AvatarImage src={income.avatar} alt={income.employeeName} />
													<AvatarFallback>
														{income.employeeName.split(" ")[0].charAt(0)}
														{income.employeeName.split(" ")[1]?.charAt(0)}
													</AvatarFallback>
												</Avatar>
												<div className="space-y-3 flex-1">
													<div className="flex items-center space-x-2">
														<h3 className="text-lg font-semibold">{income.employeeName}</h3>
														<Badge variant="outline">{income.employeeCode}</Badge>
														<Badge variant={income.status === "จ่ายแล้ว" ? "default" : "secondary"}>
															{income.status}
														</Badge>
													</div>

													<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
														<div>
															<span className="text-muted-foreground">ฝ่าย/ตำแหน่ง:</span>
															<div className="font-medium">
																{income.department} / {income.position}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">เดือน:</span>
															<div className="font-medium">{income.month}</div>
														</div>
														<div>
															<span className="text-muted-foreground">วันทำงาน:</span>
															<div className="font-medium">{income.workingDays} วัน</div>
														</div>
														<div>
															<span className="text-muted-foreground">OT:</span>
															<div className="font-medium">{income.overtimeHours} ชม.</div>
														</div>
													</div>

													<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
														<div>
															<span className="text-muted-foreground">เงินเดือนพื้นฐาน:</span>
															<div className="font-medium text-blue-600">
																{formatCurrency(income.baseSalary)}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">ค่าล่วงเวลา:</span>
															<div className="font-medium text-green-600">
																{formatCurrency(income.overtime)}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">โบนัส:</span>
															<div className="font-medium text-green-600">
																{formatCurrency(income.bonus)}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">เบี้ยเลี้ยงอื่นๆ:</span>
															<div className="font-medium text-green-600">
																{formatCurrency(
																	Object.values(income.allowances).reduce((a, b) => a + b, 0)
																)}
															</div>
														</div>
													</div>

													<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
														<div>
															<span className="text-muted-foreground">รายได้รวม:</span>
															<div className="font-bold text-green-600">
																{formatCurrency(income.totalIncome)}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">หักรวม:</span>
															<div className="font-medium text-red-600">
																{formatCurrency(income.totalDeductions)}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">รายได้สุทธิ:</span>
															<div className="font-bold text-2xl text-blue-600">
																{formatCurrency(income.netSalary)}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">วันที่จ่าย:</span>
															<div className="font-medium">{income.payDate}</div>
														</div>
													</div>

													{/* ข้อมูลสะสมและเดือนปัจจุบัน */}
													<div className="border-t pt-4 mt-4">
														<h4 className="font-semibold mb-3 text-primary">ข้อมูลสะสมปัจจุบัน</h4>
														<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
															<div>
																<span className="text-muted-foreground">รายได้สะสมปัจจุบัน:</span>
																<div className="font-bold text-green-600">
																	{formatCurrency(income.yearToDateTotals.totalIncome)}
																</div>
															</div>
															<div>
																<span className="text-muted-foreground">ประกันสังคมสะสม:</span>
																<div className="font-medium text-orange-600">
																	{formatCurrency(
																		income.yearToDateTotals.socialSecurityAccumulated
																	)}
																</div>
															</div>
															<div>
																<span className="text-muted-foreground">
																	ภาษีหัก ณ ที่จ่ายสะสม:
																</span>
																<div className="font-medium text-red-600">
																	{formatCurrency(income.yearToDateTotals.taxAccumulated)}
																</div>
															</div>
															<div>
																<span className="text-muted-foreground">เหมาน้ำมันสะสม:</span>
																<div className="font-medium text-blue-600">
																	{formatCurrency(income.yearToDateTotals.fuelAllowanceAccumulated)}
																</div>
															</div>
														</div>
													</div>

													<div className="border-t pt-4 mt-4">
														<h4 className="font-semibold mb-3 text-primary">รายละเอียดเดือนนี้</h4>
														<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
															<div>
																<span className="text-muted-foreground">รายได้เดือนนี้:</span>
																<div className="font-bold text-green-600">
																	{formatCurrency(income.currentMonth.income)}
																</div>
															</div>
															<div>
																<span className="text-muted-foreground">
																	หักประกันสังคมเดือนนี้:
																</span>
																<div className="font-medium text-orange-600">
																	{formatCurrency(income.currentMonth.socialSecurityDeduction)}
																</div>
															</div>
															<div>
																<span className="text-muted-foreground">
																	ภาษีหัก ณ ที่จ่ายเดือนนี้:
																</span>
																<div className="font-medium text-red-600">
																	{formatCurrency(income.currentMonth.taxDeduction)}
																</div>
															</div>
															<div>
																<span className="text-muted-foreground">
																	เหมาน้ำมัน 10% เดือนนี้:
																</span>
																<div className="font-medium text-blue-600">
																	{formatCurrency(income.currentMonth.fuelAllowance10Percent)}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="flex space-x-2">
												<Button variant="outline" size="sm">
													<Download className="h-4 w-4 mr-1" />
													ใบจ่ายเงิน
												</Button>
												<Button variant="outline" size="sm">
													<Edit className="h-4 w-4 mr-1" />
													แก้ไข
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="summary" className="mt-2">
					<div className="space-y-6">
						<div>
							<h2 className="text-xl font-semibold">สรุปรายได้ประจำเดือน</h2>
							<p className="text-muted-foreground">ภาพรวมการจ่ายเงินเดือนและค่าใช้จ่ายบุคลากร</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<DollarSign className="h-8 w-8 text-blue-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">
												{formatCurrency(monthlySummary.totalPaid)}
											</p>
											<p className="text-sm text-muted-foreground">จ่ายทั้งหมด</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<TrendingUp className="h-8 w-8 text-green-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">
												{formatCurrency(monthlySummary.averageSalary)}
											</p>
											<p className="text-sm text-muted-foreground">เงินเดือนเฉลี่ย</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<Calendar className="h-8 w-8 text-purple-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">
												{monthlySummary.totalEmployees}
											</p>
											<p className="text-sm text-muted-foreground">พนักงานทั้งหมด</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<Receipt className="h-8 w-8 text-orange-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">
												{formatCurrency(monthlySummary.totalOvertime)}
											</p>
											<p className="text-sm text-muted-foreground">ค่าล่วงเวลารวม</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						<Card>
							<CardHeader>
								<CardTitle>รายได้ตามฝ่าย</CardTitle>
								<CardDescription>เปรียบเทียบรายได้เฉลี่ยของแต่ละฝ่าย</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{[
										{ department: "ฝ่ายบริหาร", avgSalary: 38500, employees: 3, total: 115500 },
										{
											department: "ฝ่ายปฏิบัติการ",
											avgSalary: 21200,
											employees: 15,
											total: 318000,
										},
										{ department: "ฝ่ายบัญชี", avgSalary: 26800, employees: 4, total: 107200 },
										{ department: "ฝ่ายซ่อมบำรุง", avgSalary: 24500, employees: 2, total: 49000 },
									].map((dept, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-4 border rounded-lg"
										>
											<div>
												<h4 className="font-medium">{dept.department}</h4>
												<p className="text-sm text-muted-foreground">{dept.employees} คน</p>
											</div>
											<div className="text-right">
												<div className="font-bold text-lg text-blue-600">
													{formatCurrency(dept.avgSalary)}
												</div>
												<div className="text-sm text-muted-foreground">
													รวม {formatCurrency(dept.total)}
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>พนักงานรายได้สูงสุด</CardTitle>
								<CardDescription>รายชื่อพนักงานที่มีรายได้สูงสุดประจำเดือน</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
									<div className="flex items-center space-x-3">
										<Avatar className="h-12 w-12">
											<AvatarImage
												src="/placeholder-user.jpg"
												alt={monthlySummary.topEarner.name}
											/>
											<AvatarFallback>
												{monthlySummary.topEarner.name.split(" ")[0].charAt(0)}
												{monthlySummary.topEarner.name.split(" ")[1]?.charAt(0)}
											</AvatarFallback>
										</Avatar>
										<div>
											<h4 className="font-semibold">{monthlySummary.topEarner.name}</h4>
											<p className="text-sm text-muted-foreground">ผู้จัดการ - ฝ่ายบริหาร</p>
										</div>
									</div>
									<div className="text-right">
										<div className="text-2xl font-bold text-green-600">
											{formatCurrency(monthlySummary.topEarner.amount)}
										</div>
										<div className="text-sm text-muted-foreground">รายได้สุทธิ</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="payroll" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-xl font-semibold">ใบจ่ายเงินเดือน</h2>
								<p className="text-muted-foreground">สร้างและจัดการใบจ่ายเงินเดือนรายบุคคล</p>
							</div>
							<div className="flex space-x-2">
								<Button variant="outline">
									<Download className="h-4 w-4 mr-2" />
									ดาวน์โหลดทั้งหมด
								</Button>
								<Button>
									<Plus className="h-4 w-4 mr-2" />
									สร้างใบจ่ายเงิน
								</Button>
							</div>
						</div>

						<Card>
							<CardHeader>
								<CardTitle>เลือกพนักงานสำหรับสร้างใบจ่ายเงิน</CardTitle>
								<CardDescription>
									เลือกพนักงานและเดือนที่ต้องการสร้างใบจ่ายเงินเดือน
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="เลือกเดือน" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="2024-12">ธันวาคม 2024</SelectItem>
												<SelectItem value="2024-11">พฤศจิกายน 2024</SelectItem>
												<SelectItem value="2024-10">ตุลาคม 2024</SelectItem>
											</SelectContent>
										</Select>
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="เลือกฝ่าย" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all">ทุกฝ่าย</SelectItem>
												<SelectItem value="operation">ปฏิบัติการ</SelectItem>
												<SelectItem value="admin">บริหาร</SelectItem>
											</SelectContent>
										</Select>
										<Button className="w-full">
											<Search className="h-4 w-4 mr-2" />
											ค้นหา
										</Button>
									</div>

									<div className="border rounded-lg p-4">
										<div className="space-y-3">
											{monthlyIncomes.map((income) => (
												<div
													key={income.id}
													className="flex items-center justify-between p-3 border rounded-lg"
												>
													<div className="flex items-center space-x-3">
														<Avatar className="h-10 w-10">
															<AvatarImage src={income.avatar} alt={income.employeeName} />
															<AvatarFallback>
																{income.employeeName.split(" ")[0].charAt(0)}
																{income.employeeName.split(" ")[1]?.charAt(0)}
															</AvatarFallback>
														</Avatar>
														<div>
															<h4 className="font-medium">{income.employeeName}</h4>
															<p className="text-sm text-muted-foreground">
																{income.department} - {formatCurrency(income.netSalary)}
															</p>
														</div>
													</div>
													<Button variant="outline" size="sm">
														<Download className="h-3 w-3 mr-1" />
														ดาวน์โหลด
													</Button>
												</div>
											))}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
