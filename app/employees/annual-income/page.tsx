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
	TrendingUp,
	Calendar,
	DollarSign,
	Calculator,
	Download,
	Eye,
	Edit,
} from "lucide-react";

export default function AnnualIncomePage() {
	const annualIncomes = [
		{
			id: "EMP001",
			name: "นายสมชาย ใจดี",
			position: "คนขับรถโม่",
			year: 2024,
			totalIncome: 312600,
			baseSalary: 216000,
			overtime: 45000,
			bonus: 24000,
			allowance: 18000,
			commission: 9600,
			monthsWorked: 12,
			performance: "excellent",
		},
		{
			id: "EMP002",
			name: "นายวิชัย รักงาน",
			position: "หัวหน้าขนส่ง",
			year: 2024,
			totalIncome: 540000,
			baseSalary: 420000,
			overtime: 24000,
			bonus: 60000,
			allowance: 36000,
			commission: 0,
			monthsWorked: 12,
			performance: "excellent",
		},
		{
			id: "EMP003",
			name: "นางสุดา ขยันดี",
			position: "เจ้าหน้าที่บัญชี",
			year: 2024,
			totalIncome: 357000,
			baseSalary: 300000,
			overtime: 15000,
			bonus: 18000,
			allowance: 24000,
			commission: 0,
			monthsWorked: 12,
			performance: "good",
		},
		{
			id: "EMP004",
			name: "นายประยุทธ มีวินัย",
			position: "ช่างซ่อม",
			year: 2024,
			totalIncome: 198000,
			baseSalary: 176000,
			overtime: 12000,
			bonus: 8000,
			allowance: 2000,
			commission: 0,
			monthsWorked: 8,
			performance: "average",
		},
	];

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	const getPerformanceBadge = (performance: string) => {
		switch (performance) {
			case "excellent":
				return (
					<Badge variant="default" className="bg-green-600">
						ยอดเยี่ยม
					</Badge>
				);
			case "good":
				return (
					<Badge variant="outline" className="text-blue-600 border-blue-600">
						ดี
					</Badge>
				);
			case "average":
				return <Badge variant="secondary">ปานกลาง</Badge>;
			case "poor":
				return <Badge variant="destructive">ต้องปรับปรุง</Badge>;
			default:
				return <Badge variant="secondary">ไม่ระบุ</Badge>;
		}
	};

	const totalAnnualIncome = annualIncomes.reduce((sum, emp) => sum + emp.totalIncome, 0);
	const averageIncome = totalAnnualIncome / annualIncomes.length;

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">รายได้ประจำปี</h1>
				<div className="flex gap-2">
					<Button variant="outline" className="border-input">
						<Download className="w-4 h-4 mr-2" />
						ส่งออกรายงานประจำปี
					</Button>
					<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
						<Plus className="w-4 h-4 mr-2" />
						ประเมินผลประจำปี
					</Button>
				</div>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">เลือกปี และค้นหา</CardTitle>
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
						<TrendingUp className="w-5 h-5" />
						รายได้ประจำปี 2567
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">รหัสพนักงาน</TableHead>
								<TableHead className="text-muted-foreground">ชื่อ-นามสกุล</TableHead>
								<TableHead className="text-muted-foreground">ตำแหน่ง</TableHead>
								<TableHead className="text-muted-foreground">เงินเดือนรวม</TableHead>
								<TableHead className="text-muted-foreground">ค่า OT รวม</TableHead>
								<TableHead className="text-muted-foreground">โบนัสรวม</TableHead>
								<TableHead className="text-muted-foreground">รวมรายได้ปี</TableHead>
								<TableHead className="text-muted-foreground">เดือนทำงาน</TableHead>
								<TableHead className="text-muted-foreground">ประเมินผล</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{annualIncomes.map((income) => (
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
									<TableCell className="text-foreground">{formatCurrency(income.bonus)}</TableCell>
									<TableCell className="font-bold text-foreground">
										{formatCurrency(income.totalIncome)}
									</TableCell>
									<TableCell className="text-center text-muted-foreground">
										{income.monthsWorked}
									</TableCell>
									<TableCell>{getPerformanceBadge(income.performance)}</TableCell>
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
									{(totalAnnualIncome / 1000000).toFixed(1)}M
								</p>
								<p className="text-sm text-muted-foreground">รายได้รวมปี (บาท)</p>
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
								<p className="text-2xl font-bold text-foreground">11</p>
								<p className="text-sm text-muted-foreground">เดือนทำงานเฉลี่ย</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Calculator className="w-8 h-8 text-yellow-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">75%</p>
								<p className="text-sm text-muted-foreground">ประเมินผลดีขึ้นไป</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Annual Performance Summary */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Card className="bg-card border-border">
					<CardHeader>
						<CardTitle className="text-card-foreground">สรุปประสิทธิ์ภาพประจำปี</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
								<span className="text-foreground">ยอดเยี่ยม</span>
								<div className="flex items-center gap-2">
									<span className="text-2xl font-bold text-green-600">2</span>
									<span className="text-sm text-muted-foreground">คน</span>
								</div>
							</div>
							<div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<span className="text-foreground">ดี</span>
								<div className="flex items-center gap-2">
									<span className="text-2xl font-bold text-blue-600">1</span>
									<span className="text-sm text-muted-foreground">คน</span>
								</div>
							</div>
							<div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
								<span className="text-foreground">ปานกลาง</span>
								<div className="flex items-center gap-2">
									<span className="text-2xl font-bold text-gray-600">1</span>
									<span className="text-sm text-muted-foreground">คน</span>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardHeader>
						<CardTitle className="text-card-foreground">การเปรียบเทียบรายได้</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<div className="flex justify-between items-center mb-2">
									<span className="text-sm text-muted-foreground">รายได้สูงสุด</span>
									<span className="text-sm font-medium text-foreground">
										{formatCurrency(540000)}
									</span>
								</div>
								<div className="w-full bg-muted h-2 rounded-full">
									<div className="bg-green-500 h-2 rounded-full w-full"></div>
								</div>
							</div>
							<div>
								<div className="flex justify-between items-center mb-2">
									<span className="text-sm text-muted-foreground">รายได้เฉลี่ย</span>
									<span className="text-sm font-medium text-foreground">
										{formatCurrency(averageIncome)}
									</span>
								</div>
								<div className="w-full bg-muted h-2 rounded-full">
									<div className="bg-blue-500 h-2 rounded-full w-[65%]"></div>
								</div>
							</div>
							<div>
								<div className="flex justify-between items-center mb-2">
									<span className="text-sm text-muted-foreground">รายได้ต่ำสุด</span>
									<span className="text-sm font-medium text-foreground">
										{formatCurrency(198000)}
									</span>
								</div>
								<div className="w-full bg-muted h-2 rounded-full">
									<div className="bg-yellow-500 h-2 rounded-full w-[37%]"></div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Tax Summary */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<Calculator className="w-5 h-5" />
						สรุปภาษีเงินได้บุคคลธรรมดา
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="text-center p-4 bg-muted/30 rounded-lg">
							<p className="text-sm text-muted-foreground mb-1">รายได้ที่ต้องเสียภาษี</p>
							<p className="text-2xl font-bold text-foreground">{formatCurrency(1200000)}</p>
						</div>
						<div className="text-center p-4 bg-muted/30 rounded-lg">
							<p className="text-sm text-muted-foreground mb-1">ภาษีที่ต้องจ่าย</p>
							<p className="text-2xl font-bold text-red-600">{formatCurrency(85000)}</p>
						</div>
						<div className="text-center p-4 bg-muted/30 rounded-lg">
							<p className="text-sm text-muted-foreground mb-1">ภาษีที่หักไว้แล้ว</p>
							<p className="text-2xl font-bold text-green-600">{formatCurrency(75000)}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
