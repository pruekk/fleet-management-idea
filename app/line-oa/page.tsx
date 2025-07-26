import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, FileText, BarChart3, Clock } from "lucide-react";
import Link from "next/link";

export default function LineOAPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">LINE OA</h1>
				<p className="text-muted-foreground">จัดการ LINE Official Account และสื่อสารกับลูกค้า</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Link href="/line-oa/send">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<Send className="h-8 w-8 mx-auto mb-2 text-green-600" />
							<CardTitle>ส่งข้อความ</CardTitle>
							<CardDescription>ส่งข้อความถึงลูกค้าและกลุ่ม</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								เริ่มส่งข้อความ
							</Button>
						</CardContent>
					</Card>
				</Link>

				<Link href="/line-oa/templates">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<FileText className="h-8 w-8 mx-auto mb-2 text-blue-600" />
							<CardTitle>เทมเพลต</CardTitle>
							<CardDescription>จัดการแม่แบบข้อความ</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								จัดการเทมเพลต
							</Button>
						</CardContent>
					</Card>
				</Link>

				<Link href="/line-oa/history">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<Clock className="h-8 w-8 mx-auto mb-2 text-orange-600" />
							<CardTitle>ประวัติการส่ง</CardTitle>
							<CardDescription>ดูประวัติข้อความที่ส่งแล้ว</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								ดูประวัติ
							</Button>
						</CardContent>
					</Card>
				</Link>

				<Link href="/line-oa/analytics">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<BarChart3 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
							<CardTitle>วิเคราะห์</CardTitle>
							<CardDescription>สถิติและการวิเคราะห์</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								ดูสถิติ
							</Button>
						</CardContent>
					</Card>
				</Link>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<MessageSquare className="h-5 w-5" />
							สถิติการส่งข้อความ
						</CardTitle>
						<CardDescription>ภาพรวมการส่งข้อความในเดือนนี้</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<span>ข้อความที่ส่งแล้ว</span>
								<span className="font-bold text-2xl">1,245</span>
							</div>
							<div className="flex items-center justify-between">
								<span>อัตราการเปิดอ่าน</span>
								<span className="font-bold text-green-600">78.5%</span>
							</div>
							<div className="flex items-center justify-between">
								<span>อัตราการตอบกลับ</span>
								<span className="font-bold text-blue-600">23.2%</span>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>ข้อความล่าสุด</CardTitle>
						<CardDescription>ข้อความที่ส่งไปเมื่อเร็วๆ นี้</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="border-b pb-2">
								<p className="font-medium">แจ้งกำหนดการส่งโม่ปูน</p>
								<p className="text-sm text-muted-foreground">ส่งไปยัง: กลุ่มลูกค้า A</p>
								<p className="text-xs text-muted-foreground">2 ชั่วโมงที่แล้ว</p>
							</div>
							<div className="border-b pb-2">
								<p className="font-medium">ใบเสนอราคาโครงการใหม่</p>
								<p className="text-sm text-muted-foreground">ส่งไปยัง: คุณสมชาย</p>
								<p className="text-xs text-muted-foreground">5 ชั่วโมงที่แล้ว</p>
							</div>
							<div>
								<p className="font-medium">ประกาศวันหยุดบริษัท</p>
								<p className="text-sm text-muted-foreground">ส่งไปยัง: ทุกคน</p>
								<p className="text-xs text-muted-foreground">1 วันที่แล้ว</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
