import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building, Plus, Search, MapPin, Phone } from "lucide-react";

export default function BasicDataCompaniesPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">จัดการข้อมูลบริษัท</h1>
					<p className="text-muted-foreground">ข้อมูลบริษัทและสาขาต่างๆ</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มบริษัทใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">บริษัทในเครือ</CardTitle>
						<Building className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">3</div>
						<p className="text-xs text-muted-foreground">บริษัทหลัก + สาขา</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">สาขาที่ใช้งาน</CardTitle>
						<MapPin className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">8</div>
						<p className="text-xs text-muted-foreground">สาขาในพื้นที่</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ข้อมูลล่าสุด</CardTitle>
						<Phone className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">วันนี้</div>
						<p className="text-xs text-muted-foreground">อัปเดตล่าสุด</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายชื่อบริษัท</CardTitle>
					<CardDescription>ข้อมูลบริษัทและสาขาในเครือ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center space-x-4 mb-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input placeholder="ค้นหาบริษัท..." className="pl-10" />
						</div>
						<Button variant="outline">ฟิลเตอร์</Button>
					</div>

					<div className="rounded-md border">
						<div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-gray-50">
							<div>ชื่อบริษัท</div>
							<div>ประเภท</div>
							<div>เลขประจำตัวผู้เสียภาษี</div>
							<div>ที่อยู่</div>
							<div>สถานะ</div>
						</div>

						{/* Sample company data */}
						{[
							{
								name: "บริษัท ขนส่งโม่ปูน ABC จำกัด",
								type: "สำนักงานใหญ่",
								taxId: "0123456789123",
								address: "กรุงเทพฯ",
								status: "ใช้งาน",
							},
							{
								name: "สาขาลาดพร้าว",
								type: "สาขา",
								taxId: "0123456789123",
								address: "ลาดพร้าว, กรุงเทพฯ",
								status: "ใช้งาน",
							},
							{
								name: "สาขาสมุทรปราการ",
								type: "สาขา",
								taxId: "0123456789123",
								address: "สมุทรปราการ",
								status: "ใช้งาน",
							},
						].map((company, index) => (
							<div key={index} className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0">
								<div className="font-medium">{company.name}</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											company.type === "สำนักงานใหญ่"
												? "bg-blue-100 text-blue-800"
												: "bg-gray-100 text-gray-800"
										}`}
									>
										{company.type}
									</span>
								</div>
								<div className="font-mono text-sm">{company.taxId}</div>
								<div>{company.address}</div>
								<div>
									<span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
										{company.status}
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
