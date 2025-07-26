import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MessageSquare, CheckCircle, XCircle } from "lucide-react";

export default function LineOAAnalyticsPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">วิเคราะห์ LINE OA</h1>
				<p className="text-muted-foreground">สถิติและการวิเคราะห์การใช้งาน LINE Official Account</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">อัตราการเปิดอ่าน</CardTitle>
						<CheckCircle className="h-4 w-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">78.5%</div>
						<p className="text-xs text-muted-foreground">+2.1% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">อัตราการตอบกลับ</CardTitle>
						<MessageSquare className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">23.2%</div>
						<p className="text-xs text-muted-foreground">+1.5% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ผู้ติดตาม</CardTitle>
						<Users className="h-4 w-4 text-purple-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-purple-600">235</div>
						<p className="text-xs text-muted-foreground">+8 คนใหม่ในเดือนนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ข้อความส่งไม่สำเร็จ</CardTitle>
						<XCircle className="h-4 w-4 text-red-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600">2.3%</div>
						<p className="text-xs text-muted-foreground">-0.5% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							แนวโน้มการส่งข้อความ
						</CardTitle>
						<CardDescription>จำนวนข้อความที่ส่งในช่วง 7 วันที่ผ่านมา</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<span className="text-sm">วันจันทร์</span>
								<div className="flex items-center gap-2">
									<div className="w-32 h-2 bg-gray-200 rounded">
										<div className="w-3/4 h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">45</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">วันอังคาร</span>
								<div className="flex items-center gap-2">
									<div className="w-32 h-2 bg-gray-200 rounded">
										<div className="w-2/3 h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">38</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">วันพุธ</span>
								<div className="flex items-center gap-2">
									<div className="w-32 h-2 bg-gray-200 rounded">
										<div className="w-full h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">52</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">วันพฤหัสบดี</span>
								<div className="flex items-center gap-2">
									<div className="w-32 h-2 bg-gray-200 rounded">
										<div className="w-4/5 h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">41</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">วันศุกร์</span>
								<div className="flex items-center gap-2">
									<div className="w-32 h-2 bg-gray-200 rounded">
										<div className="w-1/2 h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">28</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">วันเสาร์</span>
								<div className="flex items-center gap-2">
									<div className="w-32 h-2 bg-gray-200 rounded">
										<div className="w-1/4 h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">15</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">วันอาทิตย์</span>
								<div className="flex items-center gap-2">
									<div className="w-32 h-2 bg-gray-200 rounded">
										<div className="w-1/8 h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">8</span>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<TrendingUp className="h-5 w-5" />
							ประเภทข้อความยอดนิยม
						</CardTitle>
						<CardDescription>ประเภทข้อความที่มีการส่งมากที่สุด</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<span className="text-sm">แจ้งกำหนดการ</span>
								<div className="flex items-center gap-2">
									<div className="w-24 h-2 bg-gray-200 rounded">
										<div className="w-full h-2 bg-green-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">35%</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">ยืนยันการจอง</span>
								<div className="flex items-center gap-2">
									<div className="w-24 h-2 bg-gray-200 rounded">
										<div className="w-4/5 h-2 bg-blue-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">28%</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">แจ้งเตือนชำระเงิน</span>
								<div className="flex items-center gap-2">
									<div className="w-24 h-2 bg-gray-200 rounded">
										<div className="w-2/3 h-2 bg-orange-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">18%</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">ขอบคุณลูกค้า</span>
								<div className="flex items-center gap-2">
									<div className="w-24 h-2 bg-gray-200 rounded">
										<div className="w-1/2 h-2 bg-purple-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">12%</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm">ประกาศข่าวสาร</span>
								<div className="flex items-center gap-2">
									<div className="w-24 h-2 bg-gray-200 rounded">
										<div className="w-1/4 h-2 bg-red-500 rounded"></div>
									</div>
									<span className="text-sm font-medium">7%</span>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>เวลาที่เหมาะสมในการส่ง</CardTitle>
						<CardDescription>เวลาที่ผู้รับเปิดอ่านข้อความมากที่สุด</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-sm">09:00 - 12:00</span>
								<span className="font-medium text-green-600">85%</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">13:00 - 17:00</span>
								<span className="font-medium text-blue-600">72%</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">18:00 - 21:00</span>
								<span className="font-medium text-yellow-600">45%</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">21:00 - 09:00</span>
								<span className="font-medium text-red-600">18%</span>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>อายุผู้ติดตาม</CardTitle>
						<CardDescription>กลุ่มอายุของผู้ติดตาม LINE OA</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-sm">25-35 ปี</span>
								<span className="font-medium">38%</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">36-45 ปี</span>
								<span className="font-medium">32%</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">46-55 ปี</span>
								<span className="font-medium">22%</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">อื่นๆ</span>
								<span className="font-medium">8%</span>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>การเปิดใช้งานตามเวลา</CardTitle>
						<CardDescription>สถิติการใช้งานในแต่ละวัน</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-sm">จันทร์-พุธ</span>
								<span className="font-medium text-green-600">สูง</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">พฤหัส-ศุกร์</span>
								<span className="font-medium text-blue-600">ปานกลาง</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">เสาร์</span>
								<span className="font-medium text-yellow-600">ต่ำ</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">อาทิตย์</span>
								<span className="font-medium text-red-600">ต่ำมาก</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
