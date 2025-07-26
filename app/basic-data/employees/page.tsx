import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Plus, Search, UserCheck, Phone } from "lucide-react";

export default function BasicDataEmployeesPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">จัดการข้อมูลพนักงาน</h1>
					<p className="text-muted-foreground">ข้อมูลพนักงานขับรถและบุคลากรในองค์กร</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มพนักงานใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">พนักงานทั้งหมด</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">48</div>
						<p className="text-xs text-muted-foreground">+3 คนในเดือนนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">คนขับรถโม่</CardTitle>
						<UserCheck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">24</div>
						<p className="text-xs text-muted-foreground">มีใบขับขี่</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">พนักงานออฟฟิศ</CardTitle>
						<Phone className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">16</div>
						<p className="text-xs text-muted-foreground">ฝ่ายสนับสนุน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">พนักงานช่าง</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">8</div>
						<p className="text-xs text-muted-foreground">ฝ่ายซ่อมบำรุง</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายชื่อพนักงาน</CardTitle>
					<CardDescription>รายชื่อพนักงานและข้อมูลการติดต่อ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center space-x-4 mb-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input placeholder="ค้นหาพนักงาน..." className="pl-10" />
						</div>
						<Button variant="outline">ฟิลเตอร์ตำแหน่ง</Button>
					</div>

					<div className="rounded-md border">
						<div className="grid grid-cols-6 gap-4 p-4 font-medium border-b bg-gray-50">
							<div>รหัสพนักงาน</div>
							<div>ชื่อ-นามสกุล</div>
							<div>ตำแหน่ง</div>
							<div>เบอร์โทร</div>
							<div>วันที่เริ่มงาน</div>
							<div>สถานะ</div>
						</div>

						{/* Sample employee data */}
						{[
							{
								empId: "EMP001",
								name: "นายสมชาย ใจดี",
								position: "คนขับรถโม่",
								phone: "081-123-4567",
								startDate: "01/01/2023",
								status: "ทำงาน",
							},
							{
								empId: "EMP002",
								name: "นายประจวบ เก่งกาจ",
								position: "คนขับรถโม่",
								phone: "081-234-5678",
								startDate: "15/02/2023",
								status: "ทำงาน",
							},
							{
								empId: "EMP003",
								name: "นางสาวสุนีย์ สวยงาม",
								position: "เจ้าหน้าที่บัญชี",
								phone: "081-345-6789",
								startDate: "01/03/2023",
								status: "ทำงาน",
							},
							{
								empId: "EMP004",
								name: "นายศักดิ์ชาย แข็งแรง",
								position: "ช่างซ่อมบำรุง",
								phone: "081-456-7890",
								startDate: "10/04/2023",
								status: "ลาป่วย",
							},
						].map((employee, index) => (
							<div key={index} className="grid grid-cols-6 gap-4 p-4 border-b last:border-b-0">
								<div className="font-mono text-sm">{employee.empId}</div>
								<div className="font-medium">{employee.name}</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											employee.position.includes("คนขับ")
												? "bg-blue-100 text-blue-800"
												: employee.position.includes("ช่าง")
												? "bg-purple-100 text-purple-800"
												: "bg-green-100 text-green-800"
										}`}
									>
										{employee.position}
									</span>
								</div>
								<div>{employee.phone}</div>
								<div>{employee.startDate}</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											employee.status === "ทำงาน"
												? "bg-green-100 text-green-800"
												: "bg-yellow-100 text-yellow-800"
										}`}
									>
										{employee.status}
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
