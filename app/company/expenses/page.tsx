import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, DollarSign, TrendingDown } from "lucide-react";

export default function CompanyExpensesPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">รายจ่ายบริษัท</h1>
				<p className="text-muted-foreground">ติดตามและจัดการรายจ่ายของบริษัท</p>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายจ่ายเดือนนี้</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿1,850,000</div>
						<p className="text-xs text-muted-foreground">-5% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายจ่ายปีนี้</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿21,200,000</div>
						<p className="text-xs text-muted-foreground">+3% จากปีที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">กำไรขั้นต้น</CardTitle>
						<TrendingDown className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿600,000</div>
						<p className="text-xs text-muted-foreground">24% มาร์จิ้น</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายงานรายจ่าย</CardTitle>
					<CardDescription>แบ่งตามประเภทรายจ่าย</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span>เชื้อเพลิง</span>
							<span className="font-medium">฿850,000 (46%)</span>
						</div>
						<div className="flex items-center justify-between">
							<span>เงินเดือนพนักงาน</span>
							<span className="font-medium">฿450,000 (24%)</span>
						</div>
						<div className="flex items-center justify-between">
							<span>ซ่อมบำรุง</span>
							<span className="font-medium">฿320,000 (17%)</span>
						</div>
						<div className="flex items-center justify-between">
							<span>อื่นๆ</span>
							<span className="font-medium">฿230,000 (13%)</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
