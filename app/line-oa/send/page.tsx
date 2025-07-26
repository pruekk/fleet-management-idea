import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Send, Users } from "lucide-react";

export default function LineOASendPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ส่งข้อความ LINE OA</h1>
				<p className="text-muted-foreground">ส่งข้อความผ่าน LINE Official Account ถึงลูกค้า</p>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<div className="md:col-span-2">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Send className="h-5 w-5" />
								เขียนข้อความ
							</CardTitle>
							<CardDescription>เขียนข้อความที่ต้องการส่ง</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<label className="text-sm font-medium">ผู้รับ</label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="เลือกผู้รับ" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">ส่งหาทุกคน</SelectItem>
										<SelectItem value="customers">ลูกค้าทั้งหมด</SelectItem>
										<SelectItem value="employees">พนักงาน</SelectItem>
										<SelectItem value="specific">เลือกกลุ่มเฉพาะ</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium">หัวข้อ</label>
								<Input type="text" placeholder="หัวข้อข้อความ" />
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium">ข้อความ</label>
								<Textarea placeholder="เขียนข้อความที่ต้องการส่ง..." className="min-h-[200px]" />
							</div>

							<div className="flex gap-4">
								<Button className="flex-1">
									<Send className="h-4 w-4 mr-2" />
									ส่งข้อความ
								</Button>
								<Button variant="outline">บันทึกเป็นแม่แบบ</Button>
							</div>
						</CardContent>
					</Card>
				</div>

				<div>
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Users className="h-5 w-5" />
								กลุ่มผู้รับ
							</CardTitle>
							<CardDescription>จำนวนผู้รับในแต่ละกลุ่ม</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-between">
								<span>ลูกค้าทั้งหมด</span>
								<span className="font-bold">156 คน</span>
							</div>
							<div className="flex items-center justify-between">
								<span>พนักงาน</span>
								<span className="font-bold">48 คน</span>
							</div>
							<div className="flex items-center justify-between">
								<span>ซัพพลายเออร์</span>
								<span className="font-bold">23 คน</span>
							</div>
							<div className="flex items-center justify-between">
								<span>ผู้บริหาร</span>
								<span className="font-bold">8 คน</span>
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader>
							<CardTitle>เทมเพลตด่วน</CardTitle>
							<CardDescription>เลือกแม่แบบข้อความที่ใช้บ่อย</CardDescription>
						</CardHeader>
						<CardContent className="space-y-2">
							<Button variant="outline" className="w-full justify-start">
								แจ้งกำหนดการส่งโม่ปูน
							</Button>
							<Button variant="outline" className="w-full justify-start">
								ยืนยันการจองรถ
							</Button>
							<Button variant="outline" className="w-full justify-start">
								แจ้งเตือนการชำระเงิน
							</Button>
							<Button variant="outline" className="w-full justify-start">
								ขอบคุณการใช้บริการ
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
