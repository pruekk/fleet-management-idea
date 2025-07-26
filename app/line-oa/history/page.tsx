import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MessageSquare, Users, CheckCircle } from "lucide-react";

export default function LineOAHistoryPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ประวัติการส่งข้อความ</h1>
				<p className="text-muted-foreground">ดูประวัติและสถานะการส่งข้อความผ่าน LINE OA</p>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ส่งแล้ววันนี้</CardTitle>
						<MessageSquare className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">28</div>
						<p className="text-xs text-muted-foreground">+5 จากเมื่อวาน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ส่งแล้วเดือนนี้</CardTitle>
						<MessageSquare className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">1,245</div>
						<p className="text-xs text-muted-foreground">+12% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">อัตราการอ่าน</CardTitle>
						<CheckCircle className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">78.5%</div>
						<p className="text-xs text-muted-foreground">+2.1% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ผู้รับทั้งหมด</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">235</div>
						<p className="text-xs text-muted-foreground">+8 คนใหม่</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายการข้อความล่าสุด</CardTitle>
					<CardDescription>ประวัติการส่งข้อความ 30 วันที่ผ่านมา</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{/* Message 1 */}
						<div className="border-b pb-4">
							<div className="flex items-center justify-between mb-2">
								<h4 className="font-medium">แจ้งกำหนดการส่งโม่ปูน - โครงการ ABC</h4>
								<div className="flex items-center gap-2">
									<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
										ส่งสำเร็จ
									</span>
									<Clock className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">2 ชม. ที่แล้ว</span>
								</div>
							</div>
							<p className="text-sm text-muted-foreground mb-2">
								ส่งถึง: กลุ่มลูกค้าโครงการ ABC (12 คน)
							</p>
							<p className="text-sm bg-gray-50 p-2 rounded">
								"เรียนคุณลูกค้า ขอแจ้งกำหนดการส่งโม่ปูน วันที่ 26 ก.ค. 2568 เวลา 08:00 น. จำนวน 8
								คิว..."
							</p>
							<div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
								<span>📧 อ่านแล้ว: 10/12</span>
								<span>💬 ตอบกลับ: 3</span>
								<span>👍 Like: 5</span>
							</div>
						</div>

						{/* Message 2 */}
						<div className="border-b pb-4">
							<div className="flex items-center justify-between mb-2">
								<h4 className="font-medium">ยืนยันการจองรถโม่ปูน #12345</h4>
								<div className="flex items-center gap-2">
									<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
										ส่งสำเร็จ
									</span>
									<Clock className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">5 ชม. ที่แล้ว</span>
								</div>
							</div>
							<p className="text-sm text-muted-foreground mb-2">ส่งถึง: คุณสมชาย (1 คน)</p>
							<p className="text-sm bg-gray-50 p-2 rounded">
								"เรียนคุณสมชาย ขอยืนยันการจองรถโม่ปูน เลขที่ 12345 วันที่ 27 ก.ค. 2568..."
							</p>
							<div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
								<span>📧 อ่านแล้ว: 1/1</span>
								<span>💬 ตอบกลับ: 1</span>
							</div>
						</div>

						{/* Message 3 */}
						<div className="border-b pb-4">
							<div className="flex items-center justify-between mb-2">
								<h4 className="font-medium">ประกาศวันหยุดบริษัท</h4>
								<div className="flex items-center gap-2">
									<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
										ส่งสำเร็จ
									</span>
									<Clock className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">1 วัน ที่แล้ว</span>
								</div>
							</div>
							<p className="text-sm text-muted-foreground mb-2">ส่งถึง: ทุกคน (235 คน)</p>
							<p className="text-sm bg-gray-50 p-2 rounded">
								"ประกาศวันหยุดบริษัท เนื่องในวันอาสาฬหบูชา วันที่ 28 ก.ค. 2568 บริษัทฯ
								จะหยุดทำการ..."
							</p>
							<div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
								<span>📧 อ่านแล้ว: 198/235</span>
								<span>💬 ตอบกลับ: 15</span>
								<span>👍 Like: 42</span>
							</div>
						</div>

						{/* Message 4 */}
						<div className="border-b pb-4">
							<div className="flex items-center justify-between mb-2">
								<h4 className="font-medium">โปรโมชั่นเดือนกรกฎาคม</h4>
								<div className="flex items-center gap-2">
									<span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
										กำลังส่ง
									</span>
									<Clock className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">2 วัน ที่แล้ว</span>
								</div>
							</div>
							<p className="text-sm text-muted-foreground mb-2">ส่งถึง: ลูกค้าทั้งหมด (156 คน)</p>
							<p className="text-sm bg-gray-50 p-2 rounded">
								"โปรโมชั่นพิเศษเดือนกรกฎาคม! ลดราคา 10% สำหรับการจองรถโม่ปูนล่วงหน้า..."
							</p>
							<div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
								<span>📧 อ่านแล้ว: 145/156</span>
								<span>💬 ตอบกลับ: 23</span>
								<span>👍 Like: 67</span>
							</div>
						</div>

						{/* Message 5 */}
						<div>
							<div className="flex items-center justify-between mb-2">
								<h4 className="font-medium">แจ้งเตือนการชำระเงิน</h4>
								<div className="flex items-center gap-2">
									<span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
										ส่งไม่สำเร็จ
									</span>
									<Clock className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">3 วัน ที่แล้ว</span>
								</div>
							</div>
							<p className="text-sm text-muted-foreground mb-2">ส่งถึง: คุณสมหญิง (1 คน)</p>
							<p className="text-sm bg-gray-50 p-2 rounded">
								"เรียนคุณสมหญิง ขอแจ้งให้ทราบว่า ใบเรียกเก็บเงินเลขที่ INV-2024-001..."
							</p>
							<div className="flex items-center gap-2 mt-2">
								<span className="text-xs text-red-600">เหตุผล: ผู้ใช้บล็อก LINE OA</span>
								<Button size="sm" variant="outline">
									ส่งใหม่
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
