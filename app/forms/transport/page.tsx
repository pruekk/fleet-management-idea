"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Truck,
	Download,
	FileText,
	Search,
	Calendar,
	Fuel,
	Wrench,
	Route,
	ClipboardCheck,
	FileSpreadsheet,
	Plus,
	Eye,
} from "lucide-react";

export default function TransportFormsPage() {
	const transportForms = [
		{
			title: "ใบงานขนส่ง",
			description: "ฟอร์มสำหรับบันทึกรายละเอียดการขนส่งคอนกรีต",
			icon: Truck,
			category: "การขนส่ง",
			format: "PDF, Excel",
			downloadCount: 1240,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบตรวจสอบรถโม่",
			description: "ฟอร์มตรวจสอบสภาพรถโม่ก่อนออกงาน",
			icon: ClipboardCheck,
			category: "ตรวจสอบ",
			format: "PDF",
			downloadCount: 856,
			lastUpdated: "2024-07-25",
			status: "พร้อมใช้งาน",
		},
		{
			title: "บันทึกการเติมน้ำมัน",
			description: "ฟอร์มบันทึกการเติมน้ำมันและค่าใช้จ่าย",
			icon: Fuel,
			category: "น้ำมัน",
			format: "Excel",
			downloadCount: 672,
			lastUpdated: "2024-07-24",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบแจ้งซ่อม",
			description: "ฟอร์มแจ้งการซ่อมบำรุงรถโม่",
			icon: Wrench,
			category: "ซ่อมบำรุง",
			format: "PDF, Excel",
			downloadCount: 234,
			lastUpdated: "2024-07-23",
			status: "พร้อมใช้งาน",
		},
		{
			title: "แผนเส้นทางการขนส่ง",
			description: "ฟอร์มวางแผนเส้นทางและเวลาการขนส่ง",
			icon: Route,
			category: "การวางแผน",
			format: "Excel",
			downloadCount: 445,
			lastUpdated: "2024-07-22",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานการทำงานรายวัน",
			description: "ฟอร์มสรุปการทำงานของคนขับรถโม่",
			icon: Calendar,
			category: "รายงาน",
			format: "PDF, Excel",
			downloadCount: 987,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
	];

	const categories = [
		{ name: "ทั้งหมด", count: transportForms.length },
		{ name: "การขนส่ง", count: transportForms.filter((f) => f.category === "การขนส่ง").length },
		{ name: "ตรวจสอบ", count: transportForms.filter((f) => f.category === "ตรวจสอบ").length },
		{ name: "น้ำมัน", count: transportForms.filter((f) => f.category === "น้ำมัน").length },
		{ name: "ซ่อมบำรุง", count: transportForms.filter((f) => f.category === "ซ่อมบำรุง").length },
		{ name: "การวางแผน", count: transportForms.filter((f) => f.category === "การวางแผน").length },
		{ name: "รายงาน", count: transportForms.filter((f) => f.category === "รายงาน").length },
	];

	const recentlyUploaded = [
		{
			name: "ใบงานขนส่ง_v2.1.pdf",
			uploadedBy: "นายสมชาย ใจดี",
			uploadDate: "2024-07-26",
			size: "2.4 MB",
			downloads: 15,
		},
		{
			name: "ฟอร์มตรวจสอบรถโม่_อัพเดท.xlsx",
			uploadedBy: "นางสาวมาลี รักงาน",
			uploadDate: "2024-07-25",
			size: "1.8 MB",
			downloads: 8,
		},
		{
			name: "แบบฟอร์มการเติมน้ำมัน.pdf",
			uploadedBy: "นายวิชัย คนขยัน",
			uploadDate: "2024-07-24",
			size: "956 KB",
			downloads: 23,
		},
	];

	return (
		<div className="container mx-auto p-6 space-y-6">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold flex items-center">
						<Truck className="h-8 w-8 mr-3" />
						แบบฟอร์มฝ่ายขนส่ง
					</h1>
					<p className="text-muted-foreground mt-2">
						รวมแบบฟอร์มและเอกสารสำหรับฝ่ายขนส่งและรถโม่คอนกรีต
					</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					อัพโหลดฟอร์มใหม่
				</Button>
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
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="forms">แบบฟอร์มทั้งหมด</TabsTrigger>
					<TabsTrigger value="recent">เพิ่มล่าสุด</TabsTrigger>
					<TabsTrigger value="popular">ยอดนิยม</TabsTrigger>
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
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{transportForms.map((form, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow h-fit">
								<CardHeader className="pb-4">
									<div className="flex items-start space-x-3">
										<div className="p-3 rounded-lg bg-blue-100 text-blue-700 flex-shrink-0">
											<form.icon className="h-6 w-6" />
										</div>
										<div className="flex-1 min-w-0">
											<CardTitle className="text-lg leading-tight mb-2">{form.title}</CardTitle>
											<Badge variant="outline" className="mb-2">
												{form.category}
											</Badge>
											<CardDescription className="text-sm">{form.description}</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent className="pt-0">
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
										<div className="flex flex-col sm:flex-row gap-2 mt-4">
											<Button size="sm" className="flex-1">
												<Eye className="h-4 w-4 mr-2" />
												ดูตัวอย่าง
											</Button>
											<Button size="sm" variant="outline" className="flex-1">
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

				<TabsContent value="recent" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>เอกสารที่อัพโหลดล่าสุด</CardTitle>
							<CardDescription>แบบฟอร์มที่ได้รับการอัพโหลดหรืออัพเดทล่าสุด</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{recentlyUploaded.map((file, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 border rounded-lg"
									>
										<div className="flex items-center space-x-4">
											<div className="p-2 rounded bg-blue-100 text-blue-700">
												<FileSpreadsheet className="h-5 w-5" />
											</div>
											<div>
												<h3 className="font-medium">{file.name}</h3>
												<div className="text-sm text-muted-foreground">
													อัพโหลดโดย {file.uploadedBy} • {file.uploadDate} • {file.size}
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<div className="text-sm text-muted-foreground">
												{file.downloads} ดาวน์โหลด
											</div>
											<Button size="sm" variant="outline">
												<Download className="h-4 w-4 mr-2" />
												ดาวน์โหลด
											</Button>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="popular" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>แบบฟอร์มยอดนิยม</CardTitle>
							<CardDescription>แบบฟอร์มที่มีการดาวน์โหลดมากที่สุด</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{transportForms
									.sort((a, b) => b.downloadCount - a.downloadCount)
									.slice(0, 5)
									.map((form, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-4 border rounded-lg"
										>
											<div className="flex items-center space-x-4">
												<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
													{index + 1}
												</div>
												<div className="p-2 rounded bg-blue-100 text-blue-700">
													<form.icon className="h-5 w-5" />
												</div>
												<div>
													<h3 className="font-medium">{form.title}</h3>
													<div className="text-sm text-muted-foreground">
														{form.category} • {form.format}
													</div>
												</div>
											</div>
											<div className="flex items-center space-x-4">
												<div className="text-right">
													<div className="font-bold text-lg">
														{form.downloadCount.toLocaleString()}
													</div>
													<div className="text-sm text-muted-foreground">ดาวน์โหลด</div>
												</div>
												<Button size="sm" variant="outline">
													<Download className="h-4 w-4 mr-2" />
													ดาวน์โหลด
												</Button>
											</div>
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
