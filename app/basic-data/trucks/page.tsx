import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Plus, Search, Settings, Calendar } from "lucide-react";

export default function BasicDataTrucksPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">จัดการข้อมูลรถโม่</h1>
					<p className="text-muted-foreground">ข้อมูลรถโม่ปูนและการบำรุงรักษา</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มรถโม่ใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รถโม่ทั้งหมด</CardTitle>
						<Truck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">24</div>
						<p className="text-xs text-muted-foreground">+2 คันในเดือนนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ใช้งานได้</CardTitle>
						<Settings className="h-4 w-4 text-green-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">22</div>
						<p className="text-xs text-muted-foreground">พร้อมใช้งาน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ซ่อมบำรุง</CardTitle>
						<Settings className="h-4 w-4 text-yellow-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">2</div>
						<p className="text-xs text-muted-foreground">กำลังซ่อม</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">บำรุงรักษาล่าสุด</CardTitle>
						<Calendar className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">3</div>
						<p className="text-xs text-muted-foreground">วันที่แล้ว</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายการรถโม่</CardTitle>
					<CardDescription>รายการรถโม่ปูนและสถานะการใช้งาน</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center space-x-4 mb-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input placeholder="ค้นหารถโม่..." className="pl-10" />
						</div>
						<Button variant="outline">ฟิลเตอร์สถานะ</Button>
					</div>

					<div className="rounded-md border">
						<div className="grid grid-cols-7 gap-4 p-4 font-medium border-b bg-gray-50">
							<div>รหัสรถ</div>
							<div>ทะเบียน</div>
							<div>ยี่ห้อ/รุ่น</div>
							<div>ความจุ (คิว)</div>
							<div>คนขับ</div>
							<div>สถานะ</div>
							<div>บำรุงรักษาล่าสุด</div>
						</div>

						{/* Sample truck data */}
						{[
							{
								code: "A201",
								plate: "83-5947",
								brand: "Hino",
								capacity: "6",
								driver: "นายสมชาย",
								status: "ใช้งาน",
								lastMaintenance: "15/07/2024",
							},
							{
								code: "A202",
								plate: "83-5948",
								brand: "Isuzu",
								capacity: "6",
								driver: "นายประจวบ",
								status: "ซ่อมบำรุง",
								lastMaintenance: "20/07/2024",
							},
							{
								code: "A203",
								plate: "83-5949",
								brand: "UD Trucks",
								capacity: "8",
								driver: "นายศักดิ์ชาย",
								status: "ใช้งาน",
								lastMaintenance: "10/07/2024",
							},
							{
								code: "A204",
								plate: "83-5950",
								brand: "Hino",
								capacity: "6",
								driver: "นายรุ่งโรจน์",
								status: "ใช้งาน",
								lastMaintenance: "25/07/2024",
							},
						].map((truck, index) => (
							<div key={index} className="grid grid-cols-7 gap-4 p-4 border-b last:border-b-0">
								<div className="font-mono font-bold">{truck.code}</div>
								<div className="font-medium">{truck.plate}</div>
								<div>{truck.brand}</div>
								<div className="text-center">{truck.capacity}</div>
								<div>{truck.driver}</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											truck.status === "ใช้งาน"
												? "bg-green-100 text-green-800"
												: "bg-yellow-100 text-yellow-800"
										}`}
									>
										{truck.status}
									</span>
								</div>
								<div className="text-sm">{truck.lastMaintenance}</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
