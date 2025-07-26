import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, Clock, CheckCircle, XCircle, User } from "lucide-react";

export default function ApprovalSystemPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ระบบอนุมัติ</h1>
				<p className="text-muted-foreground">จัดการคำขอและการอนุมัติต่างๆ ในระบบ</p>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รออนุมัติ</CardTitle>
						<Clock className="h-4 w-4 text-yellow-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-yellow-600">12</div>
						<p className="text-xs text-muted-foreground">คำขอรออนุมัติ</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">อนุมัติแล้ว</CardTitle>
						<CheckCircle className="h-4 w-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">45</div>
						<p className="text-xs text-muted-foreground">วันนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ไม่อนุมัติ</CardTitle>
						<XCircle className="h-4 w-4 text-red-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600">3</div>
						<p className="text-xs text-muted-foreground">วันนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ทั้งหมดเดือนนี้</CardTitle>
						<CheckSquare className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">287</div>
						<p className="text-xs text-muted-foreground">คำขอทั้งหมด</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>คำขอรออนุมัติ</CardTitle>
					<CardDescription>รายการคำขอที่รอการอนุมัติจากคุณ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex items-center justify-between p-4 border rounded-lg">
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
									<User className="h-5 w-5 text-yellow-600" />
								</div>
								<div>
									<h4 className="font-medium">คำขอเบิกน้ำมัน - รถโม่ 83-5948</h4>
									<p className="text-sm text-muted-foreground">
										จำนวน: 500 ลิตร | ผู้ขอ: สมชาย ใจดี
									</p>
									<p className="text-xs text-muted-foreground">2 ชั่วโมงที่แล้ว</p>
								</div>
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline" className="text-red-600 border-red-600">
									ไม่อนุมัติ
								</Button>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									อนุมัติ
								</Button>
							</div>
						</div>

						<div className="flex items-center justify-between p-4 border rounded-lg">
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
									<User className="h-5 w-5 text-blue-600" />
								</div>
								<div>
									<h4 className="font-medium">คำขอซ่อมบำรุง - รถโม่ 84-1234</h4>
									<p className="text-sm text-muted-foreground">
										เปลี่ยนยางรถ | ผู้ขอ: สมหญิง รักงาน
									</p>
									<p className="text-xs text-muted-foreground">4 ชั่วโมงที่แล้ว</p>
								</div>
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline" className="text-red-600 border-red-600">
									ไม่อนุมัติ
								</Button>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									อนุมัติ
								</Button>
							</div>
						</div>

						<div className="flex items-center justify-between p-4 border rounded-lg">
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
									<User className="h-5 w-5 text-purple-600" />
								</div>
								<div>
									<h4 className="font-medium">คำขอลาพักร้อน</h4>
									<p className="text-sm text-muted-foreground">
										วันที่ 28-30 ก.ค. 2568 | ผู้ขอ: สมศักดิ์ มีสุข
									</p>
									<p className="text-xs text-muted-foreground">1 วันที่แล้ว</p>
								</div>
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline" className="text-red-600 border-red-600">
									ไม่อนุมัติ
								</Button>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									อนุมัติ
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>อนุมัติล่าสุด</CardTitle>
						<CardDescription>รายการที่ได้รับการอนุมัติเมื่อเร็วๆ นี้</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<CheckCircle className="h-5 w-5 text-green-600" />
								<div>
									<p className="font-medium">เบิกน้ำมันรถโม่ 82-7890</p>
									<p className="text-sm text-muted-foreground">
										อนุมัติโดย: คุณผู้จัดการ | 30 นาทีที่แล้ว
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<CheckCircle className="h-5 w-5 text-green-600" />
								<div>
									<p className="font-medium">ซ่อมแซมเครื่องยนต์</p>
									<p className="text-sm text-muted-foreground">
										อนุมัติโดย: หัวหน้าช่าง | 1 ชั่วโมงที่แล้ว
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<CheckCircle className="h-5 w-5 text-green-600" />
								<div>
									<p className="font-medium">ใบเสนอราคาโครงการใหม่</p>
									<p className="text-sm text-muted-foreground">
										อนุมัติโดย: ฝ่ายขาย | 2 ชั่วโมงที่แล้ว
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>สถิติการอนุมัติ</CardTitle>
						<CardDescription>ข้อมูลการอนุมัติรายสัปดาห์</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-sm">อัตราการอนุมัติ</span>
								<span className="font-medium text-green-600">94.2%</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">เวลาเฉลี่ยในการอนุมัติ</span>
								<span className="font-medium">2.5 ชั่วโมง</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">คำขอที่มากที่สุด</span>
								<span className="font-medium">เบิกน้ำมัน</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">ผู้อนุมัติที่ใช้บ่อย</span>
								<span className="font-medium">คุณผู้จัดการ</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
