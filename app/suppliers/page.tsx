"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Plus, Search, Truck, Package, Star } from "lucide-react";

export default function SuppliersPage() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">ซัพพลายเออร์</h1>
					<p className="text-muted-foreground">จัดการข้อมูลซัพพลายเออร์และผู้จำหน่าย</p>
				</div>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มซัพพลายเออร์ใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ซัพพลายเออร์ทั้งหมด</CardTitle>
						<Building2 className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">23</div>
						<p className="text-xs text-muted-foreground">+2 รายในเดือนนี้</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ผู้จัดส่งน้ำมัน</CardTitle>
						<Truck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">8</div>
						<p className="text-xs text-muted-foreground">สถานีน้ำมัน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">อะไหล่และวัสดุ</CardTitle>
						<Package className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">15</div>
						<p className="text-xs text-muted-foreground">ร้านค้า</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">คะแนนเฉลี่ย</CardTitle>
						<Star className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">4.6</div>
						<p className="text-xs text-muted-foreground">จาก 5 คะแนน</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายชื่อซัพพลายเออร์</CardTitle>
					<CardDescription>รายชื่อซัพพลายเออร์และผู้จำหน่าย</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center space-x-4 mb-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input placeholder="ค้นหาซัพพลายเออร์..." className="pl-10" />
						</div>
						<Button variant="outline">ฟิลเตอร์</Button>
					</div>

					<div className="rounded-md border">
						<div className="grid grid-cols-6 gap-4 p-4 font-medium border-b bg-gray-50">
							<div>ชื่อบริษัท</div>
							<div>ประเภท</div>
							<div>ผู้ติดต่อ</div>
							<div>เบอร์โทร</div>
							<div>คะแนน</div>
							<div>สถานะ</div>
						</div>

						{/* Sample supplier data */}
						{[
							{
								name: "บริษัท ปตท. จำกัด",
								type: "น้ำมัน",
								contact: "คุณประจวบ",
								phone: "02-111-2222",
								rating: "4.8",
								status: "ใช้งาน",
							},
							{
								name: "ร้านอะไหล่รถโม่ใหญ่",
								type: "อะไหล่",
								contact: "คุณศักดิ์ชาย",
								phone: "02-333-4444",
								rating: "4.5",
								status: "ใช้งาน",
							},
							{
								name: "บางจาก คอร์ปอเรชั่น",
								type: "น้ำมัน",
								contact: "คุณสุนีย์",
								phone: "02-555-6666",
								rating: "4.7",
								status: "ใช้งาน",
							},
							{
								name: "ร้านไฮดรอลิค แอนด์ ยาง",
								type: "อะไหล่",
								contact: "คุณมานะ",
								phone: "02-777-8888",
								rating: "4.2",
								status: "รอติดตาม",
							},
						].map((supplier, index) => (
							<div key={index} className="grid grid-cols-6 gap-4 p-4 border-b last:border-b-0">
								<div className="font-medium">{supplier.name}</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											supplier.type === "น้ำมัน"
												? "bg-blue-100 text-blue-800"
												: "bg-purple-100 text-purple-800"
										}`}
									>
										{supplier.type}
									</span>
								</div>
								<div>{supplier.contact}</div>
								<div>{supplier.phone}</div>
								<div className="flex items-center">
									<Star className="h-3 w-3 text-yellow-400 mr-1" />
									{supplier.rating}
								</div>
								<div>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											supplier.status === "ใช้งาน"
												? "bg-green-100 text-green-800"
												: "bg-yellow-100 text-yellow-800"
										}`}
									>
										{supplier.status}
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
