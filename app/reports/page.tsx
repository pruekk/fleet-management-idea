import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">รายงาน</h1>
				<p className="text-muted-foreground">รายงานและสถิติการดำเนินงาน</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card className="cursor-pointer hover:shadow-md transition-shadow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							รายงานรายได้
						</CardTitle>
						<CardDescription>สรุปรายได้รายเดือนและรายปี</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							ดูรายงานรายได้รายละเอียด กำไร-ขาดทุน และแนวโน้ม
						</p>
					</CardContent>
				</Card>

				<Card className="cursor-pointer hover:shadow-md transition-shadow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							รายงานรายจ่าย
						</CardTitle>
						<CardDescription>วิเคราะห์รายจ่ายแต่ละประเภท</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							ติดตามค่าใช้จ่าย เชื้อเพลิง ซ่อมบำรุง และค่าแรง
						</p>
					</CardContent>
				</Card>

				<Card className="cursor-pointer hover:shadow-md transition-shadow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							รายงานเที่ยววิ่ง
						</CardTitle>
						<CardDescription>สถิติการขนส่งและประสิทธิ์ภาพ</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							จำนวนเที่ยว ระยะทาง และประสิทธิ์ภาพการใช้รถ
						</p>
					</CardContent>
				</Card>

				<Card className="cursor-pointer hover:shadow-md transition-shadow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							รายงานพนักงาน
						</CardTitle>
						<CardDescription>สรุปค่าแรงและผลงานพนักงาน</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">ค่าแรง โบนัส และประเมินผลการทำงาน</p>
					</CardContent>
				</Card>

				<Card className="cursor-pointer hover:shadow-md transition-shadow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							รายงานซ่อมบำรุง
						</CardTitle>
						<CardDescription>ประวัติและค่าใช้จ่ายซ่อมบำรุง</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							ติดตามการซ่อมบำรุง ค่าใช้จ่าย และกำหนดการ
						</p>
					</CardContent>
				</Card>

				<Card className="cursor-pointer hover:shadow-md transition-shadow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							รายงานลูกค้า
						</CardTitle>
						<CardDescription>วิเคราะห์ฐานลูกค้าและการขาย</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							ลูกค้าใหม่ ลูกค้าประจำ และอัตราการเติบโต
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
