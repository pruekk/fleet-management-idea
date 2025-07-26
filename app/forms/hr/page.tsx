"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Users,
	Download,
	FileText,
	Search,
	Calendar,
	UserPlus,
	ClipboardCheck,
	FileSpreadsheet,
	Plus,
	Eye,
	Award,
	Clock,
	DollarSign,
	GraduationCap,
} from "lucide-react";

export default function HRFormsPage() {
	const hrForms = [
		{
			title: "ใบสมัครงาน",
			description: "ฟอร์มสำหรับผู้สมัครงานใหม่",
			icon: UserPlus,
			category: "สรรหา",
			format: "PDF, Word",
			downloadCount: 2340,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบประเมินผลการปฏิบัติงาน",
			description: "ฟอร์มประเมินผลการทำงานของพนักงาน",
			icon: ClipboardCheck,
			category: "ประเมินผล",
			format: "PDF, Excel",
			downloadCount: 1856,
			lastUpdated: "2024-07-25",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบลาป่วย/ลากิจ",
			description: "ฟอร์มขออนุญาตลาหยุดงาน",
			icon: Calendar,
			category: "ลาหยุด",
			format: "PDF",
			downloadCount: 3672,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบขอเบิกค่าล่วงเวลา",
			description: "ฟอร์มขอเบิกค่าจ้างล่วงเวลา",
			icon: Clock,
			category: "ค่าจ้าง",
			format: "PDF, Excel",
			downloadCount: 1234,
			lastUpdated: "2024-07-24",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบขอเลื่อนตำแหน่ง",
			description: "ฟอร์มขอเลื่อนตำแหน่งหรือปรับเงินเดือน",
			icon: Award,
			category: "เลื่อนตำแหน่ง",
			format: "PDF",
			downloadCount: 445,
			lastUpdated: "2024-07-23",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบขออบรม/สัมมนา",
			description: "ฟอร์มขออนุญาตเข้าร่วมการอบรมหรือสัมมนา",
			icon: GraduationCap,
			category: "อบรม",
			format: "PDF, Word",
			downloadCount: 687,
			lastUpdated: "2024-07-22",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานการเข้างาน",
			description: "ฟอร์มบันทึกเวลาการเข้างานและออกงาน",
			icon: Calendar,
			category: "เวลาทำงาน",
			format: "Excel",
			downloadCount: 2987,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบคำร้องเงินเดือน",
			description: "ฟอร์มขอข้อมูลเงินเดือนและเงินได้",
			icon: DollarSign,
			category: "ค่าจ้าง",
			format: "PDF",
			downloadCount: 1156,
			lastUpdated: "2024-07-25",
			status: "พร้อมใช้งาน",
		},
	];

	const categories = [
		{ name: "ทั้งหมด", count: hrForms.length },
		{ name: "สรรหา", count: hrForms.filter((f) => f.category === "สรรหา").length },
		{ name: "ประเมินผล", count: hrForms.filter((f) => f.category === "ประเมินผล").length },
		{ name: "ลาหยุด", count: hrForms.filter((f) => f.category === "ลาหยุด").length },
		{ name: "ค่าจ้าง", count: hrForms.filter((f) => f.category === "ค่าจ้าง").length },
		{ name: "เลื่อนตำแหน่ง", count: hrForms.filter((f) => f.category === "เลื่อนตำแหน่ง").length },
		{ name: "อบรม", count: hrForms.filter((f) => f.category === "อบรม").length },
		{ name: "เวลาทำงาน", count: hrForms.filter((f) => f.category === "เวลาทำงาน").length },
	];

	const popularPolicies = [
		{
			title: "นโยบายการลาหยุด",
			description: "ระเบียบการลาหยุดและสิทธิพนักงาน",
			lastUpdated: "2024-07-20",
			downloads: 156,
		},
		{
			title: "คู่มือพนักงานใหม่",
			description: "คู่มือสำหรับพนักงานที่เข้าทำงานใหม่",
			lastUpdated: "2024-07-18",
			downloads: 89,
		},
		{
			title: "มาตรฐานการแต่งกาย",
			description: "ระเบียบการแต่งกายของพนักงาน",
			lastUpdated: "2024-07-15",
			downloads: 67,
		},
	];

	return (
		<div className="container mx-auto p-6 space-y-6">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold flex items-center">
						<Users className="h-8 w-8 mr-3" />
						แบบฟอร์มฝ่ายบุคคล
					</h1>
					<p className="text-muted-foreground mt-2">
						รวมแบบฟอร์มและเอกสารสำหรับการบริหารทรัพยากรบุคคล
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
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="forms">แบบฟอร์มทั้งหมด</TabsTrigger>
					<TabsTrigger value="policies">นโยบาย</TabsTrigger>
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
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{hrForms.map((form, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<div className="flex items-start justify-between">
										<div className="flex items-center space-x-3">
											<div className="p-2 rounded-lg bg-green-100 text-green-700">
												<form.icon className="h-6 w-6" />
											</div>
											<div className="flex-1">
												<CardTitle className="text-lg leading-tight">{form.title}</CardTitle>
												<Badge variant="outline" className="mt-1">
													{form.category}
												</Badge>
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="mb-4">{form.description}</CardDescription>
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
										<div className="flex space-x-2 mt-4">
											<Button size="sm" className="flex-1">
												<Eye className="h-4 w-4 mr-2" />
												ดูตัวอย่าง
											</Button>
											<Button size="sm" variant="outline">
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

				<TabsContent value="policies" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>นโยบายและระเบียบบริษัท</CardTitle>
							<CardDescription>นโยบาย ระเบียบ และคู่มือสำหรับพนักงาน</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{popularPolicies.map((policy, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 border rounded-lg"
									>
										<div className="flex items-center space-x-4">
											<div className="p-2 rounded bg-purple-100 text-purple-700">
												<FileText className="h-5 w-5" />
											</div>
											<div>
												<h3 className="font-medium">{policy.title}</h3>
												<div className="text-sm text-muted-foreground">{policy.description}</div>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<div className="text-right text-sm">
												<div className="text-muted-foreground">อัพเดท: {policy.lastUpdated}</div>
												<div className="text-muted-foreground">{policy.downloads} ดาวน์โหลด</div>
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

				<TabsContent value="recent" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>เอกสารที่อัพโหลดล่าสุด</CardTitle>
							<CardDescription>แบบฟอร์มที่ได้รับการอัพโหลดหรืออัพเดทล่าสุด</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{hrForms
									.sort(
										(a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
									)
									.slice(0, 5)
									.map((form, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-4 border rounded-lg"
										>
											<div className="flex items-center space-x-4">
												<div className="p-2 rounded bg-green-100 text-green-700">
													<form.icon className="h-5 w-5" />
												</div>
												<div>
													<h3 className="font-medium">{form.title}</h3>
													<div className="text-sm text-muted-foreground">
														{form.category} • {form.format} • อัพเดท {form.lastUpdated}
													</div>
												</div>
											</div>
											<div className="flex items-center space-x-4">
												<div className="text-sm text-muted-foreground">
													{form.downloadCount.toLocaleString()} ดาวน์โหลด
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
								{hrForms
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
												<div className="p-2 rounded bg-green-100 text-green-700">
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
