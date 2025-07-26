"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, Receipt, Calculator, DollarSign, Search } from "lucide-react";
import { useState } from "react";

export default function BillingPage() {
	const [billingData, setBillingData] = useState([
		{
			id: 1,
			customerName: "บริษัท ก่อสร้าง ABC จำกัด",
			year: 2024,
			month: "กรกฎาคม",
			tripsPerPlant: 45, // จำนวนเที่ยวแต่ละแพล้น
			totalTrips: 138, // จำนวนเที่ยว
			totalQueues: 25, // จำนวนคิว
			yokCount: 12, // จำนวนโยก
			yokFee: 8400, // ค่าโยกรถ
			tenantFee: 15000, // ค่าเทนาน
			difference: 2500, // ส่วนต่าง
			rebateFee: 800, // ค่าRebate
			redSign: 1200, // ป้ายแดง
			livingCost: 3500, // ค่าครองชีพ
			penaltyFee: 500, // ค่าปรับ
			concreteInsurance: 2100, // ค่าประกันรถคอนกรีต
			totalIncome: 71020, // รวมรายได้
			subtotal: 67000,
			vat: 4690,
			withholdingTax: 670,
			totalBilling: 71020, // สรุปยอดเรียกเก็บเงินลูกค้า
		},
		{
			id: 2,
			customerName: "บริษัท พัฒนา XYZ จำกัด",
			tripsPerPlant: 38,
			yokCount: 10,
			tenantFee: 12000,
			difference: 1800,
			rebateFee: 600,
			redSign: 900,
			livingCost: 2800,
			subtotal: 55100,
			vat: 3857,
			withholdingTax: 551,
			totalBilling: 58406,
			month: "กรกฎาคม 2024",
		},
	]);

	// คำนวณสถิติ
	const totalTrips = billingData.reduce((sum, item) => sum + item.tripsPerPlant, 0);
	const totalYoks = billingData.reduce((sum, item) => sum + item.yokCount, 0);
	const totalBilling = billingData.reduce((sum, item) => sum + item.totalBilling, 0);
	const totalVat = billingData.reduce((sum, item) => sum + item.vat, 0);
	const averageBillingPerTrip = totalTrips > 0 ? totalBilling / totalTrips : 0;

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">วางบิล</h1>
				<Dialog>
					<DialogTrigger asChild>
						<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
							<Plus className="w-4 h-4 mr-2" />
							สร้างบิลใหม่
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[700px]">
						<DialogHeader>
							<DialogTitle>สร้างบิลใหม่</DialogTitle>
						</DialogHeader>
						<form className="grid gap-4 py-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="customerName">ชื่อลูกค้า</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="เลือกลูกค้า" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="abc-construction">บริษัท ก่อสร้าง ABC จำกัด</SelectItem>
											<SelectItem value="xyz-development">บริษัท พัฒนา XYZ จำกัด</SelectItem>
											<SelectItem value="def-builder">บริษัท ก่อสร้าง DEF จำกัด</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<Label htmlFor="month">รอบเดือน</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="เลือกเดือน" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="2024-07">กรกฎาคม 2024</SelectItem>
											<SelectItem value="2024-06">มิถุนายน 2024</SelectItem>
											<SelectItem value="2024-05">พฤษภาคม 2024</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="year">ปี</Label>
									<Input id="year" type="number" placeholder="เช่น 2024" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="month">เดือน</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="เลือกเดือน" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="กรกฎาคม">กรกฎาคม</SelectItem>
											<SelectItem value="มิถุนายน">มิถุนายน</SelectItem>
											<SelectItem value="พฤษภาคม">พฤษภาคม</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="grid grid-cols-4 gap-4">
								<div className="space-y-2">
									<Label htmlFor="totalTrips">จำนวนเที่ยว</Label>
									<Input id="totalTrips" type="number" placeholder="เช่น 138" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="totalQueues">จำนวนคิว</Label>
									<Input id="totalQueues" type="number" placeholder="เช่น 25" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="tripsPerPlant">จำนวนเที่ยวแต่ละแพล้น</Label>
									<Input id="tripsPerPlant" type="number" placeholder="เช่น 45" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="yokCount">จำนวนโยก</Label>
									<Input id="yokCount" type="number" placeholder="เช่น 12" />
								</div>
							</div>

							<div className="grid grid-cols-4 gap-4">
								<div className="space-y-2">
									<Label htmlFor="yokFee">ค่าโยกรถ (บาท)</Label>
									<Input id="yokFee" type="number" placeholder="เช่น 8400" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="tenantFee">ค่าเทนาน (บาท)</Label>
									<Input id="tenantFee" type="number" placeholder="เช่น 15000" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="penaltyFee">ค่าปรับ (บาท)</Label>
									<Input id="penaltyFee" type="number" placeholder="เช่น 500" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="concreteInsurance">ค่าประกันรถคอนกรีต (บาท)</Label>
									<Input id="concreteInsurance" type="number" placeholder="เช่น 2100" />
								</div>
							</div>

							<div className="grid grid-cols-4 gap-4">
								<div className="space-y-2">
									<Label htmlFor="difference">ส่วนต่าง (บาท)</Label>
									<Input id="difference" type="number" placeholder="เช่น 2500" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="rebateFee">ค่า Rebate (บาท)</Label>
									<Input id="rebateFee" type="number" placeholder="เช่น 800" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="redSign">ป้ายแดง (บาท)</Label>
									<Input id="redSign" type="number" placeholder="เช่น 1200" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="livingCost">ค่าครองชีพ (บาท)</Label>
									<Input id="livingCost" type="number" placeholder="เช่น 3500" />
								</div>
							</div>

							<div className="border-t pt-4">
								<h3 className="text-lg font-semibold mb-4">สรุปยอดเรียกเก็บเงินลูกค้า</h3>
								<div className="grid grid-cols-3 gap-4">
									<div className="space-y-2">
										<Label htmlFor="subtotal">ยอดก่อน VAT (บาท)</Label>
										<Input id="subtotal" type="number" placeholder="คำนวณอัตโนมัติ" readOnly />
									</div>
									<div className="space-y-2">
										<Label htmlFor="vat">VAT 7% (บาท)</Label>
										<Input id="vat" type="number" placeholder="คำนวณอัตโนมัติ" readOnly />
									</div>
									<div className="space-y-2">
										<Label htmlFor="withholdingTax">หัก ณ ที่จ่าย 1% (บาท)</Label>
										<Input
											id="withholdingTax"
											type="number"
											placeholder="คำนวณอัตโนมัติ"
											readOnly
										/>
									</div>
								</div>
								<div className="mt-4">
									<Label htmlFor="totalBilling">ยอดสุทธิที่เรียกเก็บ (บาท)</Label>
									<Input
										id="totalBilling"
										type="number"
										placeholder="คำนวณอัตโนมัติ"
										readOnly
										className="font-bold text-lg"
									/>
								</div>
							</div>

							<div className="flex justify-end gap-2 pt-4">
								<Button type="button" variant="outline">
									ยกเลิก
								</Button>
								<Button type="submit">บันทึกบิล</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหาบิล</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input
								placeholder="ค้นหาชื่อลูกค้า หรือเดือน..."
								className="pl-10 bg-background border-input"
							/>
						</div>
						<Button variant="outline" className="border-input">
							ค้นหา
						</Button>
					</div>
				</CardContent>
			</Card>

			{/* สถิติภาพรวม */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รวมเที่ยววิ่ง</CardTitle>
						<Receipt className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalTrips.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">เที่ยว/เดือน</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รวมโยก</CardTitle>
						<Calculator className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalYoks.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">โยก/เดือน</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายได้รวม</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalBilling.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">ยอดสุทธิ</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">VAT รวม</CardTitle>
						<Receipt className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalVat.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">VAT 7%</p>
					</CardContent>
				</Card>
			</div>

			{/* ตารางบิล */}
			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground flex items-center gap-2">
						<Receipt className="w-5 h-5" />
						รายการบิลลูกค้า
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>ชื่อลูกค้า</TableHead>
								<TableHead className="text-center">เที่ยว/แพล้น</TableHead>
								<TableHead className="text-center">จำนวนโยก</TableHead>
								<TableHead className="text-right">ค่าเทนาน</TableHead>
								<TableHead className="text-right">ส่วนต่าง</TableHead>
								<TableHead className="text-right">Rebate</TableHead>
								<TableHead className="text-right">ป้ายแดง</TableHead>
								<TableHead className="text-right">ค่าครองชีพ</TableHead>
								<TableHead className="text-right">VAT</TableHead>
								<TableHead className="text-right">หัก ณ ที่จ่าย</TableHead>
								<TableHead className="text-right">ยอดสุทธิ</TableHead>
								<TableHead>เดือน</TableHead>
								<TableHead className="text-center">จัดการ</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{billingData.map((item) => (
								<TableRow key={item.id}>
									<TableCell className="font-medium max-w-[200px]">{item.customerName}</TableCell>
									<TableCell className="text-center">{item.tripsPerPlant}</TableCell>
									<TableCell className="text-center">{item.yokCount}</TableCell>
									<TableCell className="text-right">฿{item.tenantFee.toLocaleString()}</TableCell>
									<TableCell className="text-right">฿{item.difference.toLocaleString()}</TableCell>
									<TableCell className="text-right">฿{item.rebateFee.toLocaleString()}</TableCell>
									<TableCell className="text-right">฿{item.redSign.toLocaleString()}</TableCell>
									<TableCell className="text-right">฿{item.livingCost.toLocaleString()}</TableCell>
									<TableCell className="text-right">฿{item.vat.toLocaleString()}</TableCell>
									<TableCell className="text-right">
										-฿{item.withholdingTax.toLocaleString()}
									</TableCell>
									<TableCell className="text-right font-bold">
										฿{item.totalBilling.toLocaleString()}
									</TableCell>
									<TableCell>{item.month}</TableCell>
									<TableCell className="text-center">
										<div className="flex justify-center gap-2">
											<Button variant="outline" size="sm">
												<Edit className="h-4 w-4" />
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="text-red-600 hover:text-red-700"
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			{/* สรุปรายเดือน */}
			<Card>
				<CardHeader>
					<CardTitle>สรุปรายได้ตามลูกค้า</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-2">
						{billingData.map((item) => (
							<div key={item.id} className="p-4 bg-gray-50 rounded-lg">
								<div className="font-medium text-lg mb-2">{item.customerName}</div>
								<div className="grid grid-cols-2 gap-2 text-sm">
									<div>เที่ยววิ่ง: {item.tripsPerPlant} เที่ยว</div>
									<div>จำนวนโยก: {item.yokCount} โยก</div>
									<div>ยอดก่อน VAT: ฿{item.subtotal.toLocaleString()}</div>
									<div className="font-bold">ยอดสุทธิ: ฿{item.totalBilling.toLocaleString()}</div>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
