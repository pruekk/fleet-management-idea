import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Plus, Search, MapPin, Clock } from "lucide-react";

export default function BasicDataTransportPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">จัดการข้อมูลขนส่ง</h1>
					<p className="text-muted-foreground">เส้นทางขนส่งและพื้นที่ให้บริการ</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มเส้นทางใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เส้นทางทั้งหมด</CardTitle>
						<MapPin className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">45</div>
						<p className="text-xs text-muted-foreground">เส้นทางที่ใช้งาน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">พื้นที่บริการ</CardTitle>
						<MapPin className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">7</div>
						<p className="text-xs text-muted-foreground">จังหวัด</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เที่ยววิ่งวันนี้</CardTitle>
						<Truck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">18</div>
						<p className="text-xs text-muted-foreground">เที่ยว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เวลาเฉลี่ย</CardTitle>
						<Clock className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">2.5</div>
						<p className="text-xs text-muted-foreground">ชั่วโมง/เที่ยว</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>เส้นทางขนส่ง</CardTitle>
					<CardDescription>รายการเส้นทางและพื้นที่ให้บริการ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center space-x-4 mb-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input placeholder="ค้นหาเส้นทาง..." className="pl-10" />
						</div>
						<Button variant="outline">ฟิลเตอร์พื้นที่</Button>
					</div>

					<div className="rounded-md border">
						<div className="grid grid-cols-6 gap-4 p-4 font-medium border-b bg-gray-50">
							<div>รหัสเส้นทาง</div>
							<div>จุดเริ่มต้น</div>
							<div>จุดหมาย</div>
							<div>ระยะทาง (กม.)</div>
							<div>เวลาโดยประมาณ</div>
							<div>สถานะ</div>
						</div>

						{/* Sample route data */}
						{[
							{
								code: "R001",
								origin: "โรงงานสาขาลาดพร้าว",
								destination: "โครงการ ABC กรุงเทพฯ",
								distance: "15",
								duration: "45 นาที",
								status: "ใช้งาน",
							},
							{
								code: "R002",
								origin: "โรงงานสาขาสมุทรปราการ",
								destination: "โครงการ XYZ สมุทรปราการ",
								distance: "8",
								duration: "25 นาที",
								status: "ใช้งาน",
							},
							{
								code: "R003",
								origin: "โรงงานสาขาปทุมธานี",
								destination: "โครงการ DEF ปทุมธานี",
								distance: "12",
								duration: "35 นาที",
								status: "ใช้งาน",
							},
							{
								code: "R004",
								origin: "โรงงานสาขาลาดพร้าว",
								destination: "โครงการ GHI นนทบุรี",
								distance: "22",
								duration: "65 นาที",
								status: "ปิดชั่วคราว",
							},
						].map((route, index) => (
							<div key={index} className="grid grid-cols-6 gap-4 p-4 border-b last:border-b-0">
								<div className="font-mono font-bold">{route.code}</div>
								<div>{route.origin}</div>
								<div>{route.destination}</div>
								<div className="text-center">{route.distance}</div>
								<div>{route.duration}</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											route.status === "ใช้งาน"
												? "bg-green-100 text-green-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{route.status}
									</span>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
