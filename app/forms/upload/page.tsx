"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	FileUp,
	Upload,
	File,
	FileText,
	FileSpreadsheet,
	Download,
	Trash2,
	Eye,
	Calendar,
	User,
	Folder,
} from "lucide-react";

export default function FormsUploadPage() {
	const [dragActive, setDragActive] = useState(false);

	const recentUploads = [
		{
			name: "ใบงานขนส่ง_v2.1.pdf",
			department: "ฝ่ายขนส่ง",
			uploadedBy: "นายสมชาย ใจดี",
			uploadDate: "2024-07-26",
			size: "2.4 MB",
			downloads: 15,
			type: "PDF",
		},
		{
			name: "ฟอร์มประเมินพนักงาน.xlsx",
			department: "ฝ่ายบุคคล",
			uploadedBy: "นางสาวมาลี รักงาน",
			uploadDate: "2024-07-25",
			size: "1.8 MB",
			downloads: 8,
			type: "Excel",
		},
		{
			name: "ใบเสนอราคาใหม่.pdf",
			department: "ฝ่ายขาย",
			uploadedBy: "นายวิชัย คนขยัน",
			uploadDate: "2024-07-24",
			size: "956 KB",
			downloads: 23,
			type: "PDF",
		},
		{
			name: "ใบเบิกค่าใช้จ่าย_2024.xlsx",
			department: "ฝ่ายการเงิน",
			uploadedBy: "นางสุดา บัญชี",
			uploadDate: "2024-07-23",
			size: "1.2 MB",
			downloads: 12,
			type: "Excel",
		},
	];

	const allowedFileTypes = [
		{ ext: "PDF", icon: FileText, color: "text-red-500" },
		{ ext: "Excel", icon: FileSpreadsheet, color: "text-green-500" },
		{ ext: "Word", icon: File, color: "text-blue-500" },
	];

	const uploadStats = [
		{
			title: "ไฟล์ทั้งหมด",
			value: "1,247",
			change: "+45 ไฟล์ใหม่",
		},
		{
			title: "ดาวน์โหลดรวม",
			value: "15,632",
			change: "+234 ครั้งเดือนนี้",
		},
		{
			title: "ขนาดรวม",
			value: "8.2 GB",
			change: "+450 MB เดือนนี้",
		},
		{
			title: "ฝ่ายที่ใช้มากสุด",
			value: "ฝ่ายขนส่ง",
			change: "45% ของการใช้งาน",
		},
	];

	return (
		<div className="container mx-auto p-6 space-y-6">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold flex items-center">
						<FileUp className="h-8 w-8 mr-3" />
						อัพโหลดแบบฟอร์ม
					</h1>
					<p className="text-muted-foreground mt-2">อัพโหลดและจัดการแบบฟอร์มสำหรับทุกฝ่าย</p>
				</div>
			</div>

			{/* Upload Stats */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{uploadStats.map((stat, index) => (
					<Card key={index}>
						<CardHeader className="pb-2">
							<CardTitle className="text-sm font-medium text-muted-foreground">
								{stat.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stat.value}</div>
							<div className="text-sm text-muted-foreground mt-1">{stat.change}</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Supported File Types */}
			<Card>
				<CardHeader>
					<CardTitle className="text-lg">ประเภทไฟล์ที่รองรับ</CardTitle>
					<CardDescription>สามารถอัพโหลดไฟล์ประเภทต่อไปนี้ได้</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-4">
						{allowedFileTypes.map((type, index) => (
							<div key={index} className="flex items-center space-x-2 p-3 border rounded-lg">
								<type.icon className={`h-6 w-6 ${type.color}`} />
								<span className="font-medium">{type.ext}</span>
							</div>
						))}
					</div>
					<p className="text-sm text-muted-foreground mt-3">
						ขนาดไฟล์สูงสุด: 10 MB | รองรับไฟล์: .pdf, .xlsx, .xls, .docx, .doc
					</p>
				</CardContent>
			</Card>

			<Tabs defaultValue="upload" className="w-full">
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="upload">อัพโหลดไฟล์</TabsTrigger>
					<TabsTrigger value="recent">ไฟล์ล่าสุด</TabsTrigger>
					<TabsTrigger value="manage">จัดการไฟล์</TabsTrigger>
				</TabsList>

				<TabsContent value="upload" className="space-y-6">
					{/* Upload Form */}
					<Card>
						<CardHeader>
							<CardTitle>อัพโหลดแบบฟอร์มใหม่</CardTitle>
							<CardDescription>เลือกไฟล์และกรอกข้อมูลเพื่ออัพโหลดแบบฟอร์มใหม่</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							{/* File Upload Area */}
							<div
								className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
									dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
								}`}
								onDragOver={(e) => {
									e.preventDefault();
									setDragActive(true);
								}}
								onDragLeave={() => setDragActive(false)}
								onDrop={(e) => {
									e.preventDefault();
									setDragActive(false);
									// Handle file drop
								}}
							>
								<Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
								<div className="space-y-2">
									<p className="text-lg font-medium">ลากไฟล์มาที่นี่ หรือ คลิกเพื่อเลือกไฟล์</p>
									<p className="text-sm text-muted-foreground">
										รองรับไฟล์ PDF, Excel, Word (ขนาดสูงสุด 10 MB)
									</p>
								</div>
								<Button className="mt-4">
									<Upload className="h-4 w-4 mr-2" />
									เลือกไฟล์
								</Button>
							</div>

							{/* Form Fields */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="formName">ชื่อแบบฟอร์ม</Label>
									<Input id="formName" placeholder="เช่น ใบงานขนส่งรถโม่ v2.1" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="department">ฝ่าย</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="เลือกฝ่าย" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="transport">ฝ่ายขนส่ง</SelectItem>
											<SelectItem value="hr">ฝ่ายบุคคล</SelectItem>
											<SelectItem value="finance">ฝ่ายการเงิน</SelectItem>
											<SelectItem value="sales">ฝ่ายขาย</SelectItem>
											<SelectItem value="general">ทั่วไป</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="category">หมวดหมู่</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="เลือกหมวดหมู่" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="forms">แบบฟอร์ม</SelectItem>
											<SelectItem value="reports">รายงาน</SelectItem>
											<SelectItem value="contracts">สัญญา</SelectItem>
											<SelectItem value="policies">นโยบาย</SelectItem>
											<SelectItem value="templates">เทมเพลต</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<Label htmlFor="version">เวอร์ชัน</Label>
									<Input id="version" placeholder="เช่น 2.1, 1.0" />
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">รายละเอียด</Label>
								<Textarea
									id="description"
									placeholder="อธิบายการใช้งานและรายละเอียดของแบบฟอร์ม"
									rows={3}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="tags">แท็ก (คั่นด้วย คอมม่า)</Label>
								<Input id="tags" placeholder="เช่น ขนส่ง, รถโม่, การงาน" />
							</div>

							<Button className="w-full">
								<Upload className="h-4 w-4 mr-2" />
								อัพโหลดแบบฟอร์ม
							</Button>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="recent" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>ไฟล์ที่อัพโหลดล่าสุด</CardTitle>
							<CardDescription>ไฟล์ที่ได้รับการอัพโหลดล่าสุด 30 วัน</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{recentUploads.map((file, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 border rounded-lg"
									>
										<div className="flex items-center space-x-4">
											<div className="p-2 rounded bg-blue-100 text-blue-700">
												{file.type === "PDF" ? (
													<FileText className="h-5 w-5" />
												) : file.type === "Excel" ? (
													<FileSpreadsheet className="h-5 w-5" />
												) : (
													<File className="h-5 w-5" />
												)}
											</div>
											<div>
												<h3 className="font-medium">{file.name}</h3>
												<div className="flex items-center space-x-4 text-sm text-muted-foreground">
													<span className="flex items-center">
														<Folder className="h-4 w-4 mr-1" />
														{file.department}
													</span>
													<span className="flex items-center">
														<User className="h-4 w-4 mr-1" />
														{file.uploadedBy}
													</span>
													<span className="flex items-center">
														<Calendar className="h-4 w-4 mr-1" />
														{file.uploadDate}
													</span>
													<span>{file.size}</span>
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Badge variant="outline">{file.downloads} ดาวน์โหลด</Badge>
											<Button size="sm" variant="outline">
												<Eye className="h-4 w-4 mr-2" />
												ดู
											</Button>
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

				<TabsContent value="manage" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>จัดการไฟล์</CardTitle>
							<CardDescription>จัดการ แก้ไข และลบไฟล์ที่อัพโหลดแล้ว</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex justify-between items-center mb-4">
								<div className="flex space-x-2">
									<Select defaultValue="all">
										<SelectTrigger className="w-40">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">ทุกฝ่าย</SelectItem>
											<SelectItem value="transport">ฝ่ายขนส่ง</SelectItem>
											<SelectItem value="hr">ฝ่ายบุคคล</SelectItem>
											<SelectItem value="finance">ฝ่ายการเงิน</SelectItem>
											<SelectItem value="sales">ฝ่ายขาย</SelectItem>
										</SelectContent>
									</Select>
									<Select defaultValue="newest">
										<SelectTrigger className="w-40">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="newest">ใหม่สุด</SelectItem>
											<SelectItem value="oldest">เก่าสุด</SelectItem>
											<SelectItem value="popular">ยอดนิยม</SelectItem>
											<SelectItem value="name">ชื่อ A-Z</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<Button variant="destructive" size="sm">
									<Trash2 className="h-4 w-4 mr-2" />
									ลบที่เลือก
								</Button>
							</div>

							<div className="space-y-4">
								{recentUploads.map((file, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 border rounded-lg"
									>
										<div className="flex items-center space-x-4">
											<input type="checkbox" className="rounded" />
											<div className="p-2 rounded bg-blue-100 text-blue-700">
												{file.type === "PDF" ? (
													<FileText className="h-5 w-5" />
												) : file.type === "Excel" ? (
													<FileSpreadsheet className="h-5 w-5" />
												) : (
													<File className="h-5 w-5" />
												)}
											</div>
											<div>
												<h3 className="font-medium">{file.name}</h3>
												<div className="flex items-center space-x-4 text-sm text-muted-foreground">
													<span>{file.department}</span>
													<span>{file.uploadDate}</span>
													<span>{file.size}</span>
													<span>{file.downloads} ดาวน์โหลด</span>
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Button size="sm" variant="outline">
												แก้ไข
											</Button>
											<Button size="sm" variant="outline">
												<Download className="h-4 w-4 mr-2" />
												ดาวน์โหลด
											</Button>
											<Button size="sm" variant="destructive">
												<Trash2 className="h-4 w-4" />
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
