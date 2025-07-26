"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Search, Plus, FileText, Calendar, DollarSign, Eye } from "lucide-react";

export default function QuotationsPage() {
	const quotations = [
		{
			id: "Q2024-001",
			customer: "บริษัท ABC จำกัด",
			project: "โครงการคอนโดมิเนียม A",
			date: "2024-01-15",
			dueDate: "2024-01-30",
			amount: 2500000,
			status: "pending",
			items: 50,
		},
		{
			id: "Q2024-002",
			customer: "บริษัท XYZ จำกัด",
			project: "โครงการอาคารสำนักงาน B",
			date: "2024-01-10",
			dueDate: "2024-01-25",
			amount: 1800000,
			status: "approved",
			items: 35,
		},
		{
			id: "Q2024-003",
			customer: "บริษัท DEF จำกัด",
			project: "โครงการโรงงาน C",
			date: "2024-01-08",
			dueDate: "2024-01-20",
			amount: 3200000,
			status: "rejected",
			items: 65,
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "pending":
				return (
					<Badge variant="outline" className="text-yellow-600 border-yellow-600">
						รอการอนุมัติ
					</Badge>
				);
			case "approved":
				return (
					<Badge variant="default" className="bg-green-600">
						อนุมัติแล้ว
					</Badge>
				);
			case "rejected":
				return <Badge variant="destructive">ปฏิเสธ</Badge>;
			default:
				return <Badge variant="secondary">ไม่ทราบสถานะ</Badge>;
		}
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(amount);
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("th-TH");
	};

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">ใบเสนอราคา</h1>
				<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
					<Plus className="w-4 h-4 mr-2" />
					สร้างใบเสนอราคา
				</Button>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหาใบเสนอราคา</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input
								placeholder="ค้นหาเลขที่ใบเสนอราคา หรือ ชื่อลูกค้า..."
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
						<FileText className="w-5 h-5" />
						รายการใบเสนอราคา
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">เลขที่</TableHead>
								<TableHead className="text-muted-foreground">ลูกค้า</TableHead>
								<TableHead className="text-muted-foreground">โครงการ</TableHead>
								<TableHead className="text-muted-foreground">วันที่สร้าง</TableHead>
								<TableHead className="text-muted-foreground">วันหมดอายุ</TableHead>
								<TableHead className="text-muted-foreground">จำนวนรายการ</TableHead>
								<TableHead className="text-muted-foreground">ยอดรวม</TableHead>
								<TableHead className="text-muted-foreground">สถานะ</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{quotations.map((quotation) => (
								<TableRow key={quotation.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{quotation.id}</TableCell>
									<TableCell className="text-foreground">{quotation.customer}</TableCell>
									<TableCell className="text-foreground">{quotation.project}</TableCell>
									<TableCell className="text-muted-foreground">
										{formatDate(quotation.date)}
									</TableCell>
									<TableCell className="text-muted-foreground">
										{formatDate(quotation.dueDate)}
									</TableCell>
									<TableCell className="text-center text-muted-foreground">
										{quotation.items}
									</TableCell>
									<TableCell className="font-medium text-foreground">
										{formatCurrency(quotation.amount)}
									</TableCell>
									<TableCell>{getStatusBadge(quotation.status)}</TableCell>
									<TableCell>
										<div className="flex gap-2">
											<Button variant="outline" size="sm">
												<Eye className="w-4 h-4 mr-1" />
												ดู
											</Button>
											<Button variant="outline" size="sm">
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
							<FileText className="w-8 h-8 text-blue-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">12</p>
								<p className="text-sm text-muted-foreground">ใบเสนอราคาทั้งหมด</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<Calendar className="w-8 h-8 text-yellow-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">3</p>
								<p className="text-sm text-muted-foreground">รอการอนุมัติ</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<DollarSign className="w-8 h-8 text-green-500" />
							<div>
								<p className="text-2xl font-bold text-foreground">7</p>
								<p className="text-sm text-muted-foreground">อนุมัติแล้ว</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border">
					<CardContent className="p-6">
						<div className="flex items-center gap-2">
							<DollarSign className="w-8 h-8 text-green-600" />
							<div>
								<p className="text-xl font-bold text-foreground">12.5M</p>
								<p className="text-sm text-muted-foreground">มูลค่ารวม (บาท)</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
