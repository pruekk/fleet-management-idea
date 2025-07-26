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
import { Search, Plus, DollarSign, TrendingUp, Calendar, Download, Eye, Edit } from "lucide-react";

export default function MonthlyIncomePage() {
	const monthlyIncomes = [
		{
			id: "EMP001",
			name: "นายสมชาย ใจดี",
			position: "คนขับรถโม่",
			month: "2024-01",
			baseSalary: 18000,
			overtime: 3750,
			allowance: 1500,
			bonus: 2000,
			commission: 800,
			totalIncome: 26050,
			workingDays: 26,
			overtimeHours: 15,
		},
		{
			id: "EMP002",
			name: "นายวิชัย รักงาน",
			position: "หัวหน้าขนส่ง",
			month: "2024-01",
			baseSalary: 35000,
			overtime: 2000,
			allowance: 3000,
			bonus: 5000,
			commission: 0,
			totalIncome: 45000,
			workingDays: 26,
			overtimeHours: 8,
		},
		{
			id: "EMP003",
			name: "นางสุดา ขยันดี",
			position: "เจ้าหน้าที่บัญชี",
			month: "2024-01",
			baseSalary: 25000,
			overtime: 1250,
			allowance: 2000,
			bonus: 1500,
			commission: 0,
			totalIncome: 29750,
			workingDays: 24,
			overtimeHours: 5,
		},
	];

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	const totalMonthlyIncome = monthlyIncomes.reduce((sum, emp) => sum + emp.totalIncome, 0);
	const averageIncome = totalMonthlyIncome / monthlyIncomes.length;

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">รายได้ประจำเดือน</h1>
				<div className="flex gap-2">
					<Button variant="outline" className="border-input">
						<Download className="w-4 h-4 mr-2" />
						ส่งออกรายงาน
					</Button>
					<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
						<Plus className="w-4 h-4 mr-2" />
						เพิ่มข้อมูลรายได้
					</Button>
				</div>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">เลือกเดือน/ปี และค้นหา</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4 items-center">
						<Input
							type="month"
							defaultValue="2024-01"
							className="bg-background border-input w-40"
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
						<DollarSign className="w-5 h-5" />
						รายได้ประจำเดือน - มกราคม 2567
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">รหัสพนักงาน</TableHead>
								<TableHead className="text-muted-foreground">ชื่อ-นามสกุล</TableHead>
								<TableHead className="text-muted-foreground">ตำแหน่ง</TableHead>
								<TableHead className="text-muted-foreground">เงินเดือนพื้นฐาน</TableHead>
								<TableHead className="text-muted-foreground">ค่า OT</TableHead>
								<TableHead className="text-muted-foreground">เบี้ยเลี้ยง</TableHead>
								<TableHead className="text-muted-foreground">โบนัส</TableHead>
								<TableHead className="text-muted-foreground">คอมมิชชั่น</TableHead>
								<TableHead className="text-muted-foreground">รวมรายได้</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{monthlyIncomes.map((income) => (
								<TableRow key={income.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{income.id}</TableCell>
									<TableCell className="text-foreground">{income.name}</TableCell>
									<TableCell className="text-foreground">{income.position}</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(income.baseSalary)}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(income.overtime)}
									</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(income.allowance)}
									</TableCell>
									<TableCell className="text-foreground">{formatCurrency(income.bonus)}</TableCell>
									<TableCell className="text-foreground">
										{formatCurrency(income.commission)}
									</TableCell>
									<TableCell className="font-bold text-foreground">
										{formatCurrency(income.totalIncome)}
									</TableCell>
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
							<DollarSign className="w-8 h-8 text-green-500" />
							<div>
								<p className="text-xl font-bold text-foreground">
									{(totalMonthlyIncome / 1000).toFixed(0)}K
								</p>
								<p className="text-sm text-muted-foreground">รายได้รวม (บาท)</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<TrendingUp className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-xl font-bold text-foreground">
									{(averageIncome / 1000).toFixed(0)}K
								</p>
								<p className="text-sm text-muted-foreground">เฉลี่ยต่อคน (บาท)</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Calendar className="w-8 h-8 text-purple-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">25</p>
								<p className="text-sm text-muted-foreground">วันทำงานเฉลี่ย</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<TrendingUp className="w-8 h-8 text-yellow-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">9.3</p>
								<p className="text-sm text-muted-foreground">ชั่วโมง OT เฉลี่ย</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Income Breakdown Chart */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">สัดส่วนรายได้</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<h4 className="font-medium text-foreground">แยกตามประเภท</h4>
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">เงินเดือนพื้นฐาน</span>
									<span className="text-sm font-medium text-foreground">78.0%</span>
								</div>
								<div className="w-full bg-muted h-2 rounded-full">
									<div className="bg-blue-500 h-2 rounded-full w-[78%]"></div>
								</div>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">ค่าล่วงเวลา</span>
									<span className="text-sm font-medium text-foreground">12.0%</span>
								</div>
								<div className="w-full bg-muted h-2 rounded-full">
									<div className="bg-green-500 h-2 rounded-full w-[12%]"></div>
								</div>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">โบนัส</span>
									<span className="text-sm font-medium text-foreground">8.5%</span>
								</div>
								<div className="w-full bg-muted h-2 rounded-full">
									<div className="bg-purple-500 h-2 rounded-full w-[8.5%]"></div>
								</div>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">อื่นๆ</span>
									<span className="text-sm font-medium text-foreground">1.5%</span>
								</div>
								<div className="w-full bg-muted h-2 rounded-full">
									<div className="bg-yellow-500 h-2 rounded-full w-[1.5%]"></div>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="font-medium text-foreground">พนักงานรายได้สูงสุด</h4>
							<div className="space-y-3">
								{monthlyIncomes
									.sort((a, b) => b.totalIncome - a.totalIncome)
									.slice(0, 3)
									.map((emp, index) => (
										<div
											key={emp.id}
											className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
										>
											<div className="flex items-center gap-3">
												<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
													{index + 1}
												</div>
												<div>
													<p className="font-medium text-foreground">{emp.name}</p>
													<p className="text-sm text-muted-foreground">{emp.position}</p>
												</div>
											</div>
											<div className="text-right">
												<p className="font-bold text-foreground">
													{formatCurrency(emp.totalIncome)}
												</p>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
