import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Edit, Trash2 } from "lucide-react";

export default function LineOATemplatesPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">เทมเพลตข้อความ</h1>
					<p className="text-muted-foreground">จัดการแม่แบบข้อความสำหรับ LINE OA</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					สร้างเทมเพลตใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileText className="h-5 w-5" />
							แจ้งกำหนดการส่งโม่ปูน
						</CardTitle>
						<CardDescription>ใช้สำหรับแจ้งกำหนดการส่งโม่ปูนให้ลูกค้า</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="text-sm text-muted-foreground">
								"เรียนคุณ [ชื่อลูกค้า] ขอแจ้งกำหนดการส่งโม่ปูน วันที่ [วันที่] เวลา [เวลา] จำนวน
								[จำนวน] คิว โปรดเตรียมความพร้อม"
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline">
									<Edit className="h-3 w-3 mr-1" />
									แก้ไข
								</Button>
								<Button size="sm" variant="outline">
									ใช้งาน
								</Button>
								<Button size="sm" variant="destructive">
									<Trash2 className="h-3 w-3" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileText className="h-5 w-5" />
							ยืนยันการจองรถ
						</CardTitle>
						<CardDescription>ยืนยันการจองรถโม่ปูนกับลูกค้า</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="text-sm text-muted-foreground">
								"เรียนคุณ [ชื่อลูกค้า] ขอยืนยันการจองรถโม่ปูน เลขที่ [เลขที่จอง] วันที่ [วันที่]
								เวลา [เวลา] กรุณายืนยันกลับ"
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline">
									<Edit className="h-3 w-3 mr-1" />
									แก้ไข
								</Button>
								<Button size="sm" variant="outline">
									ใช้งาน
								</Button>
								<Button size="sm" variant="destructive">
									<Trash2 className="h-3 w-3" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileText className="h-5 w-5" />
							แจ้งเตือนการชำระเงิน
						</CardTitle>
						<CardDescription>แจ้งเตือนเรื่องการชำระเงินให้ลูกค้า</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="text-sm text-muted-foreground">
								"เรียนคุณ [ชื่อลูกค้า] ขอแจ้งให้ทราบว่า ใบเรียกเก็บเงินเลขที่ [เลขที่] จำนวน
								[จำนวนเงิน] บาท ครบกำหนดชำระ"
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline">
									<Edit className="h-3 w-3 mr-1" />
									แก้ไข
								</Button>
								<Button size="sm" variant="outline">
									ใช้งาน
								</Button>
								<Button size="sm" variant="destructive">
									<Trash2 className="h-3 w-3" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileText className="h-5 w-5" />
							ขอบคุณการใช้บริการ
						</CardTitle>
						<CardDescription>ส่งข้อความขอบคุณหลังการให้บริการ</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="text-sm text-muted-foreground">
								"ขอบคุณ คุณ [ชื่อลูกค้า] ที่ใช้บริการของเรา หากมีข้อสงสัยหรือต้องการใช้บริการอีก
								กรุณาติดต่อเรา"
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline">
									<Edit className="h-3 w-3 mr-1" />
									แก้ไข
								</Button>
								<Button size="sm" variant="outline">
									ใช้งาน
								</Button>
								<Button size="sm" variant="destructive">
									<Trash2 className="h-3 w-3" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileText className="h-5 w-5" />
							ประกาศข่าวสาร
						</CardTitle>
						<CardDescription>ประกาศข่าวสารทั่วไปของบริษัท</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="text-sm text-muted-foreground">
								"ประกาศ [หัวข้อ] เนื่องด้วย [เหตุผล] จึงขอแจ้งให้ทราบ [รายละเอียด]
								ขออภัยในความไม่สะดวก"
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline">
									<Edit className="h-3 w-3 mr-1" />
									แก้ไข
								</Button>
								<Button size="sm" variant="outline">
									ใช้งาน
								</Button>
								<Button size="sm" variant="destructive">
									<Trash2 className="h-3 w-3" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileText className="h-5 w-5" />
							โปรโมชั่นพิเศษ
						</CardTitle>
						<CardDescription>แจ้งโปรโมชั่นและข้อเสนอพิเศษ</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="text-sm text-muted-foreground">
								"โปรโมชั่นพิเศษ [ชื่อโปรโมชั่น] ลดราคา [จำนวน]% ตั้งแต่วันที่ [วันเริ่ม] ถึง
								[วันสิ้นสุด] รีบใช้ด่วน!"
							</div>
							<div className="flex gap-2">
								<Button size="sm" variant="outline">
									<Edit className="h-3 w-3 mr-1" />
									แก้ไข
								</Button>
								<Button size="sm" variant="outline">
									ใช้งาน
								</Button>
								<Button size="sm" variant="destructive">
									<Trash2 className="h-3 w-3" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
