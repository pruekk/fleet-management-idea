"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, Info, CheckCircle, X, Eye } from "lucide-react";

export default function NotificationsPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">การแจ้งเตือน</h1>
					<p className="text-muted-foreground">จัดการการแจ้งเตือนและข้อความต่างๆ</p>
				</div>
				<Button variant="outline">
					<Eye className="h-4 w-4 mr-2" />
					อ่านทั้งหมดแล้ว
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">แจ้งเตือนใหม่</CardTitle>
						<Bell className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">3</div>
						<p className="text-xs text-muted-foreground">ยังไม่อ่าน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">แจ้งเตือนด่วน</CardTitle>
						<AlertTriangle className="h-4 w-4 text-red-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">1</div>
						<p className="text-xs text-muted-foreground">ต้องจัดการด่วน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ข้อมูลทั่วไป</CardTitle>
						<Info className="h-4 w-4 text-blue-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">12</div>
						<p className="text-xs text-muted-foreground">สัปดาห์นี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เสร็จสิ้นแล้ว</CardTitle>
						<CheckCircle className="h-4 w-4 text-green-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">8</div>
						<p className="text-xs text-muted-foreground">วันนี้</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>การแจ้งเตือนล่าสุด</CardTitle>
					<CardDescription>รายการแจ้งเตือนและการอัปเดตจากระบบ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{[
							{
								id: 1,
								title: "รถโม่ต้องการซ่อมบำรุง",
								message: "รถโม่หมายเลข 83-5948 ต้องการการซ่อมบำรุงด่วน",
								time: "5 นาทีที่แล้ว",
								type: "warning",
								unread: true,
							},
							{
								id: 2,
								title: "มีการวางบิลใหม่",
								message: "บริษัท ก่อสร้าง ABC จำกัด ได้วางบิลใหม่มูลค่า 45,000 บาท",
								time: "30 นาทีที่แล้ว",
								type: "info",
								unread: true,
							},
							{
								id: 3,
								title: "การอนุมัติเสร็จสิ้น",
								message: "คำขอเบิกน้ำมันได้รับการอนุมัติแล้ว",
								time: "2 ชั่วโมงที่แล้ว",
								type: "success",
								unread: false,
							},
							{
								id: 4,
								title: "เตือนการชำระเงิน",
								message: "ลูกค้า บริษัท XYZ มีใบแจ้งหนี้ครบกำหนดชำระ",
								time: "1 วันที่แล้ว",
								type: "warning",
								unread: false,
							},
							{
								id: 5,
								title: "พนักงานใหม่เข้าร่วม",
								message: "คุณสมชาย ใจดี ได้เข้าร่วมทีมขับรถโม่แล้ว",
								time: "2 วันที่แล้ว",
								type: "info",
								unread: false,
							},
						].map((notification) => (
							<div
								key={notification.id}
								className={`flex items-start space-x-4 p-4 rounded-lg border ${
									notification.unread ? "bg-blue-50 border-blue-200" : "bg-gray-50"
								}`}
							>
								<div
									className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
										notification.type === "warning"
											? "bg-yellow-100 text-yellow-600"
											: notification.type === "success"
											? "bg-green-100 text-green-600"
											: "bg-blue-100 text-blue-600"
									}`}
								>
									{notification.type === "warning" && <AlertTriangle className="h-4 w-4" />}
									{notification.type === "success" && <CheckCircle className="h-4 w-4" />}
									{notification.type === "info" && <Info className="h-4 w-4" />}
								</div>

								<div className="flex-1 min-w-0">
									<div className="flex items-center justify-between">
										<p className="text-sm font-medium text-gray-900">
											{notification.title}
											{notification.unread && (
												<Badge variant="secondary" className="ml-2 text-xs">
													ใหม่
												</Badge>
											)}
										</p>
										<Button variant="ghost" size="sm">
											<X className="h-4 w-4" />
										</Button>
									</div>
									<p className="text-sm text-gray-600 mt-1">{notification.message}</p>
									<p className="text-xs text-gray-500 mt-2">{notification.time}</p>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
