"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Plus, Search, Building, Phone, MapPin } from "lucide-react";

export default function CustomersPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">ลูกค้า</h1>
					<p className="text-muted-foreground">จัดการข้อมูลลูกค้าและโครงการ</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มลูกค้าใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ลูกค้าทั้งหมด</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">156</div>
						<p className="text-xs text-muted-foreground">+8 คนในเดือนนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">โครงการใหม่</CardTitle>
						<Building className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">23</div>
						<p className="text-xs text-muted-foreground">+3 โครงการในเดือนนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รอใบเสนอราคา</CardTitle>
						<Phone className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">12</div>
						<p className="text-xs text-muted-foreground">ต้องติดตาม</p>
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
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายชื่อลูกค้า</CardTitle>
					<CardDescription>รายชื่อลูกค้าและข้อมูลการติดต่อ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center space-x-4 mb-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input placeholder="ค้นหาลูกค้า..." className="pl-10" />
						</div>
						<Button variant="outline">ฟิลเตอร์</Button>
					</div>

					<div className="rounded-md border">
						<div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-gray-50">
							<div>ชื่อบริษัท</div>
							<div>ผู้ติดต่อ</div>
							<div>เบอร์โทร</div>
							<div>พื้นที่</div>
							<div>สถานะ</div>
						</div>

						{/* Sample customer data */}
						{[
							{
								name: "บริษัท ก่อสร้าง ABC จำกัด",
								contact: "คุณสมชาย ใจดี",
								phone: "02-123-4567",
								area: "กรุงเทพฯ",
								status: "ใช้งาน",
							},
							{
								name: "บริษัท โครงสร้าง XYZ จำกัด",
								contact: "คุณสมหญิง เก่งกาจ",
								phone: "02-234-5678",
								area: "สมุทรปราการ",
								status: "ใช้งาน",
							},
							{
								name: "ห้างหุ้นส่วน ปูนผสม 123",
								contact: "คุณรุ่งโรจน์ สวยงาม",
								phone: "02-345-6789",
								area: "ปทุมธานี",
								status: "รอติดตาม",
							},
						].map((customer, index) => (
							<div key={index} className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0">
								<div className="font-medium">{customer.name}</div>
								<div>{customer.contact}</div>
								<div>{customer.phone}</div>
								<div>{customer.area}</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											customer.status === "ใช้งาน"
												? "bg-green-100 text-green-800"
												: "bg-yellow-100 text-yellow-800"
										}`}
									>
										{customer.status}
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
