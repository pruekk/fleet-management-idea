import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Truck,
	Users,
	Calendar,
	MapPin,
	Clock,
	AlertTriangle,
	CheckCircle,
	Factory,
	UserCheck,
	Fuel,
	Wrench,
	TrendingUp,
	Building,
	Target,
	BarChart3,
	PieChart,
	User,
	UserX,
	CalendarDays,
	ArrowUp,
	ArrowDown,
	Star,
} from "lucide-react";

export default function DashboardPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">แดชบอร์ด</h1>
				<p className="text-muted-foreground">ภาพรวมการจัดการระบบโม่ปูนและขนส่ง</p>
			</div>

			{/* สถิติภาพรวม */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รถโม่ทั้งหมด</CardTitle>
						<Truck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">24</div>
						<p className="text-xs text-green-600">✓ 20 พร้อมใช้งาน</p>
						<p className="text-xs text-orange-600">⚠ 3 ซ่อมบำรุง</p>
						<p className="text-xs text-red-600">✗ 1 เสียงหนัก</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">พนักงาน</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">48</div>
						<p className="text-xs text-green-600">✓ 35 เข้างานแล้ว</p>
						<p className="text-xs text-blue-600">🕒 8 กำลังเข้างาน</p>
						<p className="text-xs text-gray-600">📋 5 ลาวันนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ลูกค้าขาประจำ</CardTitle>
						<Building className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">15</div>
						<p className="text-xs text-green-600">✓ 12 มีงานวันนี้</p>
						<p className="text-xs text-blue-600">📞 3 ติดต่อใหม่</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เที่ยววิ่งวันนี้</CardTitle>
						<Calendar className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">18</div>
						<p className="text-xs text-green-600">✓ 12 เสร็จสิ้น</p>
						<p className="text-xs text-blue-600">🚛 4 กำลังดำเนินการ</p>
						<p className="text-xs text-gray-600">⏳ 2 รอออกรถ</p>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{/* สถานะรถโม่ตามโรงงาน */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Factory className="h-5 w-5" />
							รถโม่จดทะเบียนตามโรงงาน
						</CardTitle>
						<CardDescription>การกระจายรถโม่ในแต่ละโรงงาน</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-3">
							<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
								<div>
									<div className="font-medium text-blue-900">โรงงานปูนเซ็นทรัล</div>
									<div className="text-sm text-blue-600">8 คัน พร้อมใช้งาน</div>
								</div>
								<div className="text-right">
									<div className="text-lg font-bold text-blue-600">8/10</div>
									<Progress value={80} className="h-2 w-16" />
								</div>
							</div>

							<div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
								<div>
									<div className="font-medium text-green-900">โรงงานปูนไทยยามาโต</div>
									<div className="text-sm text-green-600">7 คัน พร้อมใช้งาน</div>
								</div>
								<div className="text-right">
									<div className="text-lg font-bold text-green-600">7/8</div>
									<Progress value={87.5} className="h-2 w-16" />
								</div>
							</div>

							<div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
								<div>
									<div className="font-medium text-orange-900">โรงงานปูนหนองแสง</div>
									<div className="text-sm text-orange-600">5 คัน พร้อมใช้งาน</div>
								</div>
								<div className="text-right">
									<div className="text-lg font-bold text-orange-600">5/6</div>
									<Progress value={83.3} className="h-2 w-16" />
								</div>
							</div>
						</div>

						<div className="pt-3 border-t">
							<div className="text-sm text-muted-foreground">
								รวมทั้งหมด: <span className="font-medium">20/24 คัน พร้อมใช้งาน</span>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* สถานะรถโม่วันนี้-พรุ่งนี้ */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Calendar className="h-5 w-5" />
							สถานะรถโม่ 2 วัน
						</CardTitle>
						<CardDescription>สถานการณ์วันนี้และพรุ่งนี้</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="today" className="w-full">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="today">วันนี้</TabsTrigger>
								<TabsTrigger value="tomorrow">พรุ่งนี้</TabsTrigger>
							</TabsList>

							<TabsContent value="today" className="space-y-3 mt-4">
								<div className="grid grid-cols-3 gap-2 text-center">
									<div className="p-2 bg-green-50 rounded">
										<CheckCircle className="h-4 w-4 mx-auto mb-1 text-green-600" />
										<div className="text-lg font-bold text-green-600">20</div>
										<div className="text-xs text-green-700">พร้อมใช้</div>
									</div>
									<div className="p-2 bg-orange-50 rounded">
										<Wrench className="h-4 w-4 mx-auto mb-1 text-orange-600" />
										<div className="text-lg font-bold text-orange-600">3</div>
										<div className="text-xs text-orange-700">ซ่อมบำรุง</div>
									</div>
									<div className="p-2 bg-red-50 rounded">
										<AlertTriangle className="h-4 w-4 mx-auto mb-1 text-red-600" />
										<div className="text-lg font-bold text-red-600">1</div>
										<div className="text-xs text-red-700">เสียหาย</div>
									</div>
								</div>

								<div className="space-y-2 text-sm">
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										<span>รถโม่-001, 003, 007: กำลังขนส่ง</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
										<span>รถโม่-012: ซ่อมเครื่องยนต์</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-red-500 rounded-full"></div>
										<span>รถโม่-021: อุบัติเหตุ รอซ่อม</span>
									</div>
								</div>
							</TabsContent>

							<TabsContent value="tomorrow" className="space-y-3 mt-4">
								<div className="grid grid-cols-3 gap-2 text-center">
									<div className="p-2 bg-green-50 rounded">
										<CheckCircle className="h-4 w-4 mx-auto mb-1 text-green-600" />
										<div className="text-lg font-bold text-green-600">22</div>
										<div className="text-xs text-green-700">พร้อมใช้</div>
									</div>
									<div className="p-2 bg-orange-50 rounded">
										<Wrench className="h-4 w-4 mx-auto mb-1 text-orange-600" />
										<div className="text-lg font-bold text-orange-600">2</div>
										<div className="text-xs text-orange-700">ซ่อมบำรุง</div>
									</div>
									<div className="p-2 bg-red-50 rounded">
										<AlertTriangle className="h-4 w-4 mx-auto mb-1 text-red-600" />
										<div className="text-lg font-bold text-red-600">0</div>
										<div className="text-xs text-red-700">เสียหาย</div>
									</div>
								</div>

								<div className="space-y-2 text-sm">
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										<span>รถโม่-012: เสร็จสิ้นการซ่อม</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										<span>รถโม่-021: คาดว่าซ่อมเสร็จ</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
										<span>รถโม่-005, 018: ซ่อมบำรุงประจำ</span>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>

				{/* สถานะพนักงานวันนี้-พรุ่งนี้ */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Users className="h-5 w-5" />
							สถานะพนักงาน 2 วัน
						</CardTitle>
						<CardDescription>การเข้างานและการลาของพนักงาน</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="today" className="w-full">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="today">วันนี้</TabsTrigger>
								<TabsTrigger value="tomorrow">พรุ่งนี้</TabsTrigger>
							</TabsList>

							<TabsContent value="today" className="space-y-3 mt-4">
								<div className="grid grid-cols-2 gap-3">
									<div className="p-3 bg-green-50 rounded-lg text-center">
										<UserCheck className="h-5 w-5 mx-auto mb-1 text-green-600" />
										<div className="text-xl font-bold text-green-600">35</div>
										<div className="text-xs text-green-700">เข้างานแล้ว</div>
									</div>
									<div className="p-3 bg-red-50 rounded-lg text-center">
										<UserX className="h-5 w-5 mx-auto mb-1 text-red-600" />
										<div className="text-xl font-bold text-red-600">5</div>
										<div className="text-xs text-red-700">ลาวันนี้</div>
									</div>
								</div>

								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span>พนักงานขับรถ:</span>
										<span>18/20 คน</span>
									</div>
									<div className="flex justify-between">
										<span>พนักงานโรงงาน:</span>
										<span>12/15 คน</span>
									</div>
									<div className="flex justify-between">
										<span>พนักงานบริหาร:</span>
										<span>5/5 คน</span>
									</div>
								</div>

								<div className="pt-2 border-t">
									<div className="text-xs text-muted-foreground">
										<div>• ลาป่วย: 3 คน</div>
										<div>• ลากิจ: 2 คน</div>
									</div>
								</div>
							</TabsContent>

							<TabsContent value="tomorrow" className="space-y-3 mt-4">
								<div className="grid grid-cols-2 gap-3">
									<div className="p-3 bg-green-50 rounded-lg text-center">
										<UserCheck className="h-5 w-5 mx-auto mb-1 text-green-600" />
										<div className="text-xl font-bold text-green-600">38</div>
										<div className="text-xs text-green-700">คาดว่าเข้างาน</div>
									</div>
									<div className="p-3 bg-orange-50 rounded-lg text-center">
										<CalendarDays className="h-5 w-5 mx-auto mb-1 text-orange-600" />
										<div className="text-xl font-bold text-orange-600">2</div>
										<div className="text-xs text-orange-700">ลาล่วงหน้า</div>
									</div>
								</div>

								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span>พนักงานขับรถ:</span>
										<span>20/20 คน</span>
									</div>
									<div className="flex justify-between">
										<span>พนักงานโรงงาน:</span>
										<span>13/15 คน</span>
									</div>
									<div className="flex justify-between">
										<span>พนักงานบริหาร:</span>
										<span>5/5 คน</span>
									</div>
								</div>

								<div className="pt-2 border-t">
									<div className="text-xs text-muted-foreground">
										<div>• ลากิจ: 2 คน (วันหยุดส่วนตัว)</div>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>

			{/* เป้าหมายแต่ละโรงงาน */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Target className="h-5 w-5" />
						เป้าหมายการส่งปูนรายโรงงาน (เดือนนี้)
					</CardTitle>
					<CardDescription>ความคืบหน้าเป้าหมายแต่ละโรงงานในเดือนปัจจุบัน</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* โรงงานปูนเซ็นทรัล */}
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<h4 className="font-medium">โรงงานปูนเซ็นทรัล</h4>
								<Badge variant="secondary" className="bg-blue-100 text-blue-700">
									85%
								</Badge>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>เป้าหมาย:</span>
									<span>2,000 ลบ.ม.</span>
								</div>
								<div className="flex justify-between text-sm">
									<span>ส่งแล้ว:</span>
									<span className="font-medium text-blue-600">1,700 ลบ.ม.</span>
								</div>
								<Progress value={85} className="h-2" />
								<div className="flex items-center gap-2 text-sm">
									<ArrowUp className="h-3 w-3 text-green-500" />
									<span className="text-green-600">+12% จากเดือนที่แล้ว</span>
								</div>
							</div>
							<div className="text-xs text-muted-foreground space-y-1">
								<div>• เที่ยววิ่ง: 145/170</div>
								<div>• เฉลี่ยต่อวัน: 68 ลบ.ม.</div>
								<div>• คาดการณ์: เกินเป้า 8%</div>
							</div>
						</div>

						{/* โรงงานปูนไทยยามาโต */}
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<h4 className="font-medium">โรงงานปูนไทยยามาโต</h4>
								<Badge variant="secondary" className="bg-green-100 text-green-700">
									92%
								</Badge>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>เป้าหมาย:</span>
									<span>1,500 ลบ.ม.</span>
								</div>
								<div className="flex justify-between text-sm">
									<span>ส่งแล้ว:</span>
									<span className="font-medium text-green-600">1,380 ลบ.ม.</span>
								</div>
								<Progress value={92} className="h-2" />
								<div className="flex items-center gap-2 text-sm">
									<ArrowUp className="h-3 w-3 text-green-500" />
									<span className="text-green-600">+18% จากเดือนที่แล้ว</span>
								</div>
							</div>
							<div className="text-xs text-muted-foreground space-y-1">
								<div>• เที่ยววิ่ง: 118/130</div>
								<div>• เฉลี่ยต่อวัน: 55 ลบ.ม.</div>
								<div>• คาดการณ์: เกินเป้า 5%</div>
							</div>
						</div>

						{/* โรงงานปูนหนองแสง */}
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<h4 className="font-medium">โรงงานปูนหนองแสง</h4>
								<Badge variant="destructive" className="bg-red-100 text-red-700">
									72%
								</Badge>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>เป้าหมาย:</span>
									<span>1,200 ลบ.ม.</span>
								</div>
								<div className="flex justify-between text-sm">
									<span>ส่งแล้ว:</span>
									<span className="font-medium text-red-600">864 ลบ.ม.</span>
								</div>
								<Progress value={72} className="h-2" />
								<div className="flex items-center gap-2 text-sm">
									<ArrowDown className="h-3 w-3 text-red-500" />
									<span className="text-red-600">-5% จากเดือนที่แล้ว</span>
								</div>
							</div>
							<div className="text-xs text-muted-foreground space-y-1">
								<div>• เที่ยววิ่ง: 78/110</div>
								<div>• เฉลี่ยต่อวัน: 34 ลบ.ม.</div>
								<div>• คาดการณ์: ต่ำกว่าเป้า 15%</div>
							</div>
						</div>
					</div>

					<div className="mt-6 pt-4 border-t">
						<div className="grid grid-cols-3 gap-4 text-center">
							<div>
								<div className="text-2xl font-bold text-blue-600">4,700</div>
								<div className="text-sm text-muted-foreground">รวมเป้าหมาย (ลบ.ม.)</div>
							</div>
							<div>
								<div className="text-2xl font-bold text-green-600">3,944</div>
								<div className="text-sm text-muted-foreground">ส่งแล้ว (ลบ.ม.)</div>
							</div>
							<div>
								<div className="text-2xl font-bold text-orange-600">84%</div>
								<div className="text-sm text-muted-foreground">เฉลี่ยรวม</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="grid gap-6 md:grid-cols-3">
				{/* สถานะรถโม่ */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Truck className="h-5 w-5" />
							สถานะรถโม่
						</CardTitle>
						<CardDescription>สถานการณ์ปัจจุบันของรถโม่ปูน</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span>รถพร้อมใช้งาน</span>
								<span>20/24</span>
							</div>
							<Progress value={83} className="h-2" />
						</div>

						<div className="grid grid-cols-2 gap-4 pt-2">
							<div className="text-center p-3 bg-green-50 rounded-lg">
								<div className="text-2xl font-bold text-green-600">20</div>
								<div className="text-xs text-green-700">พร้อมใช้งาน</div>
							</div>
							<div className="text-center p-3 bg-orange-50 rounded-lg">
								<div className="text-2xl font-bold text-orange-600">3</div>
								<div className="text-xs text-orange-700">ซ่อมบำรุง</div>
							</div>
						</div>

						<div className="space-y-2 pt-2">
							<div className="flex items-center gap-2 text-sm">
								<CheckCircle className="h-4 w-4 text-green-500" />
								<span>รถโม่-001: กำลังขนส่ง</span>
								<Badge variant="secondary" className="ml-auto">
									โรงงาน A
								</Badge>
							</div>
							<div className="flex items-center gap-2 text-sm">
								<CheckCircle className="h-4 w-4 text-green-500" />
								<span>รถโม่-003: กำลังขนส่ง</span>
								<Badge variant="secondary" className="ml-auto">
									โรงงาน B
								</Badge>
							</div>
							<div className="flex items-center gap-2 text-sm">
								<Wrench className="h-4 w-4 text-orange-500" />
								<span>รถโม่-005: ซ่อมบำรุง</span>
								<Badge variant="outline" className="ml-auto">
									อู่ซ่อม
								</Badge>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* กิจกรรมล่าสุด */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Clock className="h-5 w-5" />
							กิจกรรมล่าสุด
						</CardTitle>
						<CardDescription>เหตุการณ์และกิจกรรมที่เกิดขึ้นวันนี้</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
								<div className="space-y-1">
									<p className="text-sm font-medium">รถโม่-007 ส่งปูนเสร็จสิ้น</p>
									<p className="text-xs text-muted-foreground">โครงการก่อสร้างตึก ABC - 09:45</p>
									<Badge variant="secondary" className="text-xs">
										95 ลบ.ม. | โรงงานเซ็นทรัล
									</Badge>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
								<div className="space-y-1">
									<p className="text-sm font-medium">พนักงานใหม่เข้างาน</p>
									<p className="text-xs text-muted-foreground">
										คุณสมศักดิ์ ตำแหน่งคนขับรถ - 08:30
									</p>
									<Badge variant="outline" className="text-xs">
										ทีมขับรถโม่
									</Badge>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
								<div className="space-y-1">
									<p className="text-sm font-medium">รถโม่-012 เข้าซ่อมบำรุง</p>
									<p className="text-xs text-muted-foreground">ตรวจเช็คประจำเดือน - 07:15</p>
									<Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
										คาดเสร็จ: พรุ่งนี้
									</Badge>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
								<div className="space-y-1">
									<p className="text-sm font-medium">ได้รับคำสั่งซื้อใหม่</p>
									<p className="text-xs text-muted-foreground">บริษัท XYZ จำกัด - 06:45</p>
									<Badge variant="secondary" className="text-xs">
										250 ลบ.ม. | ต่อสัปดาห์
									</Badge>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
								<div className="space-y-1">
									<p className="text-sm font-medium">แจ้งเตือนเชื้อเพลิงน้อย</p>
									<p className="text-xs text-muted-foreground">รถโม่-009 ระดับน้ำมัน 15% - 06:20</p>
									<Badge variant="destructive" className="text-xs">
										ต้องเติมน้ำมันด่วน
									</Badge>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
								<div className="space-y-1">
									<p className="text-sm font-medium">ลูกค้าให้คะแนนความพึงพอใจ</p>
									<p className="text-xs text-muted-foreground">โครงการคอนโดมิเนียม ABC - 05:30</p>
									<div className="flex items-center gap-1">
										<Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">
											<Star className="h-3 w-3 mr-1" />
											4.8/5.0
										</Badge>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* สรุปประจำวัน */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<TrendingUp className="h-5 w-5" />
							สรุปประจำวัน
						</CardTitle>
						<CardDescription>สถิติสำคัญของวันนี้</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="text-center p-3 bg-blue-50 rounded-lg">
								<MapPin className="h-6 w-6 mx-auto mb-1 text-blue-600" />
								<div className="text-xl font-bold text-blue-600">18</div>
								<div className="text-xs text-blue-700">เที่ยววิ่ง</div>
							</div>
							<div className="text-center p-3 bg-green-50 rounded-lg">
								<Factory className="h-6 w-6 mx-auto mb-1 text-green-600" />
								<div className="text-xl font-bold text-green-600">8</div>
								<div className="text-xs text-green-700">โรงงานที่ส่ง</div>
							</div>
						</div>

						<div className="space-y-3">
							<div>
								<div className="flex justify-between text-sm mb-1">
									<span>เที่ยววิ่งเสร็จสิ้น</span>
									<span>12/18</span>
								</div>
								<Progress value={67} className="h-2" />
							</div>

							<div>
								<div className="flex justify-between text-sm mb-1">
									<span>ความพึงพอใจลูกค้า</span>
									<span>4.8/5.0</span>
								</div>
								<Progress value={96} className="h-2" />
							</div>

							<div>
								<div className="flex justify-between text-sm mb-1">
									<span>เวลาเฉลี่ยต่อเที่ยว</span>
									<span>2.5 ชม.</span>
								</div>
								<Progress value={75} className="h-2" />
							</div>
						</div>

						<div className="pt-2 border-t space-y-2">
							<div className="flex items-center justify-between text-sm">
								<span className="flex items-center gap-2">
									<UserCheck className="h-4 w-4 text-green-500" />
									พนักงานเข้างาน
								</span>
								<span className="font-medium">35/40</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="flex items-center gap-2">
									<Fuel className="h-4 w-4 text-blue-500" />
									เชื้อเพลิงเฉลี่ย
								</span>
								<span className="font-medium">85%</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* แจ้งเตือนสำคัญ */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<AlertTriangle className="h-5 w-5 text-orange-500" />
						แจ้งเตือนและงานที่ต้องดำเนินการ
					</CardTitle>
					<CardDescription>รายการที่ต้องให้ความสำคัญ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<div className="p-4 border border-red-200 bg-red-50 rounded-lg">
							<div className="flex items-center gap-2 mb-2">
								<AlertTriangle className="h-4 w-4 text-red-500" />
								<span className="font-medium text-red-700">ต้องดำเนินการด่วน</span>
							</div>
							<ul className="space-y-1 text-sm text-red-600">
								<li>• รถโม่-015 เลยกำหนดซ่อมบำรุง 3 วัน</li>
								<li>• ใบสั่งซื้อ #12345 รอการตอบกลับ</li>
								<li>• พนักงาน 2 คน ยังไม่เช็คอิน</li>
							</ul>
						</div>

						<div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
							<div className="flex items-center gap-2 mb-2">
								<Clock className="h-4 w-4 text-orange-500" />
								<span className="font-medium text-orange-700">กำลังดำเนินการ</span>
							</div>
							<ul className="space-y-1 text-sm text-orange-600">
								<li>• รถโม่-003 กำลังส่งปูน (75%)</li>
								<li>• รถโม่-008 กำลังส่งปูน (45%)</li>
								<li>• การซ่อมบำรุงรถโม่-021 (90%)</li>
							</ul>
						</div>

						<div className="p-4 border border-green-200 bg-green-50 rounded-lg">
							<div className="flex items-center gap-2 mb-2">
								<CheckCircle className="h-4 w-4 text-green-500" />
								<span className="font-medium text-green-700">เสร็จสิ้นแล้ว</span>
							</div>
							<ul className="space-y-1 text-sm text-green-600">
								<li>• ส่งปูนโครงการ ABC เสร็จสิ้น</li>
								<li>• ตรวจสอบคุณภาพปูนประจำวัน</li>
								<li>• อบรมพนักงานใหม่</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
