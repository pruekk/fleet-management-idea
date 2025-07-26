import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator } from "lucide-react";

export default function GPMPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">GPM (Gross Profit Margin)</h1>
				<p className="text-muted-foreground">วิเคราะห์อัตรากำไรขั้นต้นและประสิทธิ์ภาพทางการเงิน</p>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">GPM รวม</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">24.5%</div>
						<p className="text-xs text-muted-foreground">+2.1% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">GPM งานขนส่ง</CardTitle>
						<Calculator className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">28.2%</div>
						<p className="text-xs text-muted-foreground">+1.8% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">GPM โม่ปูน</CardTitle>
						<Calculator className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">21.8%</div>
						<p className="text-xs text-muted-foreground">+2.5% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เป้าหมาย GPM</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">25.0%</div>
						<p className="text-xs text-muted-foreground">98% ของเป้าหมาย</p>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>แนวโน้ม GPM รายเดือน</CardTitle>
						<CardDescription>อัตรากำไรขั้นต้นในช่วง 12 เดือนที่ผ่านมา</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-center py-8">
							<p className="text-muted-foreground">กราฟแนวโน้ม GPM จะแสดงที่นี่</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>GPM แยกตามประเภทงาน</CardTitle>
						<CardDescription>เปรียบเทียบอัตรากำไรขั้นต้นตามประเภทของงาน</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<span>ขนส่งโม่ปูนระยะไกล</span>
								<span className="font-medium text-green-600">32.5%</span>
							</div>
							<div className="flex items-center justify-between">
								<span>ขนส่งโม่ปูนระยะใกล้</span>
								<span className="font-medium text-green-600">28.2%</span>
							</div>
							<div className="flex items-center justify-between">
								<span>ขนส่งวัสดุก่อสร้าง</span>
								<span className="font-medium text-yellow-600">22.8%</span>
							</div>
							<div className="flex items-center justify-between">
								<span>งานเช่ารถโม่ปูน</span>
								<span className="font-medium text-yellow-600">18.5%</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>การวิเคราะห์และข้อเสนอแนะ</CardTitle>
					<CardDescription>ข้อเสนอแนะเพื่อปรับปรุงอัตรากำไรขั้นต้น</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="border-l-4 border-green-500 pl-4">
							<h4 className="font-semibold text-green-700">จุดแข็ง</h4>
							<p className="text-sm text-muted-foreground">
								งานขนส่งระยะไกลมีอัตรากำไรสูง เหมาะสำหรับการขยายตลาด
							</p>
						</div>
						<div className="border-l-4 border-yellow-500 pl-4">
							<h4 className="font-semibold text-yellow-700">ควรปรับปรุง</h4>
							<p className="text-sm text-muted-foreground">
								ต้นทุนน้ำมันในงานเช่ารถโม่ปูนสูง ควรปรับราคาหรือหาวิธีลดต้นทุน
							</p>
						</div>
						<div className="border-l-4 border-blue-500 pl-4">
							<h4 className="font-semibold text-blue-700">โอกาส</h4>
							<p className="text-sm text-muted-foreground">
								การปรับปรุงประสิทธิ์ภาพเชื้อเพลิงสามารถเพิ่ม GPM ได้ 3-5%
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
