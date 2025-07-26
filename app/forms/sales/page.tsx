"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Building,
	Download,
	FileText,
	Search,
	Calendar,
	Users,
	TrendingUp,
	Calculator,
	FileSpreadsheet,
	Plus,
	Eye,
	HandHeart,
	Target,
	Phone,
	Mail,
} from "lucide-react";
export default function SalesFormsPage() {
	const salesForms = [
		{
			title: "ใบเสนอราคา",
			description: "ฟอร์มเสนอราคาบริการขนส่งคอนกรีต",
			icon: Calculator,
			category: "เสนอราคา",
			format: "PDF, Excel",
			downloadCount: 3240,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "สัญญาบริการ",
			description: "แบบฟอร์มสัญญาการให้บริการขนส่ง",
			icon: FileText,
			category: "สัญญา",
			format: "PDF, Word",
			downloadCount: 1856,
			lastUpdated: "2024-07-25",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบขอเปิดลูกค้าใหม่",
			description: "ฟอร์มลงทะเบียนลูกค้าใหม่",
			icon: Users,
			category: "ลูกค้า",
			format: "PDF",
			downloadCount: 2672,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "แบบสำรวจความพึงพอใจ",
			description: "ฟอร์มประเมินความพึงพอใจของลูกค้า",
			icon: HandHeart,
			category: "ประเมิน",
			format: "PDF, Online",
			downloadCount: 1234,
			lastUpdated: "2024-07-24",
			status: "พร้อมใช้งาน",
		},
		{
			title: "แผนการขาย",
			description: "ฟอร์มวางแผนเป้าหมายการขาย",
			icon: Target,
			category: "วางแผน",
			format: "Excel",
			downloadCount: 945,
			lastUpdated: "2024-07-23",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานการเยี่ยมลูกค้า",
			description: "ฟอร์มบันทึกการเยี่ยมและติดตามลูกค้า",
			icon: Phone,
			category: "ติดตาม",
			format: "PDF, Excel",
			downloadCount: 1687,
			lastUpdated: "2024-07-25",
			status: "พร้อมใช้งาน",
		},
		{
			title: "รายงานยอดขายรายวัน",
			description: "ฟอร์มสรุปยอดขายและผลงานประจำวัน",
			icon: TrendingUp,
			category: "รายงาน",
			format: "Excel",
			downloadCount: 2987,
			lastUpdated: "2024-07-26",
			status: "พร้อมใช้งาน",
		},
		{
			title: "ใบขอใช้รถนำเสนอ",
			description: "ฟอร์มขออนุญาตใช้รถเพื่องานขาย",
			icon: Building,
			category: "อนุมัติ",
			format: "PDF",
			downloadCount: 456,
			lastUpdated: "2024-07-22",
			status: "พร้อมใช้งาน",
		},
	];
	const categories = [
		{ name: "ทั้งหมด", count: salesForms.length },
		{ name: "เสนอราคา", count: salesForms.filter((f) => f.category === "เสนอราคา").length },
		{ name: "สัญญา", count: salesForms.filter((f) => f.category === "สัญญา").length },
		{ name: "ลูกค้า", count: salesForms.filter((f) => f.category === "ลูกค้า").length },
		{ name: "ประเมิน", count: salesForms.filter((f) => f.category === "ประเมิน").length },
		{ name: "วางแผน", count: salesForms.filter((f) => f.category === "วางแผน").length },
		{ name: "ติดตาม", count: salesForms.filter((f) => f.category === "ติดตาม").length },
		{ name: "รายงาน", count: salesForms.filter((f) => f.category === "รายงาน").length },
		{ name: "อนุมัติ", count: salesForms.filter((f) => f.category === "อนุมัติ").length },
	];
	const salesTools = [
		{
			title: "คำนวณราคา",
			description: "เครื่องมือคำนวณราคาบริการขนส่ง",
			icon: Calculator,
			action: "เปิดเครื่องมือ",
		},
		{
			title: "ฐานข้อมูลลูกค้า",
			description: "ค้นหาข้อมูลลูกค้าและประวัติการใช้บริการ",
			icon: Users,
			action: "ดูข้อมูล",
		},
		{
			title: "ติดต่อลูกค้า",
			description: "เทมเพลตอีเมลและข้อความสำหรับติดต่อลูกค้า",
			icon: Mail,
			action: "ดูเทมเพลต",
		},
	];
	const salesStats = [
		{ title: "ยอดขายเดือนนี้", value: "฿2,450,000", change: "+12.5%", trend: "up" },
		{ title: "ลูกค้าใหม่", value: "15", change: "+25.0%", trend: "up" },
		{ title: "อัตราปิดการขาย", value: "68.5%", change: "+5.2%", trend: "up" },
		{ title: "ค่าเฉลี่ยต่อออร์เดอร์", value: "฿85,500", change: "+8.1%", trend: "up" },
	];
	const recentActivities = [
		{
			type: "เสนอราคา",
			customer: "บริษัท ABC จำกัด",
			amount: "฿125,000",
			date: "2024-07-26",
			status: "รอการตอบกลับ",
		},
		{
			type: "ปิดการขาย",
			customer: "บริษัท XYZ จำกัด",
			amount: "฿85,000",
			date: "2024-07-26",
			status: "สำเร็จ",
		},
		{
			type: "ติดตามลูกค้า",
			customer: "บริษัท DEF จำกัด",
			amount: "-",
			date: "2024-07-25",
			status: "ติดตามแล้ว",
		},
	];
	return (
		<div className="container mx-auto p-6 space-y-6">
			{" "}
			{/* Header */}{" "}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				{" "}
				<div>
					{" "}
					<h1 className="text-3xl font-bold flex items-center">
						{" "}
						<Building className="h-8 w-8 mr-3" /> แบบฟอร์มฝ่ายขาย{" "}
					</h1>{" "}
					<p className="text-muted-foreground mt-2">
						{" "}
						รวมแบบฟอร์มและเอกสารสำหรับการขายและการติดตามลูกค้า{" "}
					</p>{" "}
				</div>{" "}
				<Button>
					{" "}
					<Plus className="h-4 w-4 mr-2" /> อัพโหลดฟอร์มใหม่{" "}
				</Button>{" "}
			</div>{" "}
			{/* Sales Stats */}{" "}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{" "}
				{salesStats.map((stat, index) => (
					<Card key={index}>
						{" "}
						<CardHeader className="pb-2">
							{" "}
							<CardTitle className="text-sm font-medium text-muted-foreground">
								{" "}
								{stat.title}{" "}
							</CardTitle>{" "}
						</CardHeader>{" "}
						<CardContent>
							{" "}
							<div className="text-2xl font-bold">{stat.value}</div>{" "}
							<div className="flex items-center mt-1">
								{" "}
								<TrendingUp className="h-4 w-4 text-green-500 mr-1" />{" "}
								<span className="text-sm text-green-600">{stat.change}</span>{" "}
								<span className="text-sm text-muted-foreground ml-1">vs เดือนที่แล้ว</span>{" "}
							</div>{" "}
						</CardContent>{" "}
					</Card>
				))}{" "}
			</div>{" "}
			{/* Quick Access Tools */}{" "}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{" "}
				{salesTools.map((tool, index) => (
					<Card key={index} className="hover:shadow-md transition-shadow">
						{" "}
						<CardHeader>
							{" "}
							<div className="flex items-center space-x-3">
								{" "}
								<div className="p-2 rounded-lg bg-blue-100 text-blue-700">
									{" "}
									<tool.icon className="h-5 w-5" />{" "}
								</div>{" "}
								<div>
									{" "}
									<CardTitle className="text-lg">{tool.title}</CardTitle>{" "}
									<CardDescription>{tool.description}</CardDescription>{" "}
								</div>{" "}
							</div>{" "}
						</CardHeader>{" "}
						<CardContent>
							{" "}
							<Button size="sm" className="w-full">
								{" "}
								{tool.action}{" "}
							</Button>{" "}
						</CardContent>{" "}
					</Card>
				))}{" "}
			</div>{" "}
			{/* Main Content Tabs */}{" "}
			<Tabs defaultValue="forms" className="w-full">
				{" "}
				<TabsList className="grid w-full grid-cols-3">
					{" "}
					<TabsTrigger value="forms">แบบฟอร์ม</TabsTrigger>{" "}
					<TabsTrigger value="templates">เทมเพลต</TabsTrigger>{" "}
					<TabsTrigger value="activities">กิจกรรมล่าสุด</TabsTrigger>{" "}
				</TabsList>{" "}
				<TabsContent value="forms" className="space-y-4">
					{" "}
					{/* Search and Filter */}{" "}
					<div className="flex flex-col sm:flex-row gap-4">
						{" "}
						<div className="relative flex-1">
							{" "}
							<Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />{" "}
							<Input placeholder="ค้นหาแบบฟอร์ม..." className="pl-10" />{" "}
						</div>{" "}
						<div className="flex flex-wrap gap-2">
							{" "}
							{categories.map((category, index) => (
								<Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted">
									{" "}
									{category.name} ({category.count}){" "}
								</Badge>
							))}{" "}
						</div>{" "}
					</div>{" "}
					{/* Forms Grid */}{" "}
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
						{" "}
						{salesForms.map((form, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								{" "}
								<CardHeader>
									{" "}
									<div className="flex items-start justify-between">
										{" "}
										<div className="flex items-center space-x-3">
											{" "}
											<div className="p-2 rounded-lg bg-green-100 text-green-700">
												{" "}
												<form.icon className="h-6 w-6" />{" "}
											</div>{" "}
											<div className="flex-1">
												{" "}
												<CardTitle className="text-lg leading-tight">{form.title}</CardTitle>{" "}
												<Badge variant="outline" className="mt-1">
													{" "}
													{form.category}{" "}
												</Badge>{" "}
											</div>{" "}
										</div>{" "}
									</div>{" "}
								</CardHeader>{" "}
								<CardContent>
									{" "}
									<CardDescription className="mb-4">{form.description}</CardDescription>{" "}
									<div className="space-y-3">
										{" "}
										<div className="flex justify-between text-sm">
											{" "}
											<span className="text-muted-foreground">รูปแบบ:</span>{" "}
											<span className="font-medium">{form.format}</span>{" "}
										</div>{" "}
										<div className="flex justify-between text-sm">
											{" "}
											<span className="text-muted-foreground">ดาวน์โหลด:</span>{" "}
											<span className="font-medium">{form.downloadCount.toLocaleString()}</span>{" "}
										</div>{" "}
										<div className="flex justify-between text-sm">
											{" "}
											<span className="text-muted-foreground">อัพเดทล่าสุด:</span>{" "}
											<span className="font-medium">{form.lastUpdated}</span>{" "}
										</div>{" "}
										<div className="flex justify-between items-center">
											{" "}
											<span className="text-sm text-muted-foreground">สถานะ:</span>{" "}
											<Badge variant="outline" className="text-green-600 border-green-600">
												{" "}
												{form.status}{" "}
											</Badge>{" "}
										</div>{" "}
										<div className="flex flex-col sm:flex-row gap-2 mt-4">
											{" "}
											<Button size="sm" className="flex-1">
												{" "}
												<Eye className="h-4 w-4 mr-2" /> ดูตัวอย่าง{" "}
											</Button>{" "}
											<Button size="sm" variant="outline" className="flex-1">
												{" "}
												<Download className="h-4 w-4 mr-2" /> ดาวน์โหลด{" "}
											</Button>{" "}
										</div>{" "}
									</div>{" "}
								</CardContent>{" "}
							</Card>
						))}{" "}
					</div>{" "}
				</TabsContent>{" "}
				<TabsContent value="templates" className="space-y-4">
					{" "}
					<Card>
						{" "}
						<CardHeader>
							{" "}
							<CardTitle>เทมเพลตสำเร็จรูป</CardTitle>{" "}
							<CardDescription>เทมเพลตที่พร้อมใช้สำหรับงานขาย</CardDescription>{" "}
						</CardHeader>{" "}
						<CardContent>
							{" "}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{" "}
								<div className="p-4 border rounded-lg">
									{" "}
									<h3 className="font-semibold mb-2">อีเมลติดตามลูกค้า</h3>{" "}
									<p className="text-sm text-muted-foreground mb-3">
										{" "}
										เทมเพลตอีเมลสำหรับติดตามลูกค้าหลังการเสนอราคา{" "}
									</p>{" "}
									<Button size="sm">ใช้เทมเพลต</Button>{" "}
								</div>{" "}
								<div className="p-4 border rounded-lg">
									{" "}
									<h3 className="font-semibold mb-2">ข้อเสนอพิเศษ</h3>{" "}
									<p className="text-sm text-muted-foreground mb-3">
										{" "}
										เทมเพลตสำหรับข้อเสนอส่วนลดและโปรโมชั่น{" "}
									</p>{" "}
									<Button size="sm">ใช้เทมเพลต</Button>{" "}
								</div>{" "}
								<div className="p-4 border rounded-lg">
									{" "}
									<h3 className="font-semibold mb-2">แบบสำรวจความพึงพอใจ</h3>{" "}
									<p className="text-sm text-muted-foreground mb-3">
										{" "}
										เทมเพลตแบบสำรวจหลังการใช้บริการ{" "}
									</p>{" "}
									<Button size="sm">ใช้เทมเพลต</Button>{" "}
								</div>{" "}
								<div className="p-4 border rounded-lg">
									{" "}
									<h3 className="font-semibold mb-2">การนำเสนอขาย</h3>{" "}
									<p className="text-sm text-muted-foreground mb-3">
										{" "}
										เทมเพลต PowerPoint สำหรับการนำเสนอ{" "}
									</p>{" "}
									<Button size="sm">ใช้เทมเพลต</Button>{" "}
								</div>{" "}
							</div>{" "}
						</CardContent>{" "}
					</Card>{" "}
				</TabsContent>{" "}
				<TabsContent value="activities" className="space-y-4">
					{" "}
					<Card>
						{" "}
						<CardHeader>
							{" "}
							<CardTitle>กิจกรรมการขายล่าสุด</CardTitle>{" "}
							<CardDescription>ประวัติการดำเนินงานขายในช่วงที่ผ่านมา</CardDescription>{" "}
						</CardHeader>{" "}
						<CardContent>
							{" "}
							<div className="space-y-4">
								{" "}
								{recentActivities.map((activity, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 border rounded-lg"
									>
										{" "}
										<div className="flex items-center space-x-4">
											{" "}
											<div className="w-2 h-2 rounded-full bg-blue-500"></div>{" "}
											<div>
												{" "}
												<div className="font-medium">{activity.type}</div>{" "}
												<div className="text-sm text-muted-foreground">{activity.customer}</div>{" "}
											</div>{" "}
										</div>{" "}
										<div className="text-right">
											{" "}
											<div className="font-medium">{activity.amount}</div>{" "}
											<div className="text-sm text-muted-foreground">{activity.date}</div>{" "}
										</div>{" "}
										<Badge
											variant="outline"
											className={
												activity.status === "สำเร็จ"
													? "text-green-600 border-green-600"
													: activity.status === "รออนุมัติ"
													? "text-yellow-600 border-yellow-600"
													: "text-blue-600 border-blue-600"
											}
										>
											{" "}
											{activity.status}{" "}
										</Badge>{" "}
									</div>
								))}{" "}
							</div>{" "}
						</CardContent>{" "}
					</Card>{" "}
				</TabsContent>{" "}
			</Tabs>{" "}
		</div>
	);
}
