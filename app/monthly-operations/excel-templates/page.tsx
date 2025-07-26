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
import { Search, Plus, FileSpreadsheet, Download, Upload, Eye } from "lucide-react";

export default function ExcelTemplatesPage() {
	const templates = [
		{
			id: 1,
			name: "เทมเพลตเที่ยววิ่งรายเดือน",
			description: "แบบฟอร์มสำหรับบันทึกเที่ยววิ่งประจำเดือน",
			category: "เที่ยววิ่ง",
			lastUpdated: "2024-01-15",
			downloads: 45,
			fileName: "monthly-trips-template.xlsx",
		},
		{
			id: 2,
			name: "เทมเพลตค่าน้ำมัน",
			description: "แบบฟอร์มสำหรับบันทึกค่าใช้จ่ายน้ำมัน",
			category: "น้ำมัน",
			lastUpdated: "2024-01-10",
			downloads: 32,
			fileName: "fuel-expenses-template.xlsx",
		},
		{
			id: 3,
			name: "เทมเพลตซ่อมบำรุง",
			description: "แบบฟอร์มสำหรับบันทึกการซ่อมบำรุงรถ",
			category: "ซ่อมบำรุง",
			lastUpdated: "2024-01-08",
			downloads: 28,
			fileName: "maintenance-template.xlsx",
		},
		{
			id: 4,
			name: "เทมเพลตเงินเดือนพนักงาน",
			description: "แบบฟอร์มสำหรับคำนวณเงินเดือนและ OT",
			category: "เงินเดือน",
			lastUpdated: "2024-01-05",
			downloads: 55,
			fileName: "salary-calculation-template.xlsx",
		},
		{
			id: 5,
			name: "เทมเพลตวางบิล",
			description: "แบบฟอร์มสำหรับวางบิลลูกค้า",
			category: "บิล",
			lastUpdated: "2024-01-03",
			downloads: 67,
			fileName: "billing-template.xlsx",
		},
	];

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("th-TH");
	};

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">Excel Templates</h1>
				<div className="flex gap-2">
					<Button variant="outline" className="border-input">
						<Upload className="w-4 h-4 mr-2" />
						อัพโหลดเทมเพลต
					</Button>
					<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
						<Plus className="w-4 h-4 mr-2" />
						สร้างเทมเพลตใหม่
					</Button>
				</div>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหาเทมเพลต</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input
								placeholder="ค้นหาชื่อเทมเพลต หรือหมวดหมู่..."
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
						<FileSpreadsheet className="w-5 h-5" />
						เทมเพลต Excel ที่มีอยู่
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-muted-foreground">ชื่อเทมเพลต</TableHead>
								<TableHead className="text-muted-foreground">หมวดหมู่</TableHead>
								<TableHead className="text-muted-foreground">คำอธิบาย</TableHead>
								<TableHead className="text-muted-foreground">อัพเดทล่าสุด</TableHead>
								<TableHead className="text-muted-foreground">ดาวน์โหลด</TableHead>
								<TableHead className="text-muted-foreground">การดำเนินการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{templates.map((template) => (
								<TableRow key={template.id} className="hover:bg-muted/50">
									<TableCell className="font-medium text-foreground">{template.name}</TableCell>
									<TableCell>
										<span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
											{template.category}
										</span>
									</TableCell>
									<TableCell className="text-muted-foreground max-w-xs">
										<p className="truncate">{template.description}</p>
									</TableCell>
									<TableCell className="text-muted-foreground">
										{formatDate(template.lastUpdated)}
									</TableCell>
									<TableCell className="text-center text-muted-foreground">
										{template.downloads}
									</TableCell>
									<TableCell>
										<div className="flex gap-2">
											<Button variant="outline" size="sm">
												<Eye className="w-4 h-4 mr-1" />
												ตัวอย่าง
											</Button>
											<Button variant="outline" size="sm">
												<Download className="w-4 h-4 mr-1" />
												ดาวน์โหลด
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card className="bg-card border-border hover:shadow-lg transition-shadow cursor-pointer">
					<CardHeader>
						<CardTitle className="text-card-foreground flex items-center gap-2">
							<FileSpreadsheet className="w-5 h-5 text-green-600" />
							เทมเพลตยอดนิยม
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<div className="flex justify-between">
								<span className="text-sm text-foreground">วางบิล</span>
								<span className="text-sm text-muted-foreground">67 ดาวน์โหลด</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm text-foreground">เงินเดือน</span>
								<span className="text-sm text-muted-foreground">55 ดาวน์โหลด</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm text-foreground">เที่ยววิ่ง</span>
								<span className="text-sm text-muted-foreground">45 ดาวน์โหลด</span>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border hover:shadow-lg transition-shadow cursor-pointer">
					<CardHeader>
						<CardTitle className="text-card-foreground flex items-center gap-2">
							<FileSpreadsheet className="w-5 h-5 text-blue-600" />
							เทมเพลตใหม่ล่าสุด
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<div className="text-sm">
								<p className="text-foreground font-medium">เที่ยววิ่งรายเดือน</p>
								<p className="text-muted-foreground">15 ม.ค. 2567</p>
							</div>
							<div className="text-sm">
								<p className="text-foreground font-medium">ค่าน้ำมัน</p>
								<p className="text-muted-foreground">10 ม.ค. 2567</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-card border-border hover:shadow-lg transition-shadow cursor-pointer">
					<CardHeader>
						<CardTitle className="text-card-foreground flex items-center gap-2">
							<FileSpreadsheet className="w-5 h-5 text-purple-600" />
							หมวดหมู่
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 gap-2">
							<div className="text-center p-2 bg-muted/30 rounded">
								<p className="text-sm font-medium text-foreground">5</p>
								<p className="text-xs text-muted-foreground">เทมเพลต</p>
							</div>
							<div className="text-center p-2 bg-muted/30 rounded">
								<p className="text-sm font-medium text-foreground">227</p>
								<p className="text-xs text-muted-foreground">ดาวน์โหลด</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Quick Actions */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">การดำเนินการด่วน</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<Button variant="outline" className="h-16 border-input">
							<div className="text-center">
								<Download className="w-6 h-6 mx-auto mb-1" />
								<p className="text-sm">ดาวน์โหลดเทมเพลตทั้งหมด</p>
							</div>
						</Button>
						<Button variant="outline" className="h-16 border-input">
							<div className="text-center">
								<Upload className="w-6 h-6 mx-auto mb-1" />
								<p className="text-sm">อัพโหลดเทมเพลตใหม่</p>
							</div>
						</Button>
						<Button variant="outline" className="h-16 border-input">
							<div className="text-center">
								<FileSpreadsheet className="w-6 h-6 mx-auto mb-1" />
								<p className="text-sm">คู่มือการใช้งาน</p>
							</div>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
